'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');
const _commonjsHelpers = require('./_commonjsHelpers-1a0c346f.js');
const defaultTreeItem = require('./default-tree-item-4597cd84.js');

var hyperlist = _commonjsHelpers.createCommonjsModule(function (module, exports) {
(function(f){{module.exports=f();}})(function(){return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof _commonjsHelpers.commonjsRequire&&_commonjsHelpers.commonjsRequire;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t);}return n[i].exports}for(var u="function"==typeof _commonjsHelpers.commonjsRequire&&_commonjsHelpers.commonjsRequire,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){

// Default configuration.

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConfig = {
  width: '100%',
  height: '100%'

  // Check for valid number.
};var isNumber = function isNumber(input) {
  return Number(input) === Number(input);
};

// Add a class to an element.
var addClass = 'classList' in document.documentElement ? function (element, className) {
  element.classList.add(className);
} : function (element, className) {
  var oldClass = element.getAttribute('class') || '';
  element.setAttribute('class', oldClass + ' ' + className);
};

/**
 * Creates a HyperList instance that virtually scrolls very large amounts of
 * data effortlessly.
 */

var HyperList = function () {
  _createClass(HyperList, null, [{
    key: 'create',
    value: function create(element, userProvidedConfig) {
      return new HyperList(element, userProvidedConfig);
    }

    /**
     * Merge given css style on an element
     * @param {DOMElement} element
     * @param {Object} style
     */

  }, {
    key: 'mergeStyle',
    value: function mergeStyle(element, style) {
      for (var i in style) {
        if (element.style[i] !== style[i]) {
          element.style[i] = style[i];
        }
      }
    }
  }, {
    key: 'getMaxBrowserHeight',
    value: function getMaxBrowserHeight() {
      // Create two elements, the wrapper is `1px` tall and is transparent and
      // positioned at the top of the page. Inside that is an element that gets
      // set to 1 billion pixels. Then reads the max height the browser can
      // calculate.
      var wrapper = document.createElement('div');
      var fixture = document.createElement('div');

      // As said above, these values get set to put the fixture elements into the
      // right visual state.
      HyperList.mergeStyle(wrapper, { position: 'absolute', height: '1px', opacity: 0 });
      HyperList.mergeStyle(fixture, { height: '1e7px' });

      // Add the fixture into the wrapper element.
      wrapper.appendChild(fixture);

      // Apply to the page, the values won't kick in unless this is attached.
      document.body.appendChild(wrapper);

      // Get the maximum element height in pixels.
      var maxElementHeight = fixture.offsetHeight;

      // Remove the element immediately after reading the value.
      document.body.removeChild(wrapper);

      return maxElementHeight;
    }
  }]);

  function HyperList(element, userProvidedConfig) {
    var _this = this;

    _classCallCheck(this, HyperList);

    this._config = {};
    this._lastRepaint = null;
    this._maxElementHeight = HyperList.getMaxBrowserHeight();

    this.refresh(element, userProvidedConfig);

    var config = this._config;

    // Create internal render loop.
    var render = function render() {
      var scrollTop = _this._getScrollPosition();
      var lastRepaint = _this._lastRepaint;

      _this._renderAnimationFrame = window.requestAnimationFrame(render);

      if (scrollTop === lastRepaint) {
        return;
      }

      var diff = lastRepaint ? scrollTop - lastRepaint : 0;
      if (!lastRepaint || diff < 0 || diff > _this._averageHeight) {
        var rendered = _this._renderChunk();

        _this._lastRepaint = scrollTop;

        if (rendered !== false && typeof config.afterRender === 'function') {
          config.afterRender();
        }
      }
    };

    render();
  }

  _createClass(HyperList, [{
    key: 'destroy',
    value: function destroy() {
      window.cancelAnimationFrame(this._renderAnimationFrame);
    }
  }, {
    key: 'refresh',
    value: function refresh(element, userProvidedConfig) {
      var _scrollerStyle;

      Object.assign(this._config, defaultConfig, userProvidedConfig);

      if (!element || element.nodeType !== 1) {
        throw new Error('HyperList requires a valid DOM Node container');
      }

      this._element = element;

      var config = this._config;

      var scroller = this._scroller || config.scroller || document.createElement(config.scrollerTagName || 'tr');

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
        throw new Error('\n        Invalid required `itemHeight` value, expected number or array\n      '.trim());
      } else if (isNumber(config.itemHeight)) {
        this._itemHeights = Array(config.total).fill(config.itemHeight);
      } else {
        this._itemHeights = config.itemHeight;
      }

      // Width and height should be coerced to string representations. Either in
      // `%` or `px`.
      Object.keys(defaultConfig).filter(function (prop) {
        return prop in config;
      }).forEach(function (prop) {
        var value = config[prop];
        var isValueNumber = isNumber(value);

        if (value && typeof value !== 'string' && typeof value !== 'number') {
          var msg = 'Invalid optional `' + prop + '`, expected string or number';
          throw new Error(msg);
        } else if (isValueNumber) {
          config[prop] = value + 'px';
        }
      });

      var isHoriz = Boolean(config.horizontal);
      var value = config[isHoriz ? 'width' : 'height'];

      if (value) {
        var isValueNumber = isNumber(value);
        var isValuePercent = isValueNumber ? false : value.slice(-1) === '%';
        // Compute the containerHeight as number
        var numberValue = isValueNumber ? value : parseInt(value.replace(/px|%/, ''), 10);
        var innerSize = window[isHoriz ? 'innerWidth' : 'innerHeight'];

        if (isValuePercent) {
          this._containerSize = innerSize * numberValue / 100;
        } else {
          this._containerSize = isNumber(value) ? value : numberValue;
        }
      }

      var scrollContainer = config.scrollContainer;
      var scrollerHeight = config.itemHeight * config.total;
      var maxElementHeight = this._maxElementHeight;

      if (scrollerHeight > maxElementHeight) {
        console.warn(['HyperList: The maximum element height', maxElementHeight + 'px has', 'been exceeded; please reduce your item height.'].join(' '));
      }

      // Decorate the container element with styles that will match
      // the user supplied configuration.
      var elementStyle = {
        width: '' + config.width,
        height: scrollContainer ? scrollerHeight + 'px' : '' + config.height,
        overflow: scrollContainer ? 'none' : 'auto',
        position: 'relative'
      };

      HyperList.mergeStyle(element, elementStyle);

      if (scrollContainer) {
        HyperList.mergeStyle(config.scrollContainer, { overflow: 'auto' });
      }

      var scrollerStyle = (_scrollerStyle = {
        opacity: '0',
        position: 'absolute'
      }, _defineProperty(_scrollerStyle, isHoriz ? 'height' : 'width', '1px'), _defineProperty(_scrollerStyle, isHoriz ? 'width' : 'height', scrollerHeight + 'px'), _scrollerStyle);

      HyperList.mergeStyle(scroller, scrollerStyle);

      // Only append the scroller element once.
      if (!this._scroller) {
        element.appendChild(scroller);
      }

      var padding = this._computeScrollPadding();
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
  }, {
    key: '_getRow',
    value: function _getRow(i) {
      var config = this._config;
      var item = config.generate(i);
      var height = item.height;

      if (height !== undefined && isNumber(height)) {
        item = item.element;

        // The height isn't the same as predicted, compute positions again
        if (height !== this._itemHeights[i]) {
          this._itemHeights[i] = height;
          this._computePositions(i);
          this._scrollHeight = this._computeScrollHeight(i);
        }
      } else {
        height = this._itemHeights[i];
      }

      if (!item || item.nodeType !== 1) {
        throw new Error('Generator did not return a DOM Node for index: ' + i);
      }

      addClass(item, config.rowClassName || 'vrow');

      var top = this._itemPositions[i] + this._scrollPaddingTop;

      HyperList.mergeStyle(item, _defineProperty({
        position: 'absolute'
      }, config.horizontal ? 'left' : 'top', top + 'px'));

      return item;
    }
  }, {
    key: '_getScrollPosition',
    value: function _getScrollPosition() {
      var config = this._config;

      if (typeof config.overrideScrollPosition === 'function') {
        return config.overrideScrollPosition();
      }

      return this._element[config.horizontal ? 'scrollLeft' : 'scrollTop'];
    }
  }, {
    key: '_renderChunk',
    value: function _renderChunk(force) {
      var config = this._config;
      var element = this._element;
      var scrollTop = this._getScrollPosition();
      var total = config.total;

      var from = config.reverse ? this._getReverseFrom(scrollTop) : this._getFrom(scrollTop) - 1;

      if (from < 0 || from - this._screenItemsLen < 0) {
        from = 0;
      }

      if (!force && this._lastFrom === from) {
        return false;
      }

      this._lastFrom = from;

      var to = from + this._cachedItemsLen;

      if (to > total || to + this._cachedItemsLen > total) {
        to = total;
      }

      // Append all the new rows in a document fragment that we will later append
      // to the parent node
      var fragment = config.useFragment ? document.createDocumentFragment() : []
      // Sometimes you'll pass fake elements to this tool and Fragments require
      // real elements.


      // The element that forces the container to scroll.
      ;var scroller = this._scroller;

      // Keep the scroller in the list of children.
      fragment[config.useFragment ? 'appendChild' : 'push'](scroller);

      for (var i = from; i < to; i++) {
        var row = this._getRow(i);

        fragment[config.useFragment ? 'appendChild' : 'push'](row);
      }

      if (config.applyPatch) {
        return config.applyPatch(element, fragment);
      }

      element.innerHTML = '';
      element.appendChild(fragment);
    }
  }, {
    key: '_computePositions',
    value: function _computePositions() {
      var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var config = this._config;
      var total = config.total;
      var reverse = config.reverse;

      if (from < 1 && !reverse) {
        from = 1;
      }

      for (var i = from; i < total; i++) {
        if (reverse) {
          if (i === 0) {
            this._itemPositions[0] = this._scrollHeight - this._itemHeights[0];
          } else {
            this._itemPositions[i] = this._itemPositions[i - 1] - this._itemHeights[i];
          }
        } else {
          this._itemPositions[i] = this._itemHeights[i - 1] + this._itemPositions[i - 1];
        }
      }
    }
  }, {
    key: '_computeScrollHeight',
    value: function _computeScrollHeight() {
      var _HyperList$mergeStyle2,
          _this2 = this;

      var config = this._config;
      var isHoriz = Boolean(config.horizontal);
      var total = config.total;
      var scrollHeight = this._itemHeights.reduce(function (a, b) {
        return a + b;
      }, 0) + this._scrollPaddingBottom + this._scrollPaddingTop;

      HyperList.mergeStyle(this._scroller, (_HyperList$mergeStyle2 = {
        opacity: 0,
        position: 'absolute',
        top: '0px'
      }, _defineProperty(_HyperList$mergeStyle2, isHoriz ? 'height' : 'width', '1px'), _defineProperty(_HyperList$mergeStyle2, isHoriz ? 'width' : 'height', scrollHeight + 'px'), _HyperList$mergeStyle2));

      // Calculate the height median
      var sortedItemHeights = this._itemHeights.slice(0).sort(function (a, b) {
        return a - b;
      });
      var middle = Math.floor(total / 2);
      var averageHeight = total % 2 === 0 ? (sortedItemHeights[middle] + sortedItemHeights[middle - 1]) / 2 : sortedItemHeights[middle];

      var clientProp = isHoriz ? 'clientWidth' : 'clientHeight';
      var element = config.scrollContainer ? config.scrollContainer : this._element;
      var containerHeight = element[clientProp] ? element[clientProp] : this._containerSize;
      this._screenItemsLen = Math.ceil(containerHeight / averageHeight);
      this._containerSize = containerHeight;

      // Cache 3 times the number of items that fit in the container viewport.
      this._cachedItemsLen = Math.max(this._cachedItemsLen || 0, this._screenItemsLen * 3);
      this._averageHeight = averageHeight;

      if (config.reverse) {
        window.requestAnimationFrame(function () {
          if (isHoriz) {
            _this2._element.scrollLeft = scrollHeight;
          } else {
            _this2._element.scrollTop = scrollHeight;
          }
        });
      }

      return scrollHeight;
    }
  }, {
    key: '_computeScrollPadding',
    value: function _computeScrollPadding() {
      var config = this._config;
      var isHoriz = Boolean(config.horizontal);
      var isReverse = config.reverse;
      var styles = window.getComputedStyle(this._element);

      var padding = function padding(location) {
        var cssValue = styles.getPropertyValue('padding-' + location);
        return parseInt(cssValue, 10) || 0;
      };

      if (isHoriz && isReverse) {
        return {
          bottom: padding('left'),
          top: padding('right')
        };
      } else if (isHoriz) {
        return {
          bottom: padding('right'),
          top: padding('left')
        };
      } else if (isReverse) {
        return {
          bottom: padding('top'),
          top: padding('bottom')
        };
      } else {
        return {
          bottom: padding('bottom'),
          top: padding('top')
        };
      }
    }
  }, {
    key: '_getFrom',
    value: function _getFrom(scrollTop) {
      var i = 0;

      while (this._itemPositions[i] < scrollTop) {
        i++;
      }

      return i;
    }
  }, {
    key: '_getReverseFrom',
    value: function _getReverseFrom(scrollTop) {
      var i = this._config.total - 1;

      while (i > 0 && this._itemPositions[i] < scrollTop + this._containerSize) {
        i--;
      }

      return i;
    }
  }]);

  return HyperList;
}();

exports.default = HyperList;
module.exports = exports['default'];

},{}]},{},[1])(1)
});
});

