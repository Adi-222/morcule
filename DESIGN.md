# Design System Specification: The Editorial Muse

This design system is a bespoke framework crafted for a high-end digital agency. It moves away from the rigid, "boxed-in" structures of traditional SaaS templates, opting instead for the spatial luxury of a high-end fashion editorial. It is designed to feel curated, not engineered.

---

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**
The system rejects the "standard" web grid in favor of intentional asymmetry and rhythmic whitespace. We do not "fill" space; we "frame" content. By utilizing high-contrast typography scales and overlapping surface layers, we create a sense of depth and motion that feels premium and quietly sophisticated.

**Breaking the Template:**
- **Intentional Asymmetry:** Avoid centering every hero. Use the spacing scale to offset text blocks from images.
- **Overlapping Elements:** Allow images or cards to subtly bleed across container boundaries to break the "grid-prison" feel.
- **Tonal Depth:** Rather than lines, use background color shifts to define the rhythm of the page.

---

## 2. Colors & Surface Logic

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined through:
1. **Background Shifts:** Use `surface-container-low` sections sitting on a `surface` background.
2. **Negative Space:** Use the `20` (7rem) or `24` (8.5rem) spacing tokens to create a natural mental break between sections.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of fine paper.
- **Base Layer:** `surface` (#faf9f7).
- **Secondary Tier:** `surface-container-low` (#f4f3f1) for large section backgrounds.
- **Interactive Tier:** `surface-container-lowest` (#ffffff) for floating cards or elevated interaction points.

### The "Glass & Gradient" Rule
To elevate the experience beyond flat color, use `surface` colors at 80% opacity with a `20px` backdrop-blur for floating navigation or overlays. Main CTAs should utilize a subtle linear gradient from `primary` (#3525cd) to `primary-container` (#4f46e5) at a 135-degree angle to provide visual "soul."

---

## 3. Typography: The Editorial Voice

The system uses a high-contrast pairing to balance heritage with modernity.

- **Display & Headlines (Fraunces/Newsreader):** Used for storytelling. Soft serifs convey authority and craft. Use `display-lg` (3.5rem) for hero statements with a `-0.02em` letter spacing.
- **Body & UI (Inter):** Used for utility. This clean sans-serif ensures maximum legibility in complex UI tasks.

| Role | Font | Size | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display-LG** | Fraunces | 3.5rem | 600 | Hero Headlines |
| **Headline-MD** | Fraunces | 1.75rem | 500 | Section Headers |
| **Title-MD** | Inter | 1.125rem | 500 | Card Titles |
| **Body-MD** | Inter | 0.875rem | 400 | Primary Readability |
| **Label-SM** | Inter | 0.6875rem | 600 | All-caps metadata |

---

## 4. Elevation & Depth

### Tonal Layering
Depth is achieved by "stacking" surface-container tiers. Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift that feels architectural rather than digital.

### Ambient Shadows
For floating elements (Modals, Popovers), use "Ambient Shadows":
- **Value:** `0px 24px 48px rgba(26, 28, 27, 0.06)`
- **Note:** The shadow must be tinted with the `on-surface` color to mimic natural light. Pure black shadows are forbidden.

### The "Ghost Border" Fallback
If accessibility requires a container definition, use a **Ghost Border**:
- **Token:** `outline-variant` (#c7c4d8) at **15% opacity**.
- **Rule:** Never use 100% opaque borders for decorative containment.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), `12px` (md) corner radius. Label in `on-primary`.
- **Secondary:** `surface-container-high` background, no border.
- **Tertiary/Ghost:** No background. Underline on hover using a 1px `primary` border-bottom.
- **Pill Variant:** Use `full` (9999px) radius for "Apply" or "Subscribe" actions to contrast with card geometry.

### Cards & Sections
- **Corner Radius:** `xl` (1.5rem / 24px) for main containers; `lg` (1rem / 16px) for nested content.
- **Spacing:** Use a minimum of `8` (2.75rem) internal padding.
- **Separator Rule:** Forbid divider lines. Use `surface-variant` background shifts or vertical whitespace `6` (2rem) to separate list items.

### Input Fields
- **Styling:** `surface-container-low` fill with a `10px` (md) radius.
- **Active State:** Transition to a `ghost-border` of `primary` at 40% opacity. Avoid heavy focus rings; use a subtle `2px` outer glow.

### Bespoke Component: The "Perspective Gallery"
For portfolio pieces, use an asymmetrical card layout where the image container is `surface-dim` with an aspect ratio of 4:5, paired with a `label-sm` category tag floating 24px above the title.

---

## 6. Do’s and Don’ts

### Do
- **Do** use `display-lg` for single, impactful words in a sentence to create an editorial "spark."
- **Do** embrace "The Great Empty"—allow sections of the grid to remain vacant to guide the eye.
- **Do** use `primary` sparingly as a "surgical" accent for high-conversion points only.

### Don’t
- **Don’t** use pure black (#000000). Use `on-background` (#1a1c1b) for text to maintain a soft, ink-on-paper feel.
- **Don’t** use standard 8px or 16px "web" spacing. Use our custom scale (e.g., `5` / 1.7rem) to create a unique visual rhythm.
- **Don’t** use "Drop Shadows" on buttons. Use tonal shifts or slight scaling (1.02x) on hover to indicate interactivity.

---

## 7. Token Summary Reference

- **Primary Accent:** `#3525cd` (Indigo)
- **Background Base:** `#faf9f7` (Off-white)
- **Radius-Large:** `1.5rem` (Cards)
- **Radius-Small:** `0.75rem` (Buttons/Inputs)
- **Body Text:** Inter, `#464555` (`on-surface-variant`)
- **Headline Text:** Fraunces, `#1a1c1b` (`on-surface`)