/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'ix-event-list-item',
  styleUrl: 'event-list-item.scss',
  scoped: false,
})
export class EventListItem {
  @Element() el!: HTMLIxEventListItemElement;

  /**
   * Color of the status indicator.
   * Allowed values are all Core UI color names.
   */
  @Prop() color: string;

  /**
   * Show event list item as selected
   */
  @Prop() selected: boolean;

  /**
   * Disable event list item
   */
  @Prop() disabled: boolean;

  /**
   * Show chevron on right side of the event list item
   */
  @Prop() chevron: boolean;

  /**
   * Opacity of the status indicator.
   * Defaults to 1.0
   *
   * @deprecated Will be removed in 7.0.0. Use color with alpha value.
   */
  @Prop() opacity = 1;

  /**
   * Event list item click
   */
  @Event() itemClick: EventEmitter;

  @Listen('click', { passive: true })
  handleItemClick() {
    this.itemClick.emit();
  }

  render() {
    return (
      <div
        class={{
          'ix-event-list-item': true,
          selected: this.selected,
          disabled: this.disabled,
        }}
      >
        <div
          class={`indicator ${!this.color ? 'indicator-empty' : ''}`}
          style={{
            'background-color': this.color
              ? `var(--theme-${this.color})`
              : 'inherit',
            opacity: `${this.disabled ? 0.4 : this.opacity}`,
          }}
        ></div>

        <div class="cui-event-list-item-content-container">
          <div class="event-content">
            <slot></slot>
          </div>
          <i class="glyph glyph-16 glyph-chevron-right chevron-icon"></i>
        </div>
      </div>
    );
  }
}
