---
name: Everwell Dispatch Wall
description: A tactile local-service system built from warm enamel, paper tickets, navy rails, and decisive route states.
colors:
  enamel-cream: "#f4eedc"
  enamel-deep: "#e7d3b3"
  ticket-paper: "#f7e7cc"
  ticket-paper-dark: "#d7b889"
  rail-navy: "#183153"
  night-navy: "#0e223b"
  service-red: "#c83d28"
  service-red-dark: "#9e2d1f"
  route-green: "#2d7a63"
  route-green-bright: "#21a24f"
  charcoal: "#252a2e"
  ink-soft: "#4d4d48"
  warm-white: "#fffdf7"
  navy-line: "rgba(24, 49, 83, 0.26)"
  focus-amber: "#f39a2e"
typography:
  display:
    fontFamily: '"Bree Serif", Rockwell, serif'
    fontSize: "clamp(3.6rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: '"Bree Serif", Rockwell, serif'
    fontSize: "clamp(2.8rem, 5vw, 5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: '"Bree Serif", Rockwell, serif'
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: '"Barlow", Arial, sans-serif'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: '"Barlow", Arial, sans-serif'
    fontSize: "0.76rem"
    fontWeight: 800
    lineHeight: 1.55
    letterSpacing: "0.16em"
  script:
    fontFamily: '"Lobster", cursive'
    fontSize: "clamp(2.2rem, 4vw, 3.35rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
rounded:
  field: "3px"
  outline: "4px"
  control: "5px"
  rail: "7px"
  action: "8px"
  board: "10px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "30px"
  section: "60px"
components:
  button-primary:
    backgroundColor: "{colors.service-red}"
    textColor: "{colors.warm-white}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "9px 16px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.service-red-dark}"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.control}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.rail-navy}"
    typography: "{typography.body}"
    rounded: "{rounded.outline}"
    padding: "11px 20px"
    height: "48px"
  field-default:
    backgroundColor: "rgba(255, 253, 247, 0.42)"
    textColor: "{colors.night-navy}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "6px 9px"
    height: "36px"
  status-confirmed:
    backgroundColor: "transparent"
    textColor: "{colors.route-green}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "6px 15px"
    height: "44px"
---

# Design System: Everwell Dispatch Wall

## Overview

**Creative North Star: "The Dispatch Wall"**

The system translates a capable local service operation into a physical working surface: warm enamel grounds, paper records, dark metal rails, magnetic markers, and clear route states. It should feel handled, practical, and reassuring rather than polished into generic software chrome. The physical cues carry personality while the information remains commercially direct.

Density is purposeful. Large editorial headlines establish confidence; compact uppercase labels and ruled lists organize operational detail; red actions and green progress states make the next move legible at a glance. Texture, overlaps, and restrained wear create tactility, but semantic hierarchy and accessible interaction always remain dominant.

**Key Characteristics:**

- Warm, lightly worn enamel and paper surfaces framed by dark navy structure.
- Editorial serif headlines paired with compact, high-weight sans-serif operating labels.
- Red reserved for action and emphasis; green reserved for route progress and confirmation.
- Physical depth created through downward shadows, overlaps, rails, rules, and clipped ticket edges.
- Responsive composition that becomes a clear single-column flow without losing the dispatch-board identity.

## Colors

The palette combines warm workshop neutrals with high-contrast operational colors; every accent has a stable job.

### Primary

- **Rail Navy:** The principal frame, text, border, and navigation color. It gives the warm surfaces mechanical structure.
- **Night Navy:** The deepest ground for immersive process bands and the default high-contrast body ink.
- **Service Red:** The conversion color for calls, submit actions, codes, emphasis strokes, and urgent states.
- **Service Red Dark:** The pressed or hover action state and the stronger red field used for closing calls to action.

### Secondary

