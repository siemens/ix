/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'ix-menu-avatar',
  styleUrl: 'menu-avatar.scss',
  scoped: true,
})
export class MenuAvatar {
  @Element() hostElement: HTMLIxMenuAvatarElement;

  /**
   * First line of text
   */
  @Prop() top: string;

  /**
   * Second line of text
   */
  @Prop() bottom: string;

  /**
   *
   */
  @Prop() i18nLogout = 'Logout';

  /**
   * Logout click
   */
  @Event() logoutClick: EventEmitter;

  private avatarElementId = 'ix-menu-avatar-id';

  render() {
    return (
      <Host>
        <li
          class="nav-item top-item avatar no-hover"
          title={this.top}
          id={this.avatarElementId}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                id="avatar-path-background"
                d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163
                    16-16c0-4.243-1.686-8.313-4.686-11.314C24.314 1.686 20.244 0 16 0z"
              />
              <path
                id="avatar-path-person"
                d="M17.897 17.91c3.8-.018 7.358 1.875 9.485 5.046-2.417 3.999-6.734 6.434-11.382
                  6.42-4.648.014-8.965-2.421-11.382-6.42 2.127-3.171 5.685-5.064
                  9.485-5.045h3.794zM15.821 2.129c3.682 0 6.667 2.984 6.667 6.666 0 3.682-2.985
                  6.667-6.667 6.667s-6.667-2.985-6.667-6.667 2.985-6.666 6.667-6.666z"
              />
            </g>
          </svg>
          <div class="avatar-name">
            <span class="text-default-single" title={this.top}>
              {this.top}
            </span>
            <span class="text-default-single" title={this.bottom}>
              {this.bottom}
            </span>
          </div>
        </li>
        <ix-dropdown
          trigger={this.avatarElementId}
          placement={'right-start'}
          positioningStrategy={'absolute'}
        >
          <slot></slot>
          <ix-menu-avatar-item
            label={this.i18nLogout}
            icon="log-out"
            onClick={(e) => {
              this.logoutClick.emit(e);
            }}
          ></ix-menu-avatar-item>
        </ix-dropdown>
      </Host>
    );
  }
}
