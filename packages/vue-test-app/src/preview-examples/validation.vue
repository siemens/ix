<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import {
  IxButton,
  IxCol,
  IxLayoutGrid,
  IxRow,
  IxValidationTooltip,
} from '@siemens/ix-vue';
import { reactive, ref } from 'vue';

let firstName = ref('');
let lastName = ref('');
let userName = ref('');
let formState = reactive({
  errors: {
    firstName: undefined,
    lastName: undefined,
    userName: undefined,
  },
  isSubmitted: false,
});

const onSubmit = () => {
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    userName: userName.value,
  });
  formState.isSubmitted = true;
};
</script>

<template>
  <form
    class="needs-validation"
    :class="{ 'was-validated': formState.isSubmitted }"
    @submit.prevent="onSubmit"
    novalidate
  >
    <IxLayoutGrid>
      <IxRow>
        <IxCol size="4">
          <label class="ix-form-label" for="validationCustom01"
            >First name</label
          >
          <input
            type="text"
            :class="{
              'is-invalid': formState.errors.firstName,
              'ix-form-control': true,
            }"
            id="validationCustom01"
            v-model="firstName"
            required
          />
          <div class="invalid-feedback">Please choose a first name.</div>
          <div v-if="!formState.errors.firstName" class="valid-feedback">
            Looks good!
          </div>
        </IxCol>
      </IxRow>

      <IxRow>
        <IxCol size="4">
          <IxValidationTooltip message="Cannot be empty!">
            <label class="ix-form-label" for="validationCustom02"
              >Last name</label
            >
            <input
              type="text"
              :class="{
                'is-invalid': formState.errors.lastName,
                'ix-form-control': true,
              }"
              id="validationCustom02"
              v-model="lastName"
              required
            />
          </IxValidationTooltip>
        </IxCol>
      </IxRow>

      <IxRow>
        <IxCol size="4">
          <label for="validationCustomUsername" class="ix-form-label"
            >Username</label
          >
          <input
            type="text"
            :class="{
              'is-invalid': formState.errors.userName,
              'ix-form-control': true,
            }"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            v-model="userName"
            required
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </IxCol>
      </IxRow>

      <IxRow>
        <IxCol>
          <IxButton type="submit">Submit form</IxButton>
        </IxCol>
      </IxRow>
    </IxLayoutGrid>
  </form>
</template>
