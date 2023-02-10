import { a as applyPolyfills, d as defineCustomElements } from "./index.0928911b.js";
const ixAggrid = "";
const placeholderLogo = "";
function loadAdditionalTheme() {
  const theme = { "loader": "ix-brand-theme/loader", "css": "ix-brand-theme/dist/ix-brand-theme/ix-brand-theme.css" };
  if (theme == null ? void 0 : theme.css) {
    const base = `./../additional-theme`;
    const css = theme.css;
    const head = document.head;
    const style_link = document.createElement("link");
    style_link.rel = "stylesheet";
    style_link.href = `${base}/${css}`;
    head.appendChild(style_link);
    const loader = `${base}/${theme.loader}/index.es2017.js`;
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import { defineCustomElements } from '${loader}';
      defineCustomElements();
    `;
    head.appendChild(script);
  }
}
function detectThemeSwitching() {
  const searchParams = new URLSearchParams(location.search);
  if (searchParams.has("theme")) {
    const theme = searchParams.get("theme");
    document.body.className = theme;
  }
}
function addMarginToDemo() {
  const searchParams = new URLSearchParams(location.search);
  if (!searchParams.has("no-margin")) {
    document.body.style.margin = "1rem";
  }
}
(async function init() {
  await applyPolyfills();
  await defineCustomElements();
  detectThemeSwitching();
  addMarginToDemo();
  loadAdditionalTheme();
})();
