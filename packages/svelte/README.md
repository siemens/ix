# Siemens Industrial Experience - Svelte Components (POC)

> **Status: proof of concept.** This package is not published and is not covered by the
> repository's test or release pipelines. See [TODO.md](./TODO.md) for the work required to
> turn it into a supported binding package.

This library is part of the Siemens Industrial Experience mono repository.
You can find the root README [here](https://github.com/siemens/ix/blob/main/README.md)

## What this is

Svelte 5 wrappers around the `@siemens/ix` custom elements. The component proxies in
`src/lib/components` are **generated** by the Stencil custom output target in
[`packages/core/scripts/build/svelte-output-target.ts`](../core/scripts/build/svelte-output-target.ts) —
do not edit them by hand. Everything else in `src/lib` is hand-written and mirrors the
equivalent helpers in `@siemens/ix-vue` and `@siemens/ix-react`.

## Usage

```svelte
<script lang="ts">
  import {
    IxApplicationContext,
    IxButton,
    IxInput,
    IxCheckbox,
    showToast,
  } from '@siemens/ix-svelte';

  let name = $state('');
  let accepted = $state(false);
</script>

<IxApplicationContext>
  <IxInput bind:value={name} label="Name" />
  <IxCheckbox bind:checked={accepted} label="Accept" />
  <IxButton onClick={() => showToast({ message: `Hello ${name}` })}>Greet</IxButton>
</IxApplicationContext>
```

`<IxApplicationContext>` is required for anything that renders through the framework
delegate — `showModal()`, `showMessage()`, `<Modal>` and the application shell. It provides
the `#ix-portal` element that mounted views are attached to.

### Two-way binding

Components declared in the output target's `componentModels` expose a `$bindable()` model
prop:

| Components | Bindable prop |
| --- | --- |
| `IxSelect`, `IxInput`, `IxChatInput`, `IxTextarea`, `IxNumberInput`, `IxDateInput` | `value` |
| `IxCheckbox` | `checked` |

Every component also exposes `bind:element` for direct access to the underlying custom
element.

### Events

Stencil custom events are forwarded as `on<EventName>` props with their original camelCase
name preserved (`onValueChange`, not `onValuechange`). Undeclared `on*` props are attached as
native DOM listeners.

## Build

```sh
pnpm --filter @siemens/ix build        # generates src/lib/components
pnpm --filter @siemens/ix-svelte build # svelte-package -> dist
```

## Limitations

Client-side only — the runtime applies props and listeners in `$effect`, so there is no SSR
or SvelteKit prerendering support yet. `IxTabSet`/`IxTabPanel` and `ix-tree` are excluded from
generation and have no hand-written wrapper. See [TODO.md](./TODO.md).
