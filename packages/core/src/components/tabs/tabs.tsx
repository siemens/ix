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

  private initMutationObserver() {
    this.setupSlotChangeListener();
    this.setupClassObserver();
  }

  private setupSlotChangeListener() {
    const slotEl = this.hostElement.shadowRoot?.querySelector('slot');
    if (!slotEl) return;

    slotEl.addEventListener('slotchange', () => {
      setTimeout(() => this.handleSlotChange(), 0);
    });
  }

  private setupClassObserver() {
    this.classObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => this.handleClassMutation(mutation));
    });

    this.classObserver.observe(this.hostElement, {
      childList: false,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }

  private handleClassMutation(mutation: MutationRecord) {
    if (!this.isTabItemClassMutation(mutation)) return;

    const element = mutation.target as HTMLIxTabItemElement;
    const index = this.getTabs().indexOf(element);
    if (index !== -1) {
      this.setTabSelectionState(element, index);
    }
  }

  private isTabItemClassMutation(mutation: MutationRecord): boolean {
    return mutation.type === 'attributes' &&
           mutation.attributeName === 'class' &&
           mutation.target.nodeName === 'IX-TAB-ITEM';
  }

  private handleSlotChange() {
    const tabs = this.getTabs();
    this.totalItems = tabs.length;

    tabs.forEach((element, index) => {
      if (!element.hasAttribute('placement')) {
        this.setTabAttributes(element);
      }
      this.setTabSelectionState(element, index);
    });

    this.renderArrows();
  }

  private setTabAttributes(element: HTMLIxTabItemElement) {
    if (this.small) element.setAttribute('small', 'true');
    if (this.rounded) element.setAttribute('rounded', 'true');
    element.setAttribute('layout', this.layout);
    element.setAttribute('placement', this.placement);
  }

  private setTabSelectionState(element: HTMLIxTabItemElement, index: number) {
    const isSelected = index === this.selected;

    this.setTabProperties(element, isSelected);
    this.applyTabClasses(element, isSelected);
  }

  private setTabProperties(element: HTMLIxTabItemElement, isSelected: boolean) {
    (element as any).selected = isSelected;
    element.setAttribute('selected', isSelected ? 'true' : 'false');
  }

  private applyTabClasses(element: HTMLIxTabItemElement, isSelected: boolean) {
    const requiredClasses = this.getRequiredClasses(isSelected);

    requiredClasses.forEach(className => {
      if (!element.classList.contains(className)) {
        element.classList.add(className);
      }
    });

    if (!isSelected && element.classList.contains('selected')) {
      element.classList.remove('selected');
    }
  }

  private getRequiredClasses(isSelected: boolean): string[] {
    const classes = ['hydrated'];

    if (this.shouldHaveBottomClass()) {
      classes.push('bottom');
    }

    if (isSelected) {
      classes.push('selected');
    }

    return classes;
  }

  private shouldHaveBottomClass(): boolean {
    return this.placement === 'bottom' && this.layout !== 'stretched';
  }

  private updateTabAttributes() {
    const tabs = this.getTabs();
    this.totalItems = tabs.length;

    tabs.forEach((element, index) => {
      this.setTabAttributes(element);
      this.setTabSelectionState(element, index);
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
    this.updateTabAttributes();
    this.initResizeObserver();
  }

  componentDidRender() {
    const tabs = this.getTabs();
    this.totalItems = tabs.length;

    tabs.forEach((element, index) => {
      this.setTabSelectionState(element, index);
    });
  }

  componentWillRender() {
    this.renderArrows();

    const tabs = this.getTabs();
    if (this.selected >= tabs.length) {
      const newSelected = 0;
      if (this.selected !== newSelected) {
        this.selected = newSelected;
        this.selectedChange.emit(newSelected);
      }
    }
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

    this.initMutationObserver();
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
