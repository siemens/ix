/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { FlipTileState } from './flip-tile-state';

@Component({
  tag: 'ix-flip-tile',
  styleUrl: 'flip-tile.scss',
  scoped: true,
})
export class CwFlipTile {
  private readonly ANIMATION_DURATION = 150;
  private contentContainerElement: HTMLDivElement;
  private contentItems: NodeList;

  @Element() hostElement: HTMLIxFlipTileElement;

  @State() index = 0;

  @State() isFlipAnimationActive: boolean;

  /**
   * Variation of the Flip
   */
  @Prop() state: FlipTileState;

  /**
   * Tmp property name
   */
  @Prop() footer: string;

  componentDidLoad() {
    this.contentItems = this.contentContainerElement.querySelectorAll(
      'ix-flip-tile-content'
    );
    this.contentItems.forEach((_, index) => {
      if (index !== this.index) {
        this.toggleContentItem(index);
      }
    });
  }

  private toggleIndex() {
    this.doFlipAnimation();
  }

  private toggleContentItem(index: number) {
    const item = this.contentItems[index] as HTMLElement;
    item.classList.toggle('d-none');
  }

  private doFlipAnimation() {
    this.isFlipAnimationActive = true;

    setTimeout(() => {
      this.toggleContentItem(this.index);

      if (this.index >= this.contentItems.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }

      this.toggleContentItem(this.index);
    }, this.ANIMATION_DURATION);

    setTimeout(() => {
      this.isFlipAnimationActive = false;
    }, 2 * this.ANIMATION_DURATION);
  }

  render() {
    return (
      <Host>
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
              icon="eye"
              variant="Primary"
              ghost
              onClick={() => this.toggleIndex()}
            ></ix-icon-button>
          </div>

          <div
            class="content-container"
            ref={(el) => (this.contentContainerElement = el)}
          >
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
