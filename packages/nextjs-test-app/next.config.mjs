/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import stencilSSR from '@stencil/ssr/next';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default stencilSSR({
  module: import('@siemens/ix-react'),
  from: '@siemens/ix-react',
  hydrateModule: import('@siemens/ix/hydrate'),
  serializeShadowRoot: {
    scoped: [],
    default: 'declarative-shadow-dom',
  },
})(nextConfig);
