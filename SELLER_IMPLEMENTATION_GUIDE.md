# Seller & Implementation Guide

This document is for the seller or implementer, not the website visitor. Everwell is a fictional demonstration brand. Treat every business detail, location, phone number, trust item, and service promise as a placeholder until the client confirms it.

## 1. Information to collect before customization

- Legal/trading business name and preferred logo files.
- Primary phone number, click-to-call number, email, and approved contact hours.
- Main city, service radius, service-area cities, ZIP codes, and any excluded locations.
- Services offered, equipment types supported, and services the company does not offer.
- Approved headline, supporting copy, calls to action, and contact process.
- Brand colors, typography, photography, vehicles, uniforms, and other visual references.
- Verifiable license, insurance, certification, affiliation, and manufacturer details.
- Reviews the company has permission to publish, including the approved source attribution.
- Guarantees, financing, emergency availability, response expectations, and differentiators that the company can substantiate.
- Domain owner, hosting owner, analytics account, CRM/email recipient, and the person responsible for ongoing updates.

## 2. Where to customize the project

### `config.js`

Change the business name, short name, phone display, telephone link, service area, hero headline, hero supporting copy, and service-city list. Keep `phoneHref` in international telephone format, for example `+15125550148`.

### `index.html`

Review the page title and description, navigation labels, service descriptions, process language, trust section, calls to action, footer disclosure, and every example location. Do not remove the demonstration disclosure until all example data has been replaced and the form is genuinely connected.

### `styles.css`

The main brand tokens are at the top of the file. Update the navy, red, green, warm neutrals, fonts, and imagery as a coordinated system. Preserve visible focus, mobile action buttons, readable contrast, reduced-motion behavior, and the semantic roles of red (action) and green (route/progress) unless the design system is intentionally replaced.

### `assets/`

Replace the map and texture assets when the client needs a different region or brand world. Use authentic team, vehicle, and project photography wherever possible. Record the source or generation provenance for every raster asset.

## 3. Form integration required before launch

The included form is intentionally non-operational. It validates fields in the browser and then states that nothing was sent or stored.

Before a real launch, define and test:

- Destination: CRM, scheduler, email service, approved form backend, or automation platform.
- Required fields, consent language, privacy policy, spam protection, and data-retention rules.
- Success, duplicate, validation, network, server, and unavailable states.
- Lead notification recipients and a monitored fallback path.
- Source/UTM capture, call tracking, analytics events, and conversion reporting, if included in scope.
- End-to-end tests on mobile and desktop using non-sensitive test data.

Never change the success message to imply a request was received until the destination has actually acknowledged it.

## 4. Pre-launch verification

- All demo names, phone numbers, locations, claims, placeholders, and metadata have been reviewed.
- Every phone link calls the correct number.
- Every navigation and service link reaches the intended section.
- The form sends to the approved destination and has failure recovery.
- License, reviews, guarantees, availability, and other claims have written client approval.
- Mobile menu, fixed call/request bar, keyboard navigation, focus states, reduced motion, and horizontal overflow have been checked.
- Domain, HTTPS, analytics, privacy page, cookie requirements, favicon, social preview, and search metadata are configured as applicable.
- The client knows who owns each account and who handles future edits.

## 5. Suggested commercial presentation

Use these as discussion points, not as fixed terms or promises.

### What the delivery may include

- Customization of the approved landing-page structure to the client’s brand and service area.
- Responsive implementation for current desktop and mobile browsers.
- Setup of verified services, company information, calls to action, and supplied media.
- Basic accessibility and interaction testing.
- Deployment to an agreed hosting account and connection to an agreed domain, if included.

### What may require additional configuration or scope

- CRM, calendar, email, SMS, call tracking, missed-call, review-request, or automation integrations.
- Copywriting research, professional photography, logo design, custom illustration, or map production.
- Domain purchase/transfer, paid hosting, third-party subscriptions, analytics, consent tooling, and legal pages.
- Additional pages, multilingual content, ongoing SEO, advertising management, or content updates.

### Points to define in the proposal

- Who owns and pays for the domain, hosting, integrations, and third-party accounts.
- Number of review rounds and what counts as a revision versus a new request.
- Target schedule, client content deadlines, approval responsibilities, and launch conditions.
- Warranty/support period, maintenance plan, update cadence, backups, and emergency support.
- Exact deliverables, exclusions, payment milestones, and handoff materials.

### How to present the value responsibly

Position the template as a clearer path from local search or advertising traffic to a phone call or service request. Highlight fast mobile access, clear service coverage, transparent next steps, and an integration-ready form structure. Do not promise lead volume, rankings, booked-job growth, response times, or revenue improvements unless those outcomes have been measured under comparable conditions.
