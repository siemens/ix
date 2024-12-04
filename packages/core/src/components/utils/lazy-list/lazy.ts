/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Manually forked from https://github.com/tbranyen/hyperlist to remove
// features a direct document calls
//
// Hyperlist is licensed MIT. https://github.com/tbranyen/hyperlist

export type VirtualListConfig = {
  applyPatch?: (
    element: HTMLElement,
    fragment: DocumentFragment | DocumentFragment[]
  ) => void;
  overrideScrollPosition?: () => void;
  rowClassName?: string;
  scrollContainer?: HTMLElement;
  width: string;
  height: string;
  afterRender?: () => void;
  scrollerTagName?: string;
  scroller?: HTMLElement;
  useFragment?: boolean;
  generate?: (index: number) => HTMLElement;
  total?: number;
  itemHeight?: number;
  horizontal?: boolean;
};

const isNumber = (input: unknown) => !Number.isNaN(Number(input));

const addClass = (element: HTMLElement, className: string) => {
  element.classList.add(className);
};

export class VirtualList {
  _config: VirtualListConfig;
  _lastRepaint: null;
  _maxElementHeight: number;
  _renderAnimationFrame: number;
  _averageHeight: number;

  static readonly defaultConfig: VirtualListConfig = {
    width: '100%',
    height: '100%',
  };
  _element: any;
  _scroller: any;
  _itemHeights: number[];
  _containerSize: number | string;
  _scrollPaddingBottom: number;
  _scrollPaddingTop: number;
  _scrollHeight: any;
  _itemPositions: any;
  _screenItemsLen: number;
  _lastFrom: number;
  _cachedItemsLen: any;

  static create(
    element: HTMLElement,
    userProvidedConfig: VirtualListConfig = VirtualList.defaultConfig
  ) {
    return new VirtualList(element, userProvidedConfig);
  }

  static mergeStyle(element: HTMLElement, style) {
    for (let i in style) {
      if (element.style[i] !== style[i]) {
        element.style[i] = style[i];
      }
    }
  }

  static getMaxBrowserHeight() {
    // Create two elements, the wrapper is `1px` tall and is transparent and
    // positioned at the top of the page. Inside that is an element that gets
    // set to 1 billion pixels. Then reads the max height the browser can
    // calculate.
    const wrapper = document.createElement('div');
    const fixture = document.createElement('div');

    // As said above, these values get set to put the fixture elements into the
    // right visual state.
    VirtualList.mergeStyle(wrapper, {
      position: 'absolute',
      height: '1px',
      opacity: 0,
    });
    VirtualList.mergeStyle(fixture, { height: '1e7px' });

    // Add the fixture into the wrapper element.
    wrapper.appendChild(fixture);

    // Apply to the page, the values won't kick in unless this is attached.
    document.body.appendChild(wrapper);

    // Get the maximum element height in pixels.
    const maxElementHeight = fixture.offsetHeight;

    // Remove the element immediately after reading the value.
    document.body.removeChild(wrapper);

    return maxElementHeight;
  }

  constructor(element: HTMLElement, userProvidedConfig: VirtualListConfig) {
    this._lastRepaint = null;
    this._maxElementHeight = VirtualList.getMaxBrowserHeight();

    this.refresh(element, userProvidedConfig);

    const config = this._config;

    // Create internal render loop.
    const render = () => {
      const scrollTop = this._getScrollPosition();
      const lastRepaint = this._lastRepaint;

      this._renderAnimationFrame = window.requestAnimationFrame(render);

      if (scrollTop === lastRepaint) {
        return;
      }

      const diff = lastRepaint ? scrollTop - lastRepaint : 0;
      if (!lastRepaint || diff < 0 || diff > this._averageHeight) {
        let rendered = this._renderChunk();

        this._lastRepaint = scrollTop;

        if (rendered !== false && typeof config.afterRender === 'function') {
          config.afterRender();
        }
      }
    };

    render();
  }

  destroy() {
    window.cancelAnimationFrame(this._renderAnimationFrame);
  }

