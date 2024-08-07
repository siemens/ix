<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxPaneLayout, IxPane, IxButton } from '@siemens/ix-vue';
import { ref } from 'vue';

const variant = ref<'floating' | 'inline'>('floating');
const layout = ref<'full-horizontal' | 'full-vertical'>('full-horizontal');
</script>

<template>
  <IxPaneLayout
    :variant="variant"
    :layout="layout"
    :borderless="variant === 'floating'"
  >
    <IxPane heading="Pane Left" slot="left" size="33%">
      <p>This is the left pane.</p>
    </IxPane>
    <IxPane heading="Pane Top" slot="top" size="33%">
      <p>This is the top pane.</p>
    </IxPane>
    <IxPane heading="Pane Right" slot="right" size="33%">
      <p>This is the right pane.</p>
    </IxPane>
    <IxPane heading="Pane Bottom" slot="bottom" size="33%">
      <p>This is the bottom pane.</p>
    </IxPane>

    <div slot="content">
      <IxButton
        @click="
          () => {
            variant = variant === 'inline' ? 'floating' : 'inline';
          }
        "
        style="margin: 2.5rem"
      >
        Toggle Variant
      </IxButton>
      <IxButton
        @click="
          () => {
            layout =
              layout === 'full-horizontal'
                ? 'full-vertical'
                : 'full-horizontal';
          }
        "
        style="margin: 2.5rem"
      >
        Toggle Layout
      </IxButton>
    </div>
  </IxPaneLayout>
</template>
