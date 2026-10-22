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

/**
 * Activity trace of an AI response: the ordered list of `ix-chat-trace-item` elements that shows how
 * the AI produced the response. Place it in the `trace` slot of `ix-chat-ai-message`.
 *
 * Without `summary` the Trace items are shown flat without a header (e.g. while the response is running).
 * Once `summary` is set, a toggle header shows the Trace summary and controls the visibility of the
 * Trace items, e.g. set `summary` and `expanded="false"` when the response is complete.
 * The Trace items keep their DOM identity and focus when the summary appears. To keep them visible
 * (e.g. a header from the start of the response), set `expanded` together with `summary`.
 * If the Trace items are hidden while one of them has focus, focus moves to the summary toggle.
 *
 * The component is controlled and has no orchestration logic: the application decides when to show the
 * summary, which items to expand and what to announce to screen readers.
 *
 * Mapping from Element chat messages:
 * `activity-trace` maps to `ix-chat-activity-trace` in the `trace` slot of the AI message,
 * `activity` maps to `ix-chat-trace-item`, each `input` entry and the `output` map to one
 * `ix-chat-trace-item-section` each, and `loading` maps to `state="running"`.
 *
 * @since 6.1.0
 * @slot - Trace items (`ix-chat-trace-item`)
 * @slot summary-meta - Optional metadata shown next to the summary, e.g. the duration or number of steps
 */
@Component({
  tag: 'ix-chat-activity-trace',
  styleUrl: 'chat-activity-trace.scss',
  shadow: true,
})
export class ChatActivityTrace {
  /**
   * Trace summary, e.g. "Answer generated from 3 sources".
   * If set, a toggle header is shown that controls the visibility of the Trace items.
   * If not set, the Trace items are always shown without a header.
   */
  @Prop() summary?: string;

  /**
   * Whether the Trace items are shown while a `summary` is set.
   */
  @Prop({ mutable: true, reflect: true }) expanded: boolean = false;

  /**
   * Emitted when the user toggles the summary, with the requested `expanded` value.
   * Call `preventDefault()` to keep the current state.
   * The event does not bubble.
   */
  @Event({ bubbles: false }) expandedChange!: EventEmitter<boolean>;

  @Element() hostElement!: HTMLIxChatActivityTraceElement;

  private toggleButton?: HTMLButtonElement;
  private itemsContainer?: HTMLDivElement;
  private moveFocusToToggle = false;

  private isListVisible() {
    return !this.summary || this.expanded;
  }

  componentWillRender() {
    const isHiding =
      !!this.itemsContainer &&
      !this.itemsContainer.hidden &&
      !this.isListVisible();
    this.moveFocusToToggle =
      isHiding &&
      Array.from(this.hostElement.children).some(
        (child) => !child.hasAttribute('slot') && child.matches(':focus-within')
      );
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
    const hasSummary = !!this.summary;
    const isListVisible = this.isListVisible();

    return (
      <Host class={{ 'has-summary': hasSummary }}>
        <div class="header" hidden={!hasSummary}>
          {hasSummary && (
            <button
              type="button"
              class="toggle"
              ref={(ref) => (this.toggleButton = ref)}
              aria-expanded={a11yBoolean(this.expanded)}
              aria-controls="items"
              onClick={() => this.toggle()}
            >
              <ix-icon
                class={{ chevron: true, expanded: this.expanded }}
                name={iconChevronRightSmall}
                size="16"
                aria-hidden="true"
              ></ix-icon>
              <span class="summary">{this.summary}</span>{' '}
              <span class="meta">
                <slot name="summary-meta"></slot>
              </span>
            </button>
          )}
        </div>
        <div
          id="items"
          class="items"
          role="list"
          hidden={!isListVisible}
          ref={(ref) => (this.itemsContainer = ref)}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
