/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('axios');
const path = require('path');
const fs = require('fs');

/**
 * @param {{ url: string }} node
 * @param {Object} config Configuration
 * @param {string} config.figmaFolder Folder to images at build time
 * @param {string | undefined} config.apiToken Folder to images at build time
 * @param {string | undefined} config.error_image Folder to images at build time
 * @param {boolean | undefined} config.rimraf Folder to images at build time
 * @returns {*}
 */
module.exports = async function (node, config) {
  if (node.url.startsWith('https://www.figma.com/file/')) {
    if (config.apiToken === undefined || config.apiToken === '') {
      node.url = config.error_image;
      return;
    }

    const url = new URL(node.url);
    const urlPath = url.pathname;
    const urlPaths = urlPath.split('/');
    const [_, __, fileName] = urlPaths;

    const nodeId = url.searchParams.get('node-id');

    const res = await axios.get(`https://api.figma.com/v1/images/${fileName}`, {
      params: {
        ids: nodeId,
      },
      headers: {
        'X-FIGMA-TOKEN': config.apiToken,
      },
    });
    console.log('images', res.data.images);
    const images = res.data.images;
    const [imageKey] = Object.keys(images);

    if (process.env.NODE_ENV === 'production') {
      const imageResponse = await axios.get(images[imageKey], {
        responseType: 'stream',
      });
      const imageFileName = `${fileName}_${nodeId}.png`;
      const imagePath = path.join(config.figmaFolder, imageFileName);
      const imageStream = fs.createWriteStream(imagePath);

      imageResponse.data.pipe(imageStream);

      await new Promise((resolve, reject) => {
        imageStream.on('finish', resolve);
        imageStream.on('error', reject);
      });

      node.url = `/figma/${imageFileName}`;
    } else {
      node.url = images[imageKey];
    }
  }
};
