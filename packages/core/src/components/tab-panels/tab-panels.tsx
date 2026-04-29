/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, Host, h } from '@stencil/core';
import { queryElements } from '../utils/focus/focus-utilities';

/**
 * @internal
 * @since 5.0.0
 * */
@Component({
  tag: 'ix-tab-panels',
  styleUrl: 'tab-panels.scss',
  shadow: true,
})
export class TabPanels {
  @Element() hostElement!: HTMLIxTabPanelsElement;

  private get tabPanels() {
    return Array.from(
      queryElements(this.hostElement, 'ix-tab-panel')
    ) as HTMLIxTabPanelElement[];
  }

  private get tabList() {
    return this.hostElement?.querySelector('ix-tabs');
  }

  private get tabListItems() {
    if (!this.tabList) {
      return [];
    }

    return Array.from(
      this.tabList.querySelectorAll('ix-tab-item')
    ) as HTMLIxTabItemElement[];
  }

  private panelsObserver?: MutationObserver;

  componentWillLoad() {
    this.panelsObserver = new MutationObserver(() =>
      this.onPanelComponentsChange()
    );

    this.panelsObserver.observe(this.hostElement, {
      childList: true,
      subtree: true,
    });

    this.onPanelComponentsChange();
  }

  componentDidLoad() {
    this.onPanelComponentsChange();
  }

  disconnectedCallback() {
    this.panelsObserver?.disconnect();
  }

  private onPanelComponentsChange() {
    const tabs = this.tabList;
    const tabItems = this.tabListItems;
    const panels = this.tabPanels;

    if (!tabs || !tabItems || !panels) {
      return;
    }

    const activeTabKey = tabs.activeTabKey;
    if (!activeTabKey) {
      return;
    }

    const activeTabElement = tabItems.find(
      (tab) => tab.tabKey === activeTabKey
    );

    const activeTabPanel = panels.find(
      (panel) => panel.tabKey === activeTabKey
    );

    if (!activeTabElement || !activeTabPanel) {
      return;
    }

    const tabId = activeTabElement.getAttribute('id');
    activeTabPanel.setAttribute('aria-labelledby', tabId ?? '');
    const tabPanelId = activeTabPanel.getAttribute('id');
    activeTabElement.setAttribute('aria-controls', tabPanelId ?? '');

    this.checkPanelsVisibility();
  }

  private checkPanelsVisibility() {
    const tabs = this.tabList?.querySelectorAll('ix-tab-item');
    const panels = this.tabPanels;

    if (!tabs || !panels) {
      return;
    }

    panels.forEach((panel) => {
      panel.hidden = panel.tabKey === this.tabList?.activeTabKey ? false : true;
    });
  }

  render() {
    return (
      <Host onTabChange={() => this.checkPanelsVisibility()}>
        <slot></slot>
      </Host>
    );
  }
}
