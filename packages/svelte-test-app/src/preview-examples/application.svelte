<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  A 1:1 port of html-test-app/src/preview-examples/application.html.

  Two things are written differently from the HTML reference, both of them
  forced and neither of them changing the resulting DOM:

  - `breakpoints` is an array, so it has to be assigned as a property. The HTML
    reference does exactly this, from a script block after `whenDefined`.
  - `slot` cannot be written as a plain attribute. Svelte's compiler treats
    `slot="logo"` as a *legacy slot assignment* and compiles the child into a
    `$$slots.logo` snippet; the generated proxies render `{@render children?.()}`
    and nothing else, so the content would silently disappear. Spreading the
    attribute keeps it an attribute, which is what a web component's slotting
    actually needs.
-->
<script lang="ts">
  import {
    IxApplication,
    IxApplicationHeader,
    IxContent,
    IxContentHeader,
    IxMenu,
    IxMenuItem,
  } from '@siemens/ix-svelte';
</script>

<IxApplication breakpoints={['md']}>
  <IxApplicationHeader name="My Application">
    <div class="placeholder-logo" {...{ slot: 'logo' }}></div>
  </IxApplicationHeader>

  <IxMenu>
    <IxMenuItem>Item 1</IxMenuItem>
    <IxMenuItem>Item 2</IxMenuItem>
  </IxMenu>

  <IxContent>
    <IxContentHeader {...{ slot: 'header' }} headerTitle="My Content Page"
    ></IxContentHeader>
  </IxContent>
</IxApplication>
