/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { rimrafSync } from 'rimraf';

type FigmaNode = {
  url: string;
};

type FigmaConfig = {
  apiToken: string;
  baseUrl: string;
  error_image: string;
  figmaFolder: string;
  rimraf?: boolean;
};

type FigmaId = {
  fileName: string;
  nodeId: string;
};

async function getImageResource(
  fileName: string,
  nodeIds: string[],
  figmaToken: string
): Promise<Record<string, string>> {
  const ids = nodeIds.join(',');

  const url = `https://api.figma.com/v1/images/${fileName}?ids=${ids}`;
  const response = await fetch(url, {
    headers: {
      'X-FIGMA-TOKEN': figmaToken,
    },
  });

  console.log('Fetch image resource for', url);

  if (response.status !== 200) {
    console.log(
      `🪲 Oops! Received unexpected status code ${response.status}`,
      fileName,
      'with node ids:',
      ids
    );

    if (response.status === 429) {
      console.log('🕰️ Retry after 60 seconds');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(getImageResource(fileName, nodeIds, figmaToken));
        }, 60 * 1000);
      });
    }
  }

  const data = await response.json();
  return data.images;
}

export function getFigmaMeta(node: FigmaNode): {
  fileName: string;
  nodeId: string;
} {
  const url = new URL(node.url);
  const urlPath = url.pathname;
  const urlPaths = urlPath.split('/');
  const fileIndex = urlPaths.findIndex((segment) => segment === 'file');
  const designIndex = urlPaths.findIndex((segment) => segment === 'design');
  const branchIndex = urlPaths.findIndex((segment) => segment === 'branch');

  let file = '';

  if (designIndex !== -1 && fileIndex === -1) {
    file = urlPaths[designIndex + 1];
  } else {
    file = urlPaths[fileIndex + 1];
  }

  const fileName = branchIndex !== -1 ? urlPaths[branchIndex + 1] : file;

  const nodeId = url.searchParams.get('node-id');
  return {
    fileName,
    nodeId,
  };
}

const isFetching = new Set<string>();

async function processImage(
  node: FigmaNode,
  images: Record<string, string>,
  config: FigmaConfig
) {
  const { fileName, nodeId } = getFigmaMeta(node);
  let id = decodeURIComponent(nodeId).replace(/-/, ':');

  if (!images) {
    console.error(
      `No image resource found for ${fileName} with node id ${nodeId}`
    );
    node.url = `${config.baseUrl}/${config.error_image}`;
    return;
  }

  const s3BucketUrl = images[id];

  if (s3BucketUrl === null) {
    console.error(`Cannot find image in ${fileName} with node id ${nodeId}`);
    node.url = `${config.baseUrl}/${config.error_image}`;
    return;
  }

  if (process.env.NODE_ENV === 'production') {
    const imageUUID = `${fileName}_${id.replace(/:/, '_')}`;
    const imageFileName = `${imageUUID}.png`;

    if (
      !fs.existsSync(path.join(config.figmaFolder, imageFileName)) &&
      !isFetching.has(imageUUID)
    ) {
      isFetching.add(imageUUID);
      console.log('Download image for filename', fileName, 'node', id);
      const imageResponse = await axios.get(s3BucketUrl, {
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
        'Skip download. Image already existing or in fetching phase.'
      );
    }
    node.url = `${config.baseUrl}/${imageFileName}`;
  } else {
    node.url = s3BucketUrl;
    console.log(`Use inline image: ${s3BucketUrl}`);
  }
}

export default (config: FigmaConfig) => {
  console.log('Figma plugin running');
  if (config.apiToken === undefined || config.apiToken === '') {
    console.error('@siemens/figma-plugin no auth token provided');
    return () => {};
  }

  if (config.rimraf === true) {
    rimrafSync(config.figmaFolder);
    fs.mkdirSync(config.figmaFolder);
  }

  return () => {
    const transformer = async (ast: any) => {
      const { visit } = await import('unist-util-visit');
      const fileNameIds = new Map<string, Set<string>>();
      const nodes: FigmaNode[] = [];
      visit(ast, 'image', (node: any) => {
        const { fileName, nodeId } = getFigmaMeta(node);
        if (fileNameIds.has(fileName)) {
          if (!fileNameIds.get(fileName).has(nodeId)) {
            fileNameIds.get(fileName).add(nodeId);
          }
        } else {
          fileNameIds.set(fileName, new Set([nodeId]));
        }

        nodes.push(node);
      });

      const bucketUrls = new Map<string, Record<string, string>>();

      for (const [fileName, ids] of fileNameIds) {
        const imagesForFileName = await getImageResource(
          fileName,
          Array.from(ids),
          config.apiToken
        );

        bucketUrls.set(fileName, imagesForFileName);
      }

      const promises: Promise<void>[] = [];

      for (const node of nodes) {
        const { fileName } = getFigmaMeta(node);
        promises.push(processImage(node, bucketUrls.get(fileName), config));
      }

      await Promise.all(promises);
    };
    return transformer;
  };
};