- **Route Green:** The durable success and confirmation color.
- **Route Green Bright:** The active route, progress connector, and high-energy operational signal.
- **Focus Amber:** A dedicated keyboard focus outline that remains distinct from both action red and success green.

### Neutral

- **Enamel Cream:** The default page and panel ground.
- **Enamel Deep:** The warmer supporting neutral used in tracks and weathered transitions.
- **Ticket Paper:** The pale record surface for forms and physical notes.
- **Ticket Paper Dark:** The paper-edge and divider color.
- **Charcoal:** A harder neutral for occasional dark detail.
- **Soft Ink:** Secondary body copy on light surfaces.
- **Warm White:** Text and control fill where a cleaner cream is needed.
- **Navy Line:** The standard translucent rule and divider.

### Named Rules

**The Operational Accent Rule.** Red means action or urgency; green means movement, readiness, or confirmation. Do not exchange their roles for decoration.

**The Warm Ground Rule.** Large light surfaces stay in the enamel-and-paper family. Pure white is a control highlight, not the page canvas.

## Typography

**Display Font:** Bree Serif (with Rockwell and serif fallbacks)  
**Body Font:** Barlow (with Arial and sans-serif fallbacks)  
**Label/Brand Font:** Barlow for operating labels; Lobster for the replaceable trade-script signature

**Character:** Bree Serif gives large statements sturdy, local-editorial authority. Barlow supplies fast scanning and compact technical labels, while Lobster is confined to the business signature so the page never becomes nostalgic or ornamental.

### Hierarchy

- **Display:** Regular-weight Bree Serif with tight leading and tracking; reserved for the largest page statement and allowed to scale fluidly across the viewport.
- **Headline:** The same serif construction at the section scale, preserving one consistent editorial voice.
- **Title:** A compact serif title used for services, steps, and status labels.
- **Body:** Regular Barlow at the default reading size, with supporting copy generally held to roughly 48–62 characters per line.
- **Label:** Extra-bold uppercase Barlow with wide tracking for section markers, ticket labels, and operational codes.
- **Script:** Lobster appears only in the business signature and ticket imprint.

### Named Rules

**The Two-Voice Rule.** Bree Serif speaks in statements; Barlow handles instructions, evidence, navigation, and action. Never use the script face for general headings or body copy.

**The Compact Label Rule.** Uppercase labels remain short and functional. Their tracking supplies separation; their size should not compete with titles.

## Layout

The system uses two nested content widths: a broad dispatch-board frame capped at 1480px and a reading/section frame capped at 1320px. Desktop sections favor asymmetric two-column structures, with a narrower label or explanation rail beside a larger statement, list, or route. Section spacing expands fluidly with `clamp()` rather than switching between many fixed presets.

At 900px, complex grids collapse to one column, sticky process copy becomes static, navigation becomes a dropdown rail, and paper-ticket treatment becomes explicit enough to survive separation from the wide board composition. At 620px, the design becomes urgency-first: fields stack, dense map labels disappear, section padding tightens, and a persistent two-action bar protects call and booking access.

**The Framed Field Rule.** A large composition should read as one bounded working field before its internal pieces are read as separate cards.

**The Mobile Action Rule.** On narrow screens, preserve both direct calling and requesting service; neither path may be hidden behind navigation.

## Elevation & Depth

Depth is physical and downward, never glassy. The low shadow is `0 10px 24px rgba(51, 37, 24, 0.15)` and the board shadow is `0 20px 54px rgba(38, 26, 16, 0.22)`. Smaller actions use tighter warm shadows, while overlaps, inset highlights, borders, paper textures, and rail thickness do most of the structural work. Dark process bands use tonal separation rather than elevation.

### Shadow Vocabulary

- **Ambient Low** (`0 10px 24px rgba(51, 37, 24, 0.15)`): Dropdown navigation, compact paper rails, and modest lifted surfaces.
- **Board Lift** (`0 20px 54px rgba(38, 26, 16, 0.22)`): Major framed boards and the mobile paper ticket.
- **Action Lift** (`0 7px 16px rgba(158, 45, 31, 0.25)`): Red conversion controls; it deepens slightly on hover.

