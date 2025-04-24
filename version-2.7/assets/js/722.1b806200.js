"use strict";
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 52722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scopeCss: () => (/* binding */ scopeCss)
/* harmony export */ });
// src/utils/regular-expression.ts
var escapeRegExpSpecialCharacters = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

// src/utils/shadow-css.ts
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from `webcomponents.js` to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
var safeSelector = (selector) => {
  const placeholders = [];
  let index = 0;
  selector = selector.replace(/(\[[^\]]*\])/g, (_, keep) => {
    const replaceBy = `__ph-${index}__`;
    placeholders.push(keep);
    index++;
    return replaceBy;
  });
  const content = selector.replace(/(:nth-[-\w]+)(\([^)]+\))/g, (_, pseudo, exp) => {
    const replaceBy = `__ph-${index}__`;
    placeholders.push(exp);
    index++;
    return pseudo + replaceBy;
  });
  const ss = {
    content,
    placeholders
  };
  return ss;
};
var restoreSafeSelector = (placeholders, content) => {
  return content.replace(/__ph-(\d+)__/g, (_, index) => placeholders[+index]);
};
var _polyfillHost = "-shadowcsshost";
var _polyfillSlotted = "-shadowcssslotted";
var _polyfillHostContext = "-shadowcsscontext";
var _parenSuffix = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)";
var _cssColonHostRe = new RegExp("(" + _polyfillHost + _parenSuffix, "gim");
var _cssColonHostContextRe = new RegExp("(" + _polyfillHostContext + _parenSuffix, "gim");
var _cssColonSlottedRe = new RegExp("(" + _polyfillSlotted + _parenSuffix, "gim");
var _polyfillHostNoCombinator = _polyfillHost + "-no-combinator";
var _polyfillHostNoCombinatorRe = /-shadowcsshost-no-combinator([^\s]*)/;
var _shadowDOMSelectorsRe = [/::shadow/g, /::content/g];
var _selectorReSuffix = "([>\\s~+[.,{:][\\s\\S]*)?$";
var _polyfillHostRe = /-shadowcsshost/gim;
var createSupportsRuleRe = (selector) => new RegExp(`((?<!(^@supports(.*)))|(?<={.*))(${selector}\\b)`, "gim");
var _colonSlottedRe = createSupportsRuleRe("::slotted");
var _colonHostRe = createSupportsRuleRe(":host");
var _colonHostContextRe = createSupportsRuleRe(":host-context");
var _commentRe = /\/\*\s*[\s\S]*?\*\//g;
var stripComments = (input) => {
  return input.replace(_commentRe, "");
};
var _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;
var extractCommentsWithHash = (input) => {
  return input.match(_commentWithHashRe) || [];
};
var _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
var _curlyRe = /([{}])/g;
var _selectorPartsRe = /(^.*?[^\\])??((:+)(.*)|$)/;
var OPEN_CURLY = "{";
var CLOSE_CURLY = "}";
var BLOCK_PLACEHOLDER = "%BLOCK%";
var processRules = (input, ruleCallback) => {
  const inputWithEscapedBlocks = escapeBlocks(input);
  let nextBlockIndex = 0;
  return inputWithEscapedBlocks.escapedString.replace(_ruleRe, (...m) => {
    const selector = m[2];
    let content = "";
    let suffix = m[4];
    let contentPrefix = "";
    if (suffix && suffix.startsWith("{" + BLOCK_PLACEHOLDER)) {
      content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
      suffix = suffix.substring(BLOCK_PLACEHOLDER.length + 1);
      contentPrefix = "{";
    }
    const cssRule = {
      selector,
      content
    };
    const rule = ruleCallback(cssRule);
    return `${m[1]}${rule.selector}${m[3]}${contentPrefix}${rule.content}${suffix}`;
  });
};
var escapeBlocks = (input) => {
  const inputParts = input.split(_curlyRe);
  const resultParts = [];
  const escapedBlocks = [];
  let bracketCount = 0;
  let currentBlockParts = [];
  for (let partIndex = 0; partIndex < inputParts.length; partIndex++) {
    const part = inputParts[partIndex];
    if (part === CLOSE_CURLY) {
      bracketCount--;
    }
    if (bracketCount > 0) {
      currentBlockParts.push(part);
    } else {
      if (currentBlockParts.length > 0) {
        escapedBlocks.push(currentBlockParts.join(""));
        resultParts.push(BLOCK_PLACEHOLDER);
        currentBlockParts = [];
      }
      resultParts.push(part);
    }
    if (part === OPEN_CURLY) {
      bracketCount++;
    }
  }
  if (currentBlockParts.length > 0) {
    escapedBlocks.push(currentBlockParts.join(""));
    resultParts.push(BLOCK_PLACEHOLDER);
  }
  const strEscapedBlocks = {
    escapedString: resultParts.join(""),
    blocks: escapedBlocks
  };
  return strEscapedBlocks;
};
var insertPolyfillHostInCssText = (cssText) => {
  cssText = cssText.replace(_colonHostContextRe, `$1${_polyfillHostContext}`).replace(_colonHostRe, `$1${_polyfillHost}`).replace(_colonSlottedRe, `$1${_polyfillSlotted}`);
  return cssText;
};
var convertColonRule = (cssText, regExp, partReplacer) => {
  return cssText.replace(regExp, (...m) => {
    if (m[2]) {
      const parts = m[2].split(",");
      const r = [];
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i].trim();
        if (!p)
          break;
        r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
      }
      return r.join(",");
    } else {
      return _polyfillHostNoCombinator + m[3];
    }
  });
};
var colonHostPartReplacer = (host, part, suffix) => {
  return host + part.replace(_polyfillHost, "") + suffix;
};
var convertColonHost = (cssText) => {
  return convertColonRule(cssText, _cssColonHostRe, colonHostPartReplacer);
};
var colonHostContextPartReplacer = (host, part, suffix) => {
  if (part.indexOf(_polyfillHost) > -1) {
    return colonHostPartReplacer(host, part, suffix);
  } else {
    return host + part + suffix + ", " + part + " " + host + suffix;
  }
};
var convertColonSlotted = (cssText, slotScopeId) => {
  const slotClass = "." + slotScopeId + " > ";
  const selectors = [];
  cssText = cssText.replace(_cssColonSlottedRe, (...m) => {
    if (m[2]) {
      const compound = m[2].trim();
      const suffix = m[3];
      const slottedSelector = slotClass + compound + suffix;
      let prefixSelector = "";
      for (let i = m[4] - 1; i >= 0; i--) {
        const char = m[5][i];
        if (char === "}" || char === ",") {
          break;
        }
        prefixSelector = char + prefixSelector;
      }
      const orgSelector = (prefixSelector + slottedSelector).trim();
      const addedSelector = `${prefixSelector.trimEnd()}${slottedSelector.trim()}`.trim();
      if (orgSelector !== addedSelector) {
        const updatedSelector = `${addedSelector}, ${orgSelector}`;
        selectors.push({
          orgSelector,
          updatedSelector
        });
      }
      return slottedSelector;
    } else {
      return _polyfillHostNoCombinator + m[3];
    }
  });
  return {
    selectors,
    cssText
  };
};
var convertColonHostContext = (cssText) => {
  return convertColonRule(cssText, _cssColonHostContextRe, colonHostContextPartReplacer);
};
var convertShadowDOMSelectors = (cssText) => {
  return _shadowDOMSelectorsRe.reduce((result, pattern) => result.replace(pattern, " "), cssText);
};
var makeScopeMatcher = (scopeSelector2) => {
  const lre = /\[/g;
  const rre = /\]/g;
  scopeSelector2 = scopeSelector2.replace(lre, "\\[").replace(rre, "\\]");
  return new RegExp("^(" + scopeSelector2 + ")" + _selectorReSuffix, "m");
};
var selectorNeedsScoping = (selector, scopeSelector2) => {
  const re = makeScopeMatcher(scopeSelector2);
  return !re.test(selector);
};
var injectScopingSelector = (selector, scopingSelector) => {
  return selector.replace(_selectorPartsRe, (_, before = "", _colonGroup, colon = "", after = "") => {
    return before + scopingSelector + colon + after;
  });
};
var applySimpleSelectorScope = (selector, scopeSelector2, hostSelector) => {
  _polyfillHostRe.lastIndex = 0;
  if (_polyfillHostRe.test(selector)) {
    const replaceBy = `.${hostSelector}`;
    return selector.replace(_polyfillHostNoCombinatorRe, (_, selector2) => injectScopingSelector(selector2, replaceBy)).replace(_polyfillHostRe, replaceBy + " ");
  }
  return scopeSelector2 + " " + selector;
};
var applyStrictSelectorScope = (selector, scopeSelector2, hostSelector) => {
  const isRe = /\[is=([^\]]*)\]/g;
  scopeSelector2 = scopeSelector2.replace(isRe, (_, ...parts) => parts[0]);
  const className = "." + scopeSelector2;
  const _scopeSelectorPart = (p) => {
    let scopedP = p.trim();
    if (!scopedP) {
      return "";
    }
    if (p.indexOf(_polyfillHostNoCombinator) > -1) {
      scopedP = applySimpleSelectorScope(p, scopeSelector2, hostSelector);
    } else {
      const t = p.replace(_polyfillHostRe, "");
      if (t.length > 0) {
        scopedP = injectScopingSelector(t, className);
      }
    }
    return scopedP;
  };
  const safeContent = safeSelector(selector);
  selector = safeContent.content;
  let scopedSelector = "";
  let startIndex = 0;
  let res;
  const sep = /( |>|\+|~(?!=))\s*/g;
  const hasHost = selector.indexOf(_polyfillHostNoCombinator) > -1;
  let shouldScope = !hasHost;
  while ((res = sep.exec(selector)) !== null) {
    const separator = res[1];
    const part2 = selector.slice(startIndex, res.index).trim();
    shouldScope = shouldScope || part2.indexOf(_polyfillHostNoCombinator) > -1;
    const scopedPart = shouldScope ? _scopeSelectorPart(part2) : part2;
    scopedSelector += `${scopedPart} ${separator} `;
    startIndex = sep.lastIndex;
  }
  const part = selector.substring(startIndex);
  shouldScope = shouldScope || part.indexOf(_polyfillHostNoCombinator) > -1;
  scopedSelector += shouldScope ? _scopeSelectorPart(part) : part;
  return restoreSafeSelector(safeContent.placeholders, scopedSelector);
};
var scopeSelector = (selector, scopeSelectorText, hostSelector, slotSelector) => {
  return selector.split(",").map((shallowPart) => {
    if (slotSelector && shallowPart.indexOf("." + slotSelector) > -1) {
      return shallowPart.trim();
    }
    if (selectorNeedsScoping(shallowPart, scopeSelectorText)) {
      return applyStrictSelectorScope(shallowPart, scopeSelectorText, hostSelector).trim();
    } else {
      return shallowPart.trim();
    }
  }).join(", ");
};
var scopeSelectors = (cssText, scopeSelectorText, hostSelector, slotSelector, commentOriginalSelector) => {
  return processRules(cssText, (rule) => {
    let selector = rule.selector;
    let content = rule.content;
    if (rule.selector[0] !== "@") {
      selector = scopeSelector(rule.selector, scopeSelectorText, hostSelector, slotSelector);
    } else if (rule.selector.startsWith("@media") || rule.selector.startsWith("@supports") || rule.selector.startsWith("@page") || rule.selector.startsWith("@document")) {
      content = scopeSelectors(rule.content, scopeSelectorText, hostSelector, slotSelector, commentOriginalSelector);
    }
    const cssRule = {
      selector: selector.replace(/\s{2,}/g, " ").trim(),
      content
    };
    return cssRule;
  });
};
var scopeCssText = (cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector) => {
  cssText = insertPolyfillHostInCssText(cssText);
  cssText = convertColonHost(cssText);
  cssText = convertColonHostContext(cssText);
  const slotted = convertColonSlotted(cssText, slotScopeId);
  cssText = slotted.cssText;
  cssText = convertShadowDOMSelectors(cssText);
  if (scopeId) {
    cssText = scopeSelectors(cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector);
  }
  cssText = replaceShadowCssHost(cssText, hostScopeId);
  cssText = cssText.replace(/>\s*\*\s+([^{, ]+)/gm, " $1 ");
  return {
    cssText: cssText.trim(),
    // We need to replace the shadow CSS host string in each of these selectors since we created
    // them prior to the replacement happening in the components CSS text.
    slottedSelectors: slotted.selectors.map((ref) => ({
      orgSelector: replaceShadowCssHost(ref.orgSelector, hostScopeId),
      updatedSelector: replaceShadowCssHost(ref.updatedSelector, hostScopeId)
    }))
  };
};
var replaceShadowCssHost = (cssText, hostScopeId) => {
  return cssText.replace(/-shadowcsshost-no-combinator/g, `.${hostScopeId}`);
};
var scopeCss = (cssText, scopeId, commentOriginalSelector) => {
  const hostScopeId = scopeId + "-h";
  const slotScopeId = scopeId + "-s";
  const commentsWithHash = extractCommentsWithHash(cssText);
  cssText = stripComments(cssText);
  const orgSelectors = [];
  if (commentOriginalSelector) {
    const processCommentedSelector = (rule) => {
      const placeholder = `/*!@___${orgSelectors.length}___*/`;
      const comment = `/*!@${rule.selector}*/`;
      orgSelectors.push({ placeholder, comment });
      rule.selector = placeholder + rule.selector;
      return rule;
    };
    cssText = processRules(cssText, (rule) => {
      if (rule.selector[0] !== "@") {
        return processCommentedSelector(rule);
      } else if (rule.selector.startsWith("@media") || rule.selector.startsWith("@supports") || rule.selector.startsWith("@page") || rule.selector.startsWith("@document")) {
        rule.content = processRules(rule.content, processCommentedSelector);
        return rule;
      }
      return rule;
    });
  }
  const scoped = scopeCssText(cssText, scopeId, hostScopeId, slotScopeId, commentOriginalSelector);
  cssText = [scoped.cssText, ...commentsWithHash].join("\n");
  if (commentOriginalSelector) {
    orgSelectors.forEach(({ placeholder, comment }) => {
      cssText = cssText.replace(placeholder, comment);
    });
  }
  scoped.slottedSelectors.forEach((slottedSelector) => {
    const regex = new RegExp(escapeRegExpSpecialCharacters(slottedSelector.orgSelector), "g");
    cssText = cssText.replace(regex, slottedSelector.updatedSelector);
  });
  return cssText;
};



/***/ })

};
;