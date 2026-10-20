/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { ComponentInterface } from '@stencil/core';
import { SetupMixin } from './mixins/setup.mixin';

/**
 * Host element contract used by IX component interfaces and mixins.
 *
 * Mirrors Stencil's internal `HTMLStencilElement` type but is declared
 * locally on purpose: generated declarations must not reference `@stencil/core`
 * modules because consuming projects do not install them.
 * See https://github.com/siemens/ix/issues/2730
 */
export interface IxHostElement extends HTMLElement {
  componentOnReady(): Promise<this>;
}

/**
 * Constructor contract used by IX mixins.
 *
 * Mirrors Stencil's `MixedInCtor` for the same reason as {@link IxHostElement}:
 * published declarations must stay free of `@stencil/core` module references.
 * See https://github.com/siemens/ix/issues/2730
 */
export type MixedInCtor<T = {}> = new (...args: any[]) => T;

export interface StencilLifecycle {
  hostElement?: IxHostElement;
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
  hostElement: IxHostElement;
}

export const DefaultMixins = [SetupMixin] as const;
