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
  Method,
  Prop,
  Watch,
} from '@stencil/core';
import { dropdownController } from '../dropdown/dropdown-controller';
import { renderDefaultItem } from '../tree-item/default-tree-item';
import { VirtualList, VirtualListConfig } from './../utils/lazy-list';
import {
  TreeContext,
  TreeItem,
  TreeItemContext,
  TreeItemVisual,
  TreeModel,
  UpdateCallback,
} from './tree-model';
import { defaultRefreshTreeOptions, RefreshTreeOptions } from './tree.types';

/**
 * Displays hierarchical data as an expandable tree.
 *
 * @documentation https://ix.siemens.io//docs/components/tree/code.md
 * @slot - Tree items.
 */
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
  @Prop() root: string = 'root';

  /**
   * Tree model
   *
   * The model is processed recursively and must be acyclic. Bound the size of untrusted or
   * user-controlled models to keep the page responsive. Item IDs are used in CSS selectors; use
   * simple, application-controlled IDs (letters, digits, `-`, `_`).
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
   */
  @Event() nodeToggled!: EventEmitter<{ id: string; isExpanded: boolean }>;

  /**
   * Node clicked event
   */
  @Event() nodeClicked!: EventEmitter<string>;

  /**
   * Emits removed nodes
   */
  @Event() nodeRemoved!: EventEmitter<any>;

  private hyperlist?: VirtualList;

  private readonly updates = new Map<string, UpdateCallback>();
  private observer?: MutationObserver;
  private hasFirstRender = false;

  private readonly dirtyItems = new Set<string>();
  private focusedItemId?: string;

  private getNavigationId(items: TreeItemVisual<unknown>[]) {
    return (
      (this.focusedItemId &&
        items.some((item) => item.id === this.focusedItemId) &&
        this.focusedItemId) ||
      items.find((item) => this.getContext(item.id).isSelected)?.id ||
      items[0]?.id
    );
  }

  private updateNavigationTabIndex(id: string) {
    this.focusedItemId = id;
    this.hostElement.removeAttribute('tabindex');
    this.hostElement
      .querySelectorAll<HTMLIxTreeItemElement>('[data-tree-node-id]')
      .forEach((item) => {
        this.setNavigationTabIndex(item, item.dataset.treeNodeId === id);
      });
  }

  private updateNavigationTabStops(items: TreeItemVisual<unknown>[]) {
    const navigationId = this.getNavigationId(items);
    const rows = Array.from(
      this.hostElement.querySelectorAll<HTMLIxTreeItemElement>(
        '[data-tree-node-id]'
      )
    );
    const isRendered = rows.some(
      (row) => row.dataset.treeNodeId === navigationId
    );
    if (navigationId && !isRendered) {
      this.hostElement.tabIndex = 0;
    } else {
      // A negative tabindex on the shadow host would also skip its rows.
      this.hostElement.removeAttribute('tabindex');
    }
    rows.forEach((row) => {
      this.setNavigationTabIndex(row, row.dataset.treeNodeId === navigationId);
    });
  }

  private setNavigationTabIndex(item: HTMLIxTreeItemElement, active: boolean) {
    const index = active ? 0 : -1;
    item.tabIndex = index;
    item.dataset.treeNavigationTabIndex = String(index);
    item.dispatchEvent(
      new CustomEvent('treeNavigationIndex', { detail: index })
    );
  }

  private updatePadding(element: HTMLElement, item: TreeItemVisual<unknown>) {
    element.style.paddingLeft = item.level + 'rem';
  }

  private getVirtualizerOptions(
    refreshTreeOptions: RefreshTreeOptions
  ): VirtualListConfig {
    const list = this.buildTreeList(this.getModelItem(this.root));

    return {
      width: '100%',
      height: '100%',
      itemHeight: 32,
      scrollerTagName: 'div',
      total: list.length,
      useFragment: false,
      applyPatch: (element, fragment) => {
        const rows =
          fragment instanceof DocumentFragment
            ? Array.from(fragment.children)
            : fragment;
        const retainedNodes = new Set<Node>(rows);
        for (const child of Array.from(element.childNodes)) {
          if (!retainedNodes.has(child)) {
            child.remove();
          }
        }

        // Keep retained rows connected so scrolling does not discard focus.
        let next = element.firstChild;
        for (const row of rows) {
          if (row === next) {
            next = next.nextSibling;
          } else {
            element.insertBefore(row, next);
          }
        }
        this.updateNavigationTabStops(list);
      },
      generate: (index: number) => {
        const item = list[index];

        const renderedTreeItem = this.hostElement.querySelector(
          `[data-tree-node-id="${item.id}"]`
        ) as HTMLIxTreeItemElement;

        const context = this.getContext(item.id);

        /**
         * Return only the existing item if it is already rendered
         */
        if (renderedTreeItem && refreshTreeOptions.force === false) {
          renderedTreeItem.hasChildren = item.hasChildren;
          renderedTreeItem.context = { ...context };
          renderedTreeItem.disabled = Boolean(
            item.disabled || context.isDisabled
          );
          renderedTreeItem.setAttribute('aria-level', String(item.level + 1));
          renderedTreeItem.setAttribute('aria-setsize', String(item.setsize));
          renderedTreeItem.setAttribute('aria-posinset', String(item.posinset));

          let forceRerender = this.dirtyItems.has(item.id);

          if (this.updates.has(item.id)) {
            const doUpdate = this.updates.get(item.id);

            if (doUpdate) {
              const updateRequestedRerender = doUpdate(item, {
                ...this.context,
              });

              if (typeof updateRequestedRerender === 'boolean') {
                forceRerender = updateRequestedRerender;
              }
            }
          }

          this.updatePadding(renderedTreeItem, item);

          if (!forceRerender) {
            return renderedTreeItem;
          }
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

        const el = innerElement as HTMLIxTreeItemElement;
        el.setAttribute('data-tree-node-id', item.id);
        el.dataset.treeNavigationTabIndex = '-1';
        el.setAttribute('aria-level', String(item.level + 1));
        el.setAttribute('aria-setsize', String(item.setsize));
        el.setAttribute('aria-posinset', String(item.posinset));
        el.style.paddingRight = 'var(--si-sys-sizing-spacing-x-60)';
        this.updatePadding(el, item);

        this.dirtyItems.delete(item.id);

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

  private getModelItem(id: string): TreeItem<any> | undefined {
    if (!this.model || !Object.hasOwn(this.model, id)) {
      return undefined;
    }
    return this.model[id];
  }

  private getContext(id: string): TreeItemContext {
    if (!this.context) {
      return {
        isExpanded: false,
        isSelected: false,
        isDisabled: this.getModelItem(id)?.disabled,
      };
    }
    if (!Object.hasOwn(this.context, id) || !this.context[id]) {
      // defineProperty avoids invoking inherited setters such as `__proto__`
      Object.defineProperty(this.context, id, {
        value: {
          isExpanded: false,
          isSelected: false,
          isDisabled: this.getModelItem(id)?.disabled,
        },
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }
    return this.context[id];
  }

  private buildTreeList(
    root: TreeItem<any> | undefined,
    level: number = 0
  ): TreeItemVisual<any>[] {
    const itemList: TreeItemVisual<any>[] = [];

    if (root?.hasChildren) {
      const newLevel = level + 1;
      root.children.forEach((id: string, index: number) => {
        const item = this.getModelItem(id);
        if (!item) {
          throw new TypeError(`Tree model has no item for child key "${id}"`);
        }
        const context = this.getContext(id);
        itemList.push({
          ...item,
          id,
          level,
          posinset: index + 1,
          setsize: root.children.length,
        });
        if (item.hasChildren && context.isExpanded) {
          itemList.push(...this.buildTreeList(item, newLevel));
        }
      });
    }

    return itemList;
  }

  private async focusItem(
    item: TreeItemVisual<unknown>,
    index: number,
    fromContainer = false
  ) {
    this.updateNavigationTabIndex(item.id);
    let element = this.hostElement.querySelector<HTMLIxTreeItemElement>(
      `[data-tree-node-id="${CSS.escape(item.id)}"]`
    );
    if (!element) {
      this.hostElement.scrollTop = index * 32;
      await this.refreshTree();
      element = this.hostElement.querySelector<HTMLIxTreeItemElement>(
        `[data-tree-node-id="${CSS.escape(item.id)}"]`
      );
    }
    if (element) {
      await this.whenTreeItemReady(element);
      if (!fromContainer || this.hostElement.matches(':focus')) {
        element.focus();
      }
    }
  }

  private async whenTreeItemReady(item: HTMLIxTreeItemElement) {
    await customElements.whenDefined('ix-tree-item');
    await item.componentOnReady?.();
  }

  private onTreeKeyDown(event: KeyboardEvent) {
    const path = event.composedPath();
    const focusedItem = path[0];
    const isItemFocused =
      focusedItem instanceof HTMLElement &&
      focusedItem.tagName === 'IX-TREE-ITEM';
    const row = path.find(
      (node): node is HTMLElement =>
        node instanceof HTMLElement &&
        node.classList.contains('tree-node-container')
    );
    let itemElement: HTMLIxTreeItemElement;
    if (isItemFocused) {
      itemElement = focusedItem as HTMLIxTreeItemElement;
    } else if (row && focusedItem === row) {
      itemElement = (row.getRootNode() as ShadowRoot)
        .host as HTMLIxTreeItemElement;
    } else {
      return;
    }
    const id = itemElement.dataset.treeNodeId;
    if (!id || !this.hostElement.contains(itemElement)) {
      return;
    }

    const list = this.buildTreeList(this.model[this.root]);
    const index = list.findIndex((item) => item.id === id);
    if (index < 0) {
      return;
    }

    const isDisabled = list[index].disabled || this.getContext(id).isDisabled;
    let targetIndex = -1;

    switch (event.key) {
      case 'ArrowDown':
        targetIndex = index + 1 < list.length ? index + 1 : -1;
        break;
      case 'ArrowUp':
        targetIndex = index - 1;
        break;
      case 'Home':
        targetIndex = 0;
        break;
      case 'End':
        targetIndex = list.length - 1;
        break;
      case 'ArrowRight':
        if (list[index].hasChildren) {
          if (!this.getContext(id).isExpanded) {
            if (!isDisabled) {
              this.toggleNode(id);
            }
          } else {
            for (let i = index + 1; i < list.length; i++) {
              if (list[i].level <= list[index].level) {
                break;
              }
              if (list[i].level === list[index].level + 1) {
                targetIndex = i;
                break;
              }
            }
          }
        }
        break;
      case 'ArrowLeft':
        if (list[index].hasChildren && this.getContext(id).isExpanded) {
          if (!isDisabled) {
            this.toggleNode(id);
          }
        } else {
          for (let i = index - 1; i >= 0; i--) {
            if (list[i].level < list[index].level) {
              targetIndex = i;
              break;
            }
          }
        }
        break;
      default:
        return;
    }

    event.preventDefault();
    event.stopPropagation();
    if (targetIndex >= 0) {
      void this.focusItem(list[targetIndex], targetIndex);
    }
  }

  private toggleNode(id: string) {
    const context = this.getContext(id);
    context.isExpanded = !context.isExpanded;
    this.nodeToggled.emit({ id, isExpanded: context.isExpanded });
    this.setContext(id, context);
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
      this.refreshTree();
    } else {
      this.initList();
    }
  }

  connectedCallback() {
    if (this.hasFirstRender) {
      this.initList();
    }
  }

  disconnectedCallback() {
    this.hyperlist?.destroy();
    this.observer?.disconnect();
  }

  @Watch('model')
  onModelChange() {
    if (this.hasFirstRender && !this.isListInitialized()) {
      this.initList();
    }
  }

  /**
   * Mark items as dirty.
   * This will force the list to re-render the items with the given ids.
   */
  @Method()
  async markItemsAsDirty(ids: string[]) {
    ids.forEach((id) => this.dirtyItems.add(id));
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

  /**
   * Refresh the list.
   * This will re-render the list with the current model and context.
   */
  @Method()
  async refreshTree(options: RefreshTreeOptions = defaultRefreshTreeOptions) {
    if (this.hyperlist) {
      const focusedItem = this.hostElement.querySelector<HTMLIxTreeItemElement>(
        'ix-tree-item:focus-within'
      );
      const focusedControl = focusedItem?.shadowRoot?.activeElement;
      const focusedHost = focusedItem?.matches(':focus') && !focusedControl;
      const focusedId = focusedItem?.dataset.treeNodeId;

      this.hyperlist.refresh(
        this.hostElement,
        this.getVirtualizerOptions(options)
      );

      if (focusedHost && focusedId) {
        const treeItem = this.hostElement.querySelector<HTMLIxTreeItemElement>(
          `[data-tree-node-id="${CSS.escape(focusedId)}"]`
        );
        if (treeItem) {
          await this.whenTreeItemReady(treeItem);
          treeItem.focus();
        }
        return;
      }

      if (
        focusedId &&
        focusedControl instanceof HTMLElement &&
        focusedControl.matches('.icon-toggle, .tree-node-container')
      ) {
        const treeItem = this.hostElement.querySelector<HTMLIxTreeItemElement>(
          `[data-tree-node-id="${CSS.escape(focusedId)}"]`
        );
        if (treeItem && treeItem !== focusedItem) {
          await this.whenTreeItemReady(treeItem);
        }
        const selector = focusedControl.matches('.icon-toggle')
          ? '.icon-toggle'
          : '.tree-node-container';
        const control =
          treeItem?.shadowRoot?.querySelector<HTMLElement>(selector);
        (
          control ??
          treeItem?.shadowRoot?.querySelector<HTMLElement>(
            '.tree-node-container'
          )
        )?.focus();
      }
    }
  }

  private initList() {
    if (!this.model) {
      return;
    }

    this.hyperlist?.destroy();
    const config = this.getVirtualizerOptions(defaultRefreshTreeOptions);
    this.hyperlist = new VirtualList(this.hostElement, config);
  }

  private getTreeNodeId(target: HTMLElement): string | undefined {
    let current: HTMLElement | null = target;
    while (current && current !== this.hostElement) {
      const id = current.dataset.treeNodeId;
      if (id) {
        return id;
      }
      current = current.parentElement;
    }
    return undefined;
  }

  @Listen('toggle')
  onToggle(event: CustomEvent) {
    const { target } = event;
    event.preventDefault();
    event.stopPropagation();

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const id = this.getTreeNodeId(target);

    if (!id) {
      return;
    }

    const item = this.getModelItem(id);
    if (!item?.hasChildren) {
      return;
    }

    if (item.disabled) {
      return;
    }

    const context = this.getContext(id);

    if (context.isDisabled) {
      return;
    }

    this.toggleNode(id);
  }

  onTreeItemClick(event: Event) {
    const { target } = event;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const id = this.getTreeNodeId(target);

    if (!id) {
      return;
    }

    const item = this.getModelItem(id);
    if (!item) {
      return;
    }

    const context = this.getContext(id);

    if (item.disabled || context.isDisabled) {
      return;
    }

    const path = event.composedPath();
    const treeIndex = path.indexOf(this.hostElement);
    const treePath = path.slice(0, treeIndex);
    const hasTrigger = dropdownController.pathIncludesTrigger(treePath);

    if (hasTrigger) {
      return;
    }

    if (!event.defaultPrevented) {
      for (const itemContext of Object.values(this.context)) {
        itemContext.isSelected = false;
      }
      context.isSelected = true;
      this.setContext(id, context);
    }

    if (this.toggleOnItemClick && item.hasChildren) {
      context.isExpanded = !context.isExpanded;
      this.nodeToggled.emit({
        id: id,
        isExpanded: context.isExpanded,
      });
      this.setContext(id, context);
    }

    this.nodeClicked.emit(id);
  }

  render() {
    return (
      <Host
        role="tree"
        aria-label={this.hostElement.getAttribute('aria-label') ?? 'Tree'}
        onClick={(event: Event) => this.onTreeItemClick(event)}
        onKeyDown={(event: KeyboardEvent) => this.onTreeKeyDown(event)}
        onFocusout={(event: FocusEvent) => {
          if (
            event.relatedTarget instanceof Node &&
            this.hostElement.contains(event.relatedTarget)
          ) {
            return;
          }
          // Update re-entry after the browser has finished moving Tab focus.
          queueMicrotask(() => {
            if (!this.hostElement.matches(':focus-within')) {
              this.focusedItemId = undefined;
              this.updateNavigationTabStops(
                this.buildTreeList(this.model[this.root])
              );
            }
          });
        }}
        onFocusin={(event: FocusEvent) => {
          const path = event.composedPath();
          const focusedItem = path[0];
          if (focusedItem === this.hostElement) {
            const list = this.buildTreeList(this.model[this.root]);
            const id = this.getNavigationId(list);
            const index = list.findIndex((item) => item.id === id);
            if (index >= 0) {
              void this.focusItem(list[index], index, true);
            }
            return;
          }
          if (
            focusedItem instanceof HTMLElement &&
            focusedItem.tagName === 'IX-TREE-ITEM' &&
            focusedItem.dataset.treeNodeId
          ) {
            this.updateNavigationTabIndex(focusedItem.dataset.treeNodeId);
            return;
          }
          const row = path.find(
            (node): node is HTMLElement =>
              node instanceof HTMLElement &&
              node.classList.contains('tree-node-container')
          );
          const item = row?.getRootNode() as ShadowRoot | undefined;
          const id = (item?.host as HTMLIxTreeItemElement | undefined)?.dataset
            .treeNodeId;
          if (id && focusedItem === row) {
            this.updateNavigationTabIndex(id);
          }
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
