/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Host,
  Listen,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import { ContextProvider, createContextProvider } from '../utils/context';
import { TabContext as TabContextObject } from './context';

/**
 * The `ix-tab-context` component provides a context for tab items and panels.
 * It allows the active tab to be shared across the tab items and panels.
 * This component should be used to wrap `ix-tab-item` and `ix-tab-panel` components.
 *
 * ix-tab-context contains no UI state or any visual representation.
 * It is purely a context provider for the active tab value.
 *
 * It could be that the ix-tab-context needs to be written for each framework individually,
 * as it is a context provider and not a UI component.
 */
@Component({
  tag: 'ix-tab-context',
  shadow: true,
})
export class TabContext {
  @Element() hostElement!: HTMLIxTabContextElement;

  @Prop() value?: string;

  private provider!: ContextProvider<typeof TabContext>;

  connectedCallback() {
    this.provider = createContextProvider(this.hostElement, TabContextObject);
  }

  componentDidLoad() {
    this.onContextValueChange(this.value);
  }

  @Watch('value')
  onContextValueChange(value?: string) {
    this.provider.emit({ activeTab: value });
  }

  @Listen('tabClick')
  onTabClick(event: CustomEvent) {
    const { value } = event.detail;
    this.onContextValueChange(value);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
