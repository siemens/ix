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
import { createMutationObserver } from '../utils/mutation-observer';
import { FlipTileState } from './flip-tile-state';

@Component({
  tag: 'ix-flip-tile',
  styleUrl: 'flip-tile.scss',
  shadow: true,
})
export class FlipTile {
  @Element() hostElement!: HTMLIxFlipTileElement;

  /**
   * Variation of the Flip
   */
  @Prop() state?: FlipTileState;

  /**
   * Height interpreted as REM
   * @since 1.5.0
   */
  @Prop() height: number | 'auto' = 15.125;

  /**
   * Width interpreted as REM
   * @since 1.5.0
   */
  @Prop() width: number | 'auto' = 16;

  /**
   * Index of the currently visible content
   * @since 3.0.0
   */
  @Prop() index = 0;

  /**
   * Event emitted when the index changes
   * @since 3.0.0
   */
  @Event() toggle!: EventEmitter<number>;

  @State() isFlipAnimationActive: boolean = false;

  private readonly ANIMATION_DURATION = 150;
  private contentItems: Array<HTMLIxFlipTileContentElement> = [];
  private observer?: MutationObserver;

  @Watch('index')
  watchIndex(newIndex: number, oldIndex: number) {
    if (newIndex === oldIndex) {
      return;
    }

    this.doFlipAnimation(newIndex);
  }

  componentDidLoad() {
    this.observer = createMutationObserver(() => this.updateContentItems());
    this.observer.observe(this.hostElement, {
      childList: true,
    });
  }

  componentWillLoad() {
    this.updateContentItems();
    this.updateContentVisibility(this.index);
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private updateContentItems() {
    this.contentItems = Array.from(
      this.hostElement.querySelectorAll('ix-flip-tile-content')
    );
  }

  private updateContentVisibility(indexVisible: number) {
    this.contentItems.forEach(
      (content, index) => (content.contentVisible = index === indexVisible)
    );
  }

  private toggleIndex() {
    let newIndex;

    if (this.index >= this.contentItems.length - 1) {
      newIndex = 0;
    } else {
      newIndex = this.index + 1;
    }

    const { defaultPrevented } = this.toggle.emit(newIndex);

    if (defaultPrevented) {
      return;
    }

    this.doFlipAnimation(newIndex);
  }

  private doFlipAnimation(index: number) {
    this.isFlipAnimationActive = true;

    setTimeout(() => {
      this.updateContentVisibility(this.index);

      this.index = index;

      this.updateContentVisibility(this.index);
    }, this.ANIMATION_DURATION);

    setTimeout(() => {
      this.isFlipAnimationActive = false;
    }, 2 * this.ANIMATION_DURATION);
  }

  render() {
    return (
      <Host
        style={{
          height: `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
          'min-height': `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
          'max-height': `${this.height}${this.height === 'auto' ? '' : 'rem'}`,
          width: `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
          'min-width': `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
          'max-width': `${this.width}${this.width === 'auto' ? '' : 'rem'}`,
        }}
      >
        <div
          class={{
            'flip-tile-container': true,
            info: this.state === FlipTileState.Info,
            warning: this.state === FlipTileState.Warning,
            alarm: this.state === FlipTileState.Alarm,
            primary: this.state === FlipTileState.Primary,
            'flip-animation-active': this.isFlipAnimationActive,
          }}
        >
          <div class="flip-tile-header">
            <div class="header-slot-container text-l-title">
              <slot name="header"></slot>
            </div>
            <ix-icon-button
              icon={'eye'}
              variant="primary"
              ghost
              onClick={() => this.toggleIndex()}
            ></ix-icon-button>
          </div>

          <div class="content-container">
            <slot></slot>
          </div>
          <div
            class={{
              footer: true,
              'contrast-light': this.state === FlipTileState.Warning,
              'contrast-dark':
                this.state === FlipTileState.Info ||
                this.state === FlipTileState.Alarm,
            }}
          >
            <slot name="footer"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
