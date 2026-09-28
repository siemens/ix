<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxIcon } from '@siemens/ix-vue';
import { addIcons } from '@siemens/ix-icons';
import { iconStar, iconStarFilled } from '@siemens/ix-icons/icons';
addIcons({ iconStar, iconStarFilled });
</script>

<template>
  <IxIcon :name="iconStar"></IxIcon>
  <IxIcon :name="iconStar"></IxIcon>

  <IxIcon :name="iconStarFilled"></IxIcon>
  <IxIcon :name="iconStarFilled"></IxIcon>
  <IxIcon :name="iconStarFilled"></IxIcon>
</template>
