# Si BCS — Governed AI homepage update (drop-in replacement)

This pack adds the **Governed AI** section to the homepage. It is ready to deploy: just replace two files on the live site. No build step, no new pages, no new images, no font changes.

## What to do

1. **Back up first.** Download the current `index.html` and `styles.css` from the live site and keep a copy, so you can roll back if needed.
2. **Replace `index.html`** with the `index.html` in this pack.
3. **Replace `styles.css`** with the `styles.css` in this pack.
4. Upload both, clear any cache, and reload the homepage. The new section appears between **"One team for the numbers and the systems"** (the Bridge) and **"Three ways to begin"** (Start here).

That is the whole deployment. Both files are complete, current versions of the live files with the changes already made, so nothing else on the site changes.

## What changed (for your records)

Only the homepage is affected. Three edits, all inside these two files:

1. **New section added** to `index.html`: a "Governed AI" band (`id="governed-ai"`), placed after the Bridge section and before the Start/offers section. It links to the existing **Finance AI & Automation** page (`automation-ai.html`); no new page is needed.
2. **New styles added** to the end of `styles.css`: a small block of `.ai-govern` classes. It only adds new classes, so existing styling is untouched. The section reuses the site's own colour tokens, so it themes itself correctly in light and dark and animates in on scroll like the other sections.
3. **Two word-level edits** in the homepage of `index.html`:
   - Hero sub-line: "...Microsoft data and cloud, and AI." becomes "...Microsoft data and cloud, and **governed AI**."
   - Trust bar chip: "AI, agents & automation" becomes "**Governed AI & agents**".

No other pages, scripts, fonts or images are changed.

## Preview

`preview-governed-ai-band.png` shows how the new section looks on the homepage.

## Notes

- Copy holds the house rules: no em-dashes, no absolute safety or compliance claims, no vendor endorsement (OneStream, SAP and Microsoft are named only to describe the landscape), with governed-AI and human-sign-off framing throughout.
- If anything looks off after upload, restoring your backup of the two files returns the site to exactly its previous state.
