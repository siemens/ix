import { d as defineCustomElements$1 } from "./global-BFmC_PbI.js";
import { b as bootstrapLazy } from "./index-DCCkv1ZQ-DZnlOMEt.js";
const globalScripts = () => {
};
const defineCustomElements = async (win, options) => {
  if (typeof window === "undefined") return void 0;
  await globalScripts();
  return bootstrapLazy([["ix-icon", [[513, "ix-icon", { "size": [1], "color": [1], "name": [1], "lazyLoading": [4, "lazy-loading"], "svgContent": [32], "isVisible": [32] }, null, { "name": [{ "loadIconContent": 0 }] }]]]], options);
};
(function() {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(a, [], this.constructor);
    };
    HTMLElement.prototype = a.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a);
  }
})();
var define_THEME_default = { css: "corporate-theme/dist/css/brand-theme.css" };
const scrollbarOverwrite = `
  ::-webkit-scrollbar-button {
    display: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: var(--si-sys-sizing-spacing-x-40);
    height: var(--si-sys-sizing-spacing-y-40);
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 5px;
    background: var(--si-sys-color-background-1);
  }

  ::-webkit-scrollbar-track:hover {
    background: var(--si-sys-color-background-1);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: var(--si-sys-color-border-4);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--si-sys-color-border-2);
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }
`;
async function loadAdditionalTheme() {
  const theme = define_THEME_default;
  const base = `./../additional-theme`;
  const css = theme.css;
  const cssUrl = `${base}/${css}`;
  try {
    const response = await fetch(cssUrl, { method: "HEAD" });
    if (!response.ok) {
      console.warn(
        `Brand theme CSS not found at ${cssUrl} - using default theme`
      );
      return false;
    }
    await new Promise((resolve) => {
      const head = document.head;
      const style_link = document.createElement("link");
      style_link.rel = "stylesheet";
      style_link.href = cssUrl;
      style_link.onload = () => {
        resolve();
      };
      style_link.onerror = () => {
        console.warn("Failed to load Brand theme CSS");
        resolve();
      };
      head.appendChild(style_link);
    });
    return true;
  } catch (error) {
    console.warn(`Brand theme CSS not available: ${error.message}`);
    return false;
  }
}
function detectThemeSwitching(isBrandThemeAvailable) {
  const searchParams = new URLSearchParams(location.search);
  if (searchParams.has("theme")) {
    let theme = searchParams.get("theme");
    if (theme === "brand" && !isBrandThemeAvailable) {
      console.warn(
        "Brand theme requested but CSS not available - falling back to Classic theme"
      );
      theme = "classic";
    }
    document.documentElement.dataset.ixTheme = theme;
  }
  if (searchParams.has("colorSchema")) {
    const colorSchema = searchParams.get("colorSchema");
    document.documentElement.dataset.ixColorSchema = colorSchema;
  }
}
function isMarginSuppressed() {
  const searchParams = new URLSearchParams(location.search);
  return searchParams.has("no-margin") && searchParams.get("no-margin") === "true";
}
function addMarginToDemo() {
  if (!isMarginSuppressed()) {
    document.body.style.margin = "1rem";
  }
}
function setBodySizes() {
  const styleElement = document.createElement("style");
  styleElement.innerText = isMarginSuppressed() ? `
  body {
    height: calc(100vh);
    width: calc(100vw);
  }
  ` : `
    body {
      height: calc(100vh - 2rem);
      width: calc(100vw - 2rem);
    }
  `;
  document.head.appendChild(styleElement);
}
async function init() {
  defineCustomElements();
  defineCustomElements$1();
  const isBrandThemeAvailable = await loadAdditionalTheme();
  detectThemeSwitching(isBrandThemeAvailable);
  setBodySizes();
  addMarginToDemo();
  const header = document.head;
  const scrollbarStyle = document.createElement("style");
  scrollbarStyle.innerHTML = scrollbarOverwrite;
  header.appendChild(scrollbarStyle);
}
globalThis.ixInitPromise = init();
