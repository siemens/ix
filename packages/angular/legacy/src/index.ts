/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { setAssetPath, getAssetPath } from '@stencil/core';
import * as icons from '@siemens/ix-icons/icons';

declare global {
  interface Window {
    IxIcons: any;
  }
}
let fetchCache: Map<string, string>;
let parser: DOMParser | null = null;

const getIconCacheMap = (): Map<string, string> => {
  if (typeof window === 'undefined') {
    return new Map();
  }

  if (!fetchCache) {
    window.IxIcons = window.IxIcons || {};
    fetchCache = window.IxIcons.map = window.IxIcons.map || new Map();
  }
  return fetchCache;
};

function getCustomAssetUrl() {
  const assetPath = document.querySelector("meta[name='ix-icons:path']");
  if (assetPath) {
    const path = assetPath.getAttribute('content');
    return path;
  }

  return false;
}

function getAssetUrl(name: string) {
  const customAssetUrl = getCustomAssetUrl();
  if (customAssetUrl) {
    return `${customAssetUrl}/${name}.svg`;
  }

  return getAssetPath(`svg/${name}.svg`);
}

function fromCamelToKebabCase(camelString: string): string {
  let kebabString = '';
  for (const char of camelString) {
    if (char.toUpperCase() === char) {
      kebabString += '-' + char.toLowerCase();
    } else {
      kebabString += char;
    }
  }
  if (kebabString.startsWith('-')) {
    kebabString = kebabString.slice(1);
  }
  return kebabString;
}

function parseSVGDataContent(content: string) {
  if (typeof window['DOMParser'] === 'undefined') {
    console.warn('DOMParser not supported by your browser.');
    return;
  }

  if (parser === null) {
    parser = new window['DOMParser']();
  }

  const svgDocument = parser.parseFromString(content, 'text/html');
  const svgElement = svgDocument.querySelector('svg') as unknown as HTMLElement;

  if (!svgElement) {
    throw Error('No valid svg data provided');
  }

  return svgElement.outerHTML;
}

export function preloadIcons() {
  const iconsCache = getIconCacheMap();
  Object.keys(icons).forEach((key) => {
    const fileName = fromCamelToKebabCase(key.substring('icon'.length));
    const icon = (icons as any)[key];

    let url: string = '';
    try {
      url = getAssetUrl(fileName);
    } catch (error) {
      setAssetPath(`${window.location.origin}/`);
    } finally {
      url = getAssetUrl(fileName);
    }

    iconsCache.set(url, parseSVGDataContent(icon) as string);
  });
}
