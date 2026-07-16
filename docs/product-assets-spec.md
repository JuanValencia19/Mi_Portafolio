# Product Assets Specification

> **Project:** Valencia Ecosystem — Portfolio Visual Assets
> **Status:** Design Specification (not implemented)
> **Goal:** Replace gradient placeholders in Featured Work with product-specific visual mockups

---

## Design Principles (All Products)

| Principle | Rule |
|---|---|
| **Dark first** | All screenshots use dark theme. Consistency > adaptability. |
| **Glass surfaces** | Cards use `backdrop-blur` + `bg-white/5` + `border-white/10`. |
| **No shadows** | Depth comes from glow and glass, not box-shadow. |
| **Grid background** | Every screenshot has a very faint grid `opacity-[0.02]`. |
| **Window chrome** | Every screenshot includes macOS traffic lights + app title. |
| **Motion** | Slow, subtle, purposeful. Nothing loops faster than 4s. |

---

## Product 01 — LifeOS (Habits & Productivity)

### Purpose
Show LifeOS as a habit-tracking and productivity system. Different from the hero dashboard which shows the overview. This is a deep-dive into the Habits module.

### Color
| Token | Value |
|---|---|
| Primary | `#3366FF` |
| Secondary | `#6090FF` |
| Background | `#0c0c12` |
| Surface | `#14141c` |
| Glass | `rgba(255,255,255,0.05)` |
| Accent glow | `rgba(51,102,255,0.15)` |

### Composition

```
┌──────────────────────────────────────────┐
│ ● ● ●  lifeos — habits    v0.2.1        │
├──────────┬───────────────────────────────┤
│          │  Habits              🔔 👤   │
│ SIDEBAR  │───────────────────────────────│
│          │  12-Day Streak                │
│        │  ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★    │
│          │                               │
│ Dashboard│  Today's Habits               │
│ Habits   │  ✓ Morning routine        6am │
│ Projects │  ✓ Read 30 mins          7am │
│ Settings │  ✓ Meditate              8am │
│          │  ☐ Journal              9pm  │
│          │  ☐ Evening reflection   10pm │
│          │                               │
│          │  Weekly Progress              │
│          │  ████████░░░░░░ 68%          │
│          │  Mon Tue Wed Thu Fri Sat Sun  │
│          │  ●  ●  ●  ●  ●  ○  ○        │
└──────────┴───────────────────────────────┘
```

### Camera Angle
Flat, straight-on. Product screenshot point of view.

### Lighting
Soft blue glow emanating from the streak section. The habits list has subtle white text — easily legible against the dark surface.

### Animation Philosophy
- Streak counter pulses slowly
- Checked habits have a subtle green glow on the checkmark
- Weekly progress bar animates width on reveal
- Stars (streak days) have staggered twinkle

---

## Product 02 — Valencia Studio (Landing Page Preview)

### Purpose
Show Valencia Studio as a premium digital product studio. This is a landing page hero section — elegant, editorial, with service cards.

### Color
| Token | Value |
|---|---|
| Primary | `#8b5cf6` |
| Secondary | `#a78bfa` |
| Background | `#0a0a0f` |
| Surface | `#12121a` |
| Glass | `rgba(139,92,246,0.08)` |
| Accent glow | `rgba(139,92,246,0.12)` |

### Composition

```
┌─────────────────────────────────────────────┐
│ ● ● ●  valencia.studio                     │
├─────────────────────────────────────────────┤
│                                             │
│  Valencia Studio                [CTA]       │
│                                             │
│  Product Studio                         ▲  │
│  ───────────────                          │  │
│  We design and build                  hero│  │
│  digital products that                  │  │
│  drive results.                        │  │
│                                         │  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ │  │
│  │ Strategy │ │  Design  │ │Engineering│ │  │
│  │          │ │          │ │          │ │  │
│  │ desc...  │ │ desc...  │ │ desc...  │ │  │
│  └──────────┘ └──────────┘ └──────────┘ │  │
│                                         │  │
└─────────────────────────────────────────────┘
```

### Camera Angle
Flat, straight-on. Browser window view of a landing page.

### Lighting
Soft purple ambient glow behind the hero headline. The service cards have very subtle purple borders.

### Animation Philosophy
- Purple glow breathes slowly
- Service cards have staggered fade-in
- Navigation has subtle hover indicators

---

## Product 03 — Analytics (Dark Dashboard)

### Purpose
Show a business intelligence dashboard with revenue tracking, KPIs, and growth charts. Dark and data-dense.

### Color
| Token | Value |
|---|---|
| Primary | `#06b6d4` |
| Secondary | `#22d3ee` |
| Background | `#08080e` |
| Surface | `#101018` |
| Glass | `rgba(6,182,212,0.08)` |
| Accent glow | `rgba(6,182,212,0.1)` |

### Composition

