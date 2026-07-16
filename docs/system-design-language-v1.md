# System Design Language v1

> **Product:** Juan José Valencia — Portfolio (Ecosystem Gateway)
> **Version:** 1.0
> **Status:** Active — governs all visual decisions
> **Philosophy:** *"Everything runs on a system."*

---

## 1. Design Principles

Every decision answers: **Does this reinforce the SYSTEM concept?**

| Principle | Definition | Test question |
|---|---|---|
| **Precision** | Every element has a reason. No decoration. | "Does this communicate or distract?" |
| **Status** | State is always visible. Active, idle, complete. | "Does the visitor know what state this is in?" |
| **Modularity** | Components feel like interchangeable modules. | "Could this component exist independently?" |
| **Clarity** | Information before aesthetics. | "Does this make the content easier to understand?" |
| **Restraint** | One system signal per interaction. Never three. | "Would removing this make the page worse?" |

---

## 2. Naming & Vocabulary

The system language uses terminology that reinforces the metaphor without being obscure.

| Generic UI | System Language | When to use |
|---|---|---|
| Card | Module | Container elements that hold related information |
| Badge | Status Indicator | Labels that communicate state (active, pending, completed) |
| Project | System | Case studies and builds — each is a system Juan built |
| Services | Capabilities | The things Juan can build for clients |
| Skills | System Stack | The technologies and tools Juan works with |
| Timeline | Activity Log | Chronological history of work |
| Section | Block | Major page divisions |
| Hero | — | Keep "Hero" — it's universally understood |
| CTA | — | Keep "CTA" — it's internal language, not user-facing |
| Footer | — | Keep "Footer" — universally understood |

**Rules:**
- Apply system language to **section labels and internal references only**. Never rename a button label in a way that confuses the user.
- "View Case Study" stays. "Inspect" is internal. The user should never feel like they need a manual.
- One system term per section maximum. The `//` prefix or "Current Builds" or "Status Indicator" — not all three on the same block.

---

## 3. Color System

### Semantic Meaning

| Token | Light | Dark | Meaning |
|---|---|---|---|
| `--color-background` | `hsl(0 0% 100%)` | `hsl(0 0% 3.9%)` | Page canvas |
| `--color-surface` | `hsl(0 0% 100%)` | `hsl(0 0% 6%)` | Module/card background — one step above page |
| `--color-elevated` | `hsl(0 0% 100%)` | `hsl(0 0% 9%)` | Dropdowns, modals, hover — highest layer |
| `--color-foreground` | `hsl(0 0% 3.9%)` | `hsl(0 0% 98%)` | Primary text |
| `--color-primary` | `hsl(221.2 83.2% 53.3%)` | `hsl(217.2 91.2% 59.8%)` | Interactive elements, links, CTAs |
| `--color-muted-foreground` | `hsl(215.4 16.3% 43.9%)` | `hsl(215 20.2% 60.1%)` | Secondary text, metadata |
| `--color-border` | `hsl(214.3 31.8% 91.4%)` | `hsl(0 0% 14%)` | Container boundaries |
| `--color-active` | `hsl(160 84% 39%)` | `hsl(160 84% 52%)` | Online, running, available |
| `--color-idle` | `hsl(38 92% 50%)` | `hsl(38 92% 50%)` | Pending, in progress, building |
| `--color-inactive` | `hsl(215 14% 60%)` | `hsl(215 14% 45%)` | Offline, archived, unavailable |

### Status Color Usage

The status colors (`active`, `idle`, `inactive`) are reserved for **state communication only**. They are not decorative accents.

| State | Color | Example |
|---|---|---|
| Active / Available | `--color-active` (teal/green) | "Available for projects" status, running systems |
| Idle / In Progress | `--color-idle` (amber) | "Building..." indicators, in-progress projects |
| Inactive / Archived | `--color-inactive` (gray) | Completed projects, unavailable services |

### Dark Mode Layering

Dark mode must feel intentionally designed, not inverted.

| Layer | Token | Effect |
|---|---|---|
| Page background | `--color-background` | Deepest layer — `hsl(0 0% 3.9%)` |
| Module/surface | `--color-surface` | One step brighter — `hsl(0 0% 6%)` |
| Elevated surface | `--color-elevated` | Brightest container — `hsl(0 0% 9%)` |
| Borders | `--color-border` | Visible but subtle — `hsl(0 0% 14%)` |

The progression creates depth through lightness instead of shadows. No dark mode module should sit at the same level as the page background.

---

## 4. Typography

### Stack

| Role | Font | Weight | Size |
|---|---|---|---|
| Body | Inter | 400 | `1rem` / `0.875rem` |
| Headings | Inter | 600–700 | `1.5rem` → `3.75rem` |
| System data | JetBrains Mono (or any monospace) | 400–500 | `0.75rem` → `0.875rem` |
| Status labels | JetBrains Mono | 500 | `0.75rem` |

