/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
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
  Method,
  Mixin,
  Prop,
  Watch,
} from '@stencil/core';
import { ElementReference } from '../utils/element-reference';
import { findElement } from '../utils/find-element';
import { DefaultMixins } from '../utils/internal/component';
import { makeRef } from '../utils/make-ref';
import { ContextMenuOpenEventDetail } from './context-menu.types';

/**
 * Context menu events which already opened a context menu.
 * Prevents outer context menus from opening for nested targets.
 */
const handledContextMenuEvents = new WeakSet<Event>();

const isKeyboardContextMenuKey = (event: KeyboardEvent) =>
  event.key === 'ContextMenu' || (event.shiftKey && event.key === 'F10');

/**
 * Menu that opens at the pointer position when right-clicking a target element,
 * replacing the native browser context menu.
 * Pressing <kbd>ContextMenu</kbd> or <kbd>Shift</kbd>+<kbd>F10</kbd> on a focused target
 * opens the menu at the focused element.
 *
 * @slot - Context menu content, e.g. `ix-dropdown-item` elements.
 *
 * @since 6.0.0
 */
@Component({
  tag: 'ix-context-menu',
  styleUrl: 'context-menu.scss',
  shadow: true,
})
export class ContextMenu extends Mixin(...DefaultMixins) {
  @Element() override hostElement!: HTMLIxContextMenuElement;

  /**
   * Element that opens the context menu on right-click.
   * Can either be a string that will be interpreted as id attribute or a DOM element.
   * Defaults to the parent element of the context menu.
   */
  @Prop() target?: ElementReference;

  /**
   * Do not open the context menu, the native browser context menu is shown instead.
   */
  @Prop() disabled = false;

  /**
   * Accessible label of the menu.
   */
  @Prop() ariaLabelMenu?: string;

  /**
   * Enable Popover API rendering for top-layer positioning.
   * Recommended if the context menu is placed inside a transformed or clipping container.
   */
  @Prop() enableTopLayer = false;

  /**
   * Controls how keyboard navigation moves focus between menu items.
   * See `navigationMode` of `ix-dropdown`.
   */
  @Prop() navigationMode: 'active-descendant' | 'roving-tabindex' =
    'active-descendant';

  /**
   * Fired before the context menu opens.
   * Preventing the event keeps the context menu closed and shows the native browser context menu.
   */
  @Event() contextMenuOpen!: EventEmitter<ContextMenuOpenEventDetail>;

  /**
   * Fired after the visibility of the context menu has changed.
   */
  @Event() showChanged!: EventEmitter<boolean>;

  private readonly dropdownRef = makeRef<HTMLIxDropdownElement>();
  private targetElement?: HTMLElement;
  private targetResolveId = 0;
  private keyboardRequested = false;
  private isOpen = false;

  override connectedCallback(): void {
    if (super.connectedCallback) {
      super.connectedCallback();
    }

    this.registerTarget();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();

    this.targetResolveId++;
    this.unregisterTarget();
    this.removeOpenListeners();
  }

  @Watch('target')
  changedTarget() {
    this.registerTarget();
  }

  @Watch('disabled')
  changedDisabled(disabled: boolean) {
    if (disabled) {
      this.hide();
    }
  }

  /**
   * Show the context menu at the given absolute point in viewport coordinates.
   * Moves an already visible context menu.
   *
   * @param x Absolute horizontal viewport coordinate in pixels
   * @param y Absolute vertical viewport coordinate in pixels
   */
  @Method()
  async showAt(x: number, y: number) {
    const dropdown = await this.dropdownRef.waitForCurrent();
    await dropdown.showAt(x, y);
  }

  /**
   * Hide the context menu.
   */
  @Method()
  async hide() {
    await this.dropdownRef.current?.dismissDropdown();
  }

  private async registerTarget() {
    const resolveId = ++this.targetResolveId;
    const element = this.target
      ? await findElement(this.target, this.hostElement)
      : this.hostElement.parentElement;

    if (resolveId !== this.targetResolveId) {
      return;
    }

    this.unregisterTarget();
    this.targetElement = (element as HTMLElement | null) ?? undefined;
    this.targetElement?.addEventListener('contextmenu', this.onContextMenu);
    this.targetElement?.addEventListener('keydown', this.onTargetKeydown);
  }

