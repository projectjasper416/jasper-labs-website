# Jasper Labs landing page

## Approved direction

Applied AI for organizations across India. Preserve the blue/white/ink palette, existing JL logo files, custom Indian business miniature hero artwork, free-audit conversion, real products and India small-business technology brief. The visual direction combines precise blue graphics with warm architectural materials and recognisable Indian business contexts.

## Typography

- Homepage primary face: IBM Plex Sans, variable normal 100–700, self-hosted Latin WOFF2. Main roles use 400, 500 and 600.
- Short labels, process numbers and dates: JetBrains Mono. Do not use it for prose.
- The founders page shares the homepage's IBM Plex Sans typography, blue identity, header, and footer. Founder portraits have equal-sized frames, with two columns on desktop and one on mobile; preserve the supplied biographies and roles.
- Legacy product pages retain DM Sans and JetBrains Mono; both now self-hosted. Do not silently restyle those routes.
- Hero: responsive 44–80 px, weight 600, line height 1.04, tracking -0.04em. Preserve the intentional three-line composition.
- Section headings: responsive 36–60 px, weight 500, line height 1.1, tracking -0.035em.
- Card headings: 24 px, line height 1.2, tracking -0.025em.
- Body: 16 px with 1.6 leading; hero lead 17 px on desktop. Aim for 45–65 characters in prose; cards may be shorter.
- Forms: 16 px input text, 13 px labels, 14 px actions. Labels, helper text and errors stay visible.
- Metadata: 11–12 px generally; artwork annotation and original lockup descriptor are compact exceptions at 8–10 px.
- Narrow phones: capability cards become one column to preserve measure at the 16 px body size.

## Delivery and accessibility

Font files and SIL OFL license files live in `assets/fonts`. Use `font-display: swap`. Preload the two homepage families; DM Sans loads only when used. IBM Plex Sans has a metric-adjusted Arial fallback derived from the fonts' x-height and vertical metrics. Keep document zoom enabled, rem-based reading sizes, visible focus, native form validation and reduced-motion behavior.

The hero illustration remains static apart from its restrained existing hover treatment. No Three.js runtime was introduced: preserving the approved image's material detail and mobile delivery serves this landing page better than a procedural reconstruction.

## References used in the typography refinement

- Taste Skill, preserve-mode and typography guidance: https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md
- Impeccable typeset: https://github.com/pbakaus/impeccable/blob/main/skill/reference/typeset.md
- Impeccable polish: https://github.com/pbakaus/impeccable/blob/main/skill/reference/polish.md
- Impeccable craft floor: https://github.com/pbakaus/impeccable/blob/main/skill/reference/craft-floor.md
- Awesome DESIGN.md IBM example, selective hierarchy/readability inspiration only: https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/ibm/DESIGN.md
- img2threejs, evaluated for suitability rather than executed: https://github.com/img2threejs/img2threejs/blob/main/SKILL.md

The approved Jasper Labs identity takes precedence over generic reference prescriptions. No reference installers, global hooks or automated Impeccable detector were run.

## Indian business context

Lead with Indian enterprise in the hero, familiar work in the copy, and a conceptual Indian mixed-use business block. The image depicts fictional businesses, not clients or a delivered project. Keep the actual Jasper, Ember, and ResumeSetGo assets unchanged. Use WhatsApp orders, catalogues, invoices and team workflows as possible audit areas, not claims of delivered integrations. Preserve the all-India, all-sizes scope. Avoid reducing India to a flag palette or one language. The prior workbench files are retained as original artwork.

## 3D brand accent

Use `jasper-logo-3d.jpg` once, beside the From the lab introduction. It is a static image generated from the authoritative `jasper-labs.png` logo, with blue enamel, white raised lines, and silver backing. Keep it secondary to the Indian business hero. Blend its edges into the dark section, lazy-load it, reserve its aspect ratio, and stack it beneath the introduction on mobile. The original navigation/footer logo files remain unchanged.
