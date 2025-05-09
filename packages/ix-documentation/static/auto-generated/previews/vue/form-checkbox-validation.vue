<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxCheckboxGroup label="Terms of something" info-text="Info text">
      <IxCheckbox
        label="I agree everything"
        name="agreed"
        class="ix-info"
      ></IxCheckbox>
    </IxCheckboxGroup>
  </div>

  <div>
    <IxCheckboxGroup label="Terms of something" warning-text="Warning text">
      <IxCheckbox
        label="I agree everything"
        name="agreed"
        class="ix-warning"
      ></IxCheckbox>
      <IxCheckbox
        label="I disagree everything"
        name="agreed"
        class="ix-warning"
      ></IxCheckbox>
    </IxCheckboxGroup>
  </div>

  <div>
    <IxCheckboxGroup label="Terms of something" invalid-text="Invalid text">
      <IxCheckbox
        label="I agree everything"
        name="agreed"
        class="ix-invalid"
      ></IxCheckbox>
      <IxCheckbox
        label="I disagree everything"
        name="agreed"
        class="ix-invalid"
      ></IxCheckbox>
    </IxCheckboxGroup>
  </div>

  <div>
    <IxCheckboxGroup label="Terms of something" valid-text="Valid text">
      <IxCheckbox
        label="I agree everything"
        name="agreed"
        class="ix-valid"
      ></IxCheckbox>
      <IxCheckbox
        label="I disagree everything"
        name="agreed"
        class="ix-valid"
      ></IxCheckbox>
    </IxCheckboxGroup>
  </div>
</template>
