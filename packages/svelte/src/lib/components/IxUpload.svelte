<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<!-- auto-generated svelte proxy -->
<script module lang="ts">
  import { defineCustomElement as defineIxUpload } from '@siemens/ix/components/ix-upload.js';

  defineIxUpload();

  const PROPS = [
  'accept',
  'multiple',
  'directoryUpload',
  'multiline',
  'disabled',
  'state',
  'selectFileText',
  'loadingText',
  'uploadFailedText',
  'uploadSuccessText',
  'i18nUploadFile',
  'i18nUploadDisabled',
] as const;

  const EVENTS = [
  'filesChanged',
] as const;
</script>

<script lang="ts">
  import type { JSX } from '@siemens/ix';
  import {
    useStencilElement,
    type StencilSvelteProps,
  } from '../runtime/index.svelte.js';

  let {
    children,
    element = $bindable(),
    ...rest
  }: StencilSvelteProps<JSX.IxUpload, HTMLIxUploadElement> = $props();

  const stencil = useStencilElement(() => element, () => rest, PROPS, EVENTS);
</script>

<ix-upload bind:this={element} {...stencil.attributes}>{@render children?.()}</ix-upload>
