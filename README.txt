Si BCS — website rebuild
========================

This folder is a complete, self-contained static website. To preview it,
open index.html in any browser. To publish on GitHub Pages, upload the
contents of this folder to your repository (replacing the old files) — no
build step, frameworks, or dependencies are required.

Files
-----
index.html               Homepage
cpm-epm-advisory.html     CPM / EPM Advisory
sap-epm-consultancy.html  SAP EPM Consultancy (full suite)
data-lifecycle.html       Data Platform (Fabric / Power BI / Purview)
financial-cloud.html     Financial Cloud & Secure Access (Azure hosting + AVD/Nerdio)
automation-ai.html        AI & Automation
about-us.html             About
privacy.html / terms.html Placeholder legal pages (have these reviewed)
styles.css                Shared design system (all styling)
app.js                    Shared interactions (nav, theme, animation)

Notes
-----
- Fonts load from Google Fonts. Everything else is local.
- The contact form is a front-end prototype; wire it to your mail handler
  (e.g. Formspree, Azure Function, or a mailto fallback) before go-live.
- Colours, fonts and spacing are all defined as tokens at the top of
  styles.css, so the whole look can be retuned in one place.
