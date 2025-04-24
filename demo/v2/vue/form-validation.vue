<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->
<script lang="ts">
import {
  IxCustomField,
  IxDateInput,
  IxIcon,
  IxIconButton,
  IxNumberInput,
  IxRadio,
  IxRadioGroup,
  IxTextarea,
  IxTypography,
  IxSelect,
  IxSelectItem,
  IxButton,
  IxLayoutAuto,
  IxInput,
} from '@siemens/ix-vue';
import {
  iconLocation,
  iconBezierCurve,
  iconStar,
} from '@siemens/ix-icons/icons';
import useValidate from '@vuelidate/core';
import { required, helpers, email, sameAs } from '@vuelidate/validators';
import { ref } from 'vue';

export default {
  name: 'ValidationSelect',
  components: {
    IxIcon,
    IxSelect,
    IxSelectItem,
    IxButton,
    IxLayoutAuto,
    IxInput,
    IxRadio,
    IxRadioGroup,
    IxNumberInput,
    IxTypography,
    IxDateInput,
    IxTextarea,
    IxCustomField,
    IxIconButton,
  },
  setup() {
    /**
     * Using `@vuelidate/core` is just an example to demonstrate how validation could be done
     * within vue. You can use any other validation library or write your own validation logic.
     */
    const v$ = useValidate();
    const uploadRef = ref<HTMLInputElement | null>(null);
    return { v$, uploadRef, iconLocation, iconBezierCurve, iconStar };
  },
  methods: {
    async submitForm() {
      await this.v$.$validate();
      console.log(this.$data);
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
      limitA: 6,
      limitB: 7,
      warningLimitB: true,
      begin: '2024/05/03',
      end: '2024/05/05',
      comment: 'Some comment',
      upload: '',
      uploadPath: '',
      email: '',
      pin: '',
      pinConfirm: '',
      iconLocation,
      iconBezierCurve,
    };
  },
  validations() {
    return {
      travelOption: {
        required,
      },
      end: {
        isEnd: helpers.withMessage(
          'Its not allowed to pick 2024/05/05',
          (value) => value !== '2024/05/05'
        ),
      },
      email: {
        required,
        email,
      },
      pin: {
        required,
      },
      pinConfirm: {
        required,
        sameAsPin: helpers.withMessage('PINs do not match', sameAs(this.pin)),
      },
    };
  },
  watch: {
    limitB(value) {
      this.warningLimitB = value > 5;
    },
  },
};
</script>

<style scoped src="./form-validation.css"></style>

<template>
  <form
    className="form-validation-example"
    @submit.prevent
    @submit="submitForm"
  >
    <IxLayoutAuto>
      <IxInput v-model="name" label="Name"></IxInput>

      <IxInput v-model="lastName" label="Last Name"></IxInput>

      <IxInput v-model="address" label="Last Name" data-colspan="2">
        <IxIcon slot="start" :name="iconLocation" size="16"></IxIcon>
      </IxInput>

      <IxRadioGroup
        label="Booking option"
        @value-change="bookingOption = $event.detail"
      >
        <IxRadio
          label="Option 0"
          value="option-0"
          :checked="'option-0' === bookingOption"
        ></IxRadio>
        <IxRadio
          label="Option 1"
          value="option-1"
          :checked="'option-1' === bookingOption"
        ></IxRadio>
        <IxRadio
          label="Option 2"
          value="option-2"
          :checked="'option-2' === bookingOption"
        ></IxRadio>
      </IxRadioGroup>

      <IxNumberInput
        label="Preferred room size"
        className="ix-info"
        infoText="You can adjust the room size"
      >
        <IxIcon slot="start" :name="iconBezierCurve" size="16"></IxIcon>
        <IxTypography slot="end" color="weak" className="padding-right">
          m<sup>2</sup>
        </IxTypography>
      </IxNumberInput>

      <IxSelect
        v-model="travelOption"
        allowClear
        label="Select your travel option"
        data-colspan="2"
      >
        <IxSelectItem
          value="travel-option-0"
          label="Travel Option 1"
        ></IxSelectItem>
        <IxSelectItem
          value="travel-option-1"
          label="Travel Option 2"
        ></IxSelectItem>
        <IxSelectItem
          value="travel-option-2"
          label="Travel Option 3"
        ></IxSelectItem>
      </IxSelect>

      <IxNumberInput
        label="Threshold limit A"
        data-colspan="1"
        helper-text="Max threshold is 5"
        invalid-text="Not higher then 5 is allowed"
        v-model="limitA"
        :class="{ 'ix-invalid': limitA > 5 }"
      ></IxNumberInput>

      <IxNumberInput
        label="Threshold limit B"
        data-colspan="1"
        :class="{ 'ix-warning': warningLimitB }"
        warning-text="A threshold greater than 5 is not recommended"
        v-model="limitB"
        showStepperButtons
      ></IxNumberInput>

      <IxDateInput
        v-model="begin"
        label="Begin"
        i18n-error-date-unparsable="Please enter a valid date"
      ></IxDateInput>

      <IxDateInput
        v-model="end"
        label="End"
        :class="{ 'ix-invalid': v$.end.isEnd.$invalid }"
        :invalid-text="v$.end.isEnd.$message"
      ></IxDateInput>

      <IxTextarea
        v-model="comment"
        :max-length="100"
        label="Comment"
        data-colspan="2"
        textarea-height="10rem"
        helper-text="Let us know if you have any special requests or comments. We will do our best to accommodate you."
      ></IxTextarea>

      <IxInput
        type="email"
        label="Email"
        v-model="email"
        :class="{ 'ix-invalid': v$.email.$invalid }"
        :invalid-text="v$.email?.$errors?.[0]?.$message"
      ></IxInput>

      <!-- Implement custom form component -->
      <IxCustomField label="Upload" invalidText="You need to upload a file">
        <IxInput
          type="text"
          readonly
          style="width: 100%"
          v-model="uploadPath"
          @click="uploadRef?.click()"
        ></IxInput>

        <input
          ref="uploadRef"
          type="file"
          style="display: none"
          @change="uploadPath = ($event.target as HTMLInputElement).value"
        />

        <IxIconButton
          outline
          variant="primary"
          :icon="iconStar"
          @click="uploadRef?.click()"
        ></IxIconButton>
      </IxCustomField>

      <IxInput
        type="password"
        label="PIN"
        helperText="Only numbers between 1 and 4 is allowed"
        allowedCharactersPattern="[1-4]"
        :max-length="4"
        v-model="pin"
        :class="{ 'ix-invalid': v$.pin.$invalid }"
      ></IxInput>

      <IxInput
        required
        type="password"
        label="PIN"
        helperText="Confirm password"
        allowedCharactersPattern="[1-4]"
        :max-length="4"
        v-model="pinConfirm"
        :class="{ 'ix-invalid': v$.pinConfirm.sameAsPin.$invalid }"
        :invalid-text="v$.pinConfirm.sameAsPin.$message"
      ></IxInput>
      <IxButton type="submit">Submit</IxButton>
    </IxLayoutAuto>
  </form>
</template>
