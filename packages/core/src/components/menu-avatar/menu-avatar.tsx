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
} from '@stencil/core';
import { getSlottedElements } from '../utils/shadow-dom';
import { iconLogOut } from '@siemens/ix-icons/icons';

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
  @Prop() top?: string;

  /**
   * Second line of text
   */
  @Prop() bottom?: string;

  /**
   * Display a avatar image
   *
   * @since 1.4.0
   */
  @Prop() image?: string;

  /**
   * Display the initials of the user. Will be overwritten by image
   *
   * @since 1.4.0
   */
  @Prop() initials?: string;

  /**
   * Use for translation
   */
  @Prop() i18nLogout: string = 'Logout';

  /**
   *  Control the visibility of the logout button
   *  @since 2.1.0
   */
  @Prop() showLogoutButton: boolean = true;

  /**
   * Control the visibility of the dropdown menu
   * @since 2.1.0
   */
  @State() showContextMenu: boolean = false;

  /**
   * Logout click
   */
  @Event() logoutClick!: EventEmitter;

  private avatarElementId = 'ix-menu-avatar-id';

  onSlotChange() {
    const slot = this.hostElement.shadowRoot!.querySelector('slot');
    if (!slot) {
      return;
    }
    const elements = getSlottedElements(slot);
    this.showContextMenu = elements.length !== 0;
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
        <ix-dropdown
          trigger={this.hostElement}
          placement={'right-start'}
          hidden={!this.showContextMenu && !this.showLogoutButton}
          offset={{
            mainAxis: 16,
          }}
        >
          <slot onSlotchange={() => this.onSlotChange()}></slot>
          {this.showLogoutButton ? (
            <ix-menu-avatar-item
              label={this.i18nLogout}
              icon={iconLogOut}
              onClick={(e) => {
                this.logoutClick.emit(e);
              }}
            ></ix-menu-avatar-item>
          ) : null}
        </ix-dropdown>
      </Host>
    );
  }
}