```
┌──────────────────────────────────────────────┐
│ ● ● ●  analytics — dashboard   v0.1.0       │
├──────────┬───────────────────────────────────┤
│          │  Analytics            🔔 👤      │
│ SIDEBAR  │───────────────────────────────────│
│          │  $284.5K   +23.4%   4,892  3.2%  │
│ Dashboard│  Revenue  Growth   Users  Conv.  │
│ Reports  │───────────────────────────────────│
│ Alerts   │  Revenue Over Time                │
│ Settings │  ╱╲    ╱╲    ╱╲                   │
│          │ ╱  ╲  ╱  ╲  ╱  ╲                  │
│          │╱    ╲╱    ╲╱    ╲                 │
│          │  Jan  Feb  Mar  Apr  May          │
│          │───────────────────────────────────│
│          │ Top Products      Revenue  Growth │
│          │ LifeOS           $142K    +34%   │
│          │ Valencia Studio   $98K    +18%   │
│          │ Automate          $44K    +12%   │
└──────────┴───────────────────────────────────┘
```

### Camera Angle
Flat, straight-on. Product screenshot.

### Lighting
Cyan glow behind the revenue chart. KPI cards have subtle cyan border highlights. The dark background makes the bright data stand out.

### Animation Philosophy
- Chart area has a slow animated gradient pulse
- Revenue counters count up
- Growth indicators have subtle green/red pulses

---

## Product 04 — Automate (Workflow Canvas)

### Purpose
Show a visual workflow builder with connected nodes. Trigger → Action pipelines.

### Color
| Token | Value |
|---|---|
| Primary | `#f59e0b` |
| Secondary | `#fbbf24` |
| Background | `#0a0a0f` |
| Surface | `#14141c` |
| Glass | `rgba(245,158,11,0.08)` |
| Accent glow | `rgba(245,158,11,0.12)` |

### Composition

```
┌──────────────────────────────────────────────┐
│ ● ● ●  automate — workflows   v0.1.0       │
├──────────┬───────────────────────────────────┤
│          │  Workflow Canvas       Run All   │
│ SIDEBAR  │───────────────────────────────────│
│          │  ┌──────────┐                    │
│ Workflows│  │ TRIGGER  │                    │
│ Logs     │  │ New Sale │                    │
│ Settings │  └────┬─────┘                    │
│          │       │                          │
│          │  ┌────▼─────┐                    │
│          │  │  ACTION  │                    │
│          │  │Send Email│                    │
│          │  └────┬─────┘                    │
│          │       │                          │
│          │  ┌────▼─────┐                    │
│          │  │  ACTION  │                    │
│          │  │Update CRM│                    │
│          │  └──────────┘                    │
│          │───────────────────────────────────│
│          │ Run History    Status    Time     │
│          │ New Sale → ...  ✓       2m ago   │
│          │ New Sale → ...  ✓       15m ago  │
│          │ New Sale → ...  ✓       1h ago   │
└──────────┴───────────────────────────────────┘
```

### Camera Angle
Flat, straight-on. Canvas view.

### Lighting
Amber glow behind the workflow nodes. Connection lines between nodes have a subtle amber gradient. The "Run" button has a brighter amber highlight.

### Animation Philosophy
- Connection lines have a slow moving gradient dash ("data flowing")
- Active nodes have a subtle amber pulse
- Run history shows green checkmarks with fade-in

---

## Ecosystem Consistency

| Element | LifeOS | Valencia Studio | Analytics | Automate |
|---|---|---|---|---|
| Window chrome | macOS dots | macOS dots | macOS dots | macOS dots |
| Sidebar | Dark, nav items | N/A | Dark, nav items | Dark, nav items |
| Grid bg | `opacity-[0.02]` | `opacity-[0.02]` | `opacity-[0.02]` | `opacity-[0.02]` |
| Glass | `backdrop-blur` | `backdrop-blur` | `backdrop-blur` | `backdrop-blur` |
| Font | Inter + mono | Inter + mono | Inter + mono | Inter + mono |
| Border | `border-[#22222e]` | `border-[#22222e]` | `border-[#22222e]` | `border-[#22222e]` |
| Traffic light | red/yellow/green | red/yellow/green | red/yellow/green | red/yellow/green |

---

## Implementation Priority

### First: LifeOS — Habits Dashboard

**Why this creates the biggest visual impact:**

1. **LifeOS is the flagship.** It appears in the Hero AND in Featured Work. Consistency between the two builds credibility — "this product really exists."
2. **The Hero already shows a LifeOS overview dashboard.** A habits-focused view is a natural second screenshot. Together they tell a story: "LifeOS has multiple modules."
3. **Habit tracking is universally understood.** Every visitor knows what streaks, daily checklists, and weekly progress mean. No explanation needed.
4. **The color blue is already our brand.** A blue LifeOS habits screenshot strengthens the brand identity.

### Second: Analytics — Dark Dashboard

Revenue, growth, and charts are immediately impressive. A dark analytics dashboard with glowing KPIs will be the most visually striking card in Featured Work.

### Third: Valencia Studio — Landing Page

Important for the studio positioning, but less visually impactful than data dashboards.

### Fourth: Automate — Workflow Canvas

Coolest conceptually, but least familiar to non-technical visitors. Requires more explanation.

---

## Next Step

Once approved, I will implement the LifeOS Habits Dashboard as a React component (`src/components/ui/lifeos-habits.tsx`) and integrate it into Featured Work.
