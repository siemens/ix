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

// ID references only resolve within the same DOM tree (document or shadow root)
function setIdReference(
  element: HTMLElement,
  attribute: 'aria-controls' | 'aria-labelledby',
  target?: HTMLElement
) {
  if (target?.id && target.getRootNode() === element.getRootNode()) {
    element.setAttribute(attribute, target.id);
  } else {
    element.removeAttribute(attribute);
  }
}

/**
 * Container that manages a set of tabs and their content.
 *
 * @internal
 * @since 5.0.0
 *
 * @slot - Tab items and panels.
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

  componentWillLoad() {
    this.panelsObserver = new MutationObserver(() =>
      this.onPanelComponentsChange()
    );

    this.panelsObserver.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['id'],
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
    if (!tabs) {
      return;
    }

    const panels = this.tabPanels;
    this.tabListItems.forEach((tab) => {
      const panel = panels.find((panel) => panel.tabKey === tab.tabKey);
      setIdReference(tab, 'aria-controls', panel);
      if (panel) {
        setIdReference(panel, 'aria-labelledby', tab);
      }
    });

    if (tabs.activeTabKey) {
      this.checkPanelsVisibility();
    }
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
