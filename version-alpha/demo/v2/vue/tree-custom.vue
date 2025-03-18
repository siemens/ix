<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { TreeContext, TreeModel } from '@siemens/ix';
import { IxButton, IxTree } from '@siemens/ix-vue';
import { defineComponent, onMounted, ref } from 'vue';

type TreeData = {
  name: string;
  icon: string;
};

const context = ref<TreeContext>();
const model = ref<TreeModel<TreeData>>();

function renderItem(data: TreeData) {
  return defineComponent({
    setup: () => {
      data;
    },
    template: `
    <div style="display: flex; align-items: center">
      <IxIcon :name="data.icon" size="16" style="margin-inline-end: 0.5rem" />
      {{ data.name }}
    </div>`,
  });
}

function expandAndSelect() {
  context.value = {
    sample: {
      isExpanded: true,
      isSelected: false,
    },
    'sample-child-2': {
      isSelected: true,
      isExpanded: false,
    },
  };
}

onMounted(() => {
  model.value = {
    root: {
      id: 'root',
      data: {
        icon: '',
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
        icon: 'star',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
        icon: 'cut',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
        icon: 'print',
      },
      hasChildren: false,
      children: [],
    },
  };
});
</script>

<template>
  <div style="display: block; position: relative; width: 100%; height: 40rem">
    <IxButton @click="expandAndSelect" ghost style="margin-bottom: 2rem">
      Expand Tree
    </IxButton>
    <IxTree
      root="root"
      :model="model"
      :context="context"
      @contextChange="({ detail }) => (context = detail)"
    >
    </IxTree>
  </div>
</template>
