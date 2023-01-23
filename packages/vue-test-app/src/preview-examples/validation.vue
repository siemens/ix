<script setup lang="ts">
import { IxValidationTooltip } from '@siemens/ix-vue/dist';
import { useForm } from 'vue-hooks-form';

const { useField, validateFields } = useForm({ defaultValues: {} });

const firstName = useField('firstName', { rule: { required: true } });
const lastName = useField('lastName', { rule: { required: true } });
const userName = useField('userName', { rule: { required: true } });

const onSubmit = async (data: any) => {
  console.log(data);
  await validateFields();
};
</script>

<template>
  <form class="row g-3 needs-validation" noValidate @submit.prevent="onSubmit">
    <div class="col-md-4">
      <label htmlFor="validationCustom01" class="form-label">
        First name
      </label>
      <input
        id="validationCustom01"
        type="text"
        class="form-control"
        :required="!!firstName.error"
        :class="[firstName.error ? 'is-invalid' : '']"
        v-model="firstName.value"
      />
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-4">
      <label htmlFor="validationCustom02" class="form-label"> Last name </label>
      <IxValidationTooltip
        message="Error hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint text"
      >
        <input
          id="validationCustom02"
          type="text"
          class="form-control"
          :required="!!lastName.error"
          :class="[lastName.error ? 'is-invalid' : '']"
          v-model="lastName.value"
        />
      </IxValidationTooltip>
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-4">
      <label htmlFor="validationCustomUsername" class="form-label">
        Username
      </label>
      <input
        id="validationCustomUsername"
        aria-describedby="inputGroupPrepend"
        type="text"
        class="form-control"
        :required="!!userName.error"
        :class="[userName.error ? 'is-invalid' : '']"
        v-model="userName.value"
      />
      <div class="invalid-feedback">Please choose a username.</div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form>
</template>
