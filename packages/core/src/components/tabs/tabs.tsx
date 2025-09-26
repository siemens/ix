/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
  Watch,
} from '@stencil/core';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import {
  iconChevronLeftSmall,
  iconChevronRightSmall,
} from '@siemens/ix-icons/icons';

type ManagedClass =
  (typeof TAB_MANAGED_CLASSES)[keyof typeof TAB_MANAGED_CLASSES];

const TAB_MANAGED_CLASSES = {
  SELECTED: 'selected',
  DISABLED: 'disabled',
  SMALL_TAB: 'small-tab',
  ICON: 'icon',
  STRETCHED: 'stretched',
  BOTTOM: 'bottom',
  TOP: 'top',
  CIRCLE: 'circle',
  HYDRATED: 'hydrated',
} as const;

const MANAGED_CLASSES_SET = new Set(
  Object.values(TAB_MANAGED_CLASSES) as ManagedClass[]
);

@Component({
  tag: 'ix-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,
})
export class Tabs {
  @Element() hostElement!: HTMLIxTabsElement;

  /**
   * Set tab items to small size
   */
  @Prop() small = false;

  /**
   * Set rounded tabs
   */
  @Prop() rounded = false;

  /**
   * Set default selected tab by index
   */
  @Prop({ mutable: true }) selected = 0;

  /**
   * Set layout width style
   */
  @Prop() layout: 'auto' | 'stretched' = 'auto';

  /**
   * Set placement style
   */
  @Prop() placement: 'bottom' | 'top' = 'bottom';

  /**
   * ARIA label for the chevron left icon button
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelChevronLeftIconButton?: string;

  /**
   * ARIA label for the chevron right icon button
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelChevronRightIconButton?: string;

  /**
   * `selected` property changed
   */
  @Event() selectedChange!: EventEmitter<number>;

  @State() totalItems = 0;
  @State() currentScrollAmount = 0;
  @State() scrollAmount = 100;
  @State() scrollActionAmount = 0;
  @State() showArrowPrevious = false;
  @State() showArrowNext = false;

  private windowStartSize = window.innerWidth;
  private resizeObserver?: ResizeObserver;
  private classObserver?: MutationObserver;
  private updateScheduled = false;

  private clickAction: {
    timeout: NodeJS.Timeout | null;
    isClick: boolean;
  } = {
    timeout: null,
    isClick: true,
  };

  @Listen('resize', { target: 'window' })
  onWindowResize() {
    this.totalItems = 0;
    this.totalItems = this.getTabs().length;

    if (this.windowStartSize === 0)
      return (this.windowStartSize = window.innerWidth);
    this.move(this.windowStartSize - window.innerWidth);
    this.windowStartSize = window.innerWidth;
  }

  private getTabs() {
    return Array.from(this.hostElement.querySelectorAll('ix-tab-item'));
  }

  private getTab(tabIndex: number) {
    return this.getTabs()[tabIndex];
  }

  private getTabsWrapper() {
    return this.hostElement.shadowRoot?.querySelector('.items-content');
  }

  private initResizeObserver() {
    const parentElement = this.hostElement.parentElement;
    if (!parentElement) return;
    this.resizeObserver = new ResizeObserver(() => {
      this.renderArrows();
    });
    this.resizeObserver.observe(parentElement);
  }

