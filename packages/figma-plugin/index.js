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
const { rimrafSync } = require('rimraf');
const fs = require('fs');
/**
 *
 * @param {Object} config Configuration
 * @param {string} config.figmaFolder Folder to images at build time
 * @param {string | undefined} config.apiToken Folder to images at build time
 * @param {string | undefined} config.error_image Folder to images at build time
 * @param {boolean} [config.rimraf=false] Folder to images at build time
 * @returns {*}
 */
const plugin = (config) => {
  if (config.rimraf === true) {
    rimrafSync(config.figmaFolder);
    fs.mkdirSync(config.figmaFolder);
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
