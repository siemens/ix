import { r as registerInstance, h, H as Host, g as getElement, a as getAssetPath } from "./init.14c20cd8.js";
function getCustomAssetUrl() {
  const assetPath = document.querySelector("meta[name='ix-icons:path']");
  if (assetPath) {
    const path = assetPath.getAttribute("content");
    return path;
  }
  return false;
}
let parser = null;
const errorSymbol = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path fill-rule='evenodd' d='M384,0 L384,384 L0,384 L0,0 L384,0 Z M192,207.085 L57.751,341.333 L326.248,341.333 L192,207.085 Z M42.666,57.751 L42.666,326.248 L176.915,192 L42.666,57.751 Z M341.333,57.751 L207.085,192 L341.333,326.248 L341.333,57.751 Z M326.248,42.666 L57.751,42.666 L192,176.915 L326.248,42.666 Z' transform='translate(64 64)'/></svg>";
function parseSVGDataContent(content, element) {
  if (typeof window["DOMParser"] === "undefined") {
    console.error("DOMParser not supported by your browser.");
    return "";
  }
  if (parser === null) {
    parser = new window["DOMParser"]();
  }
  const svgDocument = parser.parseFromString(decodeURI(content), "text/html");
  const svgElement = svgDocument.querySelector("svg");
  if (!svgElement) {
    if (element) {
      console.error("No valid svg data provided", element);
    } else {
      console.error("No valid svg data provided");
    }
    return "";
  }
  return svgElement.outerHTML;
}
let fetchCache;
const requests = /* @__PURE__ */ new Map();
const getIconCacheMap = () => {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  }
  if (!fetchCache) {
    window.IxIcons = window.IxIcons || {};
    fetchCache = window.IxIcons.map = window.IxIcons.map || /* @__PURE__ */ new Map();
  }
  return fetchCache;
};
const isSvgDataUrl = (url) => {
  if (!url) {
    return false;
  }
  if (typeof url !== "string") {
    return false;
  }
  return url.startsWith("data:image/svg+xml");
};
async function fetchSVG(url, element) {
  const cache = getIconCacheMap();
  if (cache.has(url)) {
    return cache.get(url);
  }
  if (requests.has(url)) {
    return requests.get(url);
  }
  const fetching = fetch(url).then(async (response) => {
    const responseText = await response.text();
    let svgContent = "";
    if (response.ok) {
      svgContent = parseSVGDataContent(responseText, element);
      cache.set(url, svgContent);
    } else {
      console.error("Failed to request svg data from", url, "with status code", response.status, element);
    }
    return svgContent;
  }).catch(() => {
    console.error("Failed to fetch svg data:", url, element);
    cache.set(url, "");
    return "";
  }).finally(() => {
    requests.delete(url);
  });
  return fetching;
}
const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:www\.)?(?:\S+\.\S+)(?:\S*)$/i;
function isValidUrl(url) {
  return urlRegex.test(url);
}
function getIconUrl(name, element) {
  const customAssetUrl = getCustomAssetUrl();
  if (customAssetUrl) {
    return `${customAssetUrl}/${name}.svg`;
  }
  let url = `svg/${name}.svg`;
  try {
    url = getAssetPath(url);
  } catch (error) {
    console.warn(`Could not load icon with name "${name}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to property.`, element);
  }
  return url;
}
async function resolveIcon(element, iconName) {
  if (!iconName) {
    console.warn("No icon was provided", element);
    return "";
  }
  if (isSvgDataUrl(iconName)) {
    const content = parseSVGDataContent(iconName, element);
    if (!content) {
      console.error("Failed to parse icon data", element);
    }
    return content;
  }
  return loadIcon(iconName, element);
}
async function loadIcon(iconName, element) {
  const cache = getIconCacheMap();
  if (cache.has(iconName)) {
    return cache.get(iconName);
  }
  if (isValidUrl(iconName)) {
    return fetchSVG(iconName, element);
  }
  const iconUrl = getIconUrl(iconName, element);
  if (!iconUrl) {
    return "";
  }
  return fetchSVG(iconUrl, element);
}
function removePrefix(name, prefix) {
  if (name.startsWith(prefix)) {
    name = name.slice(prefix.length);
    return name.replace(/^(\w)/, (_match, p1) => p1.toLowerCase());
  }
  return name;
}
function addIcons(icons) {
  Object.keys(icons).forEach((name) => {
    const icon = icons[name];
    name = removePrefix(name, "icon");
    addIconToCache(name, icon);
  });
}
function addIconToCache(name, icon) {
  const cache = getIconCacheMap();
  if (cache.has(name)) {
    console.warn(`Icon name '${name}' already in cache. Overwritting with new icon data.`);
  }
  const svg = parseSVGDataContent(icon);
  cache.set(name, svg);
  const toKebabCase = name.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase();
  if (name != toKebabCase) {
    cache.set(toKebabCase, svg);
  }
}
const iconCss = ":host{display:inline-flex;height:1.5rem;width:1.5rem;min-height:1.5rem;min-width:1.5rem;color:inherit}:host .svg-container{display:block;position:relative;width:100%;height:100%}:host .svg-container svg{display:block;position:relative;height:100%;width:100%}:host .svg-container svg,:host .svg-container svg[fill],:host .svg-container svg [fill]{fill:currentColor !important}:host(.size-12){height:0.75rem;width:0.75rem;min-height:0.75rem;min-width:0.75rem}:host(.size-16){height:1rem;width:1rem;min-height:1rem;min-width:1rem}:host(.size-32){height:2rem;width:2rem;min-height:2rem;min-width:2rem}";
const IxIconStyle0 = iconCss;
const Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = "24";
    this.lazyLoading = false;
    this.isVisible = false;
  }
  componentWillLoad() {
    this.waitForRendering(() => {
      this.isVisible = true;
      this.loadIconContent();
    });
  }
  async loadIconContent() {
    const content = await resolveIcon(this.hostElement, this.name);
    if (!content) {
      this.svgContent = parseSVGDataContent(errorSymbol);
      return;
    }
    this.svgContent = content;
  }
  waitForRendering(onRender) {
    if (this.lazyLoading && typeof window !== "undefined" && window.IntersectionObserver) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onRender();
            observer.disconnect();
          }
        });
      }, {
        rootMargin: "25px"
      });
      observer.observe(this.hostElement);
    } else {
      onRender();
    }
  }
  render() {
    const style = {};
    if (this.color) {
      style["color"] = `var(--theme-${this.color})`;
    }
    return h(Host, { key: "484071b4f74e0b803b8d36913c866bfdb4b1a259", style, class: {
      ["size-12"]: this.size === "12",
      ["size-16"]: this.size === "16",
      ["size-24"]: this.size === "24",
      ["size-32"]: this.size === "32"
    } }, h("div", { key: "d988ef0fcc83087c24c905cf95ff02fe187aed5e", class: "svg-container", innerHTML: this.svgContent }));
  }
  static get assetsDirs() {
    return ["svg"];
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "name": ["loadIconContent"]
    };
  }
};
Icon.style = IxIconStyle0;
export {
  Icon as I,
  addIcons as a
};
