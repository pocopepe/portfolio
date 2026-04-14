export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'share',
    title: 'Share',
    category: 'Cloud Storage Platform',
    year: '2024',
    description:
      'Scalable real-time file-sharing platform with in-browser previews for PDFs, text, and video. Globally distributed via Cloudflare R2 with edge-optimized Hono routing APIs.',
    tags: ['TypeScript', 'Hono', 'Cloudflare R2', 'Vite'],
    link: 'https://github.com/pocopepe/share',
  },
  {
    id: 'ffmpeg-webgpu',
    title: 'FFmpeg WebGPU Adapter',
    category: 'Systems / GPU',
    year: '2024',
    description:
      'Implemented a WebGPU hardware device context (hwcontext_webgpu) directly in FFmpeg\'s libavutil, enabling GPU-accelerated frame processing in the browser. WGSL compute shaders are authored inline in C and dispatched via the WebGPU API. Built a custom Emscripten/WASM compilation pipeline with CPU↔GPU memory transfer and a browser-based test harness.',
    tags: ['C', 'WebGPU', 'WGSL', 'WebAssembly', 'Emscripten', 'FFmpeg'],
  },
  {
    id: 'firmware-signer',
    title: 'Ed25519 Firmware Signer',
    category: 'Desktop App',
    year: '2024',
    description:
      'Full-stack desktop utility for cryptographically signing firmware binaries using Ed25519. Custom Intel HEX parsers in Rust, React frontend bridged via Tauri IPC with minimal memory overhead.',
    tags: ['Rust', 'React', 'Tauri', 'C/C++', 'TypeScript'],
    link: 'https://github.com/pocopepe/ed25519-firmware-signer',
  },
  {
    id: 'dot-mark',
    title: 'Dot Mark',
    category: 'Browser Tool',
    year: '2025',
    description:
      'Zero-backend local-first PDF editor using the File System Access API. Non-destructive highlights serialised to WebStorage — no server, no upload, complete file integrity.',
    tags: ['JavaScript', 'Web APIs', 'File System Access API', 'WebStorage'],
    link: 'https://github.com/pocopepe/PDF-editor',
  },
  {
    id: 'opencore-efi',
    title: 'OpenCore EFI',
    category: 'Firmware / Hackintosh',
    year: '2023',
    description:
      'Hand-tuned OpenCore bootloader config bringing macOS to an Acer Nitro 5 (i5-8300H, UHD 630). Involves ACPI table patching, kext injection, SMBIOS spoofing, and hardware-level driver compatibility work.',
    tags: ['OpenCore', 'ACPI / ASL', 'EFI', 'macOS', 'Firmware'],
    link: 'https://github.com/pocopepe/Acer-Nitro-5-AN515-52-OpenCore-EFI',
  },
];
