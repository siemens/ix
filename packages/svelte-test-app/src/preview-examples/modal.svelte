<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!--
  A 1:1 port of html-test-app/src/preview-examples/modal.html.

  The HTML reference has to define a one-off custom element that clones a
  `<template>`, because `showModal` takes an element. The Svelte binding accepts
  a component and mounts it through the framework delegate, so the `<template>`
  has no counterpart here -- the rendered page is the same single button.

  The close/dismiss read-out lives in `src/testability-examples/modal.svelte`.
-->
<script lang="ts">
  import { IxButton, showModal } from '@siemens/ix-svelte';
  import ModalContent from './modal-content.svelte';

  async function show() {
    await showModal({
      content: {
        component: ModalContent,
        props: { title: 'Message headline' },
      },
    });
  }
</script>

<IxButton onclick={show}>Show modal</IxButton>
