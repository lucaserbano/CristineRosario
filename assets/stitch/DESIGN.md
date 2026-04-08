# Design System Document

## 1. Overview & Creative North Star: "The Clinical Atelier"

This design system is a departure from the sterile, rigid layouts typical of medical interfaces. Our Creative North Star is **"The Clinical Atelier"**—a space that feels as meticulously curated as a high-end editorial spread, yet remains deeply human and accessible. 

For a Brazilian pediatrician specializing in Immunology, the interface must balance the precision of science with the softness of maternal care. We break the "template" look by utilizing intentional asymmetry, expansive breathing room (whitespace), and a sophisticated typographic hierarchy. This system replaces "childish" medical tropes with "Sophisticated Softness," ensuring the patient’s journey feels like a premium, reassuring conversation rather than a cold clinical transaction.

---

## 2. Colors: Tonal Depth over Structural Lines

Our palette uses the Deep Navy (`primary`: `#001E2F`) for authority and the Ice Blue (`neutral`: `#F3FdFF`) for atmospheric calm. The Warm Rose (`tertiary_fixed_dim`: `#FFBCBD`) serves as a "human" accent, used sparingly to draw the eye to empathetic touchpoints.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. High-end design relies on "Gestalt" principles where proximity and color shifts create boundaries. Sections are defined by shifting from `surface` to `surface-container-low` or `surface-container-high`.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of fine paper and frosted glass.
*   **Base:** `surface` (#f7f9ff)
*   **Sectioning:** Use `surface-container-lowest` (#ffffff) to highlight primary content areas against the background.
*   **Emphasis:** Use `surface-container-high` (#d3e4f8) for secondary sidebars or navigation elements to create a grounded, "inset" feel.

### The "Glass & Gradient" Rule
To achieve a premium "Signature" feel, interactive floating elements must utilize **Glassmorphism**. Use `surface` colors at 70% opacity with a `backdrop-filter: blur(12px)`.
*   **Signature Textures:** For Hero sections and primary CTAs, use a subtle linear gradient: `primary_container` (#001e2f) to `secondary` (#27638d) at a 135-degree angle. This adds "soul" and depth that flat hex codes cannot provide.

---

## 3. Typography: The Editorial Voice

We utilize a high-contrast pairing to distinguish between "The Specialist" and "The Human."

*   **Display & Headlines (Newsreader):** These are our "Editorial" anchors. Use `display-lg` and `headline-lg` for emotional messaging and section headers. The serif nature of Newsreader conveys heritage and medical authority.
*   **Titles & Body (Plus Jakarta Sans):** Our "Functional" voice. Use `title-md` for labels and `body-lg` for clinical information. Plus Jakarta Sans provides a modern, clean readability that feels approachable.
*   **Hierarchy Tip:** Never center-align long-form text. Use asymmetrical left-aligned layouts with wide right margins to mimic a high-end magazine layout.

---

## 4. Elevation & Depth: Tonal Layering

### The Layering Principle
Depth is achieved through "Tonal Stacking" rather than shadows. 
*   Place a `surface-container-lowest` card on top of a `surface-container-low` background. The subtle shift in hex value provides a natural "lift."

### Ambient Shadows
Shadows should be "felt, not seen." If a floating effect is required (e.g., for a modal or a primary action button):
*   **Shadow Color:** Use a 6% opacity of `on_surface` (#0c1d2b).
*   **Shadow Specs:** `0px 20px 40px` blur. This creates an ambient glow that feels like soft clinical lighting.

### The "Ghost Border" Fallback
If a border is required for accessibility (e.g., in high-contrast modes), use the `outline-variant` token at **15% opacity**. A 100% opaque border is a failure of the system's softness.

---

## 5. Components

### Buttons
*   **Primary:** High-contrast `primary` background with `on_primary` text. Use `rounded-full` (9999px) for a "pebble" feel.
*   **Secondary (Glass):** Semi-transparent `surface_container_lowest` with a `backdrop-blur`. This is the signature "Frosted Glass" button.
*   **States:** On hover, shift the background scale by 2% (1.02) rather than just changing the color.

### Input Fields
*   **Styling:** Forgo the "box" look. Use a `surface-container-low` background with a `rounded-md` corner. 
*   **Focus:** Instead of a heavy border, use a 2px `secondary` bottom-border on focus to maintain the editorial feel.

### Cards
*   **Constraint:** No dividers. Separate content using the `spacing-6` (2rem) or `spacing-8` (2.75rem) tokens. 
*   **Nesting:** Place clinical data in a `surface-container-highest` small chip inside a `surface-container-lowest` card.

### Signature Component: The "Empathy Header"
A large `display-sm` Newsreader headline paired with a floating "Glassmorphism" chip (`label-md`) that displays the doctor's current availability or a warm greeting.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Place a large image off-center and let the `display-lg` typography overlap it slightly.
*   **Use Generous Leading:** Increase line height for `body-lg` to 1.6 to ensure the medical information feels breathable and non-threatening.
*   **Tint Your Greys:** Every "neutral" should have a hint of Ice Blue or Navy to keep the palette cohesive.

### Don't:
*   **Don't use 100% Black:** Use `on_background` (#0c1d2b) for text. Pure black is too aggressive for an immunology practice.
*   **Don't use Childish Icons:** Avoid "cartoon" kids or toys. Use professional, thin-stroke SVG icons or high-end photography of tactile textures (e.g., linen, soft water, cotton).
*   **Don't Overstack Shadows:** If a layer is already defined by a color shift, do not add a shadow. Pick one method of elevation and stick to it.

---

## 7. Token Summary Reference

*   **Primary Action:** #001E2F (`on_primary_fixed`)
*   **The "Human" Touch:** #FFBCBD (`tertiary_fixed_dim`)
*   **Background Canvas:** #f7f9ff (`background`)
*   **Rounding:** Default to `rounded-lg` (1rem) for containers; `rounded-full` for interactive triggers.
*   **Typeface (Serif):** Newsreader (Display/Headline)
*   **Typeface (Sans):** Plus Jakarta Sans (Body/UI)