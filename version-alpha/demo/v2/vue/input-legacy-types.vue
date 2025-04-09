<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxInputGroup } from '@siemens/ix-vue';
</script>

<template>
  <form className="needs-validation">
    <IxInputGroup>
      <span slot="input-start">Text:</span>
      <input class="ix-form-control" placeholder="Enter text" type="text" />
    </IxInputGroup>

    <IxInputGroup>
      <span slot="input-start">Number:</span>
      <input class="ix-form-control" type="number" />
      <span slot="input-end">.00</span>
      <span slot="input-end">$</span>
    </IxInputGroup>

    <IxInputGroup>
      <span slot="input-start">Password:</span>
      <input class="ix-form-control" placeholder="Enter password" type="password" />
    </IxInputGroup>

    <IxInputGroup>
      <span slot="input-start">Email:</span>
      <input class="ix-form-control" placeholder="example@domain.com" type="email" />
    </IxInputGroup>

    <IxInputGroup>
      <span slot="input-start">Telephone:</span>
      <input class="ix-form-control" placeholder="111-111-111" type="tel" />
    </IxInputGroup>
  </form>
</template>
