<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxRadio, IxRadioGroup } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxRadioGroup
      label="Storage options"
      info-text="Storage options might differ in speed."
    >
      <IxRadio
        label="256GB SSD storage"
        value="256"
        name="storage-256gb"
        checked
        class="ix-info"
      ></IxRadio>
      <IxRadio
        label="512GB SSD storage"
        value="512"
        name="storage-512gb"
        class="ix-info"
      ></IxRadio>
    </IxRadioGroup>
  </div>

  <div>
    <IxRadioGroup
      label="Storage options"
      warning-text="Storage options might not be available."
    >
      <IxRadio
        label="256GB SSD storage"
        value="256"
        name="storage-256gb"
        checked
        class="ix-warning"
      ></IxRadio>
      <IxRadio
        label="512GB SSD storage"
        value="512"
        name="storage-512gb"
        class="ix-warning"
      ></IxRadio>
    </IxRadioGroup>
  </div>

  <div>
    <IxRadioGroup
      label="Storage options"
      valid-text="Storage option is available."
    >
      <IxRadio
        label="256GB SSD storage"
        value="256"
        name="storage-256gb"
        checked
        class="ix-valid"
      ></IxRadio>
      <IxRadio
        label="512GB SSD storage"
        value="512"
        name="storage-512gb"
        class="ix-valid"
      ></IxRadio>
    </IxRadioGroup>
  </div>

  <div>
    <IxRadioGroup
      label="Storage options"
      invalid-text="Storage option is not available."
    >
      <IxRadio
        label="256GB SSD storage"
        value="256"
        name="storage-256gb"
        checked
        class="ix-invalid"
      ></IxRadio>
      <IxRadio
        label="512GB SSD storage"
        value="512"
        name="storage-512gb"
        class="ix-invalid"
      ></IxRadio>
    </IxRadioGroup>
  </div>
</template>
