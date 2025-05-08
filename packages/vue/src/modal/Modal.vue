<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { IxModal } from '../components'
import { HTMLRefElement } from '..'
import type { ModalSlotProps } from './modal-slot-props'
import type { JSX } from '@siemens/ix';

const modalRef = ref<HTMLRefElement<HTMLIxModalElement>>()

defineProps<JSX.IxModal>()

const emit = defineEmits(['dialogClose', 'dialogDismiss'])

const close: ModalSlotProps['closeModal'] = (result) => {
    modalRef.value?.$el.closeModal(result)
}

const dismiss: ModalSlotProps['dismissModal'] = (result) => {
    modalRef.value?.$el.dismissModal(result)
}

defineExpose({
    close,
    dismiss,
    modalElement: null,
})

</script>


<template>
    <IxModal v-bind="$props" @dialog-close="emit('dialogClose', $event)" @dialog-dismiss="emit('dialogDismiss', $event)"
        ref="modalRef">
        <slot :closeModal="close" :dismissModal="dismiss"></slot>
    </IxModal>
</template>