### Monospace Usage Rules

Use monospace **only** for:
- Status indicators and labels
- Metrics and data points
- System labels (`// capabilities`, `SYSTEM STACK`)
- Key-value data (Name: Juan, Role: Engineer)

Never use monospace for:
- Body paragraphs
- Primary headlines (Inter bold stays)
- Navigation labels
- Button text

The monospace should be almost invisible to non-technical visitors — they perceive "precision" without registering "code."

### Type Scale

| Level | Size | Weight | Line-height | Tracking |
|---|---|---|---|---|
| Hero headline | `text-4xl md:text-5xl lg:text-6xl` | Bold (700) | `leading-tight` | `tracking-tight` |
| Block heading | `text-3xl md:text-4xl` | Bold (700) | `leading-tight` | `tracking-tight` |
| Module heading | `text-lg` | Semibold (600) | `leading-snug` | Normal |
| Body | `text-base` | Normal (400) | `leading-relaxed` | Normal |
| Body small | `text-sm` | Normal (400) | `leading-relaxed` | Normal |
| System label | `text-xs` | Medium (500) | Normal | `tracking-widest uppercase` |
| Metric | `text-sm` | Medium (500) | Normal | Normal |
| Status | `text-xs` | Medium (500) | Normal | Normal |

---

## 5. Iconography

- Use **Lucide** exclusively (already installed)
- Line style only — never filled icons
- Consistent 1.5px stroke weight
- Icons communicate function, not decoration
- Icon size: `size-4` for inline, `size-5` for module headers
- Never use emoji as icons

**If an icon doesn't clearly communicate the concept, use text instead.**

---

## 6. The Module (Card)

The Module is the atomic container unit.

| Property | Value | Why |
|---|---|---|
| Background | `--color-surface` (same as page in light mode, +3% in dark) | In light mode, white on white is fine because borders define the container. In dark mode, a slightly lighter background creates depth. |
| Border | `1px solid var(--color-border)` | Borders define containers without shadows. |
| Border radius | `rounded-xl` | Consistent, approachable. |
| Padding | `p-6 md:p-8` | Generous internal space. |
| Hover | `hover:border-primary/50 transition-colors` | The border color shifts on hover — a precise system response. |
| Shadow | None | Shadows imply physical depth. Systems have no depth. |
| Header | Optional. System title + status indicator + timestamp. | When a module needs a header, it follows a consistent pattern. |

### Module States

| State | Visual |
|---|---|
| Default | Standard border |
| Hover | Primary border |
| Active | Primary border + subtle background shift |
| Loading | Pulsing border or skeleton |

---

## 7. Status Indicators

Status indicators communicate state at a glance.

| Variant | Visual | Usage |
|---|---|---|
| Active | `size-1.5 rounded-full bg-active with animate-pulse` | Available, running, online |
| Idle | `size-1.5 rounded-full bg-idle` | Building, in progress, pending |
| Inactive | `size-1.5 rounded-full bg-inactive` | Completed, archived, offline |

**Rules:**
- The pulse (if used) must be subtle — `opacity` pulse, not `scale` pulse
- Status indicators are always positioned to the left of their label
- Never use status indicators decoratively — they must communicate real state

---

## 8. Buttons

| Variant | Style | Usage |
|---|---|---|
| Primary | Filled `bg-primary text-primary-foreground` | Main CTAs |
| Secondary | `border-border bg-background hover:bg-muted` | Alternative actions |
| Ghost | `hover:bg-muted` | Subtle actions (theme toggle, icon buttons) |
| System | Ghost + monospace + status dot | System-level actions ("Inspect," "View Build") |

- All buttons: `rounded-lg`, `text-sm`, `font-medium`
- No pill shapes. Clean rectangles communicate precision.
- Hover: subtle brightness shift (`hover:bg-primary/80` for primary)
- Focus: `focus-visible:ring-2 focus-visible:ring-ring`

---

## 9. Motion

### Principles

| Principle | Definition |
|---|---|
| **State, not decoration** | Motion communicates change. If nothing changed, nothing moves. |
| **Subtle** | Transitions are 200–400ms. Entrances are 400–600ms. Nothing faster, nothing slower. |
| **Utility** | Entrance animations help the visitor understand where to look. |
| **Status** | The pulse is the only looping animation — it communicates "active." |

### Approved Motions

| Use | Timing | Curve |
|---|---|---|
| Block entrance (whileInView) | 0.5s | ease-out |
| Module entrance (staggered) | 0.5s, delay 0.08s per item | ease-out |
| Hover (border/color) | 0.2s | ease |
| Status pulse | 2s loop | ease-in-out |
| Page transition | 0.3s | ease-in-out |

