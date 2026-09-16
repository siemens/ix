# Svelte binding — post-POC work

What the POC deliberately left out, and what a supported `@siemens/ix-svelte` still needs.
Grouped roughly by the order it would need to be tackled.

## 1. Test harness wiring

Both packages run under vitest browser mode (playwright/chromium) plus `vitest-browser-svelte`.
`vitest-browser-svelte` is pinned to `^1`: 2.x and later require vitest ^4, and the repo is on
vitest ^3.2.4.

- [x] **Unit tests** for the runtime, in `packages/svelte/src/tests/runtime.spec.ts` (12 tests).
      They run against a synthetic Stencil stand-in (`src/tests/fixtures/test-element.ts`) that
      records every property assignment and every `addEventListener` / `removeEventListener`
      call, so the assertions can be exact. Covered:
  - property-vs-attribute assignment (arrays, objects and `Date` values land as properties, by
    reference, never as stringified attributes; undeclared props become attributes; booleans and
    nullish values map to attribute presence; an unchanged property is not reassigned)
  - event-listener identity: replacing a handler callback does not detach/reattach the listener;
    listeners are detached on unmount; Stencil's camelCase event names are preserved verbatim
  - `$bindable()` model round-trip in both directions
- [x] **Component tests in `svelte-test-app`.** No setup file is needed — unlike Vue there is no
      plugin to install, the components register their custom elements on import.
  - `src/tests/model-binding.spec.ts` is the real camelCase regression test: it drives
    `bind:value` on `IxInput` from both ends, and the element→component direction only works if
    the model's `valueChange` listener keeps its camelCase.
  - `src/tests/message.spec.ts` is the port of
    [`packages/vue-test-app/src/tests/message.spec.ts`](../vue-test-app/src/tests/message.spec.ts).
    Note that the Vue test's framing as a camelCase regression test does **not** carry over:
    `showMessage` builds the whole modal out of core elements, so no generated proxy sits in the
    close path. Verified by lowercasing event names in the runtime — the message test still
    passes while the model-binding test and 3 unit tests fail. What it does cover is the Svelte
    framework delegate: mounting the message through it, tearing it down, and getting the action
    payload back.
- [x] **Smoke tests.** `smoke-tests/preview-examples.spec.ts` + `playwright.config.ts`, run with
      `pnpm run test.smoke` (13 tests, all passing). Unlike `vue-test-app` this does *not*
      re-export `framework-tests/tests/working.spec.ts` wholesale — that pulls in ~90 generated
      specs and this app only ports 13 examples — so the generated specs are imported one by one.
- [x] **Scripts.** `test`, `test.watch`, `test.setup` on both packages, plus `test.smoke` on
      `svelte-test-app`. `turbo run test` picks up `@siemens/ix-svelte#test` and
      `svelte-test-app#test` with the right `build` dependencies. Note `test.setup` runs
      `playwright install chromium --with-deps`, which needs root; without it, a plain
      `npx playwright install chromium` is enough if the browser is already cached.
- [x] **Widen smoke-test coverage.** 16 generated specs now run. Everything under
      `src/preview-examples` is a 1:1 port of the `html-test-app` reference, so the shared
      `framework-tests/__snapshots__` aria snapshots apply unmodified; the read-outs and
      "set from outside" buttons the component tests need moved to `src/testability-examples`,
      served from `/testability/<name>`, which nothing snapshots. See
      [`src/testability-examples/README.md`](../svelte-test-app/src/testability-examples/README.md).
  - The mount point is `<main id="root">` with `display: contents` (`src/app.css`). The `main`
    landmark is what the shared snapshots expect; `display: contents` keeps it out of the layout,
    because the example stylesheets are written for html-test-app and style `body` directly.
  - Example stylesheets are linked per route (`import css from './x.css?url'` +
    `<svelte:head>`), not imported. A static import bundles them into the SPA's single stylesheet,
    so `buttons.css`'s `body { display: flex }` applied to every route.
  - Still uncovered: `icon` and `modal-content` have no generated spec at all.
  - Of the ported examples only `buttons` and `modal` are in the upstream curated
    `working.spec.ts` set; `dropdown`, `event-list`, `message` and `toast` pass for this app but
    are not upstream-blessed, so they are imported in a separately commented group.
- [x] **Parity harness.** `smoke-tests/parity.spec.ts` + `smoke-tests/parity/` renders the same 11
      examples in `html-test-app` and `svelte-test-app` and diffs DOM structure, attributes, text,
      24 computed paint properties and every declared Stencil property, across light *and* shadow
      DOM, plus the tally of `@Event()` emissions during boot. All 11 pass. This is the check the
      other bindings get from Stencil's own conformance testing and this one does not.
  - `pnpm run preview.reference` serves html-test-app on :4174; `playwright.config.ts` starts both
    servers, so `pnpm run test.smoke` is self-sufficient.
  - Two documented allowances: `ix-icon`'s `name` differs by resolution path (the rendered `<svg>`
    is compared instead, and matches), and `dropdown` emits `ix-assign-sub-menu` once more in plain
    HTML. Everything else is compared, not waived.
  - Geometry is deliberately excluded — the target is "a custom property did not resolve, so the
    component rendered unthemed", not pixel layout.

## 1b. Settled: the element seam

Recorded so it is not reopened. The question was whether `bind:this` + `$effect` is the right seam,
or whether the proxy should create the element itself so that every prop lands before insertion.

**Decision: keep `bind:this` + `$effect`, and move everything that *can* be pre-insertion into the
template spread.** Undeclared props — `id`, `class`, `aria-*`, `data-*` — are returned from
`useStencilElement` as `attributes` and spread by Svelte, so they are on the element before
`connectedCallback`. Declared properties and listeners stay post-insertion.

