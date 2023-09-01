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

/**
 *
 * @param {Object} config Configuration
 * @param {string} config.figmaFolder Folder to images at build time
 * @param {string | undefined} config.apiToken Folder to images at build time
 * @returns {*}
 */
const plugin = (config) => {
  console.log('Config', config);
  if (config.apiToken === undefined || config.apiToken === '') {
    throw Error('No figma token provided');
  }

  return () => {
    const transformer = async (ast) => {
      const promises = [];
      visit(ast, 'image', (node) => {
        promises.push(figma(node, config));
      });

      await Promise.all(promises);
    };
    return transformer;
  };
};

module.exports = plugin;
