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

interface ExtendedNavigator extends Navigator {
  standalone?: boolean;
}

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
   * `selected` property changed
   *
   * @since 2.0.0
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
  private startTouchX = 0;

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
    const tabs = this.getTabs();

    tabs.map((element, index) => {
      if (this.small) element.setAttribute('small', 'true');

      if (this.rounded) element.setAttribute('rounded', 'true');

      element.setAttribute('layout', this.layout);
      element.setAttribute(
        'selected',
        index === this.selected ? 'true' : 'false'
      );

      element.setAttribute('placement', this.placement);
    });

    this.initResizeObserver();
  }

  componentDidRender() {
    const tabs = this.getTabs();
    this.totalItems = tabs.length;

    tabs.map((element, index) => {
      element.setAttribute(
        'selected',
        index === this.selected ? 'true' : 'false'
      );
    });
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
    this.setupEventListeners();

    const tabs = this.getTabs();
    tabs.forEach((element) => {
      element.addEventListener('mousedown', (event) =>
        this.dragStart(element, event)
      );
    });
  }

  private setupEventListeners() {
    const tabsWrapper = this.getTabsWrapper();
    if (!tabsWrapper) return;

    this.setupTouchEvents(tabsWrapper as Element);
    if (!this.isTouchOnlyDevice()) {
      this.setupWheelEvent(tabsWrapper as Element);
    }
  }

  private setupWheelEvent(tabsWrapper: Element) {
    tabsWrapper.addEventListener(
      'wheel',
      this.handleWheelScroll as EventListener,
      { passive: false }
    );
  }

  private readonly handleWheelScroll = (event: WheelEvent) => {
    if (!event.deltaY) return;

    event.preventDefault();
    const scrollAmount =
      event.deltaY > 0 ? -this.scrollAmount : this.scrollAmount;
    this.move(scrollAmount, true);
  };

  private setupTouchEvents(tabsWrapper: Element) {
    tabsWrapper.addEventListener(
      'touchstart',
      this.handleTouchStart as EventListener,
      { passive: true }
    );
    tabsWrapper.addEventListener(
      'touchmove',
      this.handleTouchMove as EventListener,
      { passive: false }
    );
  }

  private readonly handleTouchStart = (event: TouchEvent) => {
    this.startTouchX = event.touches[0].clientX;
  };

  private readonly handleTouchMove = (event: TouchEvent) => {
    if (event.touches.length > 1) return;

    const moveX = event.touches[0].clientX - this.startTouchX;
    const velocityFactor = 1.5;

    if (Math.abs(moveX) > 10) {
      event.preventDefault();

      requestAnimationFrame(() => {
        this.move(-moveX * velocityFactor, true);
      });

      this.startTouchX = event.touches[0].clientX;
    }
  };

  private isTouchOnlyDevice(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  disconnectedCallback() {
    this.resizeObserver?.disconnect();

    const tabsWrapper = this.getTabsWrapper();
    if (tabsWrapper) {
      tabsWrapper.removeEventListener(
        'wheel',
        this.handleWheelScroll as EventListener
      );
      tabsWrapper.removeEventListener(
        'touchstart',
        this.handleTouchStart as EventListener
      );
      tabsWrapper.removeEventListener(
        'touchmove',
        this.handleTouchMove as EventListener
      );
    }
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
          <div class="arrow" onClick={() => this.move(this.scrollAmount, true)}>
            <ix-icon name={'chevron-left-small'}></ix-icon>
          </div>
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
          <div
            class="arrow right"
            onClick={() => this.move(-this.scrollAmount, true)}
          >
            <ix-icon name={'chevron-right-small'}></ix-icon>
          </div>
        )}
      </Host>
    );
  }
}
