/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconDoubleChevronLeft,
  iconDoubleChevronRight,
} from '@siemens/ix-icons/icons';
import { Component, h, Host, Prop } from '@stencil/core';
import { getButtonClasses } from '../button/base-button';
import { Breakpoint } from '../utils/breakpoints';
import { a11yBoolean } from '../utils/a11y';
/**
 * @internal
 */
@Component({
  tag: 'ix-menu-expand-icon',
  styleUrl: './menu-expand-icon.scss',
  shadow: true,
})
export class MenuExpandIcon {
  /** i18n label for 'Expand' button */
  @Prop({ attribute: 'i18n-expand' }) i18nExpand = 'Expand';

  /** i18n label for 'Collapse' button */
  @Prop({ attribute: 'i18n-collapse' }) i18nCollapse = 'Collapse';

  /** Whether the menu expand icon displays the expanded state or not */
  @Prop({ reflect: true }) expanded = false;

  /** Controls which icon is displayed */
  @Prop({ reflect: true }) breakpoint?: Breakpoint;

  /** Display as pinned */
  @Prop() pinned = false;

  getSmallScreenIcon() {
    return (
      <button
        aria-label={this.expanded ? this.i18nCollapse : this.i18nExpand}
        aria-pressed={a11yBoolean(this.expanded)}
        class={{
          ...getButtonClasses('subtle-tertiary', true, false, false, false),
          'menu-expand-button': true,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <rect class="line line-1" x="2" y="5" width="20" height="2"></rect>
          <rect class="line line-2" x="2" y="11" width="13" height="2"></rect>
          <rect class="line line-3" x="2" y="17" width="20" height="2"></rect>
        </svg>
      </button>
    );
  }

  getLargeScreenIcon() {
    return (
      <ix-icon-button
        aria-pressed={a11yBoolean(this.expanded)}
        aria-label={this.expanded ? this.i18nCollapse : this.i18nExpand}
        icon={this.expanded ? iconDoubleChevronLeft : iconDoubleChevronRight}
        variant="subtle-tertiary"
      ></ix-icon-button>
    );
  }

  getMenuIcon() {
    if (this.pinned || this.breakpoint === 'lg' || this.breakpoint === 'md') {
      return this.getLargeScreenIcon();
    }

    return this.getSmallScreenIcon();
  }

  render() {
    return (
      <Host
        class={{
          expanded: this.expanded,
          'ix-focusable': true,
        }}
      >
        {this.getMenuIcon()}
      </Host>
    );
  }
}
