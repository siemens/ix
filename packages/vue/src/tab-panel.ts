/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { JSX } from '@siemens/ix';
import { defineCustomElement as defineIxTabPanel } from '@siemens/ix/components/ix-tab-panel.js';
import {
  defineContainer,
  type StencilVueComponent,
} from '@stencil/vue-output-target/runtime';
import {
  defineComponent,
  h,
  inject,
  type InjectionKey,
  type PropType,
  type Ref,
} from 'vue';

const InternalIxTabPanel: StencilVueComponent<JSX.IxTabPanel> =
  // eslint-disable-next-line no-inline-comments
  /*@__PURE__*/ defineContainer<JSX.IxTabPanel>(
    'ix-tab-panel',
    defineIxTabPanel,
    ['tabKey']
  );

export const ixTabSetActiveKey: InjectionKey<Ref<string | undefined>> = Symbol(
  'ix-tab-set-active-key'
);

export const IxTabPanel = defineComponent({
  name: 'IxTabPanel',
  inheritAttrs: false,
  props: {
    tabKey: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props, { attrs, slots }) {
    const activeTabKey = inject(ixTabSetActiveKey, null);

    return () =>
      h(
        InternalIxTabPanel,
        {
          ...attrs,
          tabKey: props.tabKey,
        },
        activeTabKey === null || activeTabKey.value === props.tabKey
          ? slots
          : undefined
      );
  },
});
