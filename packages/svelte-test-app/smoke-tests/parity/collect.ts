/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The browser-side half of the parity harness.
 *
 * Everything in here is handed to `page.evaluate` / `page.addInitScript`, which
 * serialise a function to source and re-parse it inside the page. That means
 * these functions must be **completely self-contained**: no imports, no module
 * scope, no closures. Types are erased before serialisation, so they are fine.
 */

export type ParityNode = {
  /** Structural address, e.g. `ix-select > ix-select-item[2] ::shadow > div`. */
  path: string;
  tag: string;
  attrs: Record<string, string>;
  /** Direct text content, whitespace-collapsed. Absent when empty. */
  text?: string;
  styles: Record<string, string>;
  /**
   * For custom elements only: the value of every `@Prop()` Stencil put on the
   * prototype. This is the component's actual state, as opposed to the markup
   * that happened to produce it.
   */
  props?: Record<string, string>;
};

export type CollectOptions = {
  /** Selector for the element whose *children* form the compared subtree. */
  root: string;
  /** Computed style properties to record for every node. */
  styleProperties: string[];
};

/**
 * Walks the light and shadow DOM under `root` and returns one record per
 * element. Normalisation lives here rather than in the diff so that both apps
 * are put through exactly the same transformation.
 */
export function collectTree(options: CollectOptions): ParityNode[] {
  const SKIP_TAGS = new Set(['script', 'style', 'link', 'template', 'noscript']);

  /**
   * Attributes that exist only to wire two nodes together. Stencil mints these
   * from a global counter, so the value depends on how many components were
   * constructed before this one -- which differs between the lazy loader
   * (html-test-app) and `dist-custom-elements` (svelte-test-app) purely because
   * of load order. The *shape* is still worth comparing, so digits are masked
   * rather than the attribute dropped.
   */
  const ID_ATTRS = new Set([
    'id',
    'for',
    'name',
    'aria-controls',
    'aria-labelledby',
    'aria-describedby',
    'aria-activedescendant',
    'aria-owns',
    'list',
    'headers',
  ]);

  /**
   * Stencil's own bookkeeping attributes. The lazy loader writes them for its
   * slot relocation; `dist-custom-elements` has no equivalent. They describe
   * the runtime, not the component.
   */
  const isInternalAttr = (attrName: string) =>
    attrName.startsWith('s-') ||
    attrName === 'c-id' ||
    attrName.startsWith('data-stencil');

  const normaliseWhitespace = (value: string) =>
    value.replace(/\s+/g, ' ').trim();

  const maskDigits = (value: string) => value.replace(/\d+/g, '#');

  const normaliseAttrValue = (tag: string, attrName: string, value: string) => {
    /**
     * `ix-icon` takes either a registered short name or the icon's own
     * `data:image/svg+xml` URI. html-test-app writes `name="capacity"` and lets
     * `@siemens/ix-icons` resolve it from the icon assets; the Svelte examples
     * import the icon module and pass the URI it exports.
     *
     * The name is masked on both sides rather than compared, because the thing
     * worth checking is whether the two resolve to the same artwork -- and they
     * do: the `<svg>` that `ix-icon` renders into its shadow root, down to the
     * `<desc>` text and every `path` `d`, is walked and compared like any other
     * subtree.
     */
    if (tag === 'ix-icon' && attrName === 'name') {
      return '<icon>';
    }

    if (ID_ATTRS.has(attrName)) {
      return maskDigits(value);
    }

    /**
     * Stencil scopes non-shadow component styles with a generated `sc-*` class.
     * The suffix is derived from the tag, but the lazy loader also appends
     * `-h` / `-s` host and slot markers that `dist-custom-elements` places
     * differently. Sorting keeps declaration order out of the comparison.
     */
    if (attrName === 'class') {
      return value
        .split(/\s+/)
        .filter(Boolean)
        .sort()
        .join(' ');
    }

    return normaliseWhitespace(value);
  };

  const readAttrs = (element: Element) => {
    const attrs: Record<string, string> = {};
    const tag = element.tagName.toLowerCase();

    for (const attribute of Array.from(element.attributes)) {
      if (isInternalAttr(attribute.name)) {
        continue;
      }

      attrs[attribute.name] = normaliseAttrValue(
        tag,
        attribute.name,
        attribute.value
      );
    }

    return attrs;
  };

  const readStyles = (element: Element) => {
    const computed = getComputedStyle(element);
    const styles: Record<string, string> = {};

    for (const property of options.styleProperties) {
      styles[property] = computed.getPropertyValue(property);
    }

    return styles;
  };

  /** Text owned by this element directly, not by its element children. */
  const readOwnText = (element: Element) => {
    let text = '';

    for (const child of Array.from(element.childNodes)) {
      if (child.nodeType === Node.TEXT_NODE) {
        text += child.textContent ?? '';
      }
    }

    return normaliseWhitespace(text);
  };

  const serialiseValue = (value: unknown): string => {
    if (value === null) {
      return 'null';
    }

    if (value === undefined) {
      return 'undefined';
    }

    if (value instanceof Node) {
      return `<${value.nodeName.toLowerCase()}>`;
    }

    const type = typeof value;

    if (type === 'string' || type === 'number' || type === 'boolean') {
      return String(value);
    }

    try {
      return JSON.stringify(value) ?? '<unserialisable>';
    } catch {
      return '<unserialisable>';
    }
  };

  /**
   * Stencil installs one accessor per `@Prop()` on the component prototype --
   * the lazy loader does it in `proxyComponent`, `dist-custom-elements` emits
   * it into the generated class. Either way, walking the prototype chain for
   * accessors yields the declared prop list without having to know it up front.
   *
   * `@Method()`s are plain function values on the same prototype and are
   * skipped: they are not state.
   */
  const readProps = (element: Element) => {
    if (!element.tagName.includes('-')) {
      return undefined;
    }

    const props: Record<string, string> = {};
    let prototype = Object.getPrototypeOf(element);

    while (
      prototype &&
      prototype !== HTMLElement.prototype &&
      prototype !== Element.prototype &&
      prototype !== Object.prototype
    ) {
      for (const name of Object.getOwnPropertyNames(prototype)) {
        if (name === 'constructor' || name.startsWith('__') || name in props) {
          continue;
        }

        const descriptor = Object.getOwnPropertyDescriptor(prototype, name);

        if (!descriptor?.get) {
          continue;
        }

        try {
          const value = (element as any)[name];

          if (typeof value === 'function') {
            continue;
          }

          props[name] =
            element.tagName.toLowerCase() === 'ix-icon' && name === 'name'
              ? '<icon>'
              : serialiseValue(value);
        } catch {
          /* A getter that throws before hydration is not a parity signal. */
        }
      }

      prototype = Object.getPrototypeOf(prototype);
    }

    return props;
  };

  const nodes: ParityNode[] = [];

  const walk = (parent: Element | ShadowRoot, prefix: string) => {
    const seen: Record<string, number> = {};

    for (const child of Array.from(parent.children)) {
      const tag = child.tagName.toLowerCase();

      if (SKIP_TAGS.has(tag)) {
        continue;
      }

      /**
       * The Svelte portal is part of `IxApplicationContext`, not of any
       * example. html-test-app has no equivalent because the lazy loader mounts
       * overlays straight onto `<body>`.
       */
      if (child.id === 'ix-portal') {
        continue;
      }

      seen[tag] = (seen[tag] ?? 0) + 1;
      const path = `${prefix} > ${tag}[${seen[tag]}]`;
      const text = readOwnText(child);
      const props = readProps(child);

      nodes.push({
        path,
        tag,
        attrs: readAttrs(child),
        ...(text ? { text } : {}),
        styles: readStyles(child),
        ...(props ? { props } : {}),
      });

      if (child.shadowRoot) {
        walk(child.shadowRoot, `${path} ::shadow`);
      }

      walk(child, path);
    }
  };

  const rootElement = document.querySelector(options.root);

  if (!rootElement) {
    throw new Error(`Parity root "${options.root}" not found`);
  }

  walk(rootElement, '');

  return nodes;
}

