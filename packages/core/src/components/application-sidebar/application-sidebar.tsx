/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Listen, State } from '@stencil/core';
import { animate } from 'animejs';
import type { AnimationParams } from 'animejs';
import Animation from '../utils/animation';

/** @internal */
@Component({
  tag: 'ix-application-sidebar',
  styleUrl: 'application-sidebar.scss',
  shadow: true,
})
export class ApplicationSidebar {
  @Element() hostElement!: HTMLIxApplicationSidebarElement;

  @State() visible = true;

  @Listen('application-sidebar-toggle', {
    target: 'window',
  })
  listenToggleEvent() {
    const visibility = !this.visible;
    const animation: AnimationParams = {
      width: visibility ? ['0', '22rem'] : ['22rem', '0'],
      opacity: visibility ? [0, 1] : [1, 0],
      easing: 'easeInSine',
      duration: Animation.defaultTime,
    };

    const changeVisibility = () => {
      this.visible = visibility;
    };

    if (visibility) {
      animation.begin = changeVisibility.bind(this);
    } else {
      animation.complete = changeVisibility.bind(this);
    }

    animate(this.hostElement, animation);
  }

  render() {
    return (
      <Host
        slot="application-sidebar"
        class={{
          visible: this.visible,
        }}
      >
        {this.visible ? <slot></slot> : null}
      </Host>
    );
  }
}
