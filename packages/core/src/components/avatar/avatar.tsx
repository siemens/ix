/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function DefaultAvatar(props: { initials?: string }) {
  const { initials } = props;

  if (initials) {
    return <div class={'avatar-initials'}>{initials}</div>;
  }

  return (
    <svg
      class={'avatar-image'}
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
  );
}

import {
  Component,
  Element,
  h,
  Host,
  Prop,
  readTask,
  State,
} from '@stencil/core';
import { BaseButton } from '../button/base-button';
import { closestElement } from '../utils/shadow-dom';

/**
 * @since 2.0.0
 */
@Component({
  tag: 'ix-avatar',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class Avatar {
  @Element() hostElement: HTMLIxAvatarElement;

  /**
   * Display an avatar image
   *
   */
  @Prop() image: string;

  /**
   * Display the initials of the user. Will be overwritten by image
   *
   */
  @Prop() initials: string;

  @State() isClosestApplicationHeader = false;

  componentWillLoad() {
    const closest = closestElement('ix-application-header', this.hostElement);
    this.isClosestApplicationHeader = closest !== null;
  }

  private resolveAvatarTrigger() {
    return new Promise<HTMLElement>((resolve) => {
      readTask(() =>
        resolve(this.hostElement.shadowRoot.querySelector('button'))
      );
    });
  }

  render() {
    if (this.isClosestApplicationHeader) {
      return (
        <Host slot="ix-application-header-avatar" class={'avatar-button'}>
          <BaseButton
            disabled={false}
            ghost={true}
            iconOval={false}
            icon={undefined}
            iconOnly={false}
            loading={false}
            outline={false}
            selected={false}
            type="button"
            variant="primary"
          >
            <li class="avatar">
              {this.image ? (
                <img src={this.image} class="avatar-image"></img>
              ) : (
                <DefaultAvatar initials={this.initials} />
              )}
            </li>
          </BaseButton>
          <ix-dropdown trigger={this.resolveAvatarTrigger()}>
            <slot></slot>
          </ix-dropdown>
        </Host>
      );
    }

    return (
      <Host>
        <li class="avatar">
          {this.image ? (
            <img src={this.image} class="avatar-image"></img>
          ) : (
            <DefaultAvatar initials={this.initials} />
          )}
        </li>
      </Host>
    );
  }
}
