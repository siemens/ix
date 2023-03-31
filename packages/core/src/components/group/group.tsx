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
  Listen,
  Prop,
  State,
} from '@stencil/core';
import { createMutationObserver } from '../utils/mutation-observer';

@Component({
  tag: 'ix-group',
  styleUrl: 'group.scss',
  scoped: true,
})
export class Group {
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

  @Element() hostElement!: HTMLIxGroupElement;

  @State() itemSelected = false;

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
    return this.hostElement.querySelector('.group-content');
  }

  get footer() {
    return this.hostElement.querySelector('.footer');
  }

  @State() dropdownTriggerRef: HTMLElement;

  @State() slotSize = this.groupItems.length;

  constructor() {}

  @Listen('keydown', {
    target: 'window',
  })
  async onKeyDown(event: KeyboardEvent) {
    const targetElement = event.target as HTMLElement;

    if (!this.hostElement.contains(targetElement)) {
      return;
    }

    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      if (targetElement.classList.contains('group-header')) {
        if (this.suppressHeaderSelection) {
          this.collapsed = !this.collapsed;
        } else {
          this.selected = !this.selected;
        }
      } else if (targetElement.matches('ix-group-item')) {
        const groupItem = targetElement as HTMLIxGroupItemElement;
        groupItem.selected = !groupItem.selected;
      }
    }
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
      item.classList.remove('last');
      if (
        !this.footer?.children.length &&
        index === this.groupItems.length - 1
      ) {
        item.classList.add('last');
      }
    });

    if (this.footer?.childElementCount > 1) {
      this.groupContent.appendChild(this.footer);
    }
  }

  private observer: MutationObserver;

  componentDidLoad() {
    this.observer = createMutationObserver(() => {
      this.slotSize = this.groupItems.length;
    });

    this.observer.observe(this.hostElement.querySelector('.group-content'), {
      childList: true,
    });

    this.groupContent.addEventListener(
      'selectedChanged',
      (evt: CustomEvent<HTMLIxGroupItemElement>) => {
        this.onItemClick(evt.detail.index);
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
                class={{
                  hidden: this.groupItems.length === 0,
                }}
                name={`chevron-${this.collapsed ? 'right' : 'down'}-small`}
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
            'd-none': this.collapsed,
          }}
        >
          <slot></slot>
        </div>
        <div class="d-none">
          <ix-group-item
            class="footer last"
            suppressSelection={true}
            focusable={false}
          >
            <slot name="footer"></slot>
          </ix-group-item>
        </div>
      </Host>
    );
  }
}
