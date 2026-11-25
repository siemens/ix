<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxInfoPage } from '@siemens/ix-vue';
</script>

<template>
  <IxInfoPage
    title-text="Report could not be generated"
    description="An error occurred while generating the report. Contact your administrator for more information."
  >
    <IxButton slot="actions">Return to overview</IxButton>
  </IxInfoPage>
</template>