  refresh(
    element: HTMLElement,
    userProvidedConfig: VirtualListConfig = VirtualList.defaultConfig
  ) {
    this._config = userProvidedConfig;

    if (!element || element.nodeType !== 1) {
      throw new Error('HyperList requires a valid DOM Node container');
    }

    this._element = element;

    const config = this._config;

    const scroller =
      this._scroller ||
      config.scroller ||
      document.createElement(config.scrollerTagName || 'tr');

    // Default configuration option `useFragment` to `true`.
    if (typeof config.useFragment !== 'boolean') {
      this._config.useFragment = true;
    }

    if (!config.generate) {
      throw new Error('Missing required `generate` function');
    }

    if (!isNumber(config.total)) {
      throw new Error('Invalid required `total` value, expected number');
    }

    if (!Array.isArray(config.itemHeight) && !isNumber(config.itemHeight)) {
      throw new Error(
        `
        Invalid required \`itemHeight\` value, expected number or array
      `.trim()
      );
    } else if (isNumber(config.itemHeight)) {
      this._itemHeights = Array(config.total).fill(config.itemHeight);
    } else {
      this._itemHeights = [config.itemHeight];
    }

    // Width and height should be coerced to string representations. Either in
    // `%` or `px`.
    Object.keys(VirtualList.defaultConfig)
      .filter((prop) => prop in config)
      .forEach((prop) => {
        const value = config[prop];
        const isValueNumber = isNumber(value);

        if (value && typeof value !== 'string' && typeof value !== 'number') {
          let msg = `Invalid optional \`${prop}\`, expected string or number`;
          throw new Error(msg);
        } else if (isValueNumber) {
          config[prop] = `${value}px`;
        }
      });

    const isHorizontal = Boolean(config.horizontal);
    const value = config[isHorizontal ? 'width' : 'height'];

    if (value) {
      const isValueNumber = isNumber(value);
      const isValuePercent = isValueNumber ? false : value.slice(-1) === '%';
      // Compute the containerHeight as number
      const numberValue = isValueNumber
        ? parseInt(value, 10)
        : parseInt(value.replace(/px|%/, ''), 10);
      const innerSize = window[isHorizontal ? 'innerWidth' : 'innerHeight'];

      if (isValuePercent) {
        this._containerSize = (innerSize * numberValue) / 100;
      } else {
        this._containerSize = isNumber(value) ? value : numberValue;
      }
    }

    const scrollContainer = config.scrollContainer;
    const scrollerHeight = config.itemHeight * config.total;
    const maxElementHeight = this._maxElementHeight;

    if (scrollerHeight > maxElementHeight) {
      console.warn(
        [
          'HyperList: The maximum element height',
          maxElementHeight + 'px has',
          'been exceeded; please reduce your item height.',
        ].join(' ')
      );
    }

    // Decorate the container element with styles that will match
    // the user supplied configuration.
    const elementStyle = {
      width: `${config.width}`,
      height: scrollContainer ? `${scrollerHeight}px` : `${config.height}`,
      overflow: scrollContainer ? 'none' : 'auto',
      position: 'relative',
    };

    VirtualList.mergeStyle(element, elementStyle);

    if (scrollContainer) {
      VirtualList.mergeStyle(config.scrollContainer, { overflow: 'auto' });
    }

    const scrollerStyle = {
      opacity: '0',
      position: 'absolute',
      [isHorizontal ? 'height' : 'width']: '1px',
      [isHorizontal ? 'width' : 'height']: `${scrollerHeight}px`,
    };

    VirtualList.mergeStyle(scroller, scrollerStyle);

    // Only append the scroller element once.
    if (!this._scroller) {
      element.appendChild(scroller);
    }

    const padding = this._computeScrollPadding();
    this._scrollPaddingBottom = padding.bottom;
    this._scrollPaddingTop = padding.top;

    // Set the scroller instance.
    this._scroller = scroller;
    this._scrollHeight = this._computeScrollHeight();

    // Reuse the item positions if refreshed, otherwise set to empty array.
    this._itemPositions = this._itemPositions || Array(config.total).fill(0);

    // Each index in the array should represent the position in the DOM.
    this._computePositions(0);

    // Render after refreshing. Force render if we're calling refresh manually.
    this._renderChunk(this._lastRepaint !== null);

    if (typeof config.afterRender === 'function') {
      config.afterRender();
    }
  }

  _getRow(i) {
    const config = this._config;
    let item = config.generate(i) as any;
    let height = item.height;

    if (height !== undefined && isNumber(height)) {
      item = item.element;

      // The height isn't the same as predicted, compute positions again
      if (height !== this._itemHeights[i]) {
        this._itemHeights[i] = height;
        this._computePositions(i);
        this._scrollHeight = this._computeScrollHeight();
      }
    } else {
      height = this._itemHeights[i];
    }

    if (!item || item.nodeType !== 1) {
      throw new Error(`Generator did not return a DOM Node for index: ${i}`);
    }

    addClass(item, config.rowClassName || 'vrow');

    const top = this._itemPositions[i] + this._scrollPaddingTop;

    VirtualList.mergeStyle(item, {
      position: 'absolute',
      [config.horizontal ? 'left' : 'top']: `${top}px`,
    });

    return item;
  }

