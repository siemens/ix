/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const figma = require('./figma');
const visit = require('unist-util-visit');

const plugin = (options) => {
  const transformer = async (ast) => {
    const promises = [];
    visit(ast, 'image', (node) => {
      promises.push(figma(node));
    });

    await Promise.all(promises);
  };
  return transformer;
};

module.exports = plugin;
