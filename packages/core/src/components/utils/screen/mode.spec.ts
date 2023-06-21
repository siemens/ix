import { getFallbackMode } from './mode';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
describe('Mode', () => {
  it('should has a fallback', () => {
    let mode = getFallbackMode(['small', 'medium', 'large'], 'large');
    expect(mode).toStrictEqual('large');

    mode = getFallbackMode(['small', 'medium'], 'large');
    expect(mode).toStrictEqual('medium');

    mode = getFallbackMode(['small', 'large'], 'large');
    expect(mode).toStrictEqual('large');

    mode = getFallbackMode(['medium', 'large'], 'large');
    expect(mode).toStrictEqual('large');

    mode = getFallbackMode(['small', 'medium', 'large'], 'medium');
    expect(mode).toStrictEqual('medium');

    mode = getFallbackMode(['small', 'large'], 'medium');
    expect(mode).toStrictEqual('large');

    mode = getFallbackMode(['small', 'medium'], 'medium');
    expect(mode).toStrictEqual('medium');

    mode = getFallbackMode(['medium', 'large'], 'medium');
    expect(mode).toStrictEqual('medium');

    mode = getFallbackMode(['small', 'medium', 'large'], 'small');
    expect(mode).toStrictEqual('small');

    mode = getFallbackMode(['medium', 'large'], 'small');
    expect(mode).toStrictEqual('medium');

    mode = getFallbackMode(['small', 'large'], 'small');
    expect(mode).toStrictEqual('small');

    mode = getFallbackMode(['small'], 'medium');
    expect(mode).toStrictEqual('small');
  });
});
