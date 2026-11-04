# Shipping raster asset manifest

Approved composition reference: `.impeccable/mocks/dispatch-route-focus.png`

Generation path: built-in image generation followed by deterministic 48px edge-band seam finishing. Both assets are opaque PNG source assets. Exact prompts are embedded in each PNG under the `impeccable:prompt` metadata key and repeated below for builder visibility.

## Asset inventory

| Output path | Dimensions | Role | Crop / repeat notes |
| --- | ---: | --- | --- |
| `assets/enamel-board-warm-cream.png` | 2048 × 1536 | Warm, lightly aged enamel-board page ground | No crop. Generated at 4:3, then bicubic-resized from 1448 × 1086 to the target dimensions. Uniform full-frame coverage. A 48px cosine edge-band finish makes opposite boundary pixels identical (sampled boundary delta: 0). |
| `assets/paper-ticket-warm.png` | 1536 × 1024 | Warm paper surface behind the semantic service-request ticket/form | Native target dimensions; no crop. Uniform full-frame coverage. A 48px cosine edge-band finish makes opposite boundary pixels identical (sampled boundary delta: 0). |

## Exact generation prompts

### `assets/enamel-board-warm-cream.png`

```text
Use case: style-transfer
Asset type: seamless website background texture for a tactile HVAC dispatch-board landing page
Primary request: refine the provided texture so it unmistakably reads as warm cream painted metal enamel rather than paper; keep the same quiet, full-frame material field
Input images: Image 1: edit target and composition reference
Style/medium: photorealistic painted enamel-board material scan
Composition/framing: exact 4:3 texture field intended for 2048x1536 output; perfectly seamless on all four edges; evenly filled edge to edge; no focal point
Lighting/mood: diffuse neutral light with only a nearly imperceptible enamel satin response; no directional illumination
Color palette: dominant warm enamel cream near #F4EEDC with very subtle variation toward #F1DBC2
Materials/textures: very fine shallow orange-peel paint grain, tiny sparse embedded speckles, a few extremely faint softened handling rubs; substantially smoother and less fibrous than the input
Text (verbatim): none
Constraints: change only the material read from fibrous/paper-like to painted metal enamel; preserve low contrast and uniform coverage; seamless tile; no transparency; no shadows; no perspective
Avoid: paper fibers, pulp, fabric weave, plaster, text, letters, numbers, logos, branding, maps, routes, labels, icons, tools, fasteners, screws, rivets, frames, seams, panels, cracks, rust blooms, heavy stains, peeling paint, strong scratches, directional gradients, vignette, borders, objects, people, watermarks
```

### `assets/paper-ticket-warm.png`

```text
Use case: stylized-concept
Asset type: seamless paper ticket background texture for a tactile HVAC dispatch-board landing page
Primary request: create a full-frame, tileable warm paper ticket surface with subtle natural fiber and restrained handling wear
Scene/backdrop: orthographic flat material scan only, evenly filled edge to edge
Subject: warm cream-buff uncoated ticket stock, no objects
Style/medium: photorealistic archival paper texture, tactile but quiet, production-ready
Composition/framing: exact 3:2 texture field intended for 1536x1024 output; perfectly seamless on all four edges; no lighting direction, no vignette, no borders, no focal point
Lighting/mood: diffuse neutral light, low contrast, trustworthy handmade dispatch-office character
Color palette: warm paper near #F8E2CA with slight natural variation toward #EBCA9C, materially distinct from the lighter enamel ground
Materials/textures: fine short pulp fibers, very faint deckle-like grain distributed uniformly, sparse softened handling rubs, a few tiny age flecks, no crease larger than a hairline
Text (verbatim): none
Constraints: flat repeatable material only; preserve a calm field behind form labels and controls; seamless tile; no transparency; no shadows; no perspective
Avoid: text, letters, numbers, logos, branding, printed lines, stamps, maps, routes, labels, icons, tools, clips, staples, holes, torn edges, folded corners, borders, seams, deep creases, heavy stains, coffee marks, burns, mold, strong scratches, directional gradients, vignette, objects, people, watermarks
```

## Semantic implementation boundary

The regional map, route, town labels, brand, all copy, form fields, controls, buttons, status rail, fasteners, navigation, phone action, and iconography remain HTML/CSS/SVG/JavaScript. These rasters supply material texture only and contain no information or interaction.
# Dispatch map board

- **Path:** `assets/dispatch-map-board.png`
- **Role:** Photographic hero background plate matching the approved Route First comp’s dense local map, worn enamel frame, physical fasteners, and dimensional van/home markers.
- **Crop:** Cover the dispatch board; preserve the lower-left blank ticket and lower-right status plate as semantic overlay zones.
- **Provenance:** Exact generation prompt is embedded as `impeccable:prompt` and preserved in `assets/dispatch-map-board.prompt.txt`.
- **Semantic boundary:** Headline, navigation, route, form fields, CTA, labels, status text, and controls remain HTML/CSS/SVG/JS.

