/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  EventEmitter,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  TemplateRef,
} from '@angular/core';
import type {
  TreeContext as ICwTreeTreeContext,
  TreeContext,
  UpdateCallback,
  Components,
} from '@siemens/ix';
import { Subscription } from 'rxjs';

export declare interface TreeBaseDirective
  extends Omit<Components.IxTree, 'renderItem'> {
  /**
   * Context changed
   */
  contextChange: EventEmitter<CustomEvent<ICwTreeTreeContext>>;
  /**
   * Emits removed nodes
   */
  nodeRemoved: EventEmitter<CustomEvent<any>>;
}

@Directive()
export class TreeBaseDirective implements OnDestroy {
  renderCache = new Map<HTMLElement, EmbeddedViewRef<any>>();

  @Input()
  set renderItem(template: TemplateRef<any>) {
    const itemRenderFunction = this.generateItemRenderer(template);
    (this.el as HTMLIxTreeElement).renderItem = itemRenderFunction.bind(this);
  }

  protected el: HTMLElement;

  onRemovedSubscription!: Subscription;

  constructor(
    c: ChangeDetectorRef,
    r: ElementRef,
    protected z: NgZone,
    @Inject('proxyOutputs')
    proxyOutputs: (instance: any, el: any, events: string[]) => void
  ) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['contextChange', 'nodeRemoved']);

    this.onRemovedSubscription = this.nodeRemoved.subscribe(
      (removedEvent: CustomEvent<HTMLIxTreeItemElement[]>) => {
        const { detail } = removedEvent;

        detail.forEach((removedItemElement) => {
          if (this.renderCache.has(removedItemElement)) {
            this.renderCache.get(removedItemElement)?.destroy();
            this.renderCache.delete(removedItemElement);
          }
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.onRemovedSubscription?.unsubscribe();
  }

  generateItemRenderer(templateRef: TemplateRef<any>) {
    return (
      _: number,
      itemData: any,
      __: any[],
      context: TreeContext,
      update: (callback: UpdateCallback) => void
    ) => {
      const treeItem = document.createElement('ix-tree-item');
      treeItem.hasChildren = itemData.hasChildren;
      treeItem.context = context[itemData.id];

      const embeddedView = templateRef.createEmbeddedView({
        $implicit: itemData.data,
      });

      const container = embeddedView.rootNodes[0];
      embeddedView.detectChanges();

      update((itemData, context) => {
        treeItem.context = context[itemData.id];
        treeItem.hasChildren = itemData.hasChildren;

        embeddedView.context.$implicit = itemData.data;

        embeddedView.detectChanges();
      });

      treeItem.appendChild(container);
      this.renderCache.set(treeItem, embeddedView);

      return treeItem;
    };
  }
}
