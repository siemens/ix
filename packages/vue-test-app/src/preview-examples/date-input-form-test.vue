<!--
SPDX-FileCopyrightText: 2024 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

<template>
  <div style="padding: 1rem; font-size: 0.9rem">
    <h2 style="margin-bottom: 0.5rem">Date Input Validation Tests</h2>
    <div style="margin-bottom: 1rem; padding: 0.75rem; border-radius: 4px">
      <strong>Testing:</strong> Required field validation (red border) after blur. Format: YYYY/MM/DD
    </div>

    <button @click="clearLogs" :style="{ ...buttonStyle, color: 'white', marginBottom: '1rem' }">
      🧹 Clear Log
    </button>

    <!-- Grid Layout for Examples -->
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1rem">

      <!-- 1. Required Standalone -->
      <div style="border: 1px solid #f44336; padding: 1rem; border-radius: 4px">
        <h4 style="margin: 0 0 0.5rem 0; color: #c62828">1️⃣ Required (Standalone)</h4>
        <ix-date-input
          ref="requiredRef"
          name="req1"
          label="Required Date"
          required
          :value="requiredValue"
          @valueChange="onRequiredValueChange"
          @focus="onRequiredFocus"
          @blur="onRequiredBlur"
        />
        <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
          <button @click="requiredValue = ''" :style="{ ...buttonStyle, backgroundColor: '#757575', color: 'white' }">Empty</button>
          <button @click="requiredValue = '2024/12/25'" :style="{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }">Valid</button>
          <button @click="requiredValue = 'invalid'" :style="{ ...buttonStyle, backgroundColor: '#ff9800', color: 'white' }">Invalid</button>
          <button @click="onRequiredManualBlur" :style="{ ...buttonStyle, backgroundColor: '#ff5722', color: 'white' }">Manual Blur</button>
          <button @click="onRequiredClear" :style="{ ...buttonStyle, backgroundColor: '#9c27b0', color: 'white' }">Clear()</button>
        </div>
      </div>

      <!-- 2. Optional Standalone -->
      <div style="border: 1px solid #4caf50; padding: 1rem; border-radius: 4px">
        <h4 style="margin: 0 0 0.5rem 0; color: #2e7d32">2️⃣ Optional (Standalone)</h4>
        <ix-date-input
          ref="optionalRef"
          name="opt1"
          label="Optional Date"
          :value="optionalValue"
          @valueChange="onOptionalValueChange"
          @focus="onOptionalFocus"
          @blur="onOptionalBlur"
        />
        <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
          <button @click="optionalValue = ''" :style="{ ...buttonStyle, color: 'white' }">Empty</button>
          <button @click="optionalValue = '2024/12/25'" :style="{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }">Valid</button>
          <button @click="optionalValue = 'invalid'" :style="{ ...buttonStyle, backgroundColor: '#ff9800', color: 'white' }">Invalid</button>
          <button @click="onOptionalManualBlur" :style="{ ...buttonStyle, backgroundColor: '#ff5722', color: 'white' }">Manual Blur</button>
          <button @click="onOptionalClear" :style="{ ...buttonStyle, backgroundColor: '#9c27b0', color: 'white' }">Clear()</button>
        </div>
      </div>

      <!-- 3. Form Required -->
      <div style="border: 1px solid #2196F3; padding: 1rem; border-radius: 4px">
        <h4 style="margin: 0 0 0.5rem 0; color: #1565c0">3️⃣ Required (In Form)</h4>
        <form @submit.prevent="addLog('3️⃣ Form submitted')">
          <ix-date-input
            ref="formRequiredRef"
            name="formReq"
            label="Required Date"
            required
            :value="formRequiredValue"
            @valueChange="onFormRequiredValueChange"
            @focus="onFormRequiredFocus"
            @blur="onFormRequiredBlur"
          />
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
            <button type="submit" :style="{ ...buttonStyle, backgroundColor: '#2196F3', color: 'white' }">Submit</button>
            <button type="button" @click="formRequiredValue = ''" :style="{ ...buttonStyle, backgroundColor: '#757575', color: 'white' }">Empty</button>
            <button type="button" @click="formRequiredValue = '2024/12/25'" :style="{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }">Valid</button>
            <button type="button" @click="formRequiredValue = 'invalid'" :style="{ ...buttonStyle, backgroundColor: '#ff9800', color: 'white' }">Invalid</button>
            <button type="button" @click="onFormRequiredManualBlur" :style="{ ...buttonStyle, backgroundColor: '#ff5722', color: 'white' }">Manual Blur</button>
            <button type="button" @click="onFormRequiredClear" :style="{ ...buttonStyle, backgroundColor: '#9c27b0', color: 'white' }">Clear()</button>
          </div>
        </form>
      </div>

      <!-- 4. Form Optional -->
      <div style="border: 1px solid #009688; padding: 1rem; border-radius: 4px">
        <h4 style="margin: 0 0 0.5rem 0; color: #00695c">4️⃣ Optional (In Form)</h4>
        <form @submit.prevent="addLog('4️⃣ Form submitted')">
          <ix-date-input
            ref="formOptionalRef"
            name="formOpt"
            label="Optional Date"
            :value="formOptionalValue"
            @valueChange="onFormOptionalValueChange"
            @focus="onFormOptionalFocus"
            @blur="onFormOptionalBlur"
          />
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
            <button type="submit" :style="{ ...buttonStyle, backgroundColor: '#2196F3', color: 'white' }">Submit</button>
            <button type="button" @click="formOptionalValue = ''" :style="{ ...buttonStyle, backgroundColor: '#757575', color: 'white' }">Empty</button>
            <button type="button" @click="formOptionalValue = '2024/12/25'" :style="{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }">Valid</button>
            <button type="button" @click="formOptionalValue = 'invalid'" :style="{ ...buttonStyle, backgroundColor: '#ff9800', color: 'white' }">Invalid</button>
            <button type="button" @click="onFormOptionalManualBlur" :style="{ ...buttonStyle, backgroundColor: '#ff5722', color: 'white' }">Manual Blur</button>
            <button type="button" @click="onFormOptionalClear" :style="{ ...buttonStyle, backgroundColor: '#9c27b0', color: 'white' }">Clear()</button>
          </div>
        </form>
      </div>

      <!-- 5. NoValidate Required -->
      <div style="border: 1px solid #ff9800; padding: 1rem; border-radius: 4px">
        <h4 style="margin: 0 0 0.5rem 0; color: #e65100">5️⃣ Required (NoValidate Form)</h4>
        <form novalidate @submit.prevent="addLog('5️⃣ NoValidate form submitted')">
          <ix-date-input
            ref="noValidateRequiredRef"
            name="noValReq"
            label="Required Date"
            required
            :value="noValidateRequiredValue"
            @valueChange="onNoValidateRequiredValueChange"
            @focus="onNoValidateRequiredFocus"
            @blur="onNoValidateRequiredBlur"
          />
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
            <button type="submit" :style="{ ...buttonStyle, backgroundColor: '#2196F3', color: 'white' }">Submit</button>
            <button type="button" @click="noValidateRequiredValue = ''" :style="{ ...buttonStyle, backgroundColor: '#757575', color: 'white' }">Empty</button>
            <button type="button" @click="noValidateRequiredValue = '2024/12/25'" :style="{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }">Valid</button>
            <button type="button" @click="noValidateRequiredValue = 'invalid'" :style="{ ...buttonStyle, backgroundColor: '#ff9800', color: 'white' }">Invalid</button>
            <button type="button" @click="onNoValidateRequiredManualBlur" :style="{ ...buttonStyle, backgroundColor: '#ff5722', color: 'white' }">Manual Blur</button>
            <button type="button" @click="onNoValidateRequiredClear" :style="{ ...buttonStyle, backgroundColor: '#9c27b0', color: 'white' }">Clear()</button>
          </div>
        </form>
      </div>

      <!-- 6. NoValidate Optional -->
      <div style="border: 1px solid #9c27b0; padding: 1rem; border-radius: 4px">
        <h4 style="margin: 0 0 0.5rem 0; color: #6a1b9a">6️⃣ Optional (NoValidate Form)</h4>
        <form novalidate @submit.prevent="addLog('6️⃣ NoValidate form submitted')">
          <ix-date-input
            ref="noValidateOptionalRef"
            name="noValOpt"
            label="Optional Date"
            :value="noValidateOptionalValue"
            @valueChange="onNoValidateOptionalValueChange"
            @focus="onNoValidateOptionalFocus"
            @blur="onNoValidateOptionalBlur"
          />
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap">
            <button type="submit" :style="{ ...buttonStyle, backgroundColor: '#2196F3', color: 'white' }">Submit</button>
            <button type="button" @click="noValidateOptionalValue = ''" :style="{ ...buttonStyle, backgroundColor: '#757575', color: 'white' }">Empty</button>
            <button type="button" @click="noValidateOptionalValue = '2024/12/25'" :style="{ ...buttonStyle, backgroundColor: '#4caf50', color: 'white' }">Valid</button>
            <button type="button" @click="noValidateOptionalValue = 'invalid'" :style="{ ...buttonStyle, backgroundColor: '#ff9800', color: 'white' }">Invalid</button>
            <button type="button" @click="onNoValidateOptionalManualBlur" :style="{ ...buttonStyle, backgroundColor: '#ff5722', color: 'white' }">Manual Blur</button>
            <button type="button" @click="onNoValidateOptionalClear" :style="{ ...buttonStyle, backgroundColor: '#9c27b0', color: 'white' }">Clear()</button>
          </div>
        </form>
      </div>

    </div> <!-- End of grid -->

    <!-- Event Log -->
    <div style="margin-top: 1rem">
      <h3 style="margin: 0 0 0.5rem 0">🪵 Event Log</h3>
      <div style="border: 1px solid #ccc; border-radius: 4px; padding: 0.75rem; max-height: 300px; overflow-y: auto; font-family: monospace; font-size: 0.8rem">
        <div v-if="logs.length === 0" style="color: #666; font-style: italic">No events yet... Interact with fields above</div>
        <div
          v-for="log in logs"
          :key="log.id"
          :style="{
            marginBottom: '1px',
            padding: '1px 0',
            color: log.message.includes('❌') ? '#d32f2f' : (log.message.includes('BLUR') || log.message.includes('FOCUS') || log.message.includes('MANUAL')) ? '#1976d2' : 'inherit'
          }"
        >
          {{ log.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const logs = ref<Array<{ id: string; message: string }>>([]);
let logIdCounter = 0;

const requiredValue = ref('');
const optionalValue = ref('');
const formRequiredValue = ref('');
const formOptionalValue = ref('');
const noValidateRequiredValue = ref('');
const noValidateOptionalValue = ref('');

const requiredRef = ref();
const optionalRef = ref();
const formRequiredRef = ref();
const formOptionalRef = ref();
const noValidateRequiredRef = ref();
const noValidateOptionalRef = ref();

const buttonStyle = { padding: '0.4rem 0.8rem', fontSize: '0.85rem', border: 'none', borderRadius: '4px', cursor: 'pointer' };

const addLog = (message: string) => {
  logIdCounter += 1;
  const uniqueId = `${Date.now()}-${logIdCounter}`;
  logs.value.push({ id: uniqueId, message: `[${new Date().toLocaleTimeString()}] ${message}` });
};

const debugValidationState = async (inputRef: any, label: string) => {
  if (!inputRef || !inputRef.value) {
    addLog(`${label} - Element not available`);
    return;
  }

  const element = inputRef.value;
  const classList = Array.from(element.classList);
  const hasRequiredClass = classList.includes('ix-invalid--required');
  const required = element.required;
  const value = element.value;

  let touched = 'unknown';
  try {
    const isTouchedMethod = element.isTouched;
    if (typeof isTouchedMethod === 'function') {
      touched = String(await isTouchedMethod.call(element));
    }
  } catch {
    touched = 'error';
  }

  addLog(`${label} - Req:${required}, Val:"${value}", Touch:${touched}, RedClass:${hasRequiredClass}`);
};

const triggerNativeBlur = async (elementRef: any) => {
  if (!elementRef || !elementRef.value) return;
  try {
    const nativeInput = await elementRef.value.getNativeInputElement();
    if (nativeInput) {
      nativeInput.dispatchEvent(new FocusEvent('blur', { bubbles: true }));
      addLog('✅ Native blur triggered');
    }
  } catch (error) {
    addLog(`❌ Error: ${error}`);
  }
};

const clearLogs = () => {
  logs.value = [];
};

// Event handlers for Required input
const onRequiredValueChange = (e: any) => {
  requiredValue.value = e.detail ?? '';
  addLog(`1️⃣ Value: "${e.detail ?? 'empty'}"`);
};
const onRequiredFocus = () => {
  addLog('1️⃣ Focus');
  setTimeout(() => debugValidationState(requiredRef, '1️⃣ FOCUS'), 10);
};
const onRequiredBlur = () => {
  addLog('1️⃣ Blur');
  setTimeout(() => debugValidationState(requiredRef, '1️⃣ BLUR'), 100);
};
const onRequiredManualBlur = async () => {
  await triggerNativeBlur(requiredRef);
  setTimeout(() => debugValidationState(requiredRef, '1️⃣ MANUAL'), 100);
};
const onRequiredClear = async () => {
  if (requiredRef.value?.clear) {
    await requiredRef.value.clear();
    requiredValue.value = '';
    addLog('1️⃣ Cleared');
  }
};

// Event handlers for Optional input
const onOptionalValueChange = (e: any) => {
  optionalValue.value = e.detail ?? '';
  addLog(`2️⃣ Value: "${e.detail ?? 'empty'}"`);
};
const onOptionalFocus = () => {
  addLog('2️⃣ Focus');
  setTimeout(() => debugValidationState(optionalRef, '2️⃣ FOCUS'), 10);
};
const onOptionalBlur = () => {
  addLog('2️⃣ Blur');
  setTimeout(() => debugValidationState(optionalRef, '2️⃣ BLUR'), 100);
};
const onOptionalManualBlur = async () => {
  await triggerNativeBlur(optionalRef);
  setTimeout(() => debugValidationState(optionalRef, '2️⃣ MANUAL'), 100);
};
const onOptionalClear = async () => {
  if (optionalRef.value?.clear) {
    await optionalRef.value.clear();
    optionalValue.value = '';
    addLog('2️⃣ Cleared');
  }
};

// Event handlers for Form Required input
const onFormRequiredValueChange = (e: any) => {
  formRequiredValue.value = e.detail ?? '';
  addLog(`3️⃣ Value: "${e.detail ?? 'empty'}"`);
};
const onFormRequiredFocus = () => {
  addLog('3️⃣ Focus');
  setTimeout(() => debugValidationState(formRequiredRef, '3️⃣ FOCUS'), 10);
};
const onFormRequiredBlur = () => {
  addLog('3️⃣ Blur');
  setTimeout(() => debugValidationState(formRequiredRef, '3️⃣ BLUR'), 100);
};
const onFormRequiredManualBlur = async () => {
  await triggerNativeBlur(formRequiredRef);
  setTimeout(() => debugValidationState(formRequiredRef, '3️⃣ MANUAL'), 100);
};
const onFormRequiredClear = async () => {
  if (formRequiredRef.value?.clear) {
    await formRequiredRef.value.clear();
    formRequiredValue.value = '';
    addLog('3️⃣ Cleared');
  }
};

// Event handlers for Form Optional input
const onFormOptionalValueChange = (e: any) => {
  formOptionalValue.value = e.detail ?? '';
  addLog(`4️⃣ Value: "${e.detail ?? 'empty'}"`);
};
const onFormOptionalFocus = () => {
  addLog('4️⃣ Focus');
  setTimeout(() => debugValidationState(formOptionalRef, '4️⃣ FOCUS'), 10);
};
const onFormOptionalBlur = () => {
  addLog('4️⃣ Blur');
  setTimeout(() => debugValidationState(formOptionalRef, '4️⃣ BLUR'), 100);
};
const onFormOptionalManualBlur = async () => {
  await triggerNativeBlur(formOptionalRef);
  setTimeout(() => debugValidationState(formOptionalRef, '4️⃣ MANUAL'), 100);
};
const onFormOptionalClear = async () => {
  if (formOptionalRef.value?.clear) {
    await formOptionalRef.value.clear();
    formOptionalValue.value = '';
    addLog('4️⃣ Cleared');
  }
};

// Event handlers for NoValidate Required input
const onNoValidateRequiredValueChange = (e: any) => {
  noValidateRequiredValue.value = e.detail ?? '';
  addLog(`5️⃣ Value: "${e.detail ?? 'empty'}"`);
};
const onNoValidateRequiredFocus = () => {
  addLog('5️⃣ Focus');
  setTimeout(() => debugValidationState(noValidateRequiredRef, '5️⃣ FOCUS'), 10);
};
const onNoValidateRequiredBlur = () => {
  addLog('5️⃣ Blur');
  setTimeout(() => debugValidationState(noValidateRequiredRef, '5️⃣ BLUR'), 100);
};
const onNoValidateRequiredManualBlur = async () => {
  await triggerNativeBlur(noValidateRequiredRef);
  setTimeout(() => debugValidationState(noValidateRequiredRef, '5️⃣ MANUAL'), 100);
};
const onNoValidateRequiredClear = async () => {
  if (noValidateRequiredRef.value?.clear) {
    await noValidateRequiredRef.value.clear();
    noValidateRequiredValue.value = '';
    addLog('5️⃣ Cleared');
  }
};

// Event handlers for NoValidate Optional input
const onNoValidateOptionalValueChange = (e: any) => {
  noValidateOptionalValue.value = e.detail ?? '';
  addLog(`6️⃣ Value: "${e.detail ?? 'empty'}"`);
};
const onNoValidateOptionalFocus = () => {
  addLog('6️⃣ Focus');
  setTimeout(() => debugValidationState(noValidateOptionalRef, '6️⃣ FOCUS'), 10);
};
const onNoValidateOptionalBlur = () => {
  addLog('6️⃣ Blur');
  setTimeout(() => debugValidationState(noValidateOptionalRef, '6️⃣ BLUR'), 100);
};
const onNoValidateOptionalManualBlur = async () => {
  await triggerNativeBlur(noValidateOptionalRef);
  setTimeout(() => debugValidationState(noValidateOptionalRef, '6️⃣ MANUAL'), 100);
};
const onNoValidateOptionalClear = async () => {
  if (noValidateOptionalRef.value?.clear) {
    await noValidateOptionalRef.value.clear();
    noValidateOptionalValue.value = '';
    addLog('6️⃣ Cleared');
  }
};

</script>
