<script lang="ts">
import { PORTAL_ID, IxOverlay } from '../modal'
import { vueFrameworkDelegate } from '../delegate';
import { defineApplicationContext } from "./context"
import { defineComponent } from 'vue';


export default defineComponent({
    components: {
        IxOverlay,
    },
    setup() {
        const delegate = vueFrameworkDelegate;

        defineApplicationContext({
            delegate,
        });

        return {
            delegate,
            PORTAL_ID,
        };
    }
})



</script>

<template>
    <slot></slot>
    <IxOverlay :delegate="delegate"></IxOverlay>
    <div :id="PORTAL_ID"></div>
</template>