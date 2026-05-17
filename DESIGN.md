---
name: Cyber-Luxe Wallpaper System
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#c4c7c9'
  on-tertiary: '#2d3133'
  tertiary-container: '#8e9193'
  on-tertiary-container: '#272a2c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  data-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter-sm: 16px
  gutter-md: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  grid-overlay-size: 32px
---

## Brand & Style

The brand personality is rooted in a "Neo-Tokyo" aesthetic—a sophisticated blend of high-end luxury and futuristic grit. It targets enthusiasts of digital art and technology who value precision, immersion, and high-fidelity aesthetics. The emotional response is one of "calculated mystery," where the UI feels like a premium cockpit or a high-tech terminal.

The design style is **Cyber-Luxe Glassmorphism**. This involves a heavy reliance on deep, obsidian-layered backgrounds, translucent surfaces with refractive blurs, and hyper-thin "glowing" strokes that define boundaries. High-tech UI ornaments such as micro-grids, scanlines, and coordinate markers serve as decorative but functional-feeling elements that anchor the experience in a sci-fi reality.

## Colors

This design system uses a strictly dark-mode palette to emphasize depth and vibrant accents.

- **Base Colors:** The foundation is built on "Obsidian" (deepest black-blue) for main backgrounds and "Charcoal" for secondary surfaces and containers.
- **Accent Palette:** "Neon Violet" serves as the primary action color, while "Electric Cyan" is used for data visualization, highlights, and status indicators.
- **Pulse White:** A pure, high-luminance white reserved for crisp typography and "glow" effects that mimic flickering hardware LEDs.
- **Functional Gradients:** Use linear gradients from Neon Violet to Electric Cyan (45-degree angle) for high-impact elements like premium subscription CTAs or active wallpaper categories.

## Typography

The typography strategy balances geometric futurism with high-speed legibility.

- **Headlines:** Use **Space Grotesk**. Its technical, slightly eccentric letterforms provide the "cutting-edge" feel required for large-scale titles.
- **Body:** Use **Inter**. This provides a neutral, utilitarian balance to the expressive headlines, ensuring long descriptions or settings remain readable against dark, blurred backgrounds.
- **Data & Ornaments:** Use **JetBrains Mono** for all technical data, metadata (resolution, file size), and UI ornaments. It should always be set in uppercase when used for labels to enhance the "terminal" aesthetic.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a hard-coded 4px spacing rhythm. 

- **Grid System:** A 12-column grid is used for desktop, 8-column for tablet, and 4-column for mobile. 
- **The "Scanner" Overlay:** Every main view should be framed within a subtle 32px grid overlay that is visible only on the background layer, giving the impression of a digital viewfinder.
- **Margins:** Large external margins (64px+) on desktop create a "cinematic" feel, while mobile margins are kept tighter (20px) to maximize the screen real estate for wallpaper previews.

## Elevation & Depth

Hierarchy is achieved through **Glassmorphic Stacking** and **Luminescent Borders**.

- **Surface Tiers:** Backgrounds start at Obsidian (#020617). Secondary surfaces use Charcoal with 60% opacity and a 16px backdrop blur.
- **Glow Borders:** Instead of shadows, use 1px solid or semi-transparent borders. For active or "elevated" states, apply a `box-shadow: 0 0 8px [Color]` to simulate a neon glow.
- **Atmosphere:** Use radial gradients of Neon Violet at 5% opacity in the corners of the screen to suggest light leaking from the UI's "hardware."
- **Z-Index Strategy:** Higher elevation elements (like modals) should have increased backdrop blur (32px) and a brighter border-opacity to feel closer to the user.

## Shapes

The shape language is **Technical and Precise**. 

- **Radius:** Standard components use a "Soft" 0.25rem (4px) radius. This sharp-but-not-harsh look mimics machined components and digital displays.
- **Angular Accents:** Use 45-degree clipped corners (dog-ears) for decorative frames or primary buttons to reinforce the high-tech military/terminal vibe.
- **Interactive States:** On hover or focus, shapes should maintain their radius but can expand their "glow" footprint.

## Components

### Buttons
- **Primary:** Filled with a Neon Violet to Electric Cyan gradient. White text (Inter Bold). No shadow, but a 1px outer glow in Neon Violet.
- **Secondary:** Ghost style. 1px border in Pulse White (40% opacity). On hover, border becomes 100% opacity with a subtle backdrop blur.

### Chips & Tags
- Used for wallpaper categories (e.g., #Cyberpunk, #Abstract). 
- Styled with JetBrains Mono, all-caps, with a background of Charcoal at 40% opacity and a left-side 2px accent bar in Electric Cyan.

### Cards (Wallpaper Previews)
- Edge-to-edge imagery with a 1px inner border. 
- Metadata (resolution/likes) appears on hover using a glassmorphic overlay at the bottom, featuring Monospaced labels.

### High-Tech Ornaments
- **Crosshairs:** Place 16px wide L-shaped brackets at the corners of major image containers.
- **Data Readouts:** Small, non-interactive strings of "randomized" hex codes or coordinates in JetBrains Mono (8pt) placed near the edges of the screen to fill negative space.

### Input Fields
- Underline-only or subtle 4-sided borders. When focused, the border glows Electric Cyan and a "System Scanning" animation (a subtle horizontal line) flashes once across the field.