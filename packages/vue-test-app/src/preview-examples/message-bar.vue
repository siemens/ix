<script setup lang="ts">
import { IxButton, IxMessageBar } from '@siemens/ix-vue/dist';
</script>

<template>
  <IxMessageBar>Message text</IxMessageBar>
  <IxMessageBar type="warning">Message text</IxMessageBar>
  <IxMessageBar type="danger">
    <div className="d-flex align-items-center justify-content-between">
      Message text <IxButton>Action</IxButton>
    </div>
  </IxMessageBar>
</template>