The reasoning:

- This is what the supported targets do. `@lit/react` applies properties and listeners in
  `useLayoutEffect`, which is also post-insertion. Owning element creation would make the Svelte
  binding *less* like the others, not more.
- Stencil schedules its first render asynchronously, so props still land before anything renders.
  The observable window is a component that reads a prop synchronously in `connectedCallback`.
- Attachments (Svelte 5.57) do not close that window either — they run after insertion, same as
  `$effect`. They would be a tidier spelling of the same seam, not a different one.

The parity harness is the check on this: if the timing ever does produce a visible difference, it
shows up as a DOM, style, property or event divergence against html-test-app.

## 2. CI

- [ ] Add `svelte-test-app @siemens/ix-svelte` to a matrix group in
      [`.github/workflows/build.yml:109-111`](../../.github/workflows/build.yml#L109-L111).
      Either extend the existing `react-test-app @siemens/ix-react vue-test-app @siemens/ix-vue`
      group or add a fourth group — a separate group keeps the Svelte job's failures legible while
      the binding is still new.
- [ ] Confirm the visual-regression / a11y jobs need no Svelte-specific setup beyond the above.
- [ ] The parity harness runs as part of `svelte-test-app`'s `test.smoke`, but it needs
      `html-test-app` *built*, not just installed. Confirm the matrix group builds it — turbo's
      `build` dependency on the workspace dependency should cover it, but it has only been run
      locally so far.

## 3. Release and legal

- [ ] Changesets: the POC package is unversioned in practice. Decide whether `@siemens/ix-svelte`
      tracks the `@siemens/ix` version like the other bindings do, and add it to the changeset
      config.
- [ ] `READMEOSS.html` / `tooling/oss-clearing` entry for the new dependency set
      (`svelte`, `@sveltejs/package`, `@sveltejs/vite-plugin-svelte`, `svelte-check`).
- [ ] `CHANGELOG.md`, npm publish config, provenance settings to match `packages/vue`.

## 4. Component coverage gaps

Excluded from the output target in `packages/core/stencil.config.ts`:

- [ ] **`IxTabSet` / `IxTabPanel`** — needs a hand-written wrapper that manages child registration
      through Svelte context. Cf. [`packages/vue/src/tab-set.ts`](../vue/src/tab-set.ts) and
      [`packages/react/src/tabs/`](../react/src/tabs/).
- [ ] **`ix-tree` / `ix-tree-item`** — React ships a hand-written wrapper in
      [`packages/react/src/tree/`](../react/src/tree/) because the component takes a render
      callback per node; the Svelte version would take a `Snippet` instead.
- [ ] **Named slots have no first-class API.** The generated proxies render `{@render children?.()}`
      straight into the custom element, so slotting content by name means putting a literal
      `slot="..."` attribute on a child of the proxy — which `svelte2tsx` always reads as the
      *legacy* Svelte slot API and rejects with `'$$slot_def' is of type 'unknown'`. It compiles
      and works at runtime; only `svelte-check` fails. Neither forcing `runes: true` nor declaring
      `$$Slots` on the props type suppresses it, so
      [`application.svelte`](../svelte-test-app/src/preview-examples/application.svelte) currently
      hides the attribute behind a spread (`{...{ slot: 'logo' }}`) as a workaround. The real fix
      is to generate named `Snippet` props from the Stencil `docs.slots` metadata and have the
      proxy wrap each one in an element carrying the `slot` attribute.
- [ ] **`ix-icon`** is excluded from generation and hand-written as `src/lib/IxIcon.svelte`, with a
      hard-coded prop list. Consider generating it from `@siemens/ix-icons` instead so the prop
      list cannot drift.

## 5. SSR / SvelteKit

The runtime applies props and attaches listeners inside `$effect`, which only runs in the
browser. A SvelteKit app will render an empty custom element on the server and populate it on
hydrate.

- [ ] Decide whether SSR is in scope. If it is, the React target's `hydrateModule` +
      `serializeShadowRoot` options are the reference: they render the Stencil components to
      declarative shadow DOM on the server.
- [ ] Emit initial attribute values in the generated template for the serializable subset of
      props, so the server-rendered markup is not blank.

## 6. Docs

- [ ] [`packages/documentation`](../documentation) code-sample tabs have Angular/React/Vue/HTML
      variants only. Adding Svelte means a Svelte source file per preview example — this is by far
      the largest remaining chunk of work by file count.
- [ ] [`packages/storybook-docs`](../storybook-docs) has no Svelte renderer configured.

## 7. Ecosystem packages

- [ ] `@siemens/ix-aggrid` and `@siemens/ix-echarts` have Angular/React/Vue entry points and no
      Svelte one.

## 8. Tooling

- [ ] `eslint-config-ix` has no `eslint-plugin-svelte` setup, so `.svelte` files are unlinted.
      The generated `src/lib/components` directory should be excluded from linting like
      `packages/vue/src/components` is.
- [ ] `prettier-plugin-svelte` for consistent formatting of the generated output.
- [ ] **Catalog the Svelte dependencies.** The POC pins `svelte`, `@sveltejs/package`,
      `@sveltejs/vite-plugin-svelte` and `svelte-check` directly in `package.json`; they belong in
      the `pnpm-workspace.yaml` catalog like the other shared deps. Also verify
      `@sveltejs/vite-plugin-svelte@7` against the catalog's `vite` version rather than letting the
      test app resolve its own.
