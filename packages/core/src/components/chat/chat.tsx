/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconArrowDown } from '@siemens/ix-icons/icons';
import { Component, Host, Method, Prop, State, Watch, h } from '@stencil/core';
import Animation from '../utils/animation';

const BOTTOM_THRESHOLD = 8;

/**
 * @documentation https://ix.siemens.io//docs/components/chat/guide.md
 * @figma-main-component-id 133528:33258
 * @since 5.2.0
 * @slot - Chat messages, for example ix-chat-user-message and ix-chat-ai-message
 * @slot prompt - Chat input displayed below the chat messages
 */
@Component({
  tag: 'ix-chat',
  styleUrl: 'chat.scss',
  shadow: true,
})
export class Chat {
  /**
   * If true, the chat does not keep the latest content in view (Auto-scroll)
   * and does not show the scroll-to-latest button.
   * Use `scrollToBottom()` and `scrollToTop()` to scroll programmatically.
   *
   * By default, the chat follows added messages and growing message content
   * while the user is at the bottom. Auto-scroll stops when the user scrolls
   * away from the bottom and resumes when the user returns to the bottom,
   * activates the scroll-to-latest button or a new `ix-chat-user-message` is added
   * as the latest message (a direct child of `ix-chat`).
   *
   * @since 6.1.0
   */
  @Prop() suppressAutoScroll: boolean = false;

  /**
   * i18n accessible label for the scroll-to-latest button.
   *
   * @since 6.1.0
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  @Prop({ attribute: 'i18n-scroll-to-latest' })
  i18nScrollToLatest = 'Scroll to latest';

  @State() hasPrompt = false;
  @State() isAtBottom = true;

  private messagesRef?: HTMLDivElement;
  private contentRef?: HTMLDivElement;
  private resizeObserver?: ResizeObserver;
  private followLatest = true;
  private lastScrollTop = 0;
  private readonly knownUserMessages = new WeakSet<Element>();

  @Watch('suppressAutoScroll')
  onSuppressAutoScrollChange() {
    this.updateIsAtBottom();
    this.followLatest = this.isAtBottom;
  }

  /**
   * Scrolls to the latest content and resumes Auto-scroll.
   * Scrolling is animated unless the user prefers reduced motion.
   *
   * @since 6.1.0
   */
  @Method()
  async scrollToBottom(): Promise<void> {
    this.followLatest = true;
    this.scrollMessagesTo('bottom', this.getScrollBehavior());
  }

  /**
   * Scrolls to the first message. Auto-scroll stops until the user returns to the bottom.
   * Scrolling is animated unless the user prefers reduced motion.
   *
   * @since 6.1.0
   */
  @Method()
  async scrollToTop(): Promise<void> {
    this.followLatest = false;
    this.scrollMessagesTo('top', this.getScrollBehavior());
  }

  connectedCallback() {
    this.observeContent();
  }

  componentDidLoad() {
    this.observeContent();
  }

  disconnectedCallback() {
    this.resizeObserver?.disconnect();
    this.resizeObserver = undefined;
  }

  private observeContent() {
    if (
      !this.messagesRef ||
      !this.contentRef ||
      this.resizeObserver ||
      typeof ResizeObserver === 'undefined'
    ) {
      return;
    }

    // Observe the content (new or growing messages) and the viewport (e.g. a growing prompt)
    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(this.contentRef);
    this.resizeObserver.observe(this.messagesRef);
  }

  private getScrollBehavior(): ScrollBehavior {
    return Animation.prefersReducedMotion() ? 'auto' : 'smooth';
  }

  private scrollMessagesTo(
    position: 'top' | 'bottom',
    behavior: ScrollBehavior
  ) {
    const messages = this.messagesRef;
    if (!messages) {
      return;
    }

    messages.scrollTo({
      top: position === 'top' ? 0 : messages.scrollHeight,
      behavior,
    });
  }

  private getDistanceFromBottom() {
    const messages = this.messagesRef;
    if (!messages) {
      return 0;
    }

    return messages.scrollHeight - messages.clientHeight - messages.scrollTop;
  }

  private isScrolledToBottom() {
    return this.getDistanceFromBottom() <= BOTTOM_THRESHOLD;
  }

  private updateIsAtBottom() {
    this.isAtBottom = this.isScrolledToBottom();
  }

  private handleResize() {
    if (!this.suppressAutoScroll && this.followLatest) {
      this.scrollMessagesTo('bottom', 'auto');
    }

    this.updateIsAtBottom();
  }

  private handleScroll() {
    const messages = this.messagesRef;
    if (!messages) {
      return;
    }

    const scrollTop = messages.scrollTop;

    if (this.isScrolledToBottom()) {
      this.followLatest = true;
    } else if (scrollTop < this.lastScrollTop) {
      this.followLatest = false;
    }

    this.lastScrollTop = scrollTop;
    this.updateIsAtBottom();
  }

  private handleMessagesSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const userMessages = slot
      .assignedElements({ flatten: true })
      .filter((element) => element.tagName === 'IX-CHAT-USER-MESSAGE');
    const latestUserMessage = userMessages[userMessages.length - 1];
    // Only a new latest user message (a sent prompt) re-engages Auto-scroll, not prepended history
    const hasNewLatestUserMessage =
      !!latestUserMessage && !this.knownUserMessages.has(latestUserMessage);

    userMessages.forEach((element) => this.knownUserMessages.add(element));

    if (hasNewLatestUserMessage && !this.suppressAutoScroll) {
      this.followLatest = true;
      this.scrollMessagesTo('bottom', 'auto');
    }
  }

  private handleScrollToLatestClick() {
    // The button disappears at the bottom; keep focus in the conversation.
    this.messagesRef?.focus({ preventScroll: true });
    this.scrollToBottom();
  }

  private hasAssignedContent(slot: HTMLSlotElement) {
    return slot.assignedNodes({ flatten: true }).some((node) => {
      return node.nodeType === 1 || !!node.textContent?.trim();
    });
  }

  private handlePromptSlotChange(event: Event) {
    this.hasPrompt = this.hasAssignedContent(event.target as HTMLSlotElement);
  }

  render() {
    const showScrollToLatest = !this.suppressAutoScroll && !this.isAtBottom;

    return (
      <Host
        class={{
          'has-prompt': this.hasPrompt,
        }}
      >
        <div class="conversation">
          <div
            class="messages"
            part="messages"
            tabIndex={0}
            ref={(ref) => (this.messagesRef = ref)}
            onScroll={() => this.handleScroll()}
          >
            <div
              class="messages-content"
              ref={(ref) => (this.contentRef = ref)}
            >
              <slot
                onSlotchange={(event) => this.handleMessagesSlotChange(event)}
              ></slot>
            </div>
          </div>
          {showScrollToLatest && (
            <ix-icon-button
              class="scroll-to-latest"
              aria-label={this.i18nScrollToLatest}
              icon={iconArrowDown}
              oval
              variant="secondary"
              onClick={() => this.handleScrollToLatestClick()}
            ></ix-icon-button>
          )}
        </div>
        <div class="prompt" part="prompt">
          <slot
            name="prompt"
            onSlotchange={(event) => this.handlePromptSlotChange(event)}
          ></slot>
        </div>
      </Host>
    );
  }
}
