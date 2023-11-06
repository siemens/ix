/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import figma from './figma';
import { visit } from 'unist-util-visit';
import { rimrafSync } from 'rimraf';
import { mkdirSync } from 'fs';

/**
 *
 * @param {Object} config Configuration
 * @param {string} config.baseUrl Base url
 * @param {string} config.figmaFolder Folder to images at build time
 * @param {string | undefined} config.apiToken Folder to images at build time
 * @param {string | undefined} config.error_image Folder to images at build time
 * @param {boolean} [config.rimraf=false] Folder to images at build time
 * @returns {*}
 */
const plugin = (config) => {
  if (config.apiToken === undefined || config.apiToken === '') {
    console.error('@siemens/figma-plugin no auth token provided');
  }
  if (config.rimraf === true) {
    rimrafSync(config.figmaFolder);
    mkdirSync(config.figmaFolder);
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

export default plugin;
