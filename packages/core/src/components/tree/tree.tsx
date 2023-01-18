/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
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
  Prop,
  Watch,
} from '@stencil/core';
import Hyperlist from 'hyperlist';
import { renderDefaultItem } from '../tree-item/default-tree-item';
import {
  TreeContext,
  TreeItem,
  TreeItemContext,
  TreeItemVisual,
  TreeModel,
  UpdateCallback,
} from './tree-model';

@Component({
  tag: 'ix-tree',
  styleUrl: 'tree.css',
  scoped: true,
})
export class Tree {
  @Element() host!: HTMLIxTreeElement;

  /**
   * Initial root element will not be rendered
   */
  @Prop() root: string;

  /**
   * Tree model
   */
  @Prop() model: TreeModel<any>;

  /**
   * Render function of tree items
   */
  @Prop() renderItem: <T = any>(
    index: number,
    data: T,
    dataList: Array<T>,
    context: TreeContext,
    update: (callback: UpdateCallback) => void
  ) => HTMLElement;

  /**
   * Selection and collapsed state management
   */
  @Prop({ mutable: true }) context: TreeContext = {};

  /**
   * Context changed
   */
  @Event() contextChange: EventEmitter<TreeContext>;

  /**
   * Emits removed nodes
   */
  @Event() nodeRemoved: EventEmitter<any>;

  private hyperlist: any;

  private toggleListener = new Map<HTMLElement, Function>();
  private itemClickListener = new Map<HTMLElement, Function>();
  private updates = new Map<string, UpdateCallback>();

  private observer: MutationObserver;

  private getVirtualizerOptions() {
    const list = this.buildTreeList(this.model[this.root]);

    return {
      itemHeight: 32,
      total: list.length,
      generate: (index: number) => {
        const item = list[index];
        const renderedTreeItem = this.host.querySelector(
          `[data-tree-node-id="${item.id}"]`
        ) as HTMLIxTreeItemElement;

        const context = this.getContext(item.id);

        if (renderedTreeItem) {
          renderedTreeItem.hasChildren = item.hasChildren;
          renderedTreeItem.context = { ...context };

          if (this.updates.has(item.id)) {
            const doUpdate = this.updates.get(item.id);
            doUpdate(item, { ...this.context });
          }

          return renderedTreeItem;
        }

        const update = (callback: UpdateCallback) => {
          this.updates.set(item.id, callback);
        };

        let innerElement: HTMLElement | null = null;
        if (this.renderItem) {
          innerElement = this.renderItem(
            index,
            item,
            list,
            { ...this.context },
            update
          );
        }

        if (innerElement === null) {
          innerElement = renderDefaultItem(item, context, update);
        }

        const el = innerElement;
        el.setAttribute('data-tree-node-id', item.id);
        el.style.paddingLeft = item.level + 'rem';
        el.style.paddingRight = '1rem';

        if (!this.itemClickListener.has(el)) {
          const itemClickCallback = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            Object.values(this.context).forEach((c) => (c.isSelected = false));
            const context = this.getContext(item.id);
            context.isSelected = true;
            this.setContext(item.id, context);
          };
          el.addEventListener('itemClick', itemClickCallback);
          this.itemClickListener.set(el, itemClickCallback);
        }

        if (item.hasChildren && !this.toggleListener.has(el)) {
          const toggleCallback = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            const context = this.getContext(list[index].id);
            context.isExpanded = !context.isExpanded;
            this.setContext(item.id, context);
          };
          el.addEventListener('toggle', toggleCallback);
          this.toggleListener.set(el, toggleCallback);
        }

        return el;
      },
    };
  }

  private setContext(id: string, context: TreeItemContext) {
    this.context = {
      ...this.context,
      [id]: context,
    };

    this.contextChange.emit(this.context);
  }

  private getContext(id: string): TreeItemContext {
    if (!this.context) {
      return {
        isExpanded: false,
        isSelected: false,
      };
    }
    if (!this.context[id]) {
      this.context[id] = {
        isExpanded: false,
        isSelected: false,
      };
    }
    return this.context[id];
  }

  private buildTreeList(
    root: TreeItem<any>,
    level: number = 0
  ): TreeItemVisual<any>[] {
    const itemList: TreeItemVisual<any>[] = [];

    if (root?.hasChildren) {
      const newLevel = level + 1;
      root.children.forEach((id: string) => {
        const item = this.model[id];
        const context = this.getContext(id);
        itemList.push({ ...item, level });
        if (item.hasChildren && context.isExpanded) {
          itemList.push(...this.buildTreeList(item, newLevel));
        }
      });
    }

    return itemList;
  }

  componentDidLoad() {
    this.initList();

    this.observer = new MutationObserver((records) => {
      let removed = [];

      records.forEach((record) => {
        removed = [...removed, ...Array.from(record.removedNodes)];

        record.addedNodes.forEach((an) => {
          const index = removed.indexOf(an);
          if (index >= 0) {
            removed.splice(index, 1);
          }
        });
      });

      this.nodeRemoved.emit(removed);
    });

    this.observer.observe(this.host, {
      childList: true,
    });
  }

  componentWillRender() {
    this.refreshList();
  }

  disconnectedCallback() {
    this.hyperlist.destroy();
    this.observer.disconnect();
  }

  @Watch('model')
  modelChange() {
    this.initList();
  }

  private refreshList() {
    if (this.hyperlist) {
      this.hyperlist.refresh(this.host, this.getVirtualizerOptions());
    }
  }

  private initList() {
    this.hyperlist?.destroy();
    const config = this.getVirtualizerOptions();
    this.hyperlist = new Hyperlist(this.host, config);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
