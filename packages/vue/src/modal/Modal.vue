<script lang="ts" setup>
import { defineProps, PropType, ref } from 'vue'
import { IxModal } from '../components'
import { HTMLRefElement } from '..'
import type { ModalSlotProps } from './modal-slot-props'
import type { IxModalSize, IxModalCustomEvent } from '@siemens/ix';

const modalRef = ref<HTMLRefElement<HTMLIxModalElement>>()

defineProps(
    {
        animation: {
            type: [Boolean, undefined],
            required: false,
            default: undefined,
        },
        backdrop: {
            type: [Boolean, undefined],
            required: false,
            default: undefined,
        },
        beforeDismiss: {
            type: Function as PropType<(reason?: any) => boolean | Promise<boolean>>,
            required: false,
            default: undefined,
        },
        centered: {
            type: [Boolean, undefined],
            required: false,
            default: undefined,
        },
        closeOnBackdropClick: {
            type: [Boolean, undefined],
            required: false,
            default: undefined,
        },
        closeOnEscape: {
            type: [Boolean, undefined],
            required: false,
            default: undefined,
        },
        size: {
            type: String as PropType<IxModalSize>,
            required: false,
            default: undefined,
        },
    }
)

const emit = defineEmits<{ 'dialogClose': [IxModalCustomEvent<any>], 'dialogDismiss': [IxModalCustomEvent<any>] }>()

const close: ModalSlotProps['closeModal'] = (result) => {
    modalRef.value?.$el.closeModal(result)
}

const dismiss: ModalSlotProps['dismissModal'] = (result) => {
    modalRef.value?.$el.dismissModal(result)
}

defineExpose({
    close,
    dismiss,
    modalElement: modalRef,
})

</script>


<template>
    <IxModal v-bind="$props" @dialog-close="emit('dialogClose', $event)" @dialog-dismiss="emit('dialogDismiss', $event)"
        ref="modalRef">
        <slot :closeModal="close" :dismissModal="dismiss"></slot>
    </IxModal>
</template>