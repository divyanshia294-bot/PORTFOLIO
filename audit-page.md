# Webpage audit: personal profile

This review covers `index.html`, `style.css`, and `script.js` in this project.

## Requirements checklist

| Requirement | Status | Notes |
| --- | --- | --- |
| HTML in `index.html` | Met | Semantic document with header, main, sections, and footer. |
| All styling in `style.css` | Met | Linked with `<link rel="stylesheet" href="style.css">`. |
| No inline `style` attributes | Met | No `style=""` on any element. |
| Page title | Met | `<title>` is `PLACEHOLDER \| Personal Profile`. |
| One main heading | Met | Single `<h1>` in `<main>`. |
| About section | Met | `#about` with two PLACEHOLDER paragraphs. |
| Skills section as a list | Met | `#skills` uses a `<ul>` of five PLACEHOLDER items. |
| Projects section with links | Met | `#projects` lists three projects, each with an `<a href>`. |
| Placeholders marked `PLACEHOLDER` | Met | Name, tagline, about copy, skills, project titles, descriptions, and URLs. |
| JavaScript in `script.js` | Met | Theme toggle and copyright year. Linked with `<script src="script.js">`. |

## Structure and semantics

- Language is set with `lang="en"`.
- Navigation is labeled (`aria-label="Primary"`) and uses in-page anchors.
- Sections use `aria-labelledby` tied to their `h2` ids.
- Heading order is valid: one `h1`, then `h2` per section.
- Skills stay a real list (`<ul>` / `<li>`), not a row of unsemantic divs.
- Project links wrap the project titles.

## Styling

- Layout uses a sticky header, card-style sections, and a readable max-width.
- Colors live in CSS custom properties, including a `.dark` theme.
- Focus/hover states underline links and highlight the theme button.
- A small media query centers the header on narrow screens.
- No presentation is baked into HTML attributes.

## JavaScript

- `script.js` sets the footer year from the current date.
- Dark mode toggles the `dark` class on `body`, updates `aria-pressed` and button label, and stores the choice in `localStorage`.
- Script is loaded at the end of `body`, after the elements it queries.

## Accessibility

- Interactive control is a real `<button>`, not a clickable div.
- Theme state is exposed with `aria-pressed`.
- Color contrast is reasonable in both themes.

## Placeholders to replace

Search the project for `PLACEHOLDER`. Current items:

1. Page title and brand / heading / footer name
2. Tagline
3. About paragraphs
4. Five skill list items
5. Three project titles, descriptions, and example URLs (`https://PLACEHOLDER.example.com`)

Do not leave `PLACEHOLDER` in the live title or links once you publish.

## Issues and follow-ups

- Project URLs are dummy hosts. They will 404 until you replace them with real links.
- There is no contact section, profile photo, or social links.
- Theme is stored locally but does not yet follow `prefers-color-scheme` on first visit.

## Verdict

The page meets the stated build rules: separate HTML/CSS/JS, no inline styles, required sections, list-based skills, linked projects, and clearly marked placeholders. It is ready for you to swap in real de

# Portfolio Content Audit

| Content on the Page | True? | Evidence, or What I Removed  |
| ------------------- | ----- | ---------------------------- |
| My name             | Yes   | My actual name               |
| About section       | Yes   | Written by me                |
| GitHub repository   | No    | Project URLs are dummy hosts |
| Email address       | No    | Removed generated fake email |
