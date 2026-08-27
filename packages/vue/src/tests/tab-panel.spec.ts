/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable vue/one-component-per-file */
import { cleanup, render } from '@testing-library/vue';
import { defineComponent, h, nextTick } from 'vue';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { IxTabPanel, IxTabs, IxTabSet } from '../index';

afterEach(cleanup);

function panelContent(text: string, onSetup: () => void) {
  return defineComponent({
    setup() {
      onSetup();
      return () => h('span', text);
    },
  });
}

function renderTabSet(activeTabKey: string) {
  const firstPanelMount = vi.fn();
  const secondPanelMount = vi.fn();
  const FirstPanelContent = panelContent('First panel', firstPanelMount);
  const SecondPanelContent = panelContent('Second panel', secondPanelMount);
  const result = render(
    defineComponent({
      setup() {
        return () =>
          h(IxTabSet, null, {
            default: () => [
              h(IxTabs, { activeTabKey }),
              h(
                IxTabPanel,
                { tabKey: 'first' },
                { default: () => h(FirstPanelContent) }
              ),
              h(
                IxTabPanel,
                { tabKey: 'second' },
                { default: () => h(SecondPanelContent) }
              ),
            ],
          });
      },
    })
  );

  return { ...result, firstPanelMount, secondPanelMount };
}

describe('IxTabPanel', () => {
  it('is exported from the package entry point', () => {
    expect(IxTabPanel).toBeDefined();
  });

  it('only mounts the initially active panel slot', () => {
    const { queryByText, firstPanelMount, secondPanelMount } =
      renderTabSet('second');

    expect(queryByText('First panel')).toBeNull();
    expect(queryByText('Second panel')).not.toBeNull();
    expect(firstPanelMount).not.toHaveBeenCalled();
    expect(secondPanelMount).toHaveBeenCalledOnce();
  });

  it('mounts an inactive panel slot after tabChange activates it', async () => {
    const { container, queryByText, firstPanelMount, secondPanelMount } =
      renderTabSet('first');

    expect(queryByText('First panel')).not.toBeNull();
    expect(queryByText('Second panel')).toBeNull();
    expect(firstPanelMount).toHaveBeenCalledOnce();
    expect(secondPanelMount).not.toHaveBeenCalled();

    await nextTick();
    await nextTick();
    const tabSet = container.querySelector('ix-tab-set');
    expect(tabSet).not.toBeNull();
    tabSet!.dispatchEvent(new CustomEvent('tabChange', { detail: 'second' }));
    await nextTick();

    expect(queryByText('First panel')).toBeNull();
    expect(queryByText('Second panel')).not.toBeNull();
    expect(firstPanelMount).toHaveBeenCalledOnce();
    expect(secondPanelMount).toHaveBeenCalledOnce();
  });
});
