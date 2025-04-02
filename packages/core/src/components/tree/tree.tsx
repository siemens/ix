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
  Prop,
  Watch,
} from '@stencil/core';
import { VirtualList, VirtualListConfig } from './../utils/lazy-list';
import { renderDefaultItem } from '../tree-item/default-tree-item';
import {
  TreeContext,
  TreeItem,
  TreeItemContext,
  TreeItemVisual,
  TreeModel,
  UpdateCallback,
} from './tree-model';
import { dropdownController } from '../dropdown/dropdown-controller';

@Component({
  tag: 'ix-tree',
  styleUrl: 'tree.css',
  shadow: true,
})
export class Tree {
  @Element() hostElement!: HTMLIxTreeElement;

  /**
   * Initial root element will not be rendered
   */
  @Prop() root!: string;

  /**
   * Tree model
   */
  @Prop() model: TreeModel<any> = {};

  /**
   * Render function of tree items
   */
  @Prop() renderItem?: <T = any>(
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
   * Enable to toggle items by click on the item
   * @since 3.0.0
   */
  @Prop() toggleOnItemClick?: boolean;

  /**
   * Context changed
   */
  @Event() contextChange!: EventEmitter<TreeContext>;

  /**
   * Node toggled event
   * @since 1.5.0
   */
  @Event() nodeToggled!: EventEmitter<{ id: string; isExpaned: boolean }>;

  /**
   * Node clicked event
   * @since 1.5.0
   */
  @Event() nodeClicked!: EventEmitter<string>;

  /**
   * Emits removed nodes
   */
  @Event() nodeRemoved!: EventEmitter<any>;

  private hyperlist?: VirtualList;

  private toggleListener = new Map<HTMLElement, Function>();
  private itemClickListener = new Map<HTMLElement, Function>();
  private updates = new Map<string, UpdateCallback>();
  private observer!: MutationObserver;
  private hasFirstRender = false;

  private updatePadding(element: HTMLElement, item: TreeItemVisual<unknown>) {
    element.style.paddingLeft = item.level + 'rem';
  }

  private getVirtualizerOptions(): VirtualListConfig {
    const list = this.buildTreeList(this.model[this.root]);

    let setToggleListener = (
      item: TreeItemVisual<any>,
      el: HTMLElement,
      index: number
    ) => {
      if (item.hasChildren && !this.toggleListener.has(el)) {
        const toggleCallback = (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          const context = this.getContext(list[index].id);
          context.isExpanded = !context.isExpanded;
          this.nodeToggled.emit({ id: item.id, isExpaned: context.isExpanded });
          this.setContext(item.id, context);
        };
        el.addEventListener('toggle', toggleCallback);
        this.toggleListener.set(el, toggleCallback);
      }
    };

    return {
      width: '100%',
      height: '100%',
      itemHeight: 32,
      total: list.length,
      generate: (index: number) => {
        const item = list[index];

        const renderedTreeItem = this.hostElement.querySelector(
          `[data-tree-node-id="${item.id}"]`
        ) as HTMLIxTreeItemElement;

        const context = this.getContext(item.id);

        if (renderedTreeItem) {
          renderedTreeItem.hasChildren = item.hasChildren;
          renderedTreeItem.context = { ...context };

          setToggleListener(item, renderedTreeItem, index);

          if (this.updates.has(item.id)) {
            const doUpdate = this.updates.get(item.id);

            if (doUpdate) {
              doUpdate(item, { ...this.context });
            }
          }

          this.updatePadding(renderedTreeItem, item);
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
        el.style.paddingRight = '1rem';
        this.updatePadding(el, item);

        if (!this.itemClickListener.has(el)) {
          const itemClickCallback = (event: Event) => {
            const path = event.composedPath();
            const treeIndex = path.indexOf(this.hostElement);
            const treePath = path.slice(0, treeIndex);
            const hasTrigger = dropdownController.pathIncludesTrigger(treePath);

            if (hasTrigger) {
              return;
            }

            if (!event.defaultPrevented) {
              Object.values(this.context).forEach(
                (c) => (c.isSelected = false)
              );
              const context = this.getContext(item.id);
              context.isSelected = true;
              this.setContext(item.id, context);
            }

            if (this.toggleOnItemClick && item.hasChildren) {
              const context = this.getContext(item.id);
              context.isExpanded = !context.isExpanded;
              this.nodeToggled.emit({
                id: item.id,
                isExpaned: context.isExpanded,
              });
              this.setContext(item.id, context);
            }

            this.nodeClicked.emit(item.id);
          };
          el.addEventListener('toggle', (event) => {
            event.preventDefault();
          });
          el.addEventListener('click', itemClickCallback);
          this.itemClickListener.set(el, itemClickCallback);
        }

        setToggleListener(item, el, index);

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
      let removed: unknown[] = [];

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

    this.observer.observe(this.hostElement, {
      childList: true,
    });
  }

  componentWillRender() {
    this.hasFirstRender = true;

    if (this.isListInitialized()) {
      this.refreshList();
    } else {
      this.initList();
    }
  }

  disconnectedCallback() {
    this.hyperlist?.destroy();
    this.observer?.disconnect();
  }

  @Watch('model')
  modelChange() {
    if (this.hasFirstRender && !this.isListInitialized()) {
      this.initList();
    }
  }

  private isListInitialized() {
    //@ts-ignore
    const itemPositions = this.hyperlist?._itemPositions;

    return (
      itemPositions !== undefined &&
      itemPositions.length &&
      !itemPositions?.some(
        (item: number) => item === undefined || Number.isNaN(item)
      )
    );
  }

  private refreshList() {
    if (this.hyperlist) {
      this.hyperlist.refresh(this.hostElement, this.getVirtualizerOptions());
    }
  }

  private initList() {
    if (!this.model) {
      return;
    }

    this.hyperlist?.destroy();
    const config = this.getVirtualizerOptions();
    this.hyperlist = new VirtualList(this.hostElement, config);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
