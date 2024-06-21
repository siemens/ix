<script setup lang="ts">
import { IxDateDropdown } from '@siemens/ix-vue';

const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
});

const lastSevenDays = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const dateDropdownOptions = [
  {
    id: 'last-7',
    label: 'Last 7 days',
    from: lastSevenDays,
    to: today,
  },
  {
    id: 'today',
    label: 'Today',
    from: today,
    to: today,
  },
];
</script>

<template>
  <IxDateDropdown :dateRangeOptions="dateDropdownOptions" date-range-id="last-7" format="LL/dd/yyyy"/>
</template>

<style scoped></style>
