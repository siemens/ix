<!--
  SPDX-FileCopyrightText: 2022 Siemens AG

  SPDX-License-Identifier: MIT

  This source code is licensed under the MIT license found in the
  LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxBasicNavigation, IxMenu, IxMenuItem } from '@siemens/ix-vue';

function navigate(href: string) {
  window.location.href = href;
}
function active(href: string) {
  return window.location.pathname === href;
}
</script>

<template>
  <IxBasicNavigation>
    <IxMenu>
      <IxMenuItem
        :active="active('/testing/navigation/link1')"
        @click="navigate('/testing/navigation/link1')"
        >Link 1</IxMenuItem
      >
      <IxMenuItem
        :active="active('/testing/navigation/link2')"
        @click="navigate('/testing/navigation/link2')"
        >Link 2</IxMenuItem
      >
    </IxMenu>
    <Outlet />
  </IxBasicNavigation>
</template>