  private observeSlotChanges() {
    this.classObserver?.disconnect();

    this.classObserver = new MutationObserver(() => {
      this.scheduleTabUpdate();
    });

    this.classObserver.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  private scheduleTabUpdate() {
    if (this.updateScheduled) return;
    this.updateScheduled = true;

    requestAnimationFrame(() => {
      this.updateTabAttributes();
      this.updateScheduled = false;
    });
  }

  private setTabAttributes(element: HTMLIxTabItemElement, index: number) {
    const isSelected = index === this.selected;
    const isDisabled = element.disabled;

    if (this.small) element.setAttribute('small', 'true');

    if (this.rounded) element.setAttribute('rounded', 'true');

    element.setAttribute('layout', this.layout);
    element.setAttribute('selected', isSelected ? 'true' : 'false');
    element.setAttribute('placement', this.placement);
    element.toggleAttribute('disabled', isDisabled);

    this.applyRequiredClasses(element, isSelected, isDisabled);
  }

  private applyRequiredClasses(
    element: HTMLIxTabItemElement,
    isSelected: boolean,
    isDisabled: boolean
  ) {
    const existingClasses = Array.from(element.classList);
    const customClasses = existingClasses.filter(
      (className) => !MANAGED_CLASSES_SET.has(className as ManagedClass)
    );
    const requiredClasses = this.buildRequiredClasses(isSelected, isDisabled);

    element.className = [...customClasses, ...requiredClasses].join(' ');
  }

  private buildRequiredClasses(
    isSelected: boolean,
    isDisabled: boolean
  ): string[] {
    const classConditions = {
      [TAB_MANAGED_CLASSES.HYDRATED]: true,
      [TAB_MANAGED_CLASSES.SELECTED]: isSelected,
      [TAB_MANAGED_CLASSES.DISABLED]: isDisabled,
      [TAB_MANAGED_CLASSES.SMALL_TAB]: this.small,
      [TAB_MANAGED_CLASSES.STRETCHED]: this.layout === 'stretched',
      [TAB_MANAGED_CLASSES.BOTTOM]: this.placement === 'bottom',
      [TAB_MANAGED_CLASSES.TOP]: this.placement === 'top',
      [TAB_MANAGED_CLASSES.CIRCLE]: this.rounded,
    };

    return Object.entries(classConditions)
      .filter(([, condition]) => condition)
      .map(([className]) => className);
  }

  private validateSelectedIndex() {
    const tabs = this.getTabs();
    const tabCount = tabs.length;

    if (tabCount === 0) {
      return;
    }

    if (this.selected >= tabCount) {
      this.selected = tabCount - 1;
      this.selectedChange.emit(tabCount - 1);
    }
  }

  private updateTabAttributes() {
    const tabs = this.getTabs();
    this.totalItems = tabs.length;

    this.validateSelectedIndex();

    tabs.forEach((element, index) => {
      this.setTabAttributes(element, index);
    });

    this.renderArrows();
  }

  private showArrows() {
    try {
      const tabWrapper = this.getTabsWrapper();
      return (
        tabWrapper &&
        tabWrapper.scrollWidth >
          Math.ceil(tabWrapper.getBoundingClientRect().width) &&
        this.layout === 'auto'
      );
    } catch (error) {
      return false;
    }
  }

  private showPreviousArrow() {
    try {
      return this.showArrows() === true && this.scrollActionAmount < 0;
    } catch (error) {
      return false;
    }
  }

  private showNextArrow() {
    try {
      const tabWrapper = this.getTabsWrapper();

      if (!tabWrapper) {
        return false;
      }

      const tabWrapperRect = tabWrapper.getBoundingClientRect();

      return (
        this.showArrows() === true &&
        this.scrollActionAmount >
          (tabWrapper.scrollWidth - tabWrapperRect.width) * -1
      );
    } catch (error) {
      return false;
    }
  }

  private move(amount: number, click = false) {
    const tabsWrapper = this.getTabsWrapper();

    if (!tabsWrapper) {
      return;
    }

    const tabsWrapperVisibleWidth = tabsWrapper.getBoundingClientRect().width;
    const maxScrollWidth =
      -this.currentScrollAmount +
      tabsWrapperVisibleWidth -
      tabsWrapper.scrollWidth;

    amount = amount < maxScrollWidth ? maxScrollWidth : amount;
    amount += this.currentScrollAmount;
    amount = Math.min(amount, 0);

    const styles = [
      `transform: translateX(${amount}px);`,
      click ? 'transition: all ease-in-out 400ms;' : '',
    ].join('');

    tabsWrapper.setAttribute('style', styles);

    if (click) this.currentScrollAmount = this.scrollActionAmount = amount;
    else this.scrollActionAmount = amount;
  }

  @Watch('selected')
  onSelectedChange(newValue: number) {
    if (!this.showArrows()) return;

    const tabRect = this.getTab(newValue).getBoundingClientRect();
    const wrapperWidth = this.getTabsWrapper()?.clientWidth;
    const arrowWidth = 32;

    if (tabRect.left < arrowWidth) {
      this.move(-tabRect.left + arrowWidth, true);
    } else if (wrapperWidth && tabRect.right > wrapperWidth - arrowWidth) {
      this.move(wrapperWidth - tabRect.right - arrowWidth, true);
    }
  }

  private setSelected(index: number) {
    this.selected = index;
  }

  private clickTab(index: number) {
    if (!this.clickAction.isClick || this.dragStop()) {
      return;
    }

    const { defaultPrevented } = this.selectedChange.emit(index);
    if (defaultPrevented) {
      return;
    }

    this.setSelected(index);
  }

  private dragStart(element: HTMLIxTabItemElement, event: MouseEvent) {
    if (!this.showArrows()) return;
    if (event.button > 0) return;

    this.clickAction.timeout =
      this.clickAction.timeout === null
        ? setTimeout(() => (this.clickAction.isClick = false), 300)
        : null;

    const tabPositionX = parseFloat(window.getComputedStyle(element).left);
    const mousedownPositionX = event.clientX;
    const move = (event: MouseEvent) =>
      this.dragMove(event, tabPositionX, mousedownPositionX);
    const windowClick = () => {
      window.removeEventListener('mousemove', move, false);
      window.removeEventListener('click', windowClick, false);
      this.dragStop();
    };
    window.addEventListener('click', windowClick);
    window.addEventListener('mousemove', move, false);
  }

  private dragMove(event: MouseEvent, tabX: number, mousedownX: number) {
    this.move(event.clientX + tabX - mousedownX);
  }

  private dragStop() {
    if (this.clickAction.timeout) {
      clearTimeout(this.clickAction.timeout);
      this.clickAction.timeout = null;
    }

    if (this.clickAction.isClick) return false;

    this.currentScrollAmount = this.scrollActionAmount;
    this.clickAction.isClick = true;

    return true;
  }

  componentWillLoad() {
    this.initResizeObserver();
  }

  componentDidRender() {
    this.updateTabAttributes();
  }

  componentWillRender() {
    this.renderArrows();
  }

  private renderArrows() {
    requestAnimationFrameNoNgZone(() => {
      this.showArrowNext = this.showNextArrow();
      this.showArrowPrevious = this.showPreviousArrow();
    });
  }

  componentDidLoad() {
    const tabs = this.getTabs();
    tabs.forEach((element) => {
      element.addEventListener('mousedown', (event) =>
        this.dragStart(element, event)
      );
    });

    this.observeSlotChanges();
  }

  disconnectedCallback() {
    this.resizeObserver?.disconnect();
    this.classObserver?.disconnect();
  }

  @Listen('tabClick')
  onTabClick(event: CustomEvent) {
    if (event.defaultPrevented) {
      return;
    }

    const target = event.target;
    const tabs = this.getTabs();

    tabs.forEach((tab, index) => {
      if (!tab.disabled && tab === target) {
        this.clickTab(index);
      }
    });
  }

  render() {
    return (
      <Host>
        {this.showArrowPrevious && (
          <button
            class="arrow"
            onClick={() => this.move(this.scrollAmount, true)}
            aria-label={this.ariaLabelChevronLeftIconButton}
          >
            <ix-icon name={iconChevronLeftSmall}></ix-icon>
          </button>
        )}
        <div
          class={{
            'tab-items': true,
            'overflow-shadow': true,
            'shadow-left': this.showArrowPrevious,
            'shadow-right': this.showArrowNext,
            'shadow-both': this.showArrowNext && this.showArrowPrevious,
          }}
        >
          <div class="items-content">
            <slot></slot>
          </div>
        </div>
        {this.showArrowNext && (
          <button
            class="arrow right"
            onClick={() => this.move(-this.scrollAmount, true)}
            aria-label={this.ariaLabelChevronRightIconButton}
          >
            <ix-icon name={iconChevronRightSmall}></ix-icon>
          </button>
        )}
      </Host>
    );
  }
}
