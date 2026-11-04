---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# HVAC landing template

## Scope and mode

Persuade. A reusable landing page for local US HVAC companies; first-time visitors should understand the service, trust the response process, and request service or call.

## Audience, job, action, proof, constraints

Homeowners and local business operators with urgent or planned HVAC needs. Primary action: request service. Parallel action: call. Proof comes from a clear operating process, concrete service coverage, practical service details, and transparent next steps; no fabricated ratings, testimonials, credentials, response guarantees, or customer counts. Static HTML/CSS/JS, responsive, keyboard accessible, reduced-motion aware, and easy to rebrand.

## Chosen direction and memorable moment

The Dispatch Wall: a tactile regional service board made from warm enamel, paper tickets, magnetic route markers, and a local map. Approved composition: `.impeccable/mocks/dispatch-route-focus.png`. The hero’s memorable moment is a service request visibly traveling from the request ticket, across a local route, to a home, closing in a confirmed-visit state.

## Component grammar

Cream enamel fields framed by navy metal rails; paper ticket controls use clipped corners and fine red rules; labels use compact uppercase sans; display copy uses a sturdy editorial serif; actions use decisive red-orange or service green. Corners are mostly 4–8px on enamel surfaces, with clipped paper geometry rather than generic rounding. Depth comes from downward, soft-edged shadows and physical overlaps. Lines are 1–2px except the green route, which is a deliberate 10–14px path.

## Type ramp

Display serif: 56–84px desktop, 42–58px tablet, 38–48px mobile. Navigation and actions: 15–18px, 700 weight. Body: 17–20px with a 65–72ch maximum measure. Field labels: 12–14px uppercase with generous tracking.

## Sampled and governing colors

The approved comp’s dominant warm fields sample around `#F1DBC2`, `#F8E2CA`, and map paper `#EBCA9C`. Governing functional colors are enamel cream `#F4EEDC`, deep navy `#183153`, service red `#D84A35`, route green `#2D7A63`, charcoal `#252A2E`, and cool highlight `#EFF4F5`.

## Implementation inventory

| Ingredient | Commitment | Medium |
| --- | --- | --- |
| Enamel page ground | Warm, lightly worn, full-viewport physical surface | Generated raster texture plus semantic CSS color fallback |
| Header rail | Navy frame, compact brand, navigation, phone action | Semantic HTML/CSS and authored SVG logo mark |
| Headline | Large editorial serif, roughly 1.7–2× supporting copy | Semantic HTML with web font |
| Regional map | Dense local-road field with river, towns, route, van, and home | Responsive authored SVG; labels remain semantic SVG text |
| Primary route | Thick green path from request ticket to house with brief moving highlight | SVG path with bounded CSS/JS motion and reduced-motion fallback |
| Request ticket | Paper ticket overlapping the map’s lower-left edge | Semantic HTML form, paper texture raster, clipped CSS geometry |
| Status rail | Request received → Visit confirmed | Semantic ordered status list with SVG icons |
| Main CTA | Red-orange, full-width on ticket, strong pressed/loading/success states | Native button and JavaScript state handling |
| Later sections | Services, process, service area, maintenance prompt, final CTA | Semantic HTML in alternating enamel, paper, and navy bands; no repetitive icon-card grid |
| Icons | Phone, check, van, house, airflow/service marks | Authored inline SVG in one consistent stroke/fill system |

## Unresolved decisions

Real client brand, service area, phone, scheduling destination, CRM endpoint, hours, licensing, and evidence assets remain replacement fields.
