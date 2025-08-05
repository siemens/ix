<script setup lang="ts">
import {
  HTMLRefElement,
  IxButton,
  IxModalHeader,
  IxModalContent,
  IxModalFooter,
  IxInput,
} from '@siemens/ix-vue';
import { ref } from 'vue';

const modalRef = ref<HTMLRefElement<HTMLIxModalElement>>();
const show = ref(false);

const close = () => {
  modalRef.value?.$el.closeModal('close payload!');
  show.value = false;
};

const dismiss = () => {
  modalRef.value?.$el.dismissModal('dismiss payload');
  show.value = false;
};

const submitForm = (event: Event) => {
  event.preventDefault();
  close();
};
</script>

<template>
  <IxButton @click="show = true">Show modal</IxButton>

  <IxDialog ref="modalRef" v-if="show">
    <IxModalHeader @closeClick="dismiss">Create Resource</IxModalHeader>

    <IxModalContent>
      <form id="create-resource-form" @submit="submitForm">
        <IxInput label="Name" type="text" id="name" name="name"></IxInput>
      </form>
    </IxModalContent>

    <IxModalFooter>
      <IxButton outline @click="dismiss">Cancel</IxButton>
      <IxButton form="create-resource-form" type="submit">Submit</IxButton>
    </IxModalFooter>
  </IxDialog>
</template>
