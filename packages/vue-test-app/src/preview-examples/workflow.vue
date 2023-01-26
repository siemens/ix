<script setup lang="ts">
import { IxWorkflowStep, IxWorkflowSteps } from '@siemens/ix-vue';
</script>

<template>
  <IxWorkflowSteps>
    <IxWorkflowStep status="done">Step 1</IxWorkflowStep>
    <IxWorkflowStep status="success">Step 2</IxWorkflowStep>
    <IxWorkflowStep status="open">Step 3</IxWorkflowStep>
    <IxWorkflowStep status="warning">Step 4</IxWorkflowStep>
    <IxWorkflowStep status="error">Step 5</IxWorkflowStep>
    <IxWorkflowStep disabled>Step 6</IxWorkflowStep>
  </IxWorkflowSteps>
</template>
