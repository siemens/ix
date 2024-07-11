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
} from '@stencil/core';
import { createMutationObserver } from '../utils/mutation-observer';
import { hasSlottedElements } from '../utils/shadow-dom';

@Component({
  tag: 'ix-group',
  styleUrl: 'group.scss',
  shadow: true,
})
export class Group {
  @Element() hostElement!: HTMLIxGroupElement;

  /**
   * Prevent header from being selectable
   */
  @Prop() suppressHeaderSelection = false;

  /**
   * Group header
   */
  @Prop() header: string;

  /**
   * Group header subtitle
   */
  @Prop() subHeader: string;

  /**
   * Whether the group is collapsed or expanded. Defaults to true.
   */
  @Prop({ mutable: true, reflect: true }) collapsed = true;

  /**
   * Whether the group is selected.
   */
  @Prop({ mutable: true, reflect: true }) selected: boolean;

  /**
   * The index of the selected group entry.
   * If undefined no group item is selected.
   */
  @Prop({ mutable: true, reflect: true }) index: number;

  /**
   * Expand the group if the header is clicked
   */
  @Prop() expandOnHeaderClick = false;

  /**
   * Emits when whole group gets selected.
   */
  @Event() selectGroup: EventEmitter<boolean>;

  /**
   * Emits when group item gets selected.
   */
  @Event() selectItem: EventEmitter<number>;

  /**
   * Group collapsed
   */
  @Event() collapsedChanged: EventEmitter<boolean>;

  @State() itemSelected = false;
  @State() dropdownTriggerRef: HTMLElement;
  @State() slotSize = this.groupItems.length;
  @State() footerVisible = false;

  @State() showExpandCollapsedIcon = false;

  private observer: MutationObserver;

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
    return this.hostElement.shadowRoot.querySelector('.group-content');
  }

  private onExpandClick(event: Event) {
    this.collapsed = !this.collapsed;

    this.collapsedChanged.emit(this.collapsed);
    event.stopPropagation();
  }

  private onHeaderClick(event: Event) {
    this.setGroupSelection(!this.selected);

    if (this.suppressHeaderSelection) {
      this.onExpandClick(event);
    }
  }

  private onItemClick(index: number) {
    if (index === this.index) {
      this.index = undefined;
      this.selectItem.emit(undefined);
    } else {
      this.index = index;
      this.selectItem.emit(index);
    }

    if (this.index >= 0) {
      this.itemSelected = true;
    } else this.itemSelected = false;

    this.setGroupSelection(false);
  }

  private setGroupSelection(selection: boolean) {
    if (!this.suppressHeaderSelection) {
      this.selected = selection;
      this.selectGroup.emit(this.selected);
    }
  }

  private onSlotChange() {
    const slot = this.hostElement.shadowRoot.querySelector(
      'slot[name="footer"]'
    );

    if (slot) {
      this.footerVisible = hasSlottedElements(slot);
    }
  }

  componentWillRender() {
    this.groupItems.forEach((item, index) => {
      if (this.selected === true) {
        item.selected = false;
        this.index = undefined;
        this.itemSelected = false;
        return;
      }
      item.selected = index === this.index;
      item.index = index;
    });
  }

  componentDidLoad() {
    this.observer = createMutationObserver(() => {
      this.slotSize = this.groupItems.length;
    });

    this.observer.observe(this.groupContent, {
      childList: true,
    });

    this.groupContent.addEventListener(
      'selectedChanged',
      (evt: CustomEvent<HTMLIxGroupItemElement>) => {
        if (!evt.detail.suppressSelection) {
          this.onItemClick(evt.detail.index);
        } else {
          evt.stopPropagation();
        }
      }
    );
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'group-header': true,
            expand: !this.collapsed,
            selected: this.selected,
          }}
          tabindex="0"
        >
          <div
            class="group-header-clickable"
            onClick={(e) => this.onHeaderClick(e)}
          >
            <div
              class={{
                'group-header-selection-indicator': true,
                'group-header-selection-indicator-item-selected':
                  this.itemSelected,
              }}
            ></div>
            <div class="btn-expand-header">
              <ix-icon
                data-testid="expand-collapsed-icon"
                class={{
                  hidden: !this.showExpandCollapsedIcon,
                }}
                name={
                  this.collapsed ? 'chevron-right-small' : 'chevron-down-small'
                }
                onClick={(e) => this.onExpandClick(e)}
              ></ix-icon>
            </div>

            <div class="group-header-content">
              {this.header ? (
                <div class="group-header-props-container">
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
          </div>
          <ix-group-context-menu>
            <slot name="dropdown"></slot>
          </ix-group-context-menu>
        </div>
        <div
          class={{
            'group-content': true,
          }}
        >
          <div
            style={{
              display: this.collapsed ? 'none' : 'contents',
            }}
          >
            <slot
              onSlotchange={() => {
                const slot =
                  this.hostElement.shadowRoot.querySelector('slot:not([name])');
                this.showExpandCollapsedIcon = hasSlottedElements(slot);
              }}
            ></slot>
            <ix-group-item
              suppressSelection={true}
              focusable={false}
              class={{
                footer: true,
                'footer-visible': this.footerVisible,
              }}
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
