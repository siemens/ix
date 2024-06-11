<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script lang="ts">
import { IxIcon } from '@siemens/ix-vue';
import { IxSelect, IxSelectItem, IxButton, IxLayoutForm, IxTextField } from '@siemens/ix-vue';
import {
  iconLocation,
  iconBezierCurve
} from '@siemens/ix-icons/icons'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { IxRadio } from '@siemens/ix-vue';
import { IxRadioGroup } from '@siemens/ix-vue';
import { IxNumberField } from '@siemens/ix-vue';
import { IxTypography } from '@siemens/ix-vue';

export default {
  name: 'ValidationSelect',
  components: {
    IxIcon,
    IxSelect,
    IxSelectItem,
    IxButton,
    IxLayoutForm,
    IxTextField,
    IxRadio,
    IxRadioGroup,
    IxNumberField,
    IxTypography
  },
  setup() {
    /**
     * Using `@vuelidate/core` is just an example to demonstrate how validation could be done
     * within vue. You can use any other validation library or write your own validation logic.
     */
    const v$ = useValidate()
    return { v$ }
  },
  methods: {
    async submitForm() {
      const result = await this.v$.$validate();
      console.log(result, this.v$.$errors, this.$data)
    },
  },
  data() {
    return {
      car: 'audi',
      name: 'John',
      lastName: 'Doe',
      address: 'Max-Muster 18',
      bookingOption: 'option-1',
      travelOption: 'travel-option-1',
      iconLocation,
      iconBezierCurve
    };
  },
  validations: {
    travelOption: {
      required
    }
  }
};

          // :class="{ 'ix-invalid': v$.errors?.name }"
          // :invalid-text="v$.errors.name && v$.errors.name.message"
</script>

<template>
  <form className="form-validation-example" @submit.prevent @submit="submitForm">
    <IxLayoutForm>
      <IxTextField
        v-model="name"
        label="Name"
      ></IxTextField>

      <IxTextField
        v-model="lastName"
        label="Last Name"
      ></IxTextField>


      <IxTextField
        v-model="address"
        label="Last Name"
        data-colspan="2"
      >
        <IxIcon slot="prefix" :name="iconLocation" size="16"></IxIcon>
      </IxTextField>

      <IxRadioGroup label="Booking option" @value-change="bookingOption = $event.detail">
        <IxRadio label="Option 0" value="option-0" :checked="'option-0' === bookingOption"></IxRadio>
        <IxRadio label="Option 1" value="option-1" :checked="'option-1' === bookingOption"></IxRadio>
        <IxRadio label="Option 2" value="option-2" :checked="'option-2' === bookingOption"></IxRadio>
      </IxRadioGroup>

      <IxNumberField
          label="Preferred room size"
          className="ix-info"
          infoText="You can adjust the room size"
        >
        <IxIcon slot="prefix" :name="iconBezierCurve" size="16"></IxIcon>
        <IxTypography slot="postfix" color="weak">
          m<sup>2</sup>
        </IxTypography>
      </IxNumberField>

      <IxSelect
        v-model="travelOption"
        allowClear
        label="Select your travel option"
        data-colspan="2"
      >
        <IxSelectItem value="travel-option-0" label="Travel Option 1"></IxSelectItem>
        <IxSelectItem value="travel-option-1" label="Travel Option 2"></IxSelectItem>
        <IxSelectItem value="travel-option-2" label="Travel Option 3"></IxSelectItem>
      </IxSelect>

      <IxNumberField
        label="Threshold limit A"
        data-colspan="1"
        helperText="Max threshold is 5"
      ></IxNumberField>

      <IxNumberField
        label="Threshold limit B"
        data-colspan="1"
        :class="{ 'ix-warning': true }"
        showStepperButtons
      ></IxNumberField>
      <IxButton type="submit">Submit</IxButton>
    </IxLayoutForm>
  </form>
</template>
