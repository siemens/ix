<!--
  SPDX-FileCopyrightText: 2022 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxButton, IxDateInput } from '@siemens/ix-vue';
import { ref } from 'vue';

const toggle = ref(false);
</script>

<template>
  <div>
    <!-- <IxButton @click="toggle = !toggle">Toggle!</IxButton>
    <IxButton>{{ toggle ? 'Test 1' : 'Test 2' }}</IxButton> -->
    <form class="needs-validation">
      <ix-layout-grid>
        <ix-row>
          <ix-col size="8">
            <IxDateInput :validators="[
              {
                validator: 'validDate',
                errorMessage: 'Custom message 1',
              },
              {
                validator: 'toAfterFrom',
                errorMessage: 'Custom message 2',
              },
              {
                validator: 'withinMinMax',
                errorMessage: 'Custom message 3',
              },
            ]" />
            <div class="valid-feedback">Looks good!</div>
          </ix-col>
        </ix-row>
        <ix-row>
          <ix-col>
            <IxButton type="submit">Submit form</IxButton>
          </ix-col>
        </ix-row>
      </ix-layout-grid>
    </form>

  </div>
</template>