/**
 * Resolves once no mutation has been observed under `document.documentElement`
 * for `quietMs`, or after `timeoutMs` regardless.
 *
 * The generated specs get away with a flat 250ms wait because they only assert
 * on an accessibility tree that is stable long before then. The parity harness
 * cannot: `ix-select` relocates its `ix-select-item` children into an
 * `ix-dropdown` and builds `ix-dropdown-item`s for them, and the two apps reach
 * that point at different times simply because the lazy loader fetches a chunk
 * where `dist-custom-elements` is already in the bundle. Sampling at a fixed
 * offset makes the comparison a race; waiting for quiescence makes it a
 * comparison of end states, which is the question actually being asked.
 */
export function waitForStableDom(options: {
  quietMs: number;
  timeoutMs: number;
}): Promise<void> {
  return new Promise((resolve) => {
    let quietTimer = 0;

    const observer = new MutationObserver(() => {
      clearTimeout(quietTimer);
      quietTimer = window.setTimeout(finish, options.quietMs);
    });

    function finish() {
      observer.disconnect();
      clearTimeout(quietTimer);
      clearTimeout(hardTimer);
      resolve();
    }

    const hardTimer = window.setTimeout(finish, options.timeoutMs);

    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    });

    quietTimer = window.setTimeout(finish, options.quietMs);
  });
}

/**
 * Installed with `page.addInitScript`, so it runs before any application code
 * and therefore before the first component is defined.
 *
 * Only *programmatic* dispatches are seen: events the browser raises itself
 * (clicks, focus, input) do not go through `EventTarget.prototype.dispatchEvent`.
 * That is exactly the wanted signal -- every `@Event()` a Stencil component
 * emits is a programmatic dispatch.
 */
export function installEventRecorder() {
  const recorded: string[] = [];
  (window as any).__parityEvents = recorded;

  const original = EventTarget.prototype.dispatchEvent;

  EventTarget.prototype.dispatchEvent = function (event: Event) {
    try {
      if (this instanceof Element) {
        recorded.push(`${this.tagName.toLowerCase()}:${event.type}`);
      }
    } catch {
      /* Recording must never change the behaviour it is recording. */
    }

    return original.call(this, event);
  };
}

export function readRecordedEvents(): string[] {
  return ((window as any).__parityEvents as string[]) ?? [];
}