### Disallowed Motions

- Page-load logo animations
- Continuous background particle effects
- Auto-scrolling carousels
- Staggered reveals that take longer than 1.5s total
- Bounce or elastic curves

---

## 10. The Grid

- Strict 6-column grid for the page width
- Content aligns to the grid. No floating elements.
- Breaking the grid is allowed when it communicates hierarchy — but it must be intentional
- Max content width: `max-w-6xl` (72rem)
- Side padding: `px-6`

---

## 11. Whitespace Rhythm

| Section type | Padding |
|---|---|
| Hero | `min-h-screen` — full viewport |
| Standard block | `py-20 md:py-28` |
| Compact block (Proof) | `py-16 md:py-20` |
| Between elements | `space-y-4` / `space-y-6` within modules |

Predictable spacing builds trust. The visitor's brain recognizes the rhythm and stops noticing the layout — they focus on content.

---

## 12. The Hero

### Structure (new)

```
┌─────────────────────────────────────────────────────┐
│  [status: disponible]   ← small badge, top-left     │
│                                                     │
│  // Juan José Valencia  ← system label              │
│  Headline (Spanish)     ← main value prop           │
│  Tagline (Spanish)      ← secondary                 │
│                                                     │
│  [System Monitor]       ← visual anchor             │
│  A clean, minimal product mockup (CSS only)         │
│                                                     │
│  [CTA] [CTA]            ← actions                   │
│                                                     │
│  ⚙ SYSTEM STACK        ← capabilities as modules   │
│  ● React  ● Next.js  ● TypeScript                   │
└─────────────────────────────────────────────────────┘
```

### The System Monitor

A CSS-only mockup that looks like a clean application interface. It communicates "I build products" without requiring real screenshots.

```
┌──────────────────────────────┐
│ │ ● ● ● │ lifeos v0.1       │  ← window chrome
│──────────────────────────────│
│ Status      ● Active         │
│ Modules     4/4              │
│ Uptime      127h 32m         │
│ Memory      ████░░░░ 42%     │
└──────────────────────────────┘
```

- Border + rounded corners
- Window chrome (three dots) + label
- Key-value data rows (monospace)
- Progress bar for memory/processing
- Status active dot with subtle pulse

---

## 13. Systems (Featured Work)

Each project is a **System** — something Juan built. Display them with:

- **Status Indicator** — green (completed) or amber (in progress)
- **System Name** — the project title
- **System Metadata** — problem, solution, impact (key-value format)
- **Action** — "View Case Study" (standard CTA language — not renamed to "inspect" unless the audience is technical)

---

## 14. Capabilities (Services)

Renamed from "Services" to "Capabilities" — each is something Juan can do.

Displayed as:
- 3-column grid (stacking on mobile)
- Each is a Module with icon, title, description, benefit
- Module hover: border shifts to primary

---

## 15. Spanish Language

Primary language: **Spanish**

| Section | Spanish label |
|---|---|
| Nav — Work | Sistemas |
| Nav — Services | Capacidades |
| Nav — About | Sobre mí |
| Nav — Contact | Contacto |
| Hero headline | "Creo aplicaciones web, dashboards y automatizaciones que impulsan tu negocio." |
| Hero tagline | "Calidad de ingeniería con enfoque en resultados." |
| CTA primary | "Trabajemos juntos" |
| CTA secondary | "Ver mi trabajo" |
| Capabilities title | "Lo que puedo hacer por tu negocio" |
| Systems title | "Sistemas recientes" |

**Future:** Valencia Studio will be English-first. The portfolio is Spanish-first for the LATAM audience.

---

## 16. Component Philosophy

| Component | Design rule |
|---|---|
| **Module** | Bordered container. No shadow. Hover = border shift. |
| **Stack badge** | Monospace label with status dot. Green = in use. Gray = available. |
| **Status indicator** | Dot + label. Left-aligned. Pulse only for "active." |
| **System monitor** | Window chrome + key-value data. Clean. Minimal. Product-like. |
| **Button** | `rounded-lg`. No pill. Primary filled, secondary outlined, ghost for system. |
| **Section label** | `//` prefix in monospace. Small. All-caps. System language. |

---

## 17. Future Evolution

This document will evolve as the ecosystem grows:

| Phase | Addition |
|---|---|
| v1.1 | Illustration system (abstract modular shapes) |
| v1.2 | Data visualization components (for dashboards) |
| v2.0 | LifeOS design language extension |
| v2.1 | Valencia Studio brand adaptation |
| v3.0 | Full component library with Storybook |

---

*This document governs all visual decisions for the portfolio. Any design decision not covered here should be evaluated against the principles in section 1.*
