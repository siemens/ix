<!--
  SPDX-FileCopyrightText: 2026 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->
<script lang="ts">
  import { IxTypography } from '@siemens/ix-svelte';
  import { previewRoutes, testabilityRoutes } from './routes.js';

  const sections = [
    {
      title: 'Preview examples',
      hint: '1:1 ports of html-test-app. Snapshotted and parity-checked.',
      prefix: '/preview/',
      paths: Object.keys(previewRoutes).sort(),
    },
    {
      title: 'Testability examples',
      hint: 'Variants with read-outs for the Svelte binding tests. Not snapshotted.',
      prefix: '/testability/',
      paths: Object.keys(testabilityRoutes).sort(),
    },
  ];
</script>

<div class="index">
  <IxTypography format="h2">Svelte examples</IxTypography>

  {#each sections as section (section.prefix)}
    <section>
      <IxTypography format="h4">{section.title}</IxTypography>
      <IxTypography format="body-sm" color="soft">{section.hint}</IxTypography>
      <ul>
        {#each section.paths as path (path)}
          <li><a href={path}>{path.replace(section.prefix, '')}</a></li>
        {/each}
      </ul>
    </section>
  {/each}
</div>

<style>
  .index {
    padding: 1rem;
  }

  section {
    margin-top: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
</style>
