/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
/**
 * Add a focus proxy element to the DOM to allow for better keyboard navigation and accessibility.
 *
 * Important also import the focus proxy mixin in the host component's scss file to ensure the proxy is visually hidden but still accessible to screen readers and keyboard navigation.
 */
export const FocusProxy = (props: { hostId: string; otherProps: any }) => {
  return (
    <ul
      class="proxy-list"
      role="listbox"
      id={`${props.hostId}-${PROXY_LIST_ID_SUFFIX}`}
      {...props.otherProps}
    ></ul>
  );
};

export const PROXY_LIST_ID_SUFFIX = 'proxy-listbox' as const;
export const PROXY_LISTITEM_ID_SUFFIX = 'proxy-listbox-item' as const;

export const updateFocusProxyList = <T extends HTMLElement>(
  proxyListElement: HTMLElement,
  items: T[],
  modifyProxyElement?: (item: T, proxyElement: HTMLLIElement) => void
) => {
  if (proxyListElement) {
    const top =
      items[0].getBoundingClientRect().top -
      items[0].getBoundingClientRect().height +
      8;

    proxyListElement.innerHTML = '';
    proxyListElement.style.top = top + 'px';
    proxyListElement.style.padding = '0px';
    proxyListElement.style.margin = '0px';
    proxyListElement.innerHTML = '';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.id = item.id + '-' + PROXY_LISTITEM_ID_SUFFIX;

      if (modifyProxyElement) {
        modifyProxyElement(item, li);
      }

      item.ariaHidden = 'true';
      proxyListElement.appendChild(li);
    });
  }
};
