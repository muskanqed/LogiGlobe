# Font Size Audit Report

Generated: 2025-11-22

Summary
- **Tailwind `text-*` usage:** widespread across the codebase (scan returned 200+ matches; results capped by search). Common sizes: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl` and responsive variants (e.g. `sm:text-base`, `md:text-lg`).
- **Arbitrary font sizes (`text[...]`):** found (examples include `text-[11px]`, `text-[9px]`, `text-[10px]`, `text-[0.8rem]`) — ~30 matches identified.
- **Explicit CSS `font-size:` declarations:** 1 match discovered in `app/api/contact/route.ts` (`font-size: 12px;`).
- **Inline JS/JSX `fontSize` props / style objects:** none found by the scan.

Key findings (examples)
- `components/landing/hero.tsx` — hero headings use responsive Tailwind sizes: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` (large, responsive scale used for headings).
- `components/landing/hero.tsx` — other elements use `text-4xl ... text-7xl` for decorative text.
- `components/ui/*` — many small UI components use `text-sm` / `text-xs` for labels, captions and menu items (buttons, dropdowns, menus, form fields).
- `components/ui/circular-orbit.tsx` — uses `text-[11px]` and `text-[9px]` (arbitrary px values).
- `components/ui/calendar.tsx` — uses `text-[0.8rem]`.
- `app/api/contact/route.ts` — contains `font-size: 12px;` (this appears inside a string or template; review to confirm intent).

Accessibility note
- Arbitrary pixel sizes below ~12px (e.g. `9px`, `10px`, `11px`) can be problematic for readability and accessibility on some devices. Prefer relative sizes (rem/em) or the Tailwind semantic scale (`text-sm`, `text-base`, etc.) to respect user font-size preferences.

Recommendations
- Prefer Tailwind semantic classes (`text-sm`, `text-base`, `text-lg`, etc.) and responsive variants rather than arbitrary `text[...]` values. This keeps consistent scale and respects design system tokens.
- Replace `text-[9px]` / `text-[10px]` etc. with the closest Tailwind semantic class or a rem value in a global utility if you need a custom step (e.g., add `theme.extend.fontSize` in `tailwind.config.js`).
- Centralize base font-size and scale in `globals.css` and `tailwind.config.js` (set `html { font-size: 16px }` if desired and customize `fontSize` scale in Tailwind). This keeps sizes consistent and accessible.
- Review `app/api/contact/route.ts` to confirm whether the `font-size: 12px;` is intentional (it may be part of an email template or inline style string). If it’s used in rendered HTML, consider replacing with relative sizing or Tailwind classes in the template.
- Run a follow-up script to produce a full CSV of occurrences (path, line, matched token) if you want a precise inventory for bulk changes.

Next steps I can take for you
- Create a full CSV/JSON with every match (file path + line excerpt) so you can triage and plan fixes.
- Open PR that replaces arbitrary `text[...]` occurrences with semantic Tailwind classes where appropriate (I will propose replacements case-by-case).
- Add a short linting step (e.g., a grep-based CI job) that warns on arbitrary `text[...]` or `font-size:` occurrences.

Appendix — selected matches (representative samples)
- `app/api/contact/route.ts`: `font-size: 12px;` (line ~108)
- `components/ui/circular-orbit.tsx`: `className="text-[11px]"`, `className="text-[9px]"`
- `components/ui/calendar.tsx`: `'text-[0.8rem]'`
- `components/landing/hero.tsx`: `className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl ..."`
- `components/landing/stats-section.tsx`: `className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl ..."`
- many `components/ui/*` files: repeated `text-sm` / `text-xs` usage for form fields, menus, labels (e.g. `components/ui/input.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/label.tsx`).

If you'd like, I can now:
- produce the full CSV/JSON of every match, or
- open PR suggestions for replacing small-pixel arbitrary sizes with Tailwind classes.

— End of report
