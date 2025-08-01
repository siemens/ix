/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TabClickDetail } from '../tab-item/tab-item.types';
import {
  addDisposableEventListener,
  DisposableEventListener,
} from '../utils/disposable-event-listener';
import { TypedEvent, Disposable } from '../utils/typed-event';

export interface TabController {
  connectedCallback(controlledElement: HTMLIxTabsContextElement): void;
  disconnectedCallback(): void;
}

export abstract class TabsContextController implements TabController {
  private controlledElement?: HTMLIxTabsContextElement;
  private disposableEventListener?: DisposableEventListener;

  selectedValueChange = new TypedEvent<string>();

  connectedCallback(controlledElement: HTMLIxTabsContextElement): void {
    this.controlledElement = controlledElement;
    this.disposableEventListener = addDisposableEventListener(
      this.controlledElement,
      'tabClick',
      (event) => {
        this.selectedValueChange.emit(
          (event as CustomEvent<TabClickDetail>).detail.value!
        );
      }
    );

    this.selectedValueChange.emit(this.getInitialSelectedTab());
  }

  disconnectedCallback(): void {
    this.disposableEventListener?.();
  }

  getTabPanels() {
    return Array.from(
      this.controlledElement?.querySelectorAll('ix-tab-panel') || []
    ) as HTMLIxTabPanelElement[];
  }

  private getInitialSelectedTab() {
    //TODO remove hardcoded initial tab value
    return 'tab-1';
  }
}

export class DOMTabsContextController extends TabsContextController {
  private observer?: MutationObserver;
  disposable: Disposable;

  constructor() {
    super();

    this.disposable = this.selectedValueChange.on((selectedTab) => {
      this.handleSelectedChange(selectedTab);
    });
  }

  override connectedCallback(
    controlledElement: HTMLIxTabsContextElement
  ): void {
    super.connectedCallback(controlledElement);

    this.observer = new MutationObserver(() => {
      // TODO Reevaluate tabs context when DOM changes
      console.log('DOM changed, updating tabs context');
    });

    this.observer.observe(controlledElement, {
      childList: true,
      subtree: true,
    });
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.observer?.disconnect();
    this.disposable.dispose();
  }

  handleSelectedChange(selectedTab: string): void {
    const panels = this.getTabPanels();
    panels.forEach((panel) => {
      if (panel.value === selectedTab) {
        panel.style.display = 'block';
      } else {
        panel.style.display = 'none';
      }
    });
  }
}
