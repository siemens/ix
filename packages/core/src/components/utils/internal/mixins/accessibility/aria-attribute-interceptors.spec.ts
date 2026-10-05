/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { A11yAttributeName } from './../../../a11y';
import {
  interceptAriaReflectionRemovals,
  interceptHostAttributeRemovals,
} from './aria-attribute-interceptors';

describe('aria attribute interceptors', () => {
  let hostElement: HTMLElement;
  let inherited: Set<A11yAttributeName>;
  let onAttributeRemoved: (attributeName: A11yAttributeName) => void;

  const setupInterceptors = (ignored: A11yAttributeName[] = []) =>
    interceptHostAttributeRemovals(hostElement, {
      isIgnored: (attributeName) => ignored.includes(attributeName),
      isInherited: (attributeName) => inherited.has(attributeName),
      onAttributeRemoved,
    });

  beforeEach(() => {
    hostElement = document.createElement('div');
    inherited = new Set<A11yAttributeName>();
    onAttributeRemoved = vi.fn((attributeName: A11yAttributeName) =>
      inherited.delete(attributeName)
    );
  });

  it('reports removals of forwarded attributes which are absent on the host', () => {
    setupInterceptors();
    inherited.add('aria-expanded');

    hostElement.removeAttribute('ARIA-EXPANDED');

    expect(onAttributeRemoved).toHaveBeenCalledWith('aria-expanded');
  });

  it('ignores removals of attributes still present on the host', () => {
    setupInterceptors();
    hostElement.setAttribute('aria-expanded', 'true');

    hostElement.removeAttribute('aria-expanded');

    expect(onAttributeRemoved).not.toHaveBeenCalled();
    expect(hostElement.hasAttribute('aria-expanded')).toBe(false);
  });

  it('ignores non aria attributes and ignored attributes', () => {
    setupInterceptors(['role']);

    hostElement.removeAttribute('title');
    hostElement.removeAttribute('role');

    expect(onAttributeRemoved).not.toHaveBeenCalled();
  });

  it('reports namespace-less removeAttributeNS calls only', () => {
    setupInterceptors();
    inherited.add('aria-expanded');

    hostElement.removeAttributeNS('http://example.com', 'aria-expanded');
    expect(onAttributeRemoved).not.toHaveBeenCalled();

    hostElement.removeAttributeNS(null, 'aria-expanded');
    expect(onAttributeRemoved).toHaveBeenCalledWith('aria-expanded');
  });

  it('treats inherited attributes as present while toggling', () => {
    setupInterceptors();
    inherited.add('aria-expanded');

    expect(hostElement.toggleAttribute('aria-expanded')).toBe(false);
    expect(onAttributeRemoved).toHaveBeenCalledWith('aria-expanded');
    expect(hostElement.hasAttribute('aria-expanded')).toBe(false);
  });

  it('sets the attribute on the host when toggled on', () => {
    setupInterceptors();

    expect(hostElement.toggleAttribute('aria-expanded', true)).toBe(true);
    expect(hostElement.hasAttribute('aria-expanded')).toBe(true);
    expect(onAttributeRemoved).not.toHaveBeenCalled();
  });

  it('leaves ignored attributes to the native toggleAttribute', () => {
    setupInterceptors(['role']);

    expect(hostElement.toggleAttribute('role')).toBe(true);
    expect(hostElement.hasAttribute('role')).toBe(true);
    expect(onAttributeRemoved).not.toHaveBeenCalled();
  });

  it('redirects aria reflection properties to host attributes', () => {
    const removeHostAttribute = setupInterceptors();
    interceptAriaReflectionRemovals(hostElement, ['aria-expanded'], {
      onAttributeRemoved,
      removeHostAttribute,
    });

    hostElement.ariaExpanded = 'true';
    expect(hostElement.getAttribute('aria-expanded')).toBe('true');
    expect(hostElement.ariaExpanded).toBe('true');

    inherited.add('aria-expanded');
    hostElement.ariaExpanded = null;

    expect(onAttributeRemoved).toHaveBeenCalledWith('aria-expanded');
    expect(hostElement.hasAttribute('aria-expanded')).toBe(false);
  });
});
