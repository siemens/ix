/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconChevronRightSmall,
  iconCircleDot,
  iconError,
  iconWarning,
} from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h,
} from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import type { ChatTraceItemState } from './chat-trace-item.types';
import { hasDefaultSlotContent, isContentNode } from '../utils/shadow-dom';

/**
 * One step in an Activity trace, e.g. reasoning, reading a file or a tool call.
 * Place it inside `ix-chat-activity-trace`.
 *
 * The marker shows a spinner while `running`, a warning or error icon for `warning` and `failed`,
 * and the type `icon` otherwise. The state is part of the accessible name (e.g. "Read page.tsx, failed").
 *
 * Without detail content the item is rendered as static text. With detail content the label becomes a
 * toggle button that shows and hides the detail.
 *
 * While the AI works and nothing specific is running, show a single running Trace item with a generic
 * label such as "Thinking…" instead of a loading indicator. Show interrupted steps as `warning` with an
 * explanatory label such as "Stopped".
 *
 * @since 6.1.0
 * @slot - Detail of the step. Use one `ix-chat-trace-item-section` per unit of data (each input, the output, key findings).
 */
@Component({
  tag: 'ix-chat-trace-item',
  styleUrl: 'chat-trace-item.scss',
  shadow: true,
})
export class ChatTraceItem {
  @Element() hostElement!: HTMLIxChatTraceItemElement;

  /**
   * Label of the step, e.g. "Reading page.tsx" while running and "Read page.tsx" once completed.
   */
  @Prop() label?: string;

  /**
   * Icon that indicates the type of the step. Any iX icon can be used.
   * Recommended icons for the base types:
   *
   * - reasoning: `bulb`
   * - retrieval: `search`
   * - computation: `calculator`
   * - generation: `ai`
   * - system action: `cogwheel`
   * - workflow: `chain-step`
   * - read: `document`
   * - summary: `list-text`
   * - generic: `circle-dot` (used when no icon is set)
   */
  @Prop() icon?: string;

  /**
   * State of the step.
   *
   * - `running`: The step is in progress. Shows a spinner and sets `aria-busy`.
   * - `completed`: The step finished successfully.
   * - `warning`: The step completed with warnings, e.g. partial results or an Interrupt.
   * - `failed`: The step failed.
   */
  @Prop() state: ChatTraceItemState = 'completed';

  /**
   * Whether the detail is shown. Has no effect while the item has no detail.
   */
  @Prop({ mutable: true, reflect: true }) expanded: boolean = false;

  /**
   * i18n state text for `running` used in the accessible name.
   */

  @Prop({ attribute: 'i18n-state-running' }) i18nStateRunning = 'running';

  /**
   * i18n state text for `completed` used in the accessible name.
   */

  @Prop({ attribute: 'i18n-state-completed' }) i18nStateCompleted = 'completed';

  /**
   * i18n state text for `warning` used in the accessible name.
   */

  @Prop({ attribute: 'i18n-state-warning' }) i18nStateWarning = 'warning';

  /**
   * i18n state text for `failed` used in the accessible name.
   */

  @Prop({ attribute: 'i18n-state-failed' }) i18nStateFailed = 'failed';

  /**
   * Emitted when the user toggles the detail, with the requested `expanded` value.
   * Call `preventDefault()` to keep the current state.
   * The event does not bubble.
   */
  @Event({ bubbles: false }) expandedChange!: EventEmitter<boolean>;

  @State() hasDetail = false;

  componentWillLoad() {
    this.hasDetail = hasDefaultSlotContent(this.hostElement);
  }

  private handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    this.hasDetail = slot
      .assignedNodes({ flatten: true })
      .some((node) => isContentNode(node));
  }

  private toggle() {
    const expanded = !this.expanded;
    const { defaultPrevented } = this.expandedChange.emit(expanded);
    if (!defaultPrevented) {
      this.expanded = expanded;
    }
  }

  private getStateText() {
    switch (this.state) {
      case 'running':
        return this.i18nStateRunning;
      case 'warning':
        return this.i18nStateWarning;
      case 'failed':
        return this.i18nStateFailed;
      default:
        return this.i18nStateCompleted;
    }
  }

  private renderMarker() {
    if (this.state === 'running') {
      return <ix-spinner class="spinner" size="xs"></ix-spinner>;
    }

    const name =
      this.state === 'warning'
        ? iconWarning
        : this.state === 'failed'
          ? iconError
          : (this.icon ?? iconCircleDot);

    return <ix-icon class="icon" name={name} size="16"></ix-icon>;
  }

  private renderSummary() {
    return [
      <span class="marker" aria-hidden="true">
        {this.renderMarker()}
      </span>,
      <span class="label" aria-hidden="true">
        {this.label}
      </span>,
      <span class="visually-hidden">
        {this.label}, {this.getStateText()}
      </span>,
    ];
  }

  render() {
    const isExpanded = this.hasDetail && this.expanded;

    return (
      <Host
        role="listitem"
        aria-busy={this.state === 'running' ? 'true' : undefined}
        class={{
          [`state-${this.state}`]: true,
          'has-detail': this.hasDetail,
        }}
      >
        {this.hasDetail ? (
          <button
            type="button"
            class="summary toggle"
            aria-expanded={a11yBoolean(isExpanded)}
            aria-controls="detail"
            onClick={() => this.toggle()}
          >
            {this.renderSummary()}
            <ix-icon
              class={{ chevron: true, expanded: isExpanded }}
              name={iconChevronRightSmall}
              size="16"
              aria-hidden="true"
            ></ix-icon>
          </button>
        ) : (
          <div class="summary">{this.renderSummary()}</div>
        )}
        <div id="detail" class="detail" hidden={!isExpanded}>
          <slot onSlotchange={(event) => this.handleSlotChange(event)}></slot>
        </div>
      </Host>
    );
  }
}
