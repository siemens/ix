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
  IxIconButton,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-vue';
</script>

<style scoped src="./application-breakpoints.css"></style>

<script lang="ts">
export default {
  data(): {
    breakpoints: Breakpoint[];
  } {
    return {
      breakpoints: ['md'],
    };
  },
  methods: {
    setBreakpoint(breakpoint: Breakpoint) {
      this.breakpoints = [breakpoint];
    },
  },
};
</script>

<template>
  <IxApplication :breakpoints="breakpoints">
    <IxApplicationHeader name="My Application">
      <div className="placeholder-logo" slot="logo"></div>

      <IxIconButton ghost icon="checkboxes"></IxIconButton>
      <IxIconButton ghost icon="checkboxes"></IxIconButton>
      <IxIconButton ghost icon="checkboxes"></IxIconButton>

      <IxDropdownButton variant="secondary" label="Select config" ghost>
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
      <input
        id="small"
        type="radio"
        name="layout"
        value="sm"
        :checked="breakpoints[0] === 'sm'"
        @change="() => setBreakpoint('sm')"
      />
      <label for="small">Small</label>

      <input
        id="medium"
        type="radio"
        name="layout"
        value="md"
        :checked="breakpoints[0] === 'md'"
        @change="() => setBreakpoint('md')"
      />
      <label for="medium">Medium</label>

      <input
        id="large"
        type="radio"
        name="layout"
        value="lg"
        :checked="breakpoints[0] === 'lg'"
        @change="() => setBreakpoint('lg')"
      />
      <label for="large">Large</label>
    </IxContent>
  </IxApplication>
</template>
