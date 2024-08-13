<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts"></script>

<style scoped src="example-styles/dist/radio-button.css"></style>

<template>
  <div class="radio-button">
    <input defaultChecked id="checkbox_1_1" name="group_1" type="radio" />
    <label htmlFor="checkbox_1_1"> Checked </label>

    <input id="checkbox_1_2" name="group_1" type="radio" />
    <label htmlFor="checkbox_1_2"> Normal </label>

    <input disabled id="checkbox_1_3" name="group_1" type="radio" />
    <label htmlFor="checkbox_1_3"> Disabled </label>
  </div>
</template>
