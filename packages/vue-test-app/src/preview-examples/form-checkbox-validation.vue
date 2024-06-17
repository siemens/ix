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
    <IxCheckboxGroup
      label="Terms of something"
      info-text="Info text"
      class="ix-info"
    >
      <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
    </IxCheckboxGroup>
  </div>

  <div>
    <IxCheckboxGroup
      label="Terms of something"
      warning-text="Warning text"
      class="ix-warning"
    >
      <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
      <IxCheckbox label="I disagree everything" name="agreed"></IxCheckbox>
    </IxCheckboxGroup>
  </div>

  <div>
    <IxCheckboxGroup
      label="Terms of something"
      valid-text="Invalid text"
      class="ix-invalid"
    >
      <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
      <IxCheckbox label="I disagree everything" name="agreed"></IxCheckbox>
    </IxCheckboxGroup>
  </div>

  <div>
    <IxCheckboxGroup
      label="Terms of something"
      valid-text="Valid text"
      class="ix-valid"
    >
      <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
      <IxCheckbox label="I disagree everything" name="agreed"></IxCheckbox>
    </IxCheckboxGroup>
  </div>
</template>
