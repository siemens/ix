/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import { getFallbackLabelFromIconName } from '../a11y';

const svgDataUrl = (body: string) =>
  `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg">${body}</svg>`;

describe('getFallbackLabelFromIconName', () => {
  it('derives a label from an icon name', () => {
    expect(getFallbackLabelFromIconName('arrow-left-filled')).toBe(
      'Arrow Left'
    );
  });

  it('reads the description of an SVG data URL', () => {
    expect(
      getFallbackLabelFromIconName(svgDataUrl('<desc>star-filled</desc>'))
    ).toBe('Star');
  });

  it('uses the last description when multiple are present', () => {
    expect(
      getFallbackLabelFromIconName(
        svgDataUrl('<desc>first-icon</desc><g></g><desc>second-icon</desc>')
      )
    ).toBe('Second Icon');
  });

  it('returns Unknown when an SVG data URL has no description', () => {
    expect(getFallbackLabelFromIconName(svgDataUrl('<g></g>'))).toBe(
      'Unknown'
    );
    expect(getFallbackLabelFromIconName(svgDataUrl('<desc>open'))).toBe(
      'Unknown'
    );
    expect(getFallbackLabelFromIconName(svgDataUrl('close</desc>'))).toBe(
      'Unknown'
    );
  });

  it('handles large SVG data URLs without excessive backtracking', () => {
    const malicious = svgDataUrl('<desc>'.repeat(50_000));

    const start = performance.now();
    expect(getFallbackLabelFromIconName(malicious)).toBe('Unknown');
    expect(performance.now() - start).toBeLessThan(100);
  });
});
