<script setup lang="ts">
import { IxDateDropdown } from '@siemens/ix-vue';
import dayjs from 'dayjs';

const dateDropdownOptions = [
  {
    label: 'No time limit',
    getValue: () => {
      const today = dayjs();
      return { from: undefined, to: today };
    },
  },
  {
    label: 'Today',
    getValue: () => {
      const today = dayjs();
      return { from: today, to: today };
    },
  },
  {
    label: 'Last 7 days',
    getValue: () => {
      const today = dayjs();
      return {
        from: today.subtract(7, 'day') as dayjs.Dayjs,
        to: today,
      };
    },
  },
];
</script>

<template>
  <IxDateDropdown :dateRangeOptions="dateDropdownOptions" />
</template>

<style scoped></style>
