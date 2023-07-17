/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

import { getButtonClasses } from '../button/base-button';
import { a11yBoolean } from '../utils/a11y';

/**
 * @internal
 */
@Component({
  tag: 'ix-burger-menu',
  styleUrl: './burger-menu.scss',
  shadow: true,
})
export class BurgerMenu {
  /**
   * Accessibility label for the burger menu button (MANDATORY)
   */
  @Prop() ixAriaLabel: string = 'Expand';

  /**
   * Does burger menu button display the expanded or the not expanded state
   */
  @Prop({ reflect: true }) expanded = false;

  /**
   * Display as pinned
   */
  @Prop() pinned = false;

  render() {
    return (
      <Host
        class={{
          expanded: this.expanded,
        }}
      >
        {this.pinned ? (
          <ix-icon-button icon="double-chevron-right" ghost></ix-icon-button>
        ) : (
          <button
            class={{
              ...getButtonClasses(
                'Secondary',
                false,
                true,
                true,
                false,
                false,
                false
              ),
              'burger-menu-button': true,
            }}
            type="button"
            aria-label={this.ixAriaLabel ? this.ixAriaLabel : null}
            aria-pressed={a11yBoolean(this.expanded)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <rect
                class="line line-1"
                x="2"
                y="5"
                width="20"
                height="2"
              ></rect>
              <rect
                class="line line-2"
                x="2"
                y="11"
                width="13"
                height="2"
              ></rect>
              <rect
                class="line line-3"
                x="2"
                y="17"
                width="20"
                height="2"
              ></rect>
            </svg>
          </button>
        )}
      </Host>
    );
  }
}
