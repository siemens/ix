<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { Breakpoint } from '@siemens/ix';
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
  IxRadioGroup,
  IxRadio,
} from '@siemens/ix-vue';
</script>

<script lang="ts">
const validBreakpoints: Breakpoint[] = ['sm', 'md', 'lg'];

export default {
  data(): {
    breakpoints: Breakpoint[];
  } {
    return {
      breakpoints: ['md'],
    };
  },
  methods: {
    setBreakpoint(event: CustomEvent<string>) {
      const value = event.detail;

      if (validBreakpoints.includes(value as Breakpoint)) {
        this.breakpoints = [value as Breakpoint];
      } else {
        console.warn(
          `Invalid breakpoint value: ${value}. Expected one of: ${validBreakpoints.join(
            ', '
          )}`
        );
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
        <IxRadio value="sm" label="Small"></IxRadio>
        <IxRadio value="md" label="Medium"></IxRadio>
        <IxRadio value="lg" label="Large"></IxRadio>
      </IxRadioGroup>
    </IxContent>
  </IxApplication>
</template>
