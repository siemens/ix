<script setup lang="ts">
import { IxInputGroup } from '@siemens/ix-vue';
</script>

<template>
  <form className="needs-validation m-2">
    <IxInputGroup>
      <span slot="input-start">Price</span>
      <input type="number" className="form-control" />
      <span slot="input-end">.00</span>
      <span slot="input-end">$</span>
    </IxInputGroup>
  </form>
</template>
