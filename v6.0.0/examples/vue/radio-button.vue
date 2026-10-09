<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts"></script>

<style scoped src="./radio-button.css"></style>

<template>
  <div class="radio-button">
    <input
      class="ix-form-control"
      defaultChecked
      id="checkbox_1_1"
      name="group_1"
      type="radio"
    />
    <label class="ix-form-label" htmlFor="checkbox_1_1"> Checked </label>

    <input
      class="ix-form-control"
      id="checkbox_1_2"
      name="group_1"
      type="radio"
    />
    <label class="ix-form-label" htmlFor="checkbox_1_2"> Normal </label>

    <input
      class="ix-form-control"
      disabled
      id="checkbox_1_3"
      name="group_1"
      type="radio"
    />
    <label class="ix-form-label" htmlFor="checkbox_1_3"> Disabled </label>
  </div>
</template>
