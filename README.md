# Everwell HVAC Landing Template

A reusable, conversion-focused landing page for local HVAC companies in the United States. The demo brand and contact details are fictional placeholders.

## Portfolio demo

This is a fictional demonstration project created to showcase landing-page design, lead-conversion flows, and integration-ready web systems for HVAC companies and other local service businesses in the United States.

The project is part of a portfolio used to present and sell custom landing pages and business systems. It does not represent a real HVAC company, and the displayed phone number, service locations, reviews, credentials, and company information must not be interpreted as real business claims.

**Live demo:** [everwell-hvac-template.vercel.app](https://everwell-hvac-template.vercel.app/)

The form intentionally does not transmit or store information. A production implementation would require an approved CRM, email, scheduling, or automation integration.

## Customize the template

1. Edit `config.js` to replace the business name, phone number, hero copy, service area, and city list.
2. Replace the example services and customer-facing copy in `index.html`.
3. Add only verified licensing, credentials, authentic photos, reviews, guarantees, and performance claims.
4. Replace the demo-only form handler in `script.js` with the client’s approved CRM, email, scheduler, or automation integration.
5. Update the color tokens at the top of `styles.css`, the logo treatment, and generated imagery while preserving asset provenance.
6. Follow `SELLER_IMPLEMENTATION_GUIDE.md` before presenting, pricing, or publishing a client version.

## Local preview

Run a static server from this directory, for example:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

## Files

- `index.html` — semantic page structure and SVG route map
- `styles.css` — responsive Dispatch Wall visual system
- `config.js` — primary client-specific replacement fields
- `script.js` — navigation, route motion, and demo form states
- `SELLER_IMPLEMENTATION_GUIDE.md` — pre-launch customization, integration, and sales-presentation checklist
- `assets/` — generated material textures and provenance manifest
- `PRODUCT.md` / `DESIGN.md` — durable product and design context