### Named Rules

**The Downward Weight Rule.** Shadows fall below physical objects with warm, diffuse edges. Avoid cool glows, floating glass, or equal halos.

## Shapes

The form language is built from modest 3–10px corner radii, strong rectangular rails, circular route markers, and clipped paper corners. Form fields use the tightest corners; controls and status blocks sit in the middle; large boards receive the broadest standard radius. Ticket geometry may use 14px clipped corners with a fine inset rule when it needs to read as a detached paper object.

Borders are functional: 1–2px rules divide records, 3–7px navy rails frame major fields, and the route is deliberately much heavier than ordinary lines. Fully rounded pills are not part of the default component language; circles are reserved for route points, step markers, and physical fasteners.

## Components

### Buttons

- **Shape:** Compact rectangular controls with gently rounded corners and a 48px minimum action height.
- **Primary:** Service red with warm-white text, extra-bold Barlow, a warm downward shadow, and a full-width form variant.
- **Hover / Focus:** Hover darkens to service-red-dark and lifts 2px; active returns 1px downward. Keyboard focus uses the dedicated 3px amber outline with a 4px offset.
- **Outline:** Transparent cream-ground control with a 2px navy border; hover inverts to a navy field with cream text.

### Cards / Containers

- **Corner Style:** Boards use the broad end of the radius scale; records and status blocks stay tighter.
- **Background:** Enamel cream for environmental surfaces, ticket paper for records, and night navy for immersive process fields.
- **Shadow Strategy:** Major physical boards use Board Lift; repeated content rows remain flat and separated by rules.
- **Border:** Navy rails communicate enclosure; fine translucent navy or red rules organize internal records.
- **Internal Padding:** Responsive and generous for boards, compact for ticket controls and ledger rows.

### Inputs / Fields

- **Style:** Warm translucent fill, a 1.5px navy stroke, tight 3px corners, and dense padding suited to a service ticket.
- **Focus:** The global amber focus outline remains visible outside the field; caret color uses service red.
- **Error / Disabled:** Invalid fields shift to service red and gain a subtle red outer ring. Disabled submit actions retain their form but reduce opacity and remove motion.

### Navigation

Desktop navigation is a centered Barlow rail with a red underline that draws in from left to right on hover or focus. The call action remains a distinct red control. At tablet width the navigation becomes a cream dropdown with navy rules, and at phone width the persistent bottom action bar takes over the two highest-priority actions.

### Status Rail

Status blocks use serif titles, a 2px border in the semantic state color, and compact icon-plus-label alignment. Red communicates receipt or attention; green communicates confirmed completion. The connector remains navy so it does not impersonate a status.

### Service Ledger

Repeated services appear as ruled ledger rows rather than detached cards. Each row aligns a compact red code, a serif title with supporting copy, and a high-weight action link; hover shifts the entire row horizontally and adds only a faint warm highlight.

## Do's and Don'ts

### Do:

- **Do** build large sections as framed fields, rails, ledgers, tickets, and route structures rather than generic card grids.
- **Do** keep red actions and green progress states semantically consistent across every screen.
- **Do** use warm texture as material evidence while retaining solid-color fallbacks and readable contrast.
- **Do** preserve visible focus, reduced-motion behavior, and the paired call/request actions at mobile sizes.
- **Do** use physical overlap and ruled separation to organize dense service information.

### Don't:

- **Don't** introduce glassmorphism, cool neon glows, or weightless floating panels.
- **Don't** use pure white as the dominant page background or scatter accent colors decoratively.
- **Don't** turn repeated content into a field of interchangeable rounded cards.
- **Don't** use the script face outside the replaceable business signature.
- **Don't** add invented badges, ratings, certifications, or proof motifs to make the system feel trustworthy.
