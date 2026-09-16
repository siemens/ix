<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<script lang="ts">
  import { IxApplicationContext } from '@siemens/ix-svelte';
  import App from './App.svelte';
  import { routes } from './routes.js';

  let path = $state(window.location.pathname);

  const CurrentView = $derived(routes[path] ?? App);

  function onNavigate() {
    path = window.location.pathname;
  }
</script>

<svelte:window onpopstate={onNavigate} />

<IxApplicationContext>
  <CurrentView />
</IxApplicationContext>
