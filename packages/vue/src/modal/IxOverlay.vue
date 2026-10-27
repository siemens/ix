<script lang="ts" setup>

import { computed, defineProps, PropType, ref, VNode, watch } from 'vue';
import { VueFrameworkDelegate } from '../delegate';
import IxView from './ix-view';
import { PORTAL_ID, DATA_PORTAL_ID_ATTRIBUTE } from './constants';


const pendingResolvers = new Map<string, (value: Element | PromiseLike<Element>) => void>();
const viewMap = ref<Record<string, VNode>>({})

const views = computed(() => {
    return Object.keys(viewMap.value).map((key) => {
        return {
            id: key,
            node: viewMap.value[key],
        }
    })
})

const props = defineProps({
    delegate: {
        type: Object as PropType<VueFrameworkDelegate>,
        required: true,
    },
})

watch(() => props.delegate, (delegate) => {
    if (!delegate) {
        return;
    }

    const addOverlay = (id: string, view: VNode) => {
        const _views = { ...viewMap.value };
        _views[id] = view;
        viewMap.value = _views;
    }

    const removeOverlay = (id: string) => {
        const _views = { ...viewMap.value };
        delete _views[id];
        viewMap.value = _views;
    }

    delegate.attachViewToPortal = async (id: string, view: VNode) => {
        addOverlay(id, view);
        return new Promise<Element>((resolve) => {
            pendingResolvers.set(id, resolve);
        });
    }

    delegate.removeViewFromPortal = async (id: string) => {
        pendingResolvers.delete(id);
        removeOverlay(id);
    }

    delegate.portalReady()

}, { immediate: true });

watch(() => views.value, (newViews) => {
    newViews.forEach((view) => {
        const resolve = pendingResolvers.get(view.id);
        if (!resolve) {
            return;
        }

        const el = document.querySelector(`[${DATA_PORTAL_ID_ATTRIBUTE}="${view.id}"]`);

        if (el && el.children.length === 1) {
            pendingResolvers.delete(view.id);
            resolve(el.children[0]);
        }

    })
}, { flush: 'post' });



</script>

<template>
    <IxView v-for="view in views" :key="view.id" :id="view.id" :teleportId="`#${PORTAL_ID}`" :node="view.node">
    </IxView>
</template>