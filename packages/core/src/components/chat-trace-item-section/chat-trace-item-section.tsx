/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconChevronRightSmall } from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import { hasFocusInDefaultSlot } from '../utils/shadow-dom';

/**
 * One titled part of a Trace item's detail, such as its input, its output or its key findings.
 * Use one section per unit of data so that each part can be updated on its own (e.g. append streaming output).
 * If the content of a collapsible section is hidden while it has focus, focus moves to the heading toggle.
 *
 * @since 6.1.0
 * @slot - Section content, e.g. text, an `ix-markdown`, an `ix-code-block` or `ix-chip`/`ix-pill` entities
 */
@Component({
  tag: 'ix-chat-trace-item-section',
  styleUrl: 'chat-trace-item-section.scss',
  shadow: true,
})
export class ChatTraceItemSection {
  /**
   * Heading of the section, e.g. "Input", "Output" or "Findings".
   */
  @Prop() heading?: string;

  /**
   * If true, the heading is rendered as a toggle button that shows and hides the content.
   * Requires `heading`; without a heading the content is always shown.
   */
  @Prop() collapsible: boolean = false;

  /**
   * Whether the content of a collapsible section is shown.
   */
  @Prop({ mutable: true, reflect: true }) expanded: boolean = false;

  /**
   * Emitted when the user toggles a collapsible section, with the requested `expanded` value.
   * Call `preventDefault()` to keep the current state.
   * The event does not bubble.
   */
  @Event({ bubbles: false }) expandedChange!: EventEmitter<boolean>;

  @Element() hostElement!: HTMLIxChatTraceItemSectionElement;

  private toggleButton?: HTMLButtonElement;
  private contentContainer?: HTMLDivElement;
  private moveFocusToToggle = false;

  private isCollapsible() {
    return this.collapsible && !!this.heading;
  }

  private isContentVisible() {
    return !this.isCollapsible() || this.expanded;
  }

  componentWillRender() {
    const isHiding =
      !!this.contentContainer &&
      !this.contentContainer.hidden &&
      !this.isContentVisible();
    this.moveFocusToToggle =
      isHiding && hasFocusInDefaultSlot(this.hostElement);
  }

  componentDidRender() {
    if (this.moveFocusToToggle) {
      this.moveFocusToToggle = false;
      this.toggleButton?.focus();
    }
  }

  private toggle() {
    const expanded = !this.expanded;
    const { defaultPrevented } = this.expandedChange.emit(expanded);
    if (!defaultPrevented) {
      this.expanded = expanded;
    }
  }

  render() {
    const isCollapsible = this.isCollapsible();
    const isContentVisible = this.isContentVisible();

    return (
      <Host>
        {this.heading && !isCollapsible && (
          <div class="heading">{this.heading}</div>
        )}
        {isCollapsible && (
          <button
            type="button"
            class="heading heading-toggle"
            ref={(ref) => (this.toggleButton = ref)}
            aria-expanded={a11yBoolean(this.expanded)}
            aria-controls="content"
            onClick={() => this.toggle()}
          >
            <ix-icon
              class={{ chevron: true, expanded: this.expanded }}
              name={iconChevronRightSmall}
              size="16"
              aria-hidden="true"
            ></ix-icon>
            <span>{this.heading}</span>
          </button>
        )}
        <div
          id="content"
          class="content"
          hidden={!isContentVisible}
          ref={(ref) => (this.contentContainer = ref)}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
