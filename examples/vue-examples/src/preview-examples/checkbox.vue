<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts"></script>

<template>
  <div style="margin-bottom: 1rem">
    <input class="ix-form-control" type="checkbox" id="checkbox_01" />
    <label class="ix-form-label" htmlFor="checkbox_01">Simple checkbox</label>
  </div>

  <div>
    <input class="ix-form-control" type="checkbox" id="checkbox_02" disabled />
    <label class="ix-form-label" htmlFor="checkbox_02">Disabled checkbox</label>
  </div>
</template>
