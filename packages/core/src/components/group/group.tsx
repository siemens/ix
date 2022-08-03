/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
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

@Component({
  tag: 'cw-group',
  styleUrl: 'group.scss',
  scoped: true,
})
export class Group {
  /**
   * Suppress
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

  @Element() hostElement!: HTMLCwGroupElement;

  get dropdownItems() {
    return Array.from(
      this.hostElement.querySelectorAll('cw-group-dropdown-item')
    );
  }

  get groupItems(): Array<HTMLCwGroupItemElement> {
    return Array.from(
      this.hostElement.querySelectorAll('cw-group-item:not(.footer)')
    );
  }

  get groupContent() {
    return this.hostElement.querySelector('.group-content');
  }

  get footer() {
    return this.hostElement.querySelector('.footer');
  }

  @State() dropdownTriggerRef: HTMLElement;

  constructor() {}

  private onExpandClick(event: Event) {
    const wasCollapsed = this.collapsed;
    this.collapsed = !this.collapsed;

    if (!wasCollapsed && this.index !== undefined) {
      this.index = undefined;
      this.setGroupSelection(true);
    }

    this.collapsedChanged.emit(this.collapsed);
    event.stopPropagation();
  }

  private onHeaderClick(event: Event) {
    this.setGroupSelection(!this.selected);
    this.onExpandClick(event);
  }

  private onItemClick(index: number) {
    if (index === this.index) {
      this.index = undefined;
      this.selectItem.emit(undefined);
    } else {
      this.index = index;
      this.selectItem.emit(index);
    }

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

    if (this.footer?.childElementCount) {
      this.groupContent.appendChild(this.footer);
    }
  }

  componentDidLoad() {
    this.groupContent.addEventListener(
      'selectedChanged',
      (evt: CustomEvent<HTMLCwGroupItemElement>) => {
        this.onItemClick(evt.detail.index);
      }
    );
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
        >
          <div class="d-flex w-100" onClick={(e) => this.onHeaderClick(e)}>
            <button
              class="btn btn-icon btn-invisible btn-expand-header"
              onClick={(e) => this.onExpandClick(e)}
            >
              {this.collapsed ? (
                <i class="expand-icon glyph glyph-chevron-right-small"></i>
              ) : (
                <i class="expand-icon expand glyph glyph-chevron-down-small"></i>
              )}
            </button>
            <div class="group-header-content">
              {this.header ? (
                <div>
                  <div class="group-header-title">
                    <span title={this.header}>{this.header}</span>
                  </div>
                  <div class="group-header-modules" title={this.subHeader}>
                    {this.subHeader}
                  </div>
                </div>
              ) : null}
              <slot name="header"></slot>
            </div>
          </div>
          <div
            class={{
              'group-header-context-button': true,
              'd-none': this.dropdownItems.length === 0,
            }}
          >
            <cw-icon-button
              ref={(ref) => (this.dropdownTriggerRef = ref)}
              size="24"
              ghost={true}
              icon="context-menu"
            ></cw-icon-button>
            <cw-dropdown trigger={this.dropdownTriggerRef}>
              <slot name="dropdown"></slot>
            </cw-dropdown>
          </div>
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
          <cw-group-item class="footer last" suppressSelection={true}>
            <slot name="footer"></slot>
          </cw-group-item>
        </div>
      </Host>
    );
  }
}
