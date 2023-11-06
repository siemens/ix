/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import axios from 'axios';
import path from 'path';
import fs from 'fs';

async function getImageResource(fileName, nodeId, figmaToken) {
  const res = await axios.get(`https://api.figma.com/v1/images/${fileName}`, {
    params: {
      ids: nodeId,
    },
    headers: {
      'X-FIGMA-TOKEN': figmaToken,
    },
  });

  const images = res.data.images;
  const [imageKey] = Object.keys(images);

  return images[imageKey];
}

/**
 * @param {{ url: string }} node
 * @param {Object} config Configuration
 * @param {string} config.figmaFolder Folder to images at build time
 * @param {string} config.baseUrl Folder to images at build time
 * @param {string | undefined} config.apiToken Folder to images at build time
 * @param {string | undefined} config.error_image Folder to images at build time
 * @param {boolean} [config.rimraf=false] Folder to images at build time
 * @returns {*}
 */
module.exports = async function (node, config) {
  try {
    if (node.url.startsWith('https://www.figma.com/file/')) {
      if (config.apiToken === undefined || config.apiToken === '') {
        node.url = `${config.baseUrl}${config.error_image}`;
        return;
      }

      const url = new URL(node.url);
      const urlPath = url.pathname;
      const urlPaths = urlPath.split('/');
      const fileIndex = urlPaths.findIndex((segment) => segment === 'file');
      const branchIndex = urlPaths.findIndex((segment) => segment === 'branch');

      const fileName =
        branchIndex !== -1
          ? urlPaths[branchIndex + 1]
          : urlPaths[fileIndex + 1];

      const nodeId = url.searchParams.get('node-id');

      const imageUUID = `${fileName}_${nodeId}`;
      const imageUrl = await getImageResource(
        fileName,
        nodeId,
        config.apiToken
      );

      console.log(`Requested image ${imageUrl}`);
      if (process.env.NODE_ENV === 'production') {
        const imageFileName = `${imageUUID.replace(/:/, '_')}.png`;

        if (!fs.existsSync(path.join(config.figmaFolder, imageFileName))) {
          const imageResponse = await axios.get(imageUrl, {
            responseType: 'stream',
          });

          const imagePath = path.join(config.figmaFolder, imageFileName);
          const imageStream = fs.createWriteStream(imagePath);

          imageResponse.data.pipe(imageStream);

          await new Promise((resolve, reject) => {
            imageStream.on('finish', resolve);
            imageStream.on('error', reject);
          });

          console.log(`Image downloaded to ${imagePath}`);
        } else {
          console.log(
            'Skip download use existing image:',
            `/figma/${imageFileName}`
          );

          console.log(
            `Skip download use existing image: /figma/${imageFileName}`
          );
        }

        node.url = `${config.baseUrl}figma/${imageFileName}`;
      } else {
        node.url = imageUrl;

        console.log(`Use inline image: ${imageUrl}`);
      }
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.error(error);
    }
    node.url = `${config.baseUrl}${config.error_image}`;
  }
};
