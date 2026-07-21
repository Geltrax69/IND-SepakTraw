# STFI Portal — Honest Design Review & Change Plan

_Last updated: 2026-07-21_

This is a straight assessment of the current site, how it compares to the reference
federations, and a prioritized plan. No marketing copy — just what's there and what to do.

---

## 1. What the site actually is today

Architecturally this is a **Nike e-commerce storefront clone reskinned as a federation
portal**. That's not a criticism of effort — it's the starting point we need to be honest about:

- Content lives in `src/data/nikeData.js`; components include `NikeSwoosh.jsx`,
  `CartContext`, `CartDrawer`, `ProductCard`, `ProductDetailModal`, `ProductGrid`.
  **A governing body has no cart and no products.** This scaffolding should go.
- Hero, category tiles, and cards use generic **Unsplash stock photos**, not real STFI
  photography, results, or documents.
- Most "real" content (MYAS disclosures, rules, news) is buried inside a single JS modal
  (`StfiPortalModal`). For a government transparency portal this is the wrong container:
  no deep links, no SEO, no shareable URLs, weaker screen-reader access.
- Styling is inline `style={{...}}` on nearly every element — hard to theme, no reuse.

## 2. Comparison with the reference sites (honest)

| Dimension | sepaktakraw.one | FIFA.com / BWF | STFI (current) | STFI (should be) |
| :-- | :-- | :-- | :-- | :-- |
| Core value | Real news feed | Live data + media at scale | Clean but empty shell | Authoritative + transparent |
| Content | Volume, dated look | Match center, rankings, video, each on its own URL | Placeholder, modal-locked | Real news/results/docs on real routes |
| Why it works | It has actual updates | Content engine + live systems | Looks polished because hollow | Trust, speed, accessibility |

**Takeaway:** FIFA/BWF aren't "cluttered" — they're content engines. We can't out-FIFA
FIFA on live data, and we shouldn't try. The Nike monochrome-editorial aesthetic signals
"sneaker drop," which is a **mismatch** for an official National Sports Federation.

## 3. Where STFI can genuinely be different

Not by being the flashiest. By owning what an Indian federation site should own:

1. **Government trust & radical transparency** — MYAS/RTI/anti-doping/elections as
   first-class, linkable, downloadable pages (not a modal).
2. **Bilingual (English / हिंदी)** — none of the references serve the Indian audience in Hindi.
3. **Fast on cheap phones and slow networks** — small pages, optimized images, works on 3G.
4. **Accessibility as a baseline** — real semantics, keyboard nav, contrast, alt text.

These are achievable and defensible. "Interactive court visualizer / live bracket trees"
are nice-to-haves that don't matter until the basics above exist.

---

## 4. Change plan (prioritized)

### Phase 0 — De-Nike the codebase (DONE)
- [x] Deleted dead commerce code (`CartContext`, `SearchFilterContext`, `CartDrawer`,
      `ProductCard`, `ProductDetailModal`, `NikeSwoosh.jsx`); removed unused providers.
- [x] Replaced `nikeData.js` with a single content model (`src/content/defaults.js`).
- [x] Added `Img` component with a built-in placeholder fallback, so images can be left
      blank until real STFI photos are uploaded (swap URLs anytime via the admin panel).
- [ ] (later) Move remaining inline styles into `src/styles/` classes.

### Content backbone + Admin panel (DONE — the "edit anything" ask)
- [x] `ContentProvider` (localStorage-backed) is the single source of truth; every module
      reads from `useContent()`. Sections are namespaced (hero/nav/notices/…) so they
      never clash — each admin section edits only its own slice.
- [x] `/admin` route with one recursive editor that renders every content shape
      (object / array / primitive): edit/add/remove/reorder any item, any field.
      Auto-saves to the browser; Export/Import JSON for backup & publishing; Reset to defaults.

### Phase 1 — Real pages, real URLs (PARTIAL)
- [x] Added `react-router-dom`; `/` (site) and `/admin` are now real routes.
- [ ] Split News, Rules, Events, Governance, Contact out of the modal into real pages
      with shareable URLs. Fixes SEO, deep-linking, accessibility, back-button.
- [ ] Governance section: MYAS 28 disclosures, RTI, anti-doping, elections as linkable
      pages with downloadable PDFs listed in plain HTML tables.
- [ ] News/Notices: a dated, reverse-chronological list (the one thing sepaktakraw.one
      does that we don't).

### Phase 2 — Trust & identity fit
- [ ] Replace Nike-style aesthetic with a look that reads "official federation": keep the
      clean typography, but add government/affiliation trust markers (MYAS, ISTAF, ASTAF),
      contact/registration details in the footer, an About/Constitution page.
- [ ] Add a proper favicon, per-route page titles, and meta descriptions.

### Phase 3 — Audience fit for India
- [ ] English/हिंदी language toggle (start with static content).
- [ ] Image optimization + lazy loading; test on throttled 3G.
- [ ] Accessibility pass: run `/accessibility-review`, fix contrast/keyboard/alt-text.

### Phase 4 — Nice-to-haves (only after 0–3)
- [ ] Event calendar with real dates.
- [ ] Results/rankings tables.
- [ ] Interactive court diagram / rules visualizer (the fun stuff — last, not first).

---

## 5. First concrete step

Phase 0 is the unblock. Recommend starting by ripping out the commerce scaffolding and
renaming the data file, then adding routing in Phase 1. Everything else builds on real
pages existing.
