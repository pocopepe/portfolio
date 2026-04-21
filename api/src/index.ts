import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { cache } from 'hono/cache'

type Env = {
  GITHUB_TOKEN: string
}

const app = new Hono<{ Bindings: Env }>()

app.use('*', cors({ origin: '*', allowMethods: ['GET'] }))

const SKIP_REPOS = new Set([
  'pocopepe/register',
  'is-a-dev/register',
  'anshikasaxena1/Blood-Junction',
  'Codechef-VITC-Student-Chapter/MailChef',
])

type GitHubPR = {
  html_url: string
  number: number
  title: string
  state: string
  created_at: string
  repository_url: string
  pull_request?: { merged_at: string | null }
}

app.get(
  '/contributions',
  cache({ cacheName: 'contributions', cacheControl: 'max-age=3600' }),
  async (c) => {
    const res = await fetch(
      'https://api.github.com/search/issues?q=author:pocopepe+is:pr&per_page=50&sort=created&order=desc',
      {
        headers: {
          Authorization: `Bearer ${c.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          'User-Agent': 'portfolio-api',
        },
      }
    )

    if (!res.ok) {
      return c.json({ error: 'GitHub API error', status: res.status }, 502)
    }

    const data = await res.json<{ items: GitHubPR[] }>()

    const contributions = data.items
      .map((pr) => ({
        repo: pr.repository_url.replace('https://api.github.com/repos/', ''),
        number: pr.number,
        title: pr.title,
        state: pr.pull_request?.merged_at ? 'merged' : pr.state,
        date: new Date(pr.created_at).toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        }),
        url: pr.html_url,
      }))
      .filter(
        (pr) =>
          !SKIP_REPOS.has(pr.repo) &&
          !pr.repo.startsWith('pocopepe/') &&
          pr.state !== 'closed'
      )

    return c.json(contributions)
  }
)

export default app
