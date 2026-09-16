/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * Props of a generated Svelte proxy.
 *
 * `T` is the Stencil JSX interface of the component (e.g. `JSX.IxButton`),
 * which already contains both the declared properties and the `on<EventName>`
 * handler signatures. Everything not covered by it falls back to the regular
 * HTML attributes of the host element.
 */
export type StencilSvelteProps<
  T,
  E extends HTMLElement = HTMLElement,
> = Partial<Omit<T, 'children' | 'ref' | 'key'>> &
  Omit<HTMLAttributes<E>, keyof T | 'children'> & {
    /** Default slot content. */
    children?: Snippet;
    /** Bindable reference to the underlying custom element. */
    element?: E;
  };

/**
 * What `useStencilElement` hands back to the generated proxy.
 */
export type StencilBinding = {
  /**
   * The props that are neither declared component properties nor event
   * handlers -- `id`, `class`, `aria-*`, `data-*` and friends. The proxy
   * spreads these onto the custom element in its template so that Svelte owns
   * them: they are then set before the element is inserted into the document,
   * and removed again when they disappear.
   */
  readonly attributes: Record<string, unknown>;
};

/**
 * Two-way binding descriptor, generated for the components listed in the
 * `componentModels` option of the Stencil output target.
 */
export type ModelBinding = {
  /** Property on the custom element that holds the value (e.g. `value`). */
  prop: string;
  /** Event the custom element emits on change (e.g. `valueChange`). */
  event: string;
  get: () => unknown;
  set: (value: unknown) => void;
};
