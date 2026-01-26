/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ComponentInterface, MixedInCtor } from '@stencil/core';
import { Mixin as BaseMixin } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import { FocusHandlingMixin } from './mixins/detect-keyboard-mode.mixin';

export interface StencilLifecycle {
  hostElement?: HTMLStencilElement;
  connectedCallback?(): void;
  disconnectedCallback?(): void;
  componentWillRender?(): Promise<void> | void;
  componentDidRender?(): void;
  /**
   * The component is about to load and it has not
   * rendered yet.
   *
   * This is the best place to make any data updates
   * before the first render.
   *
   * componentWillLoad will only be called once.
   */
  componentWillLoad?(): Promise<void> | void;
  /**
   * The component has loaded and has already rendered.
   *
   * Updating data in this method will cause the
   * component to re-render.
   *
   * componentDidLoad will only be called once.
   */
  componentDidLoad?(): void;
  /**
   * A `@Prop` or `@State` property changed and a rerender is about to be requested.
   *
   * Called multiple times throughout the life of
   * the component as its properties change.
   *
   * componentShouldUpdate is not called on the first render.
   */
  componentShouldUpdate?(
    newVal: any,
    oldVal: any,
    propName: string
  ): boolean | void;
  /**
   * The component is about to update and re-render.
   *
   * Called multiple times throughout the life of
   * the component as it updates.
   *
   * componentWillUpdate is not called on the first render.
   */
  componentWillUpdate?(): Promise<void> | void;
  /**
   * The component has just re-rendered.
   *
   * Called multiple times throughout the life of
   * the component as it updates.
   *
   * componentWillUpdate is not called on the
   * first render.
   */
  componentDidUpdate?(): void;
  render?(): any;
}

export interface IxComponentInterface extends ComponentInterface {
  hostElement: HTMLStencilElement;
}

export function Mixin<T extends StencilLifecycle = StencilLifecycle>(
  ...mixins: Array<(base: MixedInCtor<StencilLifecycle>) => MixedInCtor<T>>
): MixedInCtor<T & StencilLifecycle> {
  if (mixins.length === 0) {
    return BaseMixin(FocusHandlingMixin) as any;
  }
  return BaseMixin(FocusHandlingMixin, ...mixins) as any;
}
