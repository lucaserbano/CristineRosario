# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static institutional website for **Dra. Cristine Rosário** — Médica Alergista e Imunologista, Doutora pela UFPR, Professora Adjunta do Departamento de Pediatria da UFPR. CRM-PR 29.253.

4 pages: `index.html`, `sobre.html`, `publicacoes.html`, `contato.html`.

## Development

Pure static site — no build step.

```bash
python3 -m http.server 8000   # or: npx serve .
```

## File Structure

```
/
├── index.html              # Home page
├── sobre.html              # About / biography
├── publicacoes.html        # Articles / publications
├── contato.html            # Contact + both clinic locations
├── css/styles.css          # Custom classes (glass-card, hero-gradient, etc.)
├── assets/
│   ├── logo/
│   │   ├── logo-verde-claro.png      # Full logo on #F3FDFF bg → navbar & footer
│   │   ├── logo-fundo-azul-escuro.png # Full logo on dark bg → dark sections
│   │   └── logo-principal.png        # Logo mark only (transparent bg)
│   ├── images/             # Real photos go here (see TODO comments in HTML)
│   ├── fonts/              # Place Miller Banner .woff2 files here when licensed
│   └── Identidade visual/  # Source brand assets (read-only reference)
└── assets/stitch/          # APPROVED VISUAL REFERENCE (read-only)
    ├── code.html
    └── DESIGN.md
```

## Design System

### Colors (ice-blue family — updated from original green)
| Token | Value | Usage |
|---|---|---|
| `primary` | `#001E2F` | Dark navy — text, buttons, headings |
| `secondary` | `#3B6E8A` | Steel blue — secondary text, hover |
| `tertiary-fixed-dim` | `#FFBCBD` | Rose pink — accent, use sparingly |
| `background` / `surface` | `#F3FDFF` | Ice blue — main page background |
| `surface-container-lowest` | `#FFFFFF` | Cards and pure white surfaces |
| `surface-container-low` | `#EBF9FF` | Subtle tinted sections |
| `surface-container` | `#DCEFF8` | Medium tinted backgrounds |
| `on-surface-variant` | `#3A5A70` | Muted body text |

### Typography
- **Headlines (font-headline):** `Miller Banner` → `Newsreader` → `Georgia`, serif
  - Miller Banner is a **commercial font** — needs license from Font Bureau
  - Place `.woff2` files in `assets/fonts/` and uncomment `@font-face` in `css/styles.css`
  - Newsreader (already loaded via Google Fonts) serves as the active fallback
- **Body (font-body / font-label):** `Raleway` (Google Fonts)

### The "No-Line" Rule
Do NOT use 1px borders to separate sections. Use background color shifts (e.g. `bg-background` → `bg-surface-container-low`) for depth and separation.

### Logo Usage
- Navbar + footer (light `#F3FDFF` background): `assets/logo/logo-verde-claro.png`
- Dark sections (navy background): `assets/logo/logo-fundo-azul-escuro.png`
- Size in navbar/footer: `h-20 w-auto` with `-ml-3` offset (the logo image has built-in padding that blends with the background)

### Buttons & CTAs
- Primary: `bg-primary text-white rounded-full hover:scale-105`
- Ghost: `border border-primary/20 text-primary rounded-full hover:bg-surface-container`
- Accent CTA: `bg-tertiary-fixed-dim text-on-tertiary-fixed rounded-full`

## Real Contact Info (do not invent — use exactly as below)

**WhatsApp CTA URL:**
`https://wa.me/5541999957010?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta%20com%20a%20Dra.%20Cristine%20Ros%C3%A1rio!`

**Clínica Prof. Dr. Nelson Rosário:**
- Rua Tenente João Gomes da Silva, 226 — Mercês, Curitiba-PR
- Tel: `tel:+554133394486` / (41) 3339-4486
- WhatsApp: `tel:+554199995-7010` / (41) 99995-7010

**Hospital Nossa Senhora das Graças:**
- Rua Profa. Rosa Saporski, 229 — Mercês, Curitiba-PR
- Tel: `tel:+554132406521` / (41) 3240-6521

**Credentials:** CRM-PR 29.253 · Pediatria RQE Nº 21.533 · Alergia e Imunologia RQE Nº 21.532

**Lattes:** http://lattes.cnpq.br/8121446960823149

## Shared Components (copy-paste between pages)

All 4 pages share identical `<nav>` and `<footer>` blocks plus the same `<head>` (fonts, Tailwind config, styles.css link). When updating nav or footer, update all 4 files. The active nav link is indicated by `border-b border-primary pb-1` on the current page's link.

## Pending TODOs (real content needed)

- `assets/images/foto-medica.jpg` — professional portrait of Dra. Cristine Rosário
- `assets/images/foto-consultorio.jpg` — consultation/clinic photo
- Map sections in `index.html` and `contato.html` — replace placeholder with Google Maps `<iframe>` embed
- Article images and content in `publicacoes.html`
- Hours of operation (currently no hours listed — confirm with client)
