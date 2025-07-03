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
  Fragment,
  h,
  Host,
  Prop,
  readTask,
  State,
} from '@stencil/core';
import { BaseButton } from '../button/base-button';
import { closestElement, hasSlottedElements } from '../utils/shadow-dom';
import { a11yHostAttributes } from '../utils/a11y';

function DefaultAvatar(props: { initials?: string; a11yLabel?: string }) {
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
      aria-label={props.a11yLabel}
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

function AvatarImage(props: {
  image?: string;
  initials?: string;
  a11yLabel?: string;
}) {
  return (
    <div class="avatar">
      {props.image ? (
        <img
          src={props.image}
          class="avatar-image"
          aria-label={props.a11yLabel}
        ></img>
      ) : (
        <DefaultAvatar initials={props.initials} a11yLabel={props.a11yLabel} />
      )}
    </div>
  );
}

function UserInfo(props: {
  image?: string;
  initials?: string;
  userName: string;
  extra?: string;
  a11yLabel?: string;
}) {
  return (
    <Fragment>
      <div class="user-info" onClick={(event) => event.preventDefault()}>
        <AvatarImage
          image={props.image}
          initials={props.initials}
          a11yLabel={props.a11yLabel}
        />
        <div class="user">
          <div class="username">{props.userName}</div>
          {props.extra && (
            <ix-typography class="extra" text-color={'soft'}>
              {props.extra}
            </ix-typography>
          )}
        </div>
      </div>
    </Fragment>
  );
}

@Component({
  tag: 'ix-avatar',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class Avatar {
  @Element() hostElement!: HTMLIxAvatarElement;

  /**
   * Accessibility label for the image
   * Will be set as aria-label on the nested HTML img element
   *
   * @deprecated Set the native `aria-label` on the ix-avatar host element
   */
  @Prop({ attribute: 'a11y-label' }) a11yLabel?: string;

  /**
   * Display an avatar image
   *
   */
  @Prop() image?: string;

  /**
   * Display the initials of the user. Will be overwritten by image
   *
   */
  @Prop() initials?: string;

  /**
   * If set an info card displaying the username will be placed inside the dropdown.
   * Note: Only working if avatar is part of the ix-application-header
   */
  @Prop() username?: string;

  /**
   * Optional description text that will be displayed underneath the username.
   * Note: Only working if avatar is part of the ix-application-header
   */
  @Prop() extra?: string;

  @State() isClosestApplicationHeader = false;
  @State() hasSlottedElements = false;

  private slotElement?: HTMLSlotElement;
  private dropdownElement?: HTMLIxDropdownElement;

  componentWillLoad() {
    const closest = closestElement('ix-application-header', this.hostElement);
    this.isClosestApplicationHeader = closest !== null;
  }

  private async slottedChanged() {
    this.hasSlottedElements = hasSlottedElements(this.slotElement);
  }

  private resolveAvatarTrigger() {
    return new Promise<HTMLElement>((resolve, reject) => {
      readTask(() => {
        const button = this.hostElement.shadowRoot!.querySelector('button');
        if (button) {
          resolve(button);
        } else {
          reject(new Error('ix-avatar - trigger element not found'));
        }
      });
    });
  }

  private onDropdownClick(event: MouseEvent) {
    if (event.target === this.dropdownElement) {
      event.preventDefault();
    }
  }

  render() {
    const a11y = a11yHostAttributes(this.hostElement);
    const a11yLabel = a11y['aria-label'];

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
            <AvatarImage
              image={this.image}
              initials={this.initials}
              a11yLabel={a11yLabel ?? this.a11yLabel}
            />
          </BaseButton>
          <ix-dropdown
            ref={(ref) => (this.dropdownElement = ref as HTMLIxDropdownElement)}
            trigger={this.resolveAvatarTrigger()}
            class="avatar-dropdown"
            onClick={(e) => this.onDropdownClick(e)}
          >
            {this.username && (
              <Fragment>
                <UserInfo
                  extra={this.extra}
                  image={this.image}
                  initials={this.initials}
                  userName={this.username}
                  a11yLabel={a11yLabel ?? this.a11yLabel}
                />
                {this.hasSlottedElements && (
                  <ix-divider onClick={(e) => e.preventDefault()}></ix-divider>
                )}
              </Fragment>
            )}
            <slot
              onSlotchange={() => this.slottedChanged()}
              ref={(ref) => (this.slotElement = ref as HTMLSlotElement)}
            ></slot>
          </ix-dropdown>
        </Host>
      );
    }

    return (
      <Host>
        <AvatarImage
          image={this.image}
          initials={this.initials}
          a11yLabel={a11yLabel ?? this.a11yLabel}
        />
      </Host>
    );
  }
}
