/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const axios = require('axios');
/**
 *
 * @param {{ url: string }} node
 */
module.exports = async function (node) {
  console.log('Token', process.env.FIGMA_TOKEN);

  if (node.url.startsWith('https://www.figma.com/file/')) {
    const url = new URL(node.url);
    const path = url.pathname;
    const paths = path.split('/');
    const [_, __, fileName] = paths;

    const nodeId = url.searchParams.get('node-id');

    const res = await axios.get(`https://api.figma.com/v1/images/${fileName}`, {
      params: {
        ids: nodeId,
      },
      headers: {
        'X-FIGMA-TOKEN': process.env.FIGMA_TOKEN,
      },
    });
    console.log('images', res.data.images);
    const images = res.data.images;
    const [imageKey] = Object.keys(images);
    node.url = images[imageKey];
  }
};
