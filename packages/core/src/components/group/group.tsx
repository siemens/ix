/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconChevronDownSmall,
  iconChevronUpSmall,
} from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Mixin,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import { DefaultMixins } from '../utils/internal/component';
import {
  ComponentIdMixin,
  ComponentIdMixinContract,
} from '../utils/internal/mixins/id.mixin';
import { createMutationObserver } from '../utils/mutation-observer';
import { hasSlottedElements } from '../utils/shadow-dom';

/**
 * @slot header - Content displayed in the group header.
 * @slot dropdown - Dropdown used for the group context menu.
 * @slot default - Group items.
 * @slot footer - Content displayed below the group items.
 */
@Component({
  tag: 'ix-group',
  styleUrl: 'group.scss',
  shadow: true,
})
export class Group
  extends Mixin(...DefaultMixins, ComponentIdMixin)
  implements ComponentIdMixinContract
{
  @Element() override hostElement!: HTMLIxGroupElement;

  /**
   * Prevent header from being selectable
   */
  @Prop() suppressHeaderSelection = false;

  /**
   * Group header
   */
  @Prop() header?: string;

  /**
   * Group header subtitle
   */
  @Prop() subHeader?: string;

  /**
   * Whether the group is expanded or collapsed. Defaults to false.
   */
  @Prop({ mutable: true, reflect: true }) expanded = false;

  /**
   * Whether the group is selected.
   */
  @Prop({ mutable: true, reflect: true }) selected = false;

  /**
   * The index of the selected group entry.
   * If undefined no group item is selected.
   */
  @Prop({ mutable: true, reflect: true }) index?: number;

  /**
   * Expand the group if the header is clicked
   */
  @Prop() expandOnHeaderClick = false;

  /**
   * Emits when whole group gets selected.
   */
  @Event() selectGroup!: EventEmitter<boolean>;

  /**
   * Emits when group item gets selected.
   */
  @Event() selectItem!: EventEmitter<number>;

  /**
   * Group expanded
   */
  @Event() expandedChanged!: EventEmitter<boolean>;

  @State() itemSelected = false;
  @State() slotSize = 0;
  @State() footerVisible = false;

  @State() showExpandCollapsedIcon = false;

  @State() hasDropdown = false;

  private observer?: MutationObserver;
  private expandButtonEl?: HTMLButtonElement;
  private skipEscapeCollapse = false;

  private get contentId() {
    return `${this.getHostElementId()}-content`;
  }

  @Watch('selected')
  selectedChanged(newSelected: boolean) {
    if (newSelected === false) {
      this.changeItemIndex();
    }
  }

  get dropdownItems() {
    return Array.from(
      this.hostElement.querySelectorAll('ix-group-dropdown-item')
    );
  }

  get groupItems(): Array<HTMLIxGroupItemElement> {
    return Array.from(
      this.hostElement.querySelectorAll('ix-group-item:not(.footer)')
    );
  }

  get groupContent() {
    return this.hostElement.shadowRoot?.querySelector('.group-content');
  }

  /**
   * Accessible name for header select/expand controls.
   * Uses the header text only; expand state comes from **aria-expanded**.
   */
  private getHeaderButtonLabel() {
    return this.header || undefined;
  }

  private toggleExpanded(event?: Event) {
    const oldExpanded = this.expanded;
    this.expanded = !this.expanded;
    const { defaultPrevented } = this.expandedChanged.emit(this.expanded);
    event?.stopPropagation();

    if (defaultPrevented) {
      this.expanded = oldExpanded;
    }
  }

  private collapseAndFocusExpand() {
    if (!this.expanded) {
      return;
    }

    const oldExpanded = this.expanded;
    this.expanded = false;
    const { defaultPrevented } = this.expandedChanged.emit(this.expanded);

    if (defaultPrevented) {
      this.expanded = oldExpanded;
      return;
    }

    if (this.showExpandCollapsedIcon) {
      this.expandButtonEl?.focus();
    }
  }

  private isGroupDropdownOpen() {
    const dropdown = this.hostElement.querySelector('ix-dropdown');
    return !!dropdown?.show;
  }

  private onExpandClick(event: Event) {
    this.toggleExpanded(event);
  }

  private onHeaderClick(event: Event) {
    if (this.suppressHeaderSelection) {
      this.onExpandClick(event);
      return;
    }

    this.changeHeaderSelection(!this.selected);
    this.changeItemIndex();
  }

  private changeHeaderSelection(newSelection: boolean) {
    const oldIsHeaderSelected = this.selected;
    const newIsHeaderSelected = newSelection;
    this.selected = newIsHeaderSelected;
    const { defaultPrevented } = this.selectGroup.emit(newIsHeaderSelected);

    if (defaultPrevented) {
      this.selected = oldIsHeaderSelected;
      return;
    }
  }

  private changeItemIndex(index?: number) {
    const oldIndex = this.index;
    const newIndex = index === this.index ? undefined : index;

    if (this.index === newIndex) {
      return;
    }

    this.index = newIndex;
    const { defaultPrevented } = this.selectItem.emit(newIndex);
    if (defaultPrevented) {
      this.index = oldIndex;
      return;
    }

    const items = this.groupItems;
    items.forEach((item, i) => {
      item.selected = i === this.index;
    });

    this.itemSelected = items.some((item) => item.selected);
  }

  private onSlotChange() {
    const slot = this.hostElement.shadowRoot?.querySelector(
      'slot[name="footer"]'
    );

    if (slot) {
      this.footerVisible = hasSlottedElements(slot);
    }
  }

  private checkDropdownSlot() {
    this.hasDropdown = !!this.hostElement.querySelector('[slot="dropdown"]');
  }

  private onDefaultSlotChange() {
    const slot = this.hostElement.shadowRoot?.querySelector('slot:not([name])');
    this.showExpandCollapsedIcon = hasSlottedElements(slot);
  }

  override componentWillRender() {
    this.groupItems.forEach((item, index) => {
      item.selected = index === this.index;
      item.index = index;
    });
    this.checkDropdownSlot();
  }

  override componentDidLoad() {
    super.componentDidLoad?.();
    this.observer = createMutationObserver(() => {
      this.slotSize = this.groupItems.length;
    });
    if (!this.groupContent) {
      return;
    }
    this.observer.observe(this.groupContent, {
      childList: true,
    });
    this.checkDropdownSlot();
    this.slotSize = this.groupItems.length;
    this.onDefaultSlotChange();
  }

  override disconnectedCallback() {
    super.disconnectedCallback?.();
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  @Listen('selectedChanged')
  onItemClicked(event: CustomEvent) {
    if (event.target instanceof HTMLElement) {
      const item = event.target as HTMLIxGroupItemElement;
      const index = this.groupItems.indexOf(item);
      this.changeItemIndex(index);
    }
  }

  /**
   * Capture before dropdown trigger closes the menu on Escape (bubble),
   * so we can skip collapsing on the same key press.
   * `@Listen` re-binds on connect/disconnect (unlike `componentDidLoad`).
   */
  @Listen('keydown', { capture: true })
  onKeyDownCapture(event: KeyboardEvent) {
    if (event.key !== 'Escape') {
      return;
    }

    // Always assign for this keypress so the flag cannot stay stale.
    this.skipEscapeCollapse = this.expanded && this.isGroupDropdownOpen();
  }

  private onKeyDown(event: KeyboardEvent) {
    if (event.key !== 'Escape') {
      return;
    }

    const skip = this.skipEscapeCollapse;
    this.skipEscapeCollapse = false;

    if (
      !this.expanded ||
      event.defaultPrevented ||
      skip ||
      this.isGroupDropdownOpen()
    ) {
      return;
    }

    event.preventDefault();
    this.collapseAndFocusExpand();
  }

  private renderHeaderContent(options?: {
    contentId?: string;
    ariaHidden?: boolean;
  }) {
    return (
      <div class="group-header-content" id={options?.contentId}>
        {this.header ? (
          <div
            class="group-header-props-container"
            aria-hidden={options?.ariaHidden ? 'true' : undefined}
          >
            <div class="group-header-title">
              <span title={this.header}>{this.header}</span>
            </div>
            <div class="group-subheader" title={this.subHeader}>
              {this.subHeader}
            </div>
          </div>
        ) : null}
        <slot name="header"></slot>
      </div>
    );
  }

  private renderHeaderSelect() {
    const headerContentId = `${this.getHostElementId()}-header-content`;
    const selectLabel = this.getHeaderButtonLabel();

    if (this.suppressHeaderSelection) {
      return (
        <div
          class="group-header-select-area group-header-select-area--static"
          onClick={(e) => this.onHeaderClick(e)}
        >
          {this.renderHeaderContent()}
        </div>
      );
    }

    return (
      <div class="group-header-select-area">
        <button
          type="button"
          class="group-header-select"
          aria-pressed={a11yBoolean(this.selected)}
          aria-label={selectLabel}
          aria-labelledby={selectLabel ? undefined : headerContentId}
          onClick={(e) => this.onHeaderClick(e)}
        ></button>
        {this.renderHeaderContent({
          contentId: headerContentId,
          ariaHidden: !!selectLabel,
        })}
      </div>
    );
  }

  private renderExpandButton() {
    return (
      <button
        type="button"
        class={{
          'btn-expand-header': true,
          hidden: !this.showExpandCollapsedIcon,
        }}
        data-testid="expand-collapsed-button"
        aria-expanded={a11yBoolean(this.expanded)}
        aria-controls={this.contentId}
        aria-label={this.getHeaderButtonLabel()}
        ref={(el) => (this.expandButtonEl = el)}
        onClick={(event: Event) => this.onExpandClick(event)}
      >
        <ix-icon
          data-testid="expand-collapsed-icon"
          aria-hidden="true"
          name={this.expanded ? iconChevronUpSmall : iconChevronDownSmall}
        ></ix-icon>
      </button>
    );
  }

  override render() {
    return (
      <Host onKeyDown={(event: KeyboardEvent) => this.onKeyDown(event)}>
        <div
          class={{
            'group-header': true,
            expand: this.expanded,
            selected: this.selected,
          }}
        >
          <div class="group-header-clickable">
            <div
              class={{
                'group-header-selection-indicator': true,
                'group-header-selection-indicator-item-selected':
                  this.itemSelected,
              }}
            ></div>
            <div class="group-header-actions">
              {this.renderHeaderSelect()}
              {this.renderExpandButton()}
            </div>
          </div>
          {this.hasDropdown && (
            <ix-group-context-menu>
              <slot name="dropdown"></slot>
            </ix-group-context-menu>
          )}
        </div>
        <div
          id={this.contentId}
          class={{
            'group-content': true,
          }}
        >
          <div
            style={{
              display: this.expanded ? 'contents' : 'none',
            }}
          >
            <slot onSlotchange={() => this.onDefaultSlotChange()}></slot>
            <ix-group-item
              class={{
                footer: true,
                'footer-visible': this.footerVisible,
              }}
              groupFooter
              suppressSelection
            >
              <slot
                name="footer"
                onSlotchange={() => this.onSlotChange()}
              ></slot>
            </ix-group-item>
          </div>
        </div>
      </Host>
    );
  }
}
