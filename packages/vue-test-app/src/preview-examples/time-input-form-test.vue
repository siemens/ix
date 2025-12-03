<!--
SPDX-FileCopyrightText: 2024 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

<template>
  <div style="padding: 1rem; font-size: 0.9rem">
    <h2 style="margin-bottom: 0.5rem">Time Input Validation Tests</h2>
    <div style="margin-bottom: 1rem; padding: 0.75rem; border-radius: 4px">
      <strong>Testing:</strong> Required field validation (red border) after blur. Format: HH:MM:SS
    </div>

    <button @click="clearLogs" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; color: white; margin-bottom: 1rem; background-color: #666">
      🧹 Clear Log
    </button>

    <!-- Grid Layout for Examples -->
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1rem">

      <!-- 1. Required Standalone -->
      <div style="border: 1px solid #f44336; padding: 1rem; border-radius: 4px">
        <h4 style="margin: 0 0 0.5rem 0; color: #c62828">1️⃣ Required (Standalone)</h4>
        <ix-time-input
          ref="requiredInput"
          name="req1"
          label="Required Time"
          required
          @valueChange="onValueChange('1️⃣', $event)"
          @focus="onFocus('1️⃣')"
          @blur="onBlur('1️⃣')"
        ></ix-time-input>
        <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
          <button @click="setEmpty('requiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #757575; color: white">Empty</button>
          <button @click="setValid('requiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4caf50; color: white">Valid</button>
          <button @click="setInvalid('requiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff9800; color: white">Invalid</button>
          <button @click="manualBlur('requiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff5722; color: white">Manual Blur</button>
          <button @click="clearInput('requiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #9c27b0; color: white">Clear()</button>
        </div>
      </div>

      <!-- 2. Optional Standalone -->
      <div style="border: 1px solid #4caf50; padding: 1rem; border-radius: 4px">
        <h4 style="margin: 0 0 0.5rem 0; color: #2e7d32">2️⃣ Optional (Standalone)</h4>
        <ix-time-input
          ref="optionalInput"
          name="opt1"
          label="Optional Time"
          @valueChange="onValueChange('2️⃣', $event)"
          @focus="onFocus('2️⃣')"
          @blur="onBlur('2️⃣')"
        ></ix-time-input>
        <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
          <button @click="setEmpty('optionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #757575; color: white">Empty</button>
          <button @click="setValid('optionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4caf50; color: white">Valid</button>
          <button @click="setInvalid('optionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff9800; color: white">Invalid</button>
          <button @click="manualBlur('optionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff5722; color: white">Manual Blur</button>
          <button @click="clearInput('optionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #9c27b0; color: white">Clear()</button>
        </div>
      </div>

      <!-- 3. Form Required -->
      <div style="border: 1px solid #2196F3; padding: 1rem; border-radius: 4px">
        <h4 style="margin: 0 0 0.5rem 0; color: #1565c0">3️⃣ Required (In Form)</h4>
        <form @submit.prevent="onFormSubmit('3️⃣')">
          <ix-time-input
            ref="formRequiredInput"
            name="formReq"
            label="Required Time"
            required
            @valueChange="onValueChange('3️⃣', $event)"
            @focus="onFocus('3️⃣')"
            @blur="onBlur('3️⃣')"
          ></ix-time-input>
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
            <button type="submit" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #2196F3; color: white">Submit</button>
            <button type="button" @click="setEmpty('formRequiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #757575; color: white">Empty</button>
            <button type="button" @click="setValid('formRequiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4caf50; color: white">Valid</button>
            <button type="button" @click="setInvalid('formRequiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff9800; color: white">Invalid</button>
            <button type="button" @click="manualBlur('formRequiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff5722; color: white">Manual Blur</button>
            <button type="button" @click="clearInput('formRequiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #9c27b0; color: white">Clear()</button>
          </div>
        </form>
      </div>

      <!-- 4. Form Optional -->
      <div style="border: 1px solid #009688; padding: 1rem; border-radius: 4px">
        <h4 style="margin: 0 0 0.5rem 0; color: #00695c">4️⃣ Optional (In Form)</h4>
        <form @submit.prevent="onFormSubmit('4️⃣')">
          <ix-time-input
            ref="formOptionalInput"
            name="formOpt"
            label="Optional Time"
            @valueChange="onValueChange('4️⃣', $event)"
            @focus="onFocus('4️⃣')"
            @blur="onBlur('4️⃣')"
          ></ix-time-input>
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
            <button type="submit" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #2196F3; color: white">Submit</button>
            <button type="button" @click="setEmpty('formOptionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #757575; color: white">Empty</button>
            <button type="button" @click="setValid('formOptionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4caf50; color: white">Valid</button>
            <button type="button" @click="setInvalid('formOptionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff9800; color: white">Invalid</button>
            <button type="button" @click="manualBlur('formOptionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff5722; color: white">Manual Blur</button>
            <button type="button" @click="clearInput('formOptionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #9c27b0; color: white">Clear()</button>
          </div>
        </form>
      </div>

      <!-- 5. NoValidate Required -->
      <div style="border: 1px solid #ff9800; padding: 1rem; border-radius: 4px">
        <h4 style="margin: 0 0 0.5rem 0; color: #e65100">5️⃣ Required (NoValidate Form)</h4>
        <form novalidate @submit.prevent="onFormSubmit('5️⃣')">
          <ix-time-input
            ref="noValidateRequiredInput"
            name="noValReq"
            label="Required Time"
            required
            @valueChange="onValueChange('5️⃣', $event)"
            @focus="onFocus('5️⃣')"
            @blur="onBlur('5️⃣')"
          ></ix-time-input>
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
            <button type="submit" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #2196F3; color: white">Submit</button>
            <button type="button" @click="setEmpty('noValidateRequiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #757575; color: white">Empty</button>
            <button type="button" @click="setValid('noValidateRequiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4caf50; color: white">Valid</button>
            <button type="button" @click="setInvalid('noValidateRequiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff9800; color: white">Invalid</button>
            <button type="button" @click="manualBlur('noValidateRequiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff5722; color: white">Manual Blur</button>
            <button type="button" @click="clearInput('noValidateRequiredInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #9c27b0; color: white">Clear()</button>
          </div>
        </form>
      </div>

      <!-- 6. NoValidate Optional -->
      <div style="border: 1px solid #9c27b0; padding: 1rem; border-radius: 4px">
        <h4 style="margin: 0 0 0.5rem 0; color: #6a1b9a">6️⃣ Optional (NoValidate Form)</h4>
        <form novalidate @submit.prevent="onFormSubmit('6️⃣')">
          <ix-time-input
            ref="noValidateOptionalInput"
            name="noValOpt"
            label="Optional Time"
            @valueChange="onValueChange('6️⃣', $event)"
            @focus="onFocus('6️⃣')"
            @blur="onBlur('6️⃣')"
          ></ix-time-input>
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
            <button type="submit" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #2196F3; color: white">Submit</button>
            <button type="button" @click="setEmpty('noValidateOptionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #757575; color: white">Empty</button>
            <button type="button" @click="setValid('noValidateOptionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #4caf50; color: white">Valid</button>
            <button type="button" @click="setInvalid('noValidateOptionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff9800; color: white">Invalid</button>
            <button type="button" @click="manualBlur('noValidateOptionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #ff5722; color: white">Manual Blur</button>
            <button type="button" @click="clearInput('noValidateOptionalInput')" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; border: none; border-radius: 4px; cursor: pointer; background-color: #9c27b0; color: white">Clear()</button>
          </div>
        </form>
      </div>

    </div>

    <!-- Event Log -->
    <div style="margin-top: 1rem">
      <h3 style="margin-bottom: 0.5rem">Event Log</h3>
      <div style="height: 200px; overflow-y: auto; border: 1px solid #ccc; padding: 0.5rem; background: #f9f9f9; border-radius: 4px">
        <div
          v-for="log in logs"
          :key="log.id"
          style="font-family: monospace; font-size: 0.8rem; margin-bottom: 0.25rem; padding: 0.25rem; background: white; border-radius: 2px"
        >
          {{ log.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';

interface LogEntry {
  id: string;
  message: string;
}

const logs = ref<LogEntry[]>([]);
let logIdCounter = 0;

// Refs for the inputs
const requiredInput = ref();
const optionalInput = ref();
const formRequiredInput = ref();
const formOptionalInput = ref();
const noValidateRequiredInput = ref();
const noValidateOptionalInput = ref();

const addLog = (message: string) => {
  logIdCounter += 1;
  const uniqueId = `${Date.now()}-${logIdCounter}`;
  logs.value.push({
    id: uniqueId,
    message: `[${new Date().toLocaleTimeString()}] ${message}`
  });
};

const clearLogs = () => {
  logs.value = [];
  addLog('🧹 Logs cleared');
};

const onValueChange = (prefix: string, event: any) => {
  addLog(`${prefix} Value: "${event.detail ?? 'empty'}"`);
};

const onFocus = (prefix: string) => {
  addLog(`${prefix} Focus`);
};

const onBlur = (prefix: string) => {
  addLog(`${prefix} Blur`);
};

const onFormSubmit = (prefix: string) => {
  addLog(`${prefix} Form submitted`);
};

const getInputRef = (refName: string) => {
  const refs = {
    requiredInput: requiredInput.value,
    optionalInput: optionalInput.value,
    formRequiredInput: formRequiredInput.value,
    formOptionalInput: formOptionalInput.value,
    noValidateRequiredInput: noValidateRequiredInput.value,
    noValidateOptionalInput: noValidateOptionalInput.value,
  };
  return refs[refName as keyof typeof refs];
};

const setEmpty = async (refName: string) => {
  const input = getInputRef(refName);
  if (input) {
    input.value = '';
    addLog(`${refName} set to empty`);
  }
};

const setValid = async (refName: string) => {
  const input = getInputRef(refName);
  if (input) {
    input.value = '14:30:00';
    addLog(`${refName} set to valid time`);
  }
};

const setInvalid = async (refName: string) => {
  const input = getInputRef(refName);
  if (input) {
    input.value = 'invalid';
    addLog(`${refName} set to invalid`);
  }
};

const manualBlur = async (refName: string) => {
  const input = getInputRef(refName);
  if (input) {
    try {
      const nativeInput = await input.getNativeInputElement();
      if (nativeInput) {
        nativeInput.dispatchEvent(new FocusEvent('blur', { bubbles: true }));
        addLog(`${refName} manual blur triggered`);
      }
    } catch (error) {
      addLog(`${refName} manual blur failed: ${error}`);
    }
  }
};

const clearInput = async (refName: string) => {
  const input = getInputRef(refName);
  if (input && typeof input.clear === 'function') {
    await input.clear();
    addLog(`${refName} clear() method called`);
  } else {
    addLog(`${refName} clear() method not available`);
  }
};
</script>
