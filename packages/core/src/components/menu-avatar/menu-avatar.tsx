/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
  State,
  Watch,
} from '@stencil/core';
import { hasSlottedElements } from '../utils/shadow-dom';

@Component({
  tag: 'ix-menu-avatar',
  styleUrl: 'menu-avatar.scss',
  shadow: true,
})
export class MenuAvatar {
  @Element() hostElement!: HTMLIxMenuAvatarElement;

  /**
   * First line of text
   */
  @Prop() top: string;

  /**
   * Second line of text
   */
  @Prop() bottom: string;

  /**
   * Display a avatar image
   *
   * @since 1.4.0
   */
  @Prop() image: string;

  /**
   * Display the initials of the user. Will be overwritten by image
   *
   * @since 1.4.0
   */
  @Prop() initials: string;

  /**
   * Use for translation
   */
  @Prop() i18nLogout: string = 'Logout';

  /**
   *  Control the visibility of the logout button
   *  @since 2.0.2
   */
  @Prop() showLogoutButton: boolean = true;

  /**
   * Control fo the visibility of the dropdown menu
   * @since 2.0.2
   */
  @State() hasContent: boolean = true;

  /**
   * Logout click
   */
  @Event() logoutClick: EventEmitter;

  private avatarElementId = 'ix-menu-avatar-id';

  @Watch('showLogoutButton')
  tst() {
    console.log(this.showLogoutButton);
  }

  render() {
    return (
      <Host slot="ix-menu-avatar">
        <button
          class="nav-item top-item avatar no-hover"
          title={this.top}
          id={this.avatarElementId}
          tabIndex={0}
        >
          <ix-avatar image={this.image} initials={this.initials}></ix-avatar>

          <div class="avatar-name">
            <span class="text-default-single" title={this.top}>
              {this.top}
            </span>
            <span class="text-default-single" title={this.bottom}>
              {this.bottom}
            </span>
          </div>
        </button>
        {this.hasContent || this.showLogoutButton ? (
          <ix-dropdown
            trigger={this.hostElement}
            placement={'right-start'}
            offset={{
              mainAxis: 16,
            }}
          >
            <slot
              onSlotchange={() => {
                this.hasContent = hasSlottedElements(this.hostElement);
              }}
            ></slot>
            {this.showLogoutButton ? (
              <ix-menu-avatar-item
                label={this.i18nLogout}
                icon={'log-out'}
                onClick={(e) => {
                  this.logoutClick.emit(e);
                }}
              ></ix-menu-avatar-item>
            ) : null}
          </ix-dropdown>
        ) : null}
      </Host>
    );
  }
}
