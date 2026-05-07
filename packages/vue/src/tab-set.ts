/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { JSX } from '@siemens/ix';
import {
  defineContainer,
  type StencilVueComponent,
} from '@stencil/vue-output-target/runtime';
import { defineCustomElement as defineIxTabPanel } from '@siemens/ix/components/ix-tab-panel.js';
import { defineCustomElement as defineIxTabSet } from '@siemens/ix/components/ix-tab-set.js';
import {
  defineComponent,
  h,
  inject,
  isVNode,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  provide,
  ref,
  type PropType,
  type Ref,
  type VNode,
} from 'vue';

const InternalIxTabPanel: StencilVueComponent<JSX.IxTabPanel> =
  // eslint-disable-next-line no-inline-comments
  /*@__PURE__*/ defineContainer<JSX.IxTabPanel>(
    'ix-tab-panel',
    defineIxTabPanel,
    ['tabKey']
  );

const InternalIxTabSet: StencilVueComponent<JSX.IxTabSet> =
  // eslint-disable-next-line no-inline-comments
  /*@__PURE__*/ defineContainer<JSX.IxTabSet>('ix-tab-set', defineIxTabSet);

const ixTabSetActiveKey = Symbol('ix-tab-set-active-key');

type HTMLRefElement<T> = { $el: T };

function normalizeChildren(children: unknown): VNode[] {
  if (Array.isArray(children)) {
    return children.filter((child): child is VNode => isVNode(child));
  }

  return isVNode(children) ? [children] : [];
}

function getNestedChildren(child: VNode): VNode[] {
  const { children } = child;

  if (Array.isArray(children)) {
    return children.filter((nestedChild): nestedChild is VNode =>
      isVNode(nestedChild)
    );
  }

  if (children && typeof children === 'object') {
    return Object.values(children)
      .filter(
        (slot): slot is () => VNode[] | VNode => typeof slot === 'function'
      )
      .flatMap((slot) => normalizeChildren(slot()));
  }

  return [];
}

function findTabState(children: VNode[]): {
  activeTabKey?: string;
  firstTabKey?: string;
} {
  let firstTabKey: string | undefined;

  for (const child of children) {
    if (!isVNode(child)) {
      continue;
    }

    const props = (child.props ?? {}) as Record<string, unknown>;

    if (typeof props.activeTabKey === 'string') {
      return {
        activeTabKey: props.activeTabKey,
        firstTabKey,
      };
    }

    if (!firstTabKey && typeof props.tabKey === 'string') {
      firstTabKey = props.tabKey;
    }

    const nestedState = findTabState(getNestedChildren(child));

    if (nestedState.activeTabKey !== undefined) {
      return {
        activeTabKey: nestedState.activeTabKey,
        firstTabKey: firstTabKey ?? nestedState.firstTabKey,
      };
    }

    firstTabKey ??= nestedState.firstTabKey;
  }

  return { firstTabKey };
}

export const IxTabSet = defineComponent({
  name: 'IxTabSet',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const tabSetRef = ref<HTMLRefElement<HTMLIxTabSetElement>>();
    const initialState = findTabState(normalizeChildren(slots.default?.()));
    const activeTabKey = ref<string | undefined>(
      initialState.activeTabKey ?? initialState.firstTabKey
    );

    provide(ixTabSetActiveKey, activeTabKey);

    const syncActiveTabKey = () => {
      const tabSetElement = tabSetRef.value?.$el;
      const tabsElement = tabSetElement?.querySelector('ix-tabs');
      const slotState = findTabState(normalizeChildren(slots.default?.()));

      activeTabKey.value =
        tabsElement?.activeTabKey ??
        slotState.activeTabKey ??
        slotState.firstTabKey;
    };

    const handleTabChange = (event: Event) => {
      activeTabKey.value = (event as CustomEvent<string | undefined>).detail;
    };

    const attachListener = () => {
      tabSetRef.value?.$el.addEventListener('tabChange', handleTabChange);
    };

    const detachListener = () => {
      tabSetRef.value?.$el.removeEventListener('tabChange', handleTabChange);
    };

    onMounted(async () => {
      await nextTick();
      syncActiveTabKey();
      attachListener();
    });

    onUpdated(async () => {
      await nextTick();
      syncActiveTabKey();
    });

    onBeforeUnmount(() => {
      detachListener();
    });

    return () =>
      h(
        InternalIxTabSet,
        {
          ...attrs,
          ref: tabSetRef,
        },
        slots
      );
  },
});

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
    const activeTabKey = inject<Ref<string | undefined> | null>(
      ixTabSetActiveKey,
      null
    );

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
