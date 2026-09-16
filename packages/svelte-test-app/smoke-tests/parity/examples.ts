/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const HTML_APP_ORIGIN = 'http://127.0.0.1:4174';
export const SVELTE_APP_ORIGIN = 'http://127.0.0.1:4173';

/**
 * html-test-app is a multi-page vite build: one HTML entry per example, served
 * from its own path. svelte-test-app is a single page with client-side routing.
 */
export const htmlUrl = (example: string) =>
  `${HTML_APP_ORIGIN}/preview-examples/${example}.html?no-margin=true`;

export const svelteUrl = (example: string) =>
  `${SVELTE_APP_ORIGIN}/preview/${example}`;

/**
 * html-test-app renders examples straight into `<body>`; svelte-test-app mounts
 * into `<main id="root">`. Only the *children* of these are compared, so the
 * host element itself never enters the diff.
 */
export const HTML_APP_ROOT = 'body';
/**
 * The examples sit one level deeper than in html-test-app, inside the `main`
 * landmark the shared aria snapshots expect. It is `display: contents`, so it
 * is the collection root here and contributes nothing to compare.
 */
export const SVELTE_APP_ROOT = '#root';

/**
 * Properties that decide what a component *looks like*. Geometry is left out on
 * purpose: the two apps lay out at different offsets (html-test-app sizes
 * `<body>` to the viewport, svelte-test-app does not) and comparing pixel boxes
 * would report that over and over while telling us nothing about the binding.
 *
 * The bug class this list is aimed at is "a custom property did not resolve, so
 * the component rendered unthemed" -- which is what the manual `ix-select`
 * hover/selected investigation turned out to be.
 */
export const STYLE_PROPERTIES = [
  'display',
  'visibility',
  'opacity',
  'color',
  'background-color',
  'background-image',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',
  'border-top-width',
  'border-right-width',
  'border-bottom-width',
  'border-left-width',
  'border-top-left-radius',
  'font-family',
  'font-size',
  'font-weight',
  'font-style',
  'line-height',
  'text-align',
  'text-decoration-line',
  'text-transform',
  'fill',
  'stroke',
];

/**
 * Every example that exists in both apps, and is therefore expected to render
 * identically. Keep this in sync with `src/routes.ts` -- a preview route that
 * is not listed here needs a reason in {@link UNCOMPARED}.
 */
export const COMPARED_EXAMPLES = [
  'application',
  'buttons',
  'card',
  'checkbox',
  'dropdown',
  'event-list',
  'input',
  'message',
  'modal',
  'select',
  'toast',
];

/**
 * Boot-time event tallies that are known to differ, with the reason. Anything
 * not listed here fails the harness.
 *
 * Keep this list short and each entry justified. It is the escape hatch, and an
 * unexplained entry defeats the point of the harness.
 */
export const EVENT_ALLOWANCES: Record<string, Record<string, string>> = {
  dropdown: {
    /**
     * `ix-dropdown` re-announces itself to its trigger whenever `trigger`
     * changes. In html-test-app the attribute is in the parsed markup *and* the
     * `@Watch` runs again once the element upgrades, so the internal event is
     * emitted twice. The Svelte proxy assigns the property once, so it is
     * emitted once. The end state -- checked by the DOM and property diff above
     * -- is the same; the event is internal, idempotent and not observable to
     * an application.
     */
    'ix-button:ix-assign-sub-menu':
      'attribute parse plus upgrade re-runs the trigger watcher in plain HTML',
  },
};

/**
 * Preview routes with no counterpart to compare against.
 *
 * - `icon`: html-test-app has no `icon.html`. The nearest reference is
 *   `add-icons.html`, which demonstrates registration rather than rendering.
 */
export const UNCOMPARED = ['icon'];
