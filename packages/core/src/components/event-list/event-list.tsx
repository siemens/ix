/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop } from '@stencil/core';
import { createMutationObserver } from '../utils/mutation-observer';
import { convertToRemString } from '../utils/rwd.util';

@Component({
  tag: 'ix-event-list',
  styleUrl: 'event-list.scss',
  scoped: true,
})
export class EventList {
  private readonly mutationObserver = createMutationObserver(
    this.onMutation.bind(this)
  );

  private static readonly fadeOutDuration = 50;
  private static readonly fadeInDuration = 150;

  @Element() el!: HTMLIxEventListElement;

  /**
   * Determines the height of list items.
   * This can either be one of two predefined sizes ('S' or 'L') or an absolute pixel value.
   * In case a number is supplied it will get converted to rem internally.
   * Defaults to 'S'.
   */
  @Prop() itemHeight: 'S' | 'L' | number = 'S';

  /**
   * Make event-list items more compact
   */
  @Prop() compact = false;

  /**
   * Animate state change transitions. Defaults to 'true'.
   */
  @Prop() animated = true;

  /**
   * Display a chevron icon in list items. Defaults to 'false'
   */
  @Prop() chevron: boolean;

  componentDidLoad() {
    if (this.animated) {
      this.triggerFadeIn();
    }

    if (typeof this.itemHeight === 'number') {
      const height = convertToRemString(this.itemHeight);
      this.el.querySelectorAll('.ix-event-list-item').forEach((item) => {
        item.classList.add('d-flex');
        this.setCustomHeight(item as HTMLElement, height);
      });
    }

    this.mutationObserver.observe(this.el, { childList: true, subtree: true });
  }

  private onMutation(mutationRecords: Array<MutationRecord>) {
    this.triggerFadeOut().then(() => {
      if (typeof this.itemHeight === 'number') {
        const height = convertToRemString(this.itemHeight);

        mutationRecords
          .filter((mutation) => mutation.type === 'childList')
          .forEach((mutation) =>
            mutation.addedNodes.forEach((item) => {
              const itemHtml = item as HTMLElement;
              if (!itemHtml.classList?.contains('ix-event-list-item')) {
                return;
              }

              itemHtml.classList.add('d-flex');
              this.setCustomHeight(itemHtml, height);
            })
          );
      }

      this.triggerFadeIn();
    });
  }

  private setCustomHeight(item: HTMLElement, height: string) {
    item.style.height = height;
    item.style.maxHeight = height;
  }

  private triggerFadeOut(): Promise<any> {
    if (!this.animated) {
      return Promise.resolve();
    }

    const keyframes = [
      {
        opacity: 1,
        easing: 'ease-in',
      },
      { opacity: 0 },
    ];
    const listElement = this.el.querySelector('ul');
    return listElement.animate(keyframes, {
      duration: EventList.fadeOutDuration,
    }).finished;
  }

  private triggerFadeIn() {
    if (!this.animated) {
      return;
    }

    const listItems = this.el.querySelectorAll('.ix-event-list-item');
    listItems.forEach((e, i) => {
      const delay = i * 80;
      const offset = delay / (delay + EventList.fadeInDuration);
      const keyframes = [
        { opacity: 0 },
        { opacity: 0, easing: 'ease-out', offset },
        { opacity: 1 },
      ];
      const options = {
        duration: EventList.fadeInDuration + delay,
        iterations: 1,
      };
      e.animate(keyframes, options);
    });
  }

  render() {
    return (
      <Host
        class={{
          'item-size-s': this.itemHeight === 'S',
          'item-size-l': this.itemHeight === 'L',
          compact: this.compact,
          chevron: this.chevron,
        }}
      >
        <ul>
          <slot></slot>
        </ul>
      </Host>
    );
  }
}
