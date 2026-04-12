import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Respect reduced-motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // ── Page-load entrance timeline ──────────────────────────────
  const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1 } });

  // Nav
  tl.from('.nav', { opacity: 0, y: -20, duration: 0.8 }, 0);

  // Hero top bar
  tl.from('.hero__eyebrow', { opacity: 0, y: 10, duration: 0.6 }, 0.3);
  tl.from('.hero__status', { opacity: 0, x: 10, duration: 0.6 }, 0.35);

  // Hero name — word curtain reveal
  tl.from('.hero__name .word', {
    opacity: 0,
    y: 80,
    skewY: 3,
    stagger: 0.1,
    duration: 1.1,
  }, 0.5);

  // Hero role
  tl.from('.hero__role', { opacity: 0, y: 20, duration: 0.8 }, 0.95);

  // Info strip (staggered)
  tl.from('.hero__info-item', {
    opacity: 0,
    x: 12,
    stagger: 0.08,
    duration: 0.6,
  }, 0.9);

  // Stats
  tl.from('.hero__stat, .hero__stat-sep', {
    opacity: 0,
    y: 10,
    stagger: 0.07,
    duration: 0.6,
  }, 1.1);

  // Scroll line
  tl.fromTo(
    '.hero__scroll-line',
    { scaleY: 0 },
    { scaleY: 1, duration: 1.2, ease: 'expo.out' },
    1.2
  );

  tl.from('.hero__scroll-label', { opacity: 0, duration: 0.6 }, 1.5);

  // ── ScrollTrigger reveals ────────────────────────────────────

  // About section
  ScrollTrigger.create({
    trigger: '#about',
    start: 'top 80%',
    once: true,
    onEnter: () => {
      const aboutTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });
      aboutTl.from('.about__portrait', { opacity: 0, x: -40 });
      aboutTl.from('.about__heading', { opacity: 0, y: 30, duration: 0.8 }, '-=0.6');
      aboutTl.from('.about__bio', { opacity: 0, y: 20, stagger: 0.15, duration: 0.7 }, '-=0.5');
      aboutTl.from('.about__tags li', { opacity: 0, y: 10, stagger: 0.05, duration: 0.5 }, '-=0.3');
    },
  });

  // Work list rows — each row clips in from the left border
  ScrollTrigger.create({
    trigger: '#work',
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.from('.work__item', {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.75,
        ease: 'power3.out',
      });
    },
  });

  // Experience items stagger
  ScrollTrigger.create({
    trigger: '#experience',
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.from('.exp__item', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
  });

  // Contact CTA word reveal
  ScrollTrigger.create({
    trigger: '#contact',
    start: 'top 85%',
    once: true,
    onEnter: () => {
      const contactTl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1 } });
      contactTl.from('.contact-word', {
        opacity: 0,
        y: 50,
        skewY: 2,
        stagger: 0.09,
      });
      contactTl.from('.contact__email', { opacity: 0, y: 15, duration: 0.7 }, '-=0.4');
      contactTl.from('.contact__footer', { opacity: 0, duration: 0.6 }, '-=0.2');
    },
  });
}
