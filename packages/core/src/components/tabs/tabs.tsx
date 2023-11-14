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
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';

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
  @Event() selectedChange: EventEmitter<number>;

  @State() totalItems = 0;
  @State() currentScrollAmount = 0;
  @State() scrollAmount = 100;

  @State() scrollActionAmount = 0;

  private windowStartSize = window.innerWidth;

  private get arrowLeftElement() {
    return this.hostElement.shadowRoot.querySelector(
      '[data-arrow-left]'
    ) as HTMLElement;
  }

  private get arrowRightElement() {
    return this.hostElement.shadowRoot.querySelector(
      '[data-arrow-right]'
    ) as HTMLElement;
  }

  private clickAction: {
    timeout: NodeJS.Timeout;
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
    return this.hostElement.shadowRoot.querySelector('.items-content');
  }

  private showArrows() {
    try {
      const tabWrapper = this.getTabsWrapper();
      return (
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
      return this.showArrows() && this.scrollActionAmount < 0;
    } catch (error) {
      return false;
    }
  }

  private showNextArrow() {
    try {
      const tabWrapper = this.getTabsWrapper();
      const tabWrapperRect = tabWrapper.getBoundingClientRect();

      return (
        this.showArrows() &&
        this.scrollActionAmount >
          (tabWrapper.scrollWidth - tabWrapperRect.width) * -1
      );
    } catch (error) {
      return false;
    }
  }

  private getArrowStyle(condition: boolean) {
    return {
      opacity: condition ? '1' : '0',
      zIndex: condition ? '1' : '-1',
    };
  }

  private move(amount: number, click = false) {
    const tabWrapper = this.getTabsWrapper();
    const maxScrollWidth =
      (tabWrapper.scrollWidth - tabWrapper.getBoundingClientRect().width) * -1;

    amount = this.currentScrollAmount + amount;
    amount = amount > 0 ? 0 : amount < maxScrollWidth ? maxScrollWidth : amount;

    const styles = [
      `transform: translateX(${amount}px);`,
      click ? 'transition: all ease-in-out 400ms;' : '',
    ].join('');

    tabWrapper.setAttribute('style', styles);

    if (click) this.currentScrollAmount = this.scrollActionAmount = amount;
    else this.scrollActionAmount = amount;
  }

  private moveTabToView(tabIndex: number) {
    if (!this.showArrows()) return;

    const tab = this.getTab(tabIndex).getBoundingClientRect();
    const amount = tab.x * -1;
    this.move(amount, true);
  }

  private setSelected(index: number) {
    this.selected = index;
  }

  private clickTab(index: number) {
    if (this.dragStop()) {
      return;
    }

    const { defaultPrevented } = this.selectedChange.emit(index);
    if (defaultPrevented) {
      return;
    }

    this.setSelected(index);
    this.moveTabToView(index);
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

    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', move, false);
      this.dragStop();
    });
    window.addEventListener('mousemove', move, false);
  }

  private dragMove(event: MouseEvent, tabX: number, mousedownX: number) {
    this.move(event.clientX + tabX - mousedownX);
  }

  private dragStop() {
    clearTimeout(this.clickAction.timeout);
    this.clickAction.timeout = null;

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
    requestAnimationFrameNoNgZone(() => {
      const showNextArrow = this.showNextArrow();
      const previousArrow = this.showPreviousArrow();

      Object.assign(
        this.arrowLeftElement.style,
        this.getArrowStyle(previousArrow)
      );
      Object.assign(
        this.arrowRightElement.style,
        this.getArrowStyle(showNextArrow)
      );
    });
  }

  componentDidLoad() {
    const tabs = this.getTabs();
    tabs.forEach((element) => {
      element.addEventListener('mousedown', (event) =>
        this.dragStart(element, event)
      );
    });
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
        <div
          class="arrow"
          data-arrow-left
          onClick={() => this.move(this.scrollAmount, true)}
        >
          <ix-icon name={'chevron-left-small'}></ix-icon>
        </div>
        <div
          class={{
            'tab-items': true,
            'overflow-shadow': true,
            'shadow-left': this.showPreviousArrow(),
            'shadow-right': this.showNextArrow(),
            'shadow-both': this.showNextArrow() && this.showPreviousArrow(),
          }}
        >
          <div class="items-content">
            <slot></slot>
          </div>
        </div>
        <div
          class="arrow right"
          data-arrow-right
          onClick={() => this.move(-this.scrollAmount, true)}
        >
          <ix-icon name={'chevron-right-small'}></ix-icon>
        </div>
      </Host>
    );
  }
}
