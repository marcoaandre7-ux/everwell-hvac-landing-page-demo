# Everwell HVAC Landing Template

A reusable, conversion-focused landing page for local HVAC companies in the United States. The demo brand and contact details are fictional placeholders.

## Customize the template

1. Edit `config.js` to replace the business name, phone number, and service area.
2. Replace the example services and city names in `index.html`.
3. Add only verified licensing, credentials, photos, reviews, and performance claims.
4. Connect the form in `script.js` to the client’s real CRM, scheduler, or automation endpoint.
5. Replace the demo brand styling and generated textures as needed while keeping their provenance metadata.

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
- `assets/` — generated material textures and provenance manifest
- `PRODUCT.md` / `DESIGN.md` — durable product and design context
