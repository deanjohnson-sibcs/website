# Si BCS website — launch instructions

This is a static site. No build step, no framework. Upload the files as they are to any static host (the files are flat, all in one folder) and point **www.sibcs.co.uk** at it over HTTPS.

## What's in this package
- `index.html` and the content pages (Services: `cpm-epm-advisory.html` [Independent EPM Advisory], `managed-services.html`, `assurance-rescue.html`; Expertise: `sap-epm-consultancy.html`, `data-lifecycle.html`, `financial-cloud.html`, `automation-ai.html`; plus `about-us.html`, `insights.html`, four `insight-*.html` articles, `privacy.html`, `terms.html`, `404.html`).
- `styles.css`, `app.js`.
- `fonts/` — self-hosted woff2 (no Google Fonts request; the site makes no third-party font calls).
- Images and icons (`og-image.png`, `favicon*`, `apple-touch-icon.png`, `icon-512.png`, `founder-*.jpg`).
- `sitemap.xml`, `robots.txt`.

## Before go-live (owner / tech-person side)
1. **Contact form (Web3Forms).** The form is wired to Web3Forms but needs a key. Get a free key at web3forms.com (enter info@sibcs.co.uk), then in `index.html` replace `YOUR_WEB3FORMS_ACCESS_KEY` with it. Confirm the recipient inbox and a backup. Until the key is set, the form shows a graceful "not connected yet, please email us" message rather than failing.
2. **Domain & HTTPS.** Serve over HTTPS on `https://www.sibcs.co.uk/`. Canonicals, Open Graph URLs, the sitemap and robots all already point to `https://www.sibcs.co.uk/`. Redirect the apex (`sibcs.co.uk`) to `www`.
3. **Redirects.** If any pages were previously live at different URLs, add 301 redirects to the matching new page. All internal links are relative, so they work as-is once hosted.
4. **404.** Configure the host to serve `404.html` for unknown paths (it is marked `noindex`).
5. **Analytics.** If you want analytics, add your chosen tag and update the Privacy & Cookies notice to match. None is included by default.
6. **Legal review.** Have Privacy & Terms reviewed/signed off by whoever owns data protection.

## Content notes
- Response promise is "promptly" throughout (no fixed SLA stated).
- Independence is stated as **"Independent advice. Transparent delivery."** (disclosure-based), not an absolute no-fee/vendor-neutral claim.
- Case studies run with client names withheld pending approval.
- No certifications, partner tiers or performance stats are claimed.
