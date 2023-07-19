/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';

export type BarNumbers = {
  count: number;
  stripped: number;
  icon: string;
  color: string;
};

@Component({
  tag: 'ix-information-bar',
  styleUrl: 'information-bar.scss',
  shadow: true,
})
export class InformationBar {
  @Element() el: HTMLIxInformationBarElement;

  /**
   * Configuration of the bar
   */
  @Prop() bar: BarNumbers[] = [];

  @Watch('bar')
  onBarChange() {
    setTimeout(() => this.setPositionsOfIcons());
  }

  componentDidRender() {
    setTimeout(() => this.setPositionsOfIcons());
  }

  setPositionsOfIcons() {
    let currentBarWidth = 0;
    let currentIconWidth = 0;
    let sumOfMargins = 0;
    const margins: number[] = [];
    const iconElements = [];

    this.bar?.forEach((_, index) => {
      const barElement = this.el.shadowRoot.querySelector('#bar-' + index);

      const iconElement = this.el.shadowRoot.querySelector('#icon-' + index);

      const barTileWidth = barElement?.getBoundingClientRect().width;
      const iconTileWidth = iconElement?.getBoundingClientRect().width;

      const newBarWidth = currentBarWidth + barTileWidth;
      const newIconWidth = currentIconWidth + iconTileWidth + sumOfMargins;

      const marginForIcon =
        newBarWidth > newIconWidth ? newBarWidth - newIconWidth : 0;
      iconElement?.setAttribute('style', `margin-right: ${marginForIcon}px`);

      currentBarWidth += barTileWidth;
      currentIconWidth += iconTileWidth;
      sumOfMargins += marginForIcon;
      margins.push(marginForIcon);
      iconElements.push(iconElement);
    });

    const overlap = currentIconWidth + sumOfMargins - currentBarWidth;

    if (overlap > 0) {
      for (let i = margins.length - 1; i >= 0; i--) {
        if (margins[i] > overlap) {
          iconElements[i].setAttribute(
            'style',
            `margin-right: ${margins[i] - overlap + 4}px`
          );
          break;
        }
      }
    }
  }

  sum() {
    return this.bar.map((el) => el.count).reduce((acc, el) => acc + el);
  }

  render() {
    return (
      <Host>
        <div class="bar-container">
          {this.bar?.map((bar, index) => {
            return (
              <div class={bar.color} style={{width: (100 * bar.count) / this.sum() + '%'}}
                   id={'bar-' + index.toString()}>
                <div class={bar.color + '-bar'} style={{width: (100 * bar.stripped) / bar.count + '%'}}></div>
              </div>
            );
          })}
        </div>
        <div class="icon-container">
          {this.bar?.map((bar, index) => {
            return (
              <div class="icon-and-text" id={'icon-' + index.toString()}>
                <ix-icon class={bar.color + '-icon'} name={bar.icon} size="16"></ix-icon>
                <span class="distance">{bar.count}</span>
              </div>
            );
          })}
        </div>
      </Host>
    );
  }
}