  private unregisterTarget() {
    this.targetElement?.removeEventListener('contextmenu', this.onContextMenu);
    this.targetElement?.removeEventListener('keydown', this.onTargetKeydown);
    this.targetElement = undefined;
  }

  private readonly onTargetKeydown = (event: KeyboardEvent) => {
    this.keyboardRequested = isKeyboardContextMenuKey(event);
  };

  private readonly onContextMenu = (event: MouseEvent) => {
    const fromKeyboard = this.keyboardRequested;
    this.keyboardRequested = false;

    if (
      this.disabled ||
      handledContextMenuEvents.has(event) ||
      this.isInsideMenu(event)
    ) {
      return;
    }

    const { defaultPrevented } = this.contextMenuOpen.emit({
      originalEvent: event,
      target: this.targetElement as HTMLElement,
    });

    if (defaultPrevented) {
      return;
    }

    event.preventDefault();
    handledContextMenuEvents.add(event);

    const { x, y } = fromKeyboard
      ? this.getKeyboardPosition(event)
      : { x: event.clientX, y: event.clientY };

    this.showAt(x, y);
  };

  /**
   * Keyboard triggered context menu events have no meaningful pointer position,
   * open the menu at the bottom start of the focused element instead.
   */
  private getKeyboardPosition(event: MouseEvent) {
    const element =
      event.target instanceof HTMLElement
        ? event.target
        : (this.targetElement as HTMLElement);
    const { left, bottom } = element.getBoundingClientRect();
    return { x: left, y: bottom };
  }

  private isInsideMenu(event: Event) {
    return event.composedPath().includes(this.hostElement);
  }

  private readonly onWindowContextMenu = (event: MouseEvent) => {
    if (this.isInsideMenu(event)) {
      // No native context menu on top of the context menu
      event.preventDefault();
      return;
    }

    if (
      this.targetElement &&
      event.composedPath().includes(this.targetElement)
    ) {
      // Target handler moves the menu to the new position
      return;
    }

    this.hide();
  };

  private readonly onWindowScroll = (event: Event) => {
    if (this.isInsideMenu(event)) {
      return;
    }

    this.hide();
  };

  private readonly onWindowDismiss = () => this.hide();

  private addOpenListeners() {
    window.addEventListener('contextmenu', this.onWindowContextMenu, true);
    window.addEventListener('scroll', this.onWindowScroll, {
      capture: true,
      passive: true,
    });
    window.addEventListener('resize', this.onWindowDismiss);
    window.addEventListener('blur', this.onWindowDismiss);
  }

  private removeOpenListeners() {
    window.removeEventListener('contextmenu', this.onWindowContextMenu, true);
    window.removeEventListener('scroll', this.onWindowScroll, true);
    window.removeEventListener('resize', this.onWindowDismiss);
    window.removeEventListener('blur', this.onWindowDismiss);
  }

  private isOwnDropdownEvent(event: Event) {
    // Events of slotted submenus also pass the internal dropdown
    return event.target === this.dropdownRef.current;
  }

  private onDropdownShowChange(event: CustomEvent<boolean>) {
    if (this.isOwnDropdownEvent(event)) {
      event.stopPropagation();
    }
  }

  private onDropdownShowChanged(event: CustomEvent<boolean>) {
    if (!this.isOwnDropdownEvent(event)) {
      return;
    }

    event.stopPropagation();

    if (this.isOpen === event.detail) {
      return;
    }

    this.isOpen = event.detail;

    if (this.isOpen) {
      this.addOpenListeners();
    } else {
      this.removeOpenListeners();
    }

    this.showChanged.emit(this.isOpen);
  }

  override render() {
    return (
      <Host>
        <ix-dropdown
          ref={this.dropdownRef}
          role="menu"
          aria-label={this.ariaLabelMenu}
          suppressAriaModal
          enableTopLayer={this.enableTopLayer}
          navigationMode={this.navigationMode}
          onShowChange={(event) => this.onDropdownShowChange(event)}
          onShowChanged={(event) => this.onDropdownShowChanged(event)}
        >
          <slot></slot>
        </ix-dropdown>
      </Host>
    );
  }
}