  _getScrollPosition() {
    const config = this._config;

    if (typeof config.overrideScrollPosition === 'function') {
      return config.overrideScrollPosition();
    }

    return this._element[config.horizontal ? 'scrollLeft' : 'scrollTop'];
  }

  _renderChunk(force: boolean = false) {
    const config = this._config;
    const element = this._element;
    const scrollTop = this._getScrollPosition();
    const total = config.total;

    let from = this._getFrom(scrollTop) - 1;

    if (from < 0 || from - this._screenItemsLen < 0) {
      from = 0;
    }

    if (!force && this._lastFrom === from) {
      return false;
    }

    this._lastFrom = from;

    let to = from + this._cachedItemsLen;

    if (to > total || to + this._cachedItemsLen > total) {
      to = total;
    }

    // Append all the new rows in a document fragment that we will later append
    // to the parent node
    const fragment = config.useFragment
      ? document.createDocumentFragment()
      : [
          // Sometimes you'll pass fake elements to this tool and Fragments require
          // real elements.
        ];

    // The element that forces the container to scroll.
    const scroller = this._scroller;

    // Keep the scroller in the list of children.
    fragment[config.useFragment ? 'appendChild' : 'push'](scroller);

    for (let i = from; i < to; i++) {
      let row = this._getRow(i);

      fragment[config.useFragment ? 'appendChild' : 'push'](row);
    }

    if (config.applyPatch) {
      return config.applyPatch(element, fragment);
    }

    element.innerHTML = '';
    element.appendChild(fragment);
  }

  _computePositions(from = 1) {
    const config = this._config;
    const total = config.total;

    if (from < 1) {
      from = 1;
    }

    for (let i = from; i < total; i++) {
      this._itemPositions[i] =
        this._itemHeights[i - 1] + this._itemPositions[i - 1];
    }
  }

  _computeScrollHeight() {
    const config = this._config;
    const isHorizontal = Boolean(config.horizontal);
    const total = config.total;
    const scrollHeight =
      this._itemHeights.reduce((a, b) => a + b, 0) +
      this._scrollPaddingBottom +
      this._scrollPaddingTop;

    VirtualList.mergeStyle(this._scroller, {
      opacity: 0,
      position: 'absolute',
      top: '0px',
      [isHorizontal ? 'height' : 'width']: '1px',
      [isHorizontal ? 'width' : 'height']: `${scrollHeight}px`,
    });

    // Calculate the height median
    const sortedItemHeights = this._itemHeights.slice(0).sort((a, b) => a - b);
    const middle = Math.floor(total / 2);
    const averageHeight =
      total % 2 === 0
        ? (sortedItemHeights[middle] + sortedItemHeights[middle - 1]) / 2
        : sortedItemHeights[middle];

    const clientProp = isHorizontal ? 'clientWidth' : 'clientHeight';
    const element = config.scrollContainer
      ? config.scrollContainer
      : this._element;
    const containerHeight = element[clientProp]
      ? element[clientProp]
      : this._containerSize;
    this._screenItemsLen = Math.ceil(containerHeight / averageHeight);
    this._containerSize = containerHeight;

    // Cache 3 times the number of items that fit in the container viewport.
    this._cachedItemsLen = Math.max(
      this._cachedItemsLen || 0,
      this._screenItemsLen * 3
    );
    this._averageHeight = averageHeight;

    return scrollHeight;
  }

  _computeScrollPadding() {
    const config = this._config;
    const isHoriz = Boolean(config.horizontal);
    const styles = window.getComputedStyle(this._element);

    const padding = (location: string) => {
      const cssValue = styles.getPropertyValue(`padding-${location}`);
      return parseInt(cssValue, 10) || 0;
    };

    if (isHoriz) {
      return {
        bottom: padding('right'),
        top: padding('left'),
      };
    } else {
      return {
        bottom: padding('bottom'),
        top: padding('top'),
      };
    }
  }

  _getFrom(scrollTop: number) {
    let i = 0;

    while (this._itemPositions[i] < scrollTop) {
      i++;
    }

    return i;
  }
}
