/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  NgZone,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Directive()
export class TabPanelBaseDirective implements AfterViewInit, OnDestroy {
  @ViewChild('contentTemplate', { static: true })
  protected contentTemplate?: TemplateRef<unknown>;

  @ViewChild('contentOutlet', { read: ViewContainerRef, static: true })
  protected contentOutlet?: ViewContainerRef;

  protected el: HTMLIxTabPanelElement;

  private renderedView?: EmbeddedViewRef<unknown>;
  private hiddenObserver?: MutationObserver;
  private tabChangeSubscription?: Subscription;
  private syncTimeout?: ReturnType<typeof setTimeout>;

  constructor(
    protected c: ChangeDetectorRef,
    r: ElementRef,
    protected z: NgZone
  ) {
    c.detach();
    this.el = r.nativeElement;
  }

  ngAfterViewInit() {
    const panelsElement = this.el.closest('ix-tab-panels');

    if (!panelsElement) {
      this.syncRenderedContent();
      return;
    }

    this.tabChangeSubscription = fromEvent(
      panelsElement,
      'tabChange'
    ).subscribe(() => this.syncRenderedContent());

    this.hiddenObserver = new MutationObserver(() =>
      this.syncRenderedContent()
    );
    this.hiddenObserver.observe(this.el, {
      attributes: true,
      attributeFilter: ['hidden'],
    });

    this.syncTimeout = setTimeout(() => this.syncRenderedContent());
  }

  ngOnDestroy() {
    this.hiddenObserver?.disconnect();
    this.tabChangeSubscription?.unsubscribe();

    if (this.syncTimeout) {
      clearTimeout(this.syncTimeout);
    }

    if (this.renderedView) {
      this.contentOutlet?.clear();
      this.renderedView = undefined;
    }
  }

  private syncRenderedContent() {
    if (!this.contentTemplate || !this.contentOutlet) {
      return;
    }

    const tabsElement = this.el
      .closest('ix-tab-panels')
      ?.querySelector('ix-tabs');
    const activeTabKey = tabsElement?.activeTabKey;
    const shouldRenderContent =
      activeTabKey !== undefined
        ? activeTabKey === this.el.tabKey
        : !this.el.hidden;

    if (shouldRenderContent && !this.renderedView) {
      this.renderedView = this.contentOutlet.createEmbeddedView(
        this.contentTemplate
      );
      this.renderedView.detectChanges();
      this.c.detectChanges();
      return;
    }

    if (!shouldRenderContent && this.renderedView) {
      this.contentOutlet.clear();
      this.renderedView = undefined;
      this.c.detectChanges();
    }
  }
}

@Directive()
export class TabPanelsBaseDirective {
  protected el: HTMLIxTabPanelsElement;

  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
