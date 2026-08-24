# GoLaunch Studio Design System

GoLaunch Studio is a launch/creative studio brand. The system is built from a single provided source: `uploads/BRANDING BOARDS-5a5acce5.png` (branding board: logos, palette, typography, Canva post-size guidance). No codebase, Figma, or copy decks were provided — components and UI kit screens are original compositions in the brand's visual language, and content guidance is inferred from the board.

## Sources
- `uploads/BRANDING BOARDS-5a5acce5.png` — the only provided asset. Canva template examples on the board are blank placeholders (no template content available).

## Content fundamentals
No product copy was provided, so these are inferred conventions — confirm with the brand owner:
- Voice: energetic, direct, launch-oriented ("Ready for liftoff", "Launch louder"). Short imperative headlines.
- Casing: sentence case for body and UI; the board uses LETTERSPACED ALL-CAPS for small labels/eyebrows.
- Address the reader as "you"; the studio speaks as "we".
- No emoji in the provided materials; avoid them.

## Visual foundations
- **Color**: 7-color palette. Live Orange #F4501E is the hero accent; Tech Blue #1925D9 the secondary; Highlight Yellow #F2DE3A for highlights/backgrounds. Warm neutrals (Off White #FBF9F5 pages, Cream Paper #EFE9DD sunken surfaces, Warm Grey #8F8A82 muted text) with Ink Charcoal #141210 for text/inverse. Bold two- and three-color pairings are on-brand (orange-on-yellow, blue-on-yellow, yellow-on-blue).
- **Gradients**: vivid multi-stop gradients (yellow→orange→blue; magenta→blue) appear as logo backgrounds and a footer strip — use for hero/feature moments only, never for text surfaces.
- **Type**: Bricolage Grotesque for display (bold, tight leading), Plus Jakarta Sans for body/UI. Small caps-style letterspaced labels for eyebrows.
- **Shape**: rounded squares (the filled-shape mark) suggest 10–24px radii; pill shapes for tags/buttons. Borders are crisp 1.5px ink lines on light surfaces.
- **Depth**: mostly flat; soft warm shadows for floating elements; an offset "pop" shadow (4px 4px 0 ink) is available for playful cards.
- **Backgrounds**: solid brand colors or warm off-white; full-bleed gradient only for hero strips.
- **Motion** (inferred, none shown): quick and snappy — 150–250ms ease-out fades/slides; press = slight scale-down; hover = darken or shift to the adjacent brand color.
- **Imagery**: none provided. Use bold flat-color blocks in place of photography until real imagery exists.

## Iconography
No icon set was provided. The board shows outlined social glyphs (Instagram, Facebook, LinkedIn, Pinterest) in thin-stroke rounded style — closest CDN match is **Lucide** (1.5–2px stroke, rounded). **Substitution flag:** Lucide is used in components/kits; replace if the brand has its own set. Brand marks live in `assets/` (cropped from the board — white/colored backgrounds baked in; request vector originals).

## Assets
- `assets/logo-lockup-stacked.png`, `assets/logo-lockup-horizontal.png` — black logo lockups on white
- `assets/mark.png` — mark only; `assets/mark-filled-tile.png` — reversed mark on black rounded tile
- `assets/favicon.png`, `assets/favicon-outlined.png` — favicon variants
- `assets/mark-tile-{orange,yellow,blue,black}.png` — mark on brand-color tiles
- No vector logo was provided; `assets/logo.svg` does not exist.

## Index
- `styles.css` → `tokens/` (fonts, colors, typography, spacing)
- `guidelines/` — specimen cards for the Design System tab
- `components/forms|display|navigation|feedback` — Button, IconButton, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip
- `ui_kits/website/` — marketing-site screens (original compositions in brand language)
- `SKILL.md` — agent skill entry point

## Intentional additions
- The full standard component set is authored (no source inventory existed); all styling values derive from the board's palette/type.
- Lucide icons via CDN (flagged substitution above).

## Canva post sizes (from board)
Instagram post 1080×1080 · story 1080×1920 · Facebook 1200×1200 · LinkedIn 1200×1200 · Pinterest pin 1000×1500.