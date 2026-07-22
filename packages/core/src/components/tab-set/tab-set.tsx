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
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';

/**
 * @internal
 * @since 5.0.0
 * */
@Component({
  tag: 'ix-tab-set',
  styleUrl: 'tab-set.scss',
  shadow: true,
})
export class TabSet {
  @Element() hostElement!: HTMLIxTabSetElement;

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
  private panelSyncQueued = false;

  private getTabKey(
    element: HTMLIxTabItemElement | HTMLIxTabPanelElement
  ): string | undefined {
    return element.tabKey ?? element.getAttribute('tab-key') ?? undefined;
  }

  private get activeTabKey(): string | undefined {
    return (
      this.tabList?.activeTabKey ??
      this.tabList?.getAttribute('active-tab-key') ??
      undefined
    );
  }

  private schedulePanelSync() {
    if (this.panelSyncQueued) {
      return;
    }

    this.panelSyncQueued = true;
    requestAnimationFrameNoNgZone(() => {
      this.panelSyncQueued = false;
      this.onPanelComponentsChange();
    });
  }

  private containsTabElement(nodes: NodeList) {
    return Array.from(nodes).some(
      (node) =>
        node instanceof HTMLElement &&
        (node.matches('ix-tabs, ix-tab-item, ix-tab-panel') ||
          !!node.querySelector('ix-tabs, ix-tab-item, ix-tab-panel'))
    );
  }

  private shouldSyncPanels(mutations: MutationRecord[]) {
    return mutations.some((mutation) => {
      if (mutation.type === 'childList') {
        return (
          this.containsTabElement(mutation.addedNodes) ||
          this.containsTabElement(mutation.removedNodes)
        );
      }

      return (
        mutation.target instanceof HTMLElement &&
        mutation.target.matches('ix-tabs, ix-tab-item, ix-tab-panel')
      );
    });
  }

  componentWillLoad() {
    this.panelsObserver = new MutationObserver((mutations) => {
      if (this.shouldSyncPanels(mutations)) {
        this.schedulePanelSync();
      }
    });

    this.panelsObserver.observe(this.hostElement, {
      attributes: true,
      attributeFilter: ['active-tab-key', 'class', 'tab-key'],
      childList: true,
      subtree: true,
    });

    this.onPanelComponentsChange();
  }

  componentDidLoad() {
    this.onPanelComponentsChange();
    this.schedulePanelSync();
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

    const activeTabKey = this.activeTabKey;
    if (!activeTabKey) {
      return;
    }

    const activeTabElement = tabItems.find(
      (tab) => this.getTabKey(tab) === activeTabKey
    );

    const activeTabPanel = panels.find(
      (panel) => this.getTabKey(panel) === activeTabKey
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

    const activeTabKey = this.activeTabKey;
    panels.forEach((panel) => {
      panel.hidden = this.getTabKey(panel) !== activeTabKey;
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
