<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import type { Breakpoint } from '@siemens/ix';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxContent,
  IxContentHeader,
  IxDropdownButton,
  IxDropdownItem,
  IxMenu,
  IxMenuItem,
  IxRadio,
  IxRadioGroup,
} from '@siemens/ix-vue';
</script>

<script lang="ts">
const validBreakpoints = new Set<Breakpoint>(['sm', 'md', 'lg']);

export default {
  data(): {
    breakpoints: Breakpoint[];
  } {
    return {
      breakpoints: ['md'],
    };
  },
  methods: {
    setBreakpoint(event: CustomEvent<Breakpoint>) {
      const value = event?.detail;
      if (validBreakpoints.has(value)) {
        this.breakpoints = [value];
      }
    },
  },
};
</script>

<template>
  <IxApplication :breakpoints="breakpoints">
    <IxApplicationHeader name="My Application">
      <div className="placeholder-logo" slot="logo"></div>

      <IxDropdownButton variant="subtle-tertiary" label="Select config">
        <IxDropdownItem label="Config 1"></IxDropdownItem>
        <IxDropdownItem label="Config 2"></IxDropdownItem>
        <IxDropdownItem label="Config 3"></IxDropdownItem>
      </IxDropdownButton>

      <IxAvatar>
        <IxDropdownItem label="Action 1"></IxDropdownItem>
        <IxDropdownItem label="Action 2"></IxDropdownItem>
        <IxDropdownItem label="Action 3"></IxDropdownItem>
      </IxAvatar>
    </IxApplicationHeader>

    <IxMenu>
      <IxMenuItem>Item 1</IxMenuItem>
      <IxMenuItem>Item 2</IxMenuItem>
    </IxMenu>

    <IxContent>
      <IxContentHeader
        slot="header"
        header-title="Choose breakpoint"
      ></IxContentHeader>
      <IxRadioGroup :value="breakpoints[0]" @valueChange="setBreakpoint">
        <IxRadio value="sm" label="Small" aria-label="Small"></IxRadio>
        <IxRadio value="md" label="Medium" aria-label="Medium"></IxRadio>
        <IxRadio value="lg" label="Large" aria-label="Large"></IxRadio>
      </IxRadioGroup>
    </IxContent>
  </IxApplication>
</template>
