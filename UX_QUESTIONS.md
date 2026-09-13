# EIX-9 — 20px icons: shared picture + UX questions

Could you reply **on this ticket** (A / B / C, or a short note per ID)? The proposal is aligned with the Figma files and Siemens Design Language; a few rows still need a call before components are changed.

Independent review (2026-09-10): groups **B** and **C** match live Figma. Group **A** and **D** needed the corrections below (separate `ix-icons` package; icon-button omit still sends `size="24"`).

**Figma**

- [Components changes / icons 20x20](https://www.figma.com/design/syINeZjgwpL9hqecGiLrJj/Components-changes--icons-20x20-?node-id=0-1) — Checklist, Before, After, Outcome, Approaches
- [Icons-20x20-swap](https://www.figma.com/design/I2eDodlAC1VlfXmgqfQIBd/Icons-20x20-swap?node-id=155449-33238) — component copy

**SDL:** [Element Icons](https://element.siemens.io/fundamentals/icons/) — Small 16, **Default 20**, Large 24; extra sizes only in 4px steps.

The **sm / md / lg / xl / xxl** labels and **48** are from a UX “Icon sizes” screenshot, **not** from the two files above (those Icon variants are 12 / 16 / 24 / 32 only). Please link that board — **Q1**.

---

## Shared picture (please confirm)

**Glyph** = the drawn icon. **Control** = the clickable area. They can differ: default icon-button stays a **32×32** control with a **20** glyph (Outcome). Figma also draws **28×28** hosts in several components; code has no 28 host (Q10).

### Icon sizes

| px | SDL | UX “Icon sizes” (screenshot; not in the two linked files) | In IX today | For this ticket |
| --- | --- | --- | --- | --- |
| 12 | Extra (4px). Already used (tab close, small icon-button) | — | Yes | Keep |
| 16 | Small (dense) | sm | Yes | Keep; input slots / helpers / date-time stay 16 (**Q19** covers the swap “Icon 20 button” helper) |
| **20** | **Default** | md | No (`ix-icon` has no `'20'`) | **Add** in `@siemens/ix-icons` **and** core. Default glyph when size is omitted |
| 24 | Large | lg | Yes (current omitted-size default) | Stays 24px. Size `24` does **not** start meaning 20px |
| 32 | Extra | xl | Yes | Keep |
| **48** | Extra | xxl | No | **Add** as a public size **only if UX confirms the screenshot** (**Q1**); needs `ix-icons` + core |
| 64 / 96 / 128 | — | not on that screenshot | No | Out of EIX-9 |

No extra “density shrink” on top of these pixel sizes.

**Packages:** `ix-icon` sizes and its omitted-size default ship from **`@siemens/ix-icons`** (not this repo). This repo owns `ix-button` / `ix-icon-button` defaults, hardcoded sizes, and layout. Sequencing: Q14.

---

## Scope of this ticket

One ticket, one scope. Four groups (how the work is organized — not separate deliveries). Figma may change; the named lists below are the snapshot of **2026-09-09** (re-checked 2026-09-10: no Checklist drift).

| Group | What it covers |
| --- | --- |
| **A. Scale** | Public sizes **12 / 16 / 20 / 24 / 32** plus **48** (Q1). `ix-icon` omitted size → **20** (icons package). `ix-icon-button` / `ix-button` defaults → **20** (this repo). |
| **B. Figma named 24 → 20** | Checklist table — **what is updated** per component, including Outcome layout. |
| **C. Stay / pin** | Must **not** become 20: dense **16**, navigation and header (Q5 / Q6), Figma “no change”. |
| **D. Follow 20** | Surfaces not in B. **How** they get 20 depends on code (see D): omit on `ix-icon` vs icon-button default vs hardcoded 24. |

### A. Scale

- Add `'20'` on **`ix-icon`** (`@siemens/ix-icons`) and switch its default from `'24'` to `'20'` (Q14 / Q16). Add `'48'` only if Q1 confirms it.
- Same ticket: `ix-icon-button` and `ix-button` prop defaults **also** `'20'`, or listed hosts stay 24 (icon-button omit still emits `<ix-icon size="24">` today).
- Icon-button: glyph **20**, default **control 32×32** (Q10). Figma 28px hosts: Q10.

### B. Figma checklist — what is updated (snapshot 2026-09-09)

Named components from Checklist / Before / After. **What is updated** is the contract if Figma changes later.

| Component | What is updated | Open |
| --- | --- | --- |
| Blind | Chevron **and** header icon 24 → 20. After: header icon-buttons at 20 glyph (hosts 28 / 32). | Q10 (28) |
| Buttons | Leading and trailing icons 24 → 20. Same for split-button and dropdown-button (`iconSize` / inner icon-button default). | |
| Card list | Row chevron 24 → 20 (icon-button omit → needs icon-button default or explicit 20). The **32px** icon is on the overflow **“more cards”** tile, not the Show-all button (that button has no icon). | |
| Chip | Leading icon 24 → 20. Close stays **16**. | |
| Date dropdown | Trigger / calendar icon 24 → 20. | |
| Dropdown items | Leading icon **and** submenu chevron 24 → 20 (`ix-icon` omit). Checkmark stays **16**. | |
| Event list | Content / alarm is a **slot** (app-provided). Standalone After item: **visible 20×20 chevron**. List After still has a hidden 24 chevron. Code chevron is **16**. Padding-top **6 → 8**. | Q17a, Q17b |
| Group | Chevron 24 → 20 (`ix-icon` omit); header padding-top **4 → 6**. **Context-menu** button also 20 in After (code hardcoded `24` — explicit edit). Hosts 28×32 / 28×28 in After. | Q10 (28) |
| Icon button | Glyph 24 → 20; **hit area stays 32×32** (Outcome). Header exception: Q5. | Q10, Q5 |
| Key-value | Leading icon 24 → 20 (hardcoded today). | |
| Message bar | Status icon 24 → 20 (`ix-icon` omit). Close 24 → 20 (hardcoded 24; After host 28). | Q10 (28) |
| Pane | Header / close icons 24 → 20 (hardcoded; After close host 28). | Q10 (28) |
| Select | Dropdown chevron 24 → 20 (icon-button omit). Clear stays **16**. | |
| Spinner | Figma: xx-small **12** / x-small **16** / Small **20** / small-plus **24** / medium **32** / large **96**. Code today: xx-small 12 / **x-small 20** / **small 24** / medium 32 / large 96. Adopting Figma names **renames** `x-small` from 20 → 16. | Q11 |
| Toggle button / icon-toggle | Public default icons 24 → 20. `ix-icon-toggle-button` has no internal call sites in core. | |
| Tree | Item / chevron icons 24 → 20 (hardcoded). Zero-sizer / first-item indent (Outcome still 24 while chevrons are 20). | |
| Upload | Status icons 24 → 20 (`ix-icon` omit). | |
| Workflow | Step icons 24 → 20 (hardcoded; vertical and horizontal). | |
| Breadcrumb | Checklist `16 → 20???`. After: **item icon 20**, chevron stays **16**. Code hardcodes 16 on the item (must edit; default change will not reach it). | Q4 |

### C. Stay / pin (same snapshot)

Not 24 → 20 on the checklist. **What is updated** = what stays.

| Component | What is updated | Open |
| --- | --- | --- |
| Navigation items | Stay **24**. Menu item / menu category are `ix-icon` omit (follow `ix-icon` default unless pinned). Menu expand / app-switch are icon-button omit (follow **icon-button** default unless pinned). `menu-expand-icon` at `sm` is an inline 24 SVG — immune to props. | Q6 |
| Header buttons | Checklist “stay 24×24” reads as the old **glyph**, since content-header controls are **32×32** in both files. That is our reading, not a Figma statement. Which surfaces still open. | Q5 |
| Input slots, helpers, date/time | Checklist: keep **16**. Swap file also has **Icon 20 button** and Icon 24 button helpers (both 32×32 hosts). Keep 16 or allow 20 in slots? | Q19 |
| Card | No change (action/push-card stay 32). Accordion chevron is `ix-icon` omit → **pin 24** or it follows `ix-icon` default 20. | |
| Empty state | No change (32). | |
| Link-button, KPI, pill, progress | No change (already 16). | |
| Modal | No change (title 32). Close is icon-button omit → **pin 24** or it follows icon-button default. | |
| Tabs, toast | No change. Rounded-tab / toast icons are **hardcoded 24**. Tabs overflow uses icon-only dropdown-button (icon-button omit). | |

### D. Follow 20 (not in B) — by mechanism

**Not** “size not set → magically 20”.

| Mechanism | What happens | Examples |
| --- | --- | --- |
| Direct `<ix-icon>` omit | Follows `@siemens/ix-icons` default | Menu item, menu category, range delimiter, card accordion, upload (also in B) |
| `<ix-icon-button>` omit | Still emits `size="24"` until **icon-button default** changes (or each host sets 20) | App header, content header back, date-picker arrows, pagination, flip tile, popover **close**, menu expand, menu `sm` app-switch |
| Hardcoded `size="24"` | Stays 24 until that line is edited | Chat send, expanding-search collapsed, popover **title**, about / settings / about-news close, toast, rounded tabs |

Reply **pin 24** where follow-20 is wrong.

| Surface | Today | Proposal | Your call |
| --- | --- | --- | --- |
| Menu item / menu category | `ix-icon` omit | Pin 24 (Q6) | |
| Menu expand / app-switch / header overflow | icon-button omit | Pin if header/nav (Q5 / Q6) | |
| Menu app-switch at `sm` breakpoint | icon-button omit (`menu.tsx`) | Pin if nav (Q6) | |
| Content header back | icon-button omit | Pin if header (Q5) | |
| Date **picker** month arrows (not the date input) | icon-button omit | Follow 20 | |
| Pagination | icon-button omit | Follow 20 | |
| Flip tile | icon-button omit | Follow 20 | |
| Range field delimiter | `ix-icon` omit | Follow 20 | |
| Popover close | icon-button omit | Follow 20 unless “no change” | |
| Popover title; about / settings / about-news close | hardcoded 24 | Explicit 20 or stay 24 | |
| Expanding search (collapsed) | hardcoded 24 | Stay 24 unless changed | |
| Chat send | hardcoded 24 | Stay 24 unless changed | |

---

## Please decide

Reply with e.g. `Q4: A`, `Q5: C — content header only`, …

IDs follow the engineering spec, so the numbering has gaps: Q2, Q8, Q9, Q12, Q15 and Q18 are already settled or engineering-internal and are not repeated here.

| ID | Question | What is shown in Figma | Options |
| --- | --- | --- | --- |
| **Q1** | Is **48** in EIX-9? Its only source is the UX “Icon sizes” screenshot, which is not in either linked file — please link it. | Icon component in the swap file has **12 / 16 / 24 / 32** only; no 20 and no 48. | **A)** Yes, ship 48 with 20 — here is the board · **B)** Drop 48 from EIX-9 until the board is linked · **C)** Other |
| **Q4** | Breadcrumb: 16 → 20, or keep 16? Checklist still `???`. | **After:** item icons 20×20, chevrons 16×16. Drawing is clear; only the tick is missing. Code must set item `iconSize` to 20 (not via default). | **A)** Ship After (item 20, chevron 16) · **B)** Keep both 16 · **C)** Other |
| **Q5** | “Header buttons should stay 24×24” — **which surfaces**? | Controls are **32×32** (content header + Outcome), so “24×24” reads as the old **glyph**. That is our reading, not stated in Figma. | **A)** 32×32 control, 20 glyph on those headers · **B)** Keep a 24 glyph on header only · **C)** List slots (app header / content header / both / other) |
| **Q6** | “Navigation items: stay 24” — which components? | Not on Before/After. | **A)** Menu item + menu category · **B)** Also app switch / overflow / expand · **C)** List the names |
| **Q10** | Default icon-button: keep **32×32** hit area with 20 glyph? **Also:** Figma uses **28×28** hosts (card list, message bar, pane, event list, group) and code has **no 28**. | Outcome: six 32×32 + 20 glyph. Swap `Size=24` still has inner box 24×24. Code note: `ix-icon-button` `size` is `'24' \| '16' \| '12'` and keys its 32px host off `size === '24'`, so adding a `'20'` option also changes that mapping. | **A)** Default control 32, glyph 20 · **B)** Shrink the default control · **C)** New named size · **D)** Add a 28 host, or use 32 where Figma drew 28 |
| **Q11** | Map Figma spinner ladder onto code names? | Figma: 12 / **16** / **20** / **24** / 32 / 96 (x-small=16, Small=20, small-plus=24). Code: 12 / **x-small=20** / **small=24** / 32 / 96. | **A)** Small=20, keep 24 as small-plus; leave code `x-small` at 20 · **B)** Only 20; drop 24 spinner · **C)** Other · **D)** Adopt Figma names (`x-small` becomes 16 — **breaking**) |
| **Q13** | What counts as UX sign-off for this ticket? | Working files above. Published iX Components Icon still shows Size 24 as default. | **A)** These working files are enough · **B)** Still need a pass on the published iX Components library · **C)** Named reviewer: … |
| **Q14** | Must `@siemens/ix-icons` ship `size="20"` (and default 20) **before** core, or can core set 20px boxes against today’s 24-sized glyphs? | Approaches: every component that **sets** icon size must be adapted. | **A)** Icons package first · **B)** Core can land layout/defaults in parallel · **C)** Other sequence |
| **Q16** | Switch **both** `ix-icon` default and `ix-icon-button` / `ix-button` defaults to 20, with pins in C / D? | Not on the Checklist. | **A)** Yes, both defaults 20; D as table · **B)** Only named group B; defaults stay 24 · **C)** Extra pins (list them) |
| **Q17a** | Event-list **chevron:** code 16 → 20? | After standalone item: **visible 20×20** chevron. Checklist says chevron + content 24→20. | **A)** Chevron 20 · **B)** Keep 16 · **C)** Other |
| **Q17b** | Event-list **content / alarm** is a slot. Force 20, document slot size, or only examples? | After alarm 20×20. | **A)** Document 20; do not force · **B)** Component forces 20 · **C)** Other |
| **Q19** | Input slots and helpers: keep **16**, or allow **20**? The Checklist says keep 16, but the swap file adds an **Icon 20 button** slot helper. | Swap `_Slot start content` / `_Slot end content` offer **Icon 16 button** (28×24), **Icon 20 button** (32×32) and **Icon 24 button** (32×32). | **A)** Keep 16 everywhere in slots; the 20 helper is not for this ticket · **B)** Allow 20 in slots — name where · **C)** Other |

### Pairing and Figma path (same ticket)

| ID | Question | What is shown in Figma | Options |
| --- | --- | --- | --- |
| **Q3** | Next to **h1**, icon 32 or 24? Caption says “large text → 24”; the h1 row is drawn with a **32px** icon. Purple `h1 - 32px` is the **type** size, not the icon. | Outcome pairing board. **Not settled.** | **A)** h1 → icon 32 · **B)** h1 → icon 24 (match caption) · **C)** Other pairing |
| **Q7** | In Figma, is the ship path **token** Default/Legacy or **library swap**? | Approaches shows both. No winner. Swap file is library-swap in practice. Code still sets size on listed components. | **A)** Library swap · **B)** Token Default/Legacy · **C)** Does not change the code scope |

Thanks — a comment with the Q IDs is enough to start.
