<!--
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import type { MarkdownAction, MarkdownComponentContext } from '@siemens/ix';
import { createMarkdownComponent, IxButton, IxMarkdown } from '@siemens/ix-vue';
import { defineComponent, h, type PropType } from 'vue';

const Asset = defineComponent({
  props: {
    text: { type: String, required: true },
    attributes: {
      type: Object as PropType<Record<string, string>>,
      required: true,
    },
    emitAction: {
      type: Function as PropType<MarkdownComponentContext['emitAction']>,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h('div', [
        h('span', `${props.text} (${props.attributes.status})`),
        ' ',
        h(
          IxButton,
          {
            variant: 'secondary',
            onClick: () =>
              props.emitAction('open-asset', { id: props.attributes.id }),
          },
          () => 'Open asset'
        ),
      ]);
  },
});

const options = {
  components: { asset: createMarkdownComponent(Asset) },
};

const markdown = [
  'The following asset needs attention:',
  '',
  '::asset[Pump P-102]{id=p-102 status=warning}',
].join('\n');

const onActionClick = (event: CustomEvent<MarkdownAction>) => {
  console.log('Markdown action', event.detail);
};
</script>

<template>
  <IxMarkdown
    :markdown="markdown"
    :options="options"
    @actionClick="onActionClick"
  ></IxMarkdown>
</template>