const Hyperlist = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(hyperlist);

const treeCss = ".sc-ix-tree-h{display:block}";

const Tree = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.contextChange = index.createEvent(this, "contextChange", 7);
    this.nodeRemoved = index.createEvent(this, "nodeRemoved", 7);
    this.toggleListener = new Map();
    this.itemClickListener = new Map();
    this.updates = new Map();
    this.root = undefined;
    this.model = undefined;
    this.renderItem = undefined;
    this.context = {};
  }
  getVirtualizerOptions() {
    const list = this.buildTreeList(this.model[this.root]);
    return {
      itemHeight: 32,
      total: list.length,
      generate: (index) => {
        const item = list[index];
        const renderedTreeItem = this.host.querySelector(`[data-tree-node-id="${item.id}"]`);
        const context = this.getContext(item.id);
        if (renderedTreeItem) {
          renderedTreeItem.hasChildren = item.hasChildren;
          renderedTreeItem.context = Object.assign({}, context);
          if (this.updates.has(item.id)) {
            const doUpdate = this.updates.get(item.id);
            doUpdate(item, Object.assign({}, this.context));
          }
          return renderedTreeItem;
        }
        const update = (callback) => {
          this.updates.set(item.id, callback);
        };
        let innerElement = null;
        if (this.renderItem) {
          innerElement = this.renderItem(index, item, list, Object.assign({}, this.context), update);
        }
        if (innerElement === null) {
          innerElement = defaultTreeItem.renderDefaultItem(item, context, update);
        }
        const el = innerElement;
        el.setAttribute('data-tree-node-id', item.id);
        el.style.paddingLeft = item.level + 'rem';
        el.style.paddingRight = '1rem';
        if (!this.itemClickListener.has(el)) {
          const itemClickCallback = (e) => {
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
          const toggleCallback = (e) => {
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
  setContext(id, context) {
    this.context = Object.assign(Object.assign({}, this.context), { [id]: context });
    this.contextChange.emit(this.context);
  }
  getContext(id) {
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
  buildTreeList(root, level = 0) {
    const itemList = [];
    if (root === null || root === void 0 ? void 0 : root.hasChildren) {
      const newLevel = level + 1;
      root.children.forEach((id) => {
        const item = this.model[id];
        const context = this.getContext(id);
        itemList.push(Object.assign(Object.assign({}, item), { level }));
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
    if (this.isListInitialized()) {
      this.refreshList();
    }
    else {
      this.initList();
    }
  }
  disconnectedCallback() {
    this.hyperlist.destroy();
    this.observer.disconnect();
  }
  modelChange() {
    if (!this.isListInitialized()) {
      this.initList();
    }
  }
  isListInitialized() {
    var _a;
    const itemPositions = (_a = this.hyperlist) === null || _a === void 0 ? void 0 : _a._itemPositions;
    return (itemPositions !== undefined &&
      itemPositions.length &&
      !(itemPositions === null || itemPositions === void 0 ? void 0 : itemPositions.some((item) => item === undefined || Number.isNaN(item))));
  }
  refreshList() {
    if (this.hyperlist) {
      this.hyperlist.refresh(this.host, this.getVirtualizerOptions());
    }
  }
  initList() {
    var _a;
    (_a = this.hyperlist) === null || _a === void 0 ? void 0 : _a.destroy();
    const config = this.getVirtualizerOptions();
    this.hyperlist = new Hyperlist(this.host, config);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
  static get watchers() { return {
    "model": ["modelChange"]
  }; }
};
Tree.style = treeCss;

const treeItemCss = ".sc-ix-tree-item-h{display:flex;align-items:center;height:32px;width:100%;cursor:pointer}.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected).hover,.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected):hover{background-color:var(--theme-tree-item--background--hover)}.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected).active,.sc-ix-tree-item-h:not(.disabled):not(:disabled):not(.selected):active{background-color:var(--theme-tree-item--background--active)}.selected.sc-ix-tree-item-h{background-color:var(--theme-tree-item--background--selected)}.selected.hover.sc-ix-tree-item-h,.selected.sc-ix-tree-item-h:hover{background-color:var(--theme-tree-item--background--selected-hover)}.selected.active.sc-ix-tree-item-h,.selected.sc-ix-tree-item-h:active{background-color:var(--theme-tree-item--background--selected-active)}.sc-ix-tree-item-h .tree-node-container.sc-ix-tree-item{display:flex;align-items:center;height:2rem;flex-grow:1;align-items:center}.sc-ix-tree-item-h .icon-toggle-container.sc-ix-tree-item{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem}.sc-ix-tree-item-h .icon-toggle-container.sc-ix-tree-item ix-icon.sc-ix-tree-item{transition:transform 150ms ease-in-out}.sc-ix-tree-item-h .icon-toggle-container.sc-ix-tree-item ix-icon.icon-toggle-down.sc-ix-tree-item{transform:rotate(90deg)}";

const TreeItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toggle = index.createEvent(this, "toggle", 7);
    this.itemClick = index.createEvent(this, "itemClick", 7);
    this.text = undefined;
    this.hasChildren = undefined;
    this.context = undefined;
  }
  render() {
    var _a, _b, _c;
    return (index.h(index.Host, { class: {
        selected: (_a = this.context) === null || _a === void 0 ? void 0 : _a.isSelected,
      } }, index.h("div", { class: "icon-toggle-container", onClick: (e) => {
        e.preventDefault();
        this.toggle.emit();
      } }, this.hasChildren ? (index.h("ix-icon", { name: "chevron-right", size: "16", class: {
        ['icon-toggle-down']: (_b = this.context) === null || _b === void 0 ? void 0 : _b.isExpanded,
      }, color: `color-${((_c = this.context) === null || _c === void 0 ? void 0 : _c.isExpanded) ? 'primary' : 'std-text'}` })) : null), index.h("div", { class: "tree-node-container", onClick: (e) => {
        e.preventDefault();
        this.itemClick.emit();
      } }, this.text, index.h("slot", null))));
  }
};
TreeItem.style = treeItemCss;

exports.ix_tree = Tree;
exports.ix_tree_item = TreeItem;
