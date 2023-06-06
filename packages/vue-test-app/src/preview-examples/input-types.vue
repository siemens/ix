<!--
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
  <form className="needs-validation m-2">
    <IxInputGroup>
        <span slot="input-start">Text:</span>
        <input placeholder="Enter text" type="text" className="form-control" />
      </IxInputGroup>

      <IxInputGroup>
        <span slot="input-start">Number:</span>
        <input type="number" className="form-control" />
        <span slot="input-end">.00</span>
        <span slot="input-end">$</span>
      </IxInputGroup>

      <IxInputGroup>
        <span slot="input-start">Password:</span>
        <input
          placeholder="Enter password"
          type="password"
          className="form-control"
        />
      </IxInputGroup>

      <IxInputGroup>
        <span slot="input-start">Email:</span>
        <input
          placeholder="example@domain.com"
          type="email"
          className="form-control"
        />
      </IxInputGroup>

      <IxInputGroup>
        <span slot="input-start">Telephone:</span>
        <input placeholder="111-111-111" type="tel" className="form-control" />
      </IxInputGroup>
  </form>
</template>
