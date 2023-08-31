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
  h,
  Host,
  Listen,
  State,
  Watch,
} from '@stencil/core';
import anime from 'animejs';
import Animation from '../utils/animation';
import { useContextProvider } from '../utils/context';
import { TestContext } from './events';

@Component({
  tag: 'ix-application-sidebar',
  styleUrl: 'application-sidebar.scss',
  shadow: true,
})
export class ApplicationSidebar {
  @Element() hostElement!: HTMLIxApplicationSidebarElement;

  @State() visible = true;

  componentWillLoad() {
    useContextProvider(this.hostElement, TestContext);
  }

  @Listen('application-sidebar-toggle', {
    target: 'window',
  })
  listenToggleEvent() {
    const visibility = !this.visible;
    const animation: anime.AnimeParams = {
      targets: this.hostElement,
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

    anime(animation);
  }

  @Watch('visible')
  onVisibilityChange() {}

  render() {
    return (
      <Host slot="application-sidebar">
        {this.visible ? <slot></slot> : null}
      </Host>
    );
  }
}
