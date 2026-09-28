<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script lang="ts">
import { IxSelect, IxSelectItem, IxButton } from '@siemens/ix-vue';
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'ValidationSelect',
  components: { IxSelect, IxSelectItem, IxButton },
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
      console.log(result, this.v$)
    },
  },
  data() {
    return {
      car: '',
    };
  },
  validations: {
    car: { required }
  }
};
</script>

<template>
  <form className="form-validation-example" @submit.prevent @submit="submitForm">
    <IxSelect
      allowClear
      label="Select Car"
      helper-text="Select your car brand"
      :invalid-text="v$.car.$errors[0]?.$message"
      v-model="car"
      :class="{ 'ix-invalid': v$.$error }"
      >
      <IxSelectItem value="audi" label="Audi"></IxSelectItem>
      <IxSelectItem value="vw" label="VW"></IxSelectItem>
    </IxSelect>
    <IxButton type="submit">Submit</IxButton>
  </form>
</template>
