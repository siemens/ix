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
import { visit } from 'unist-util-visit';
import { Logger } from './logger.js';

const logger = new Logger('LOG', 'figma-plugin');

type MDXImageNode = {
  url: string;
};

type EnhancedMDXImageNode = MDXImageNode & {
  nodeId: string;
  fileName: string;
};

type FigmaConfig = {
  apiToken: string;
  baseUrl: string;
  error_image: string;
  figmaFolder: string;
  fileVersionId?: string;
  rimraf?: boolean;
};

type FigmaId = {
  fileName: string;
  nodeId: string;
};

type FigmaVersion = {
  id: string;
  label?: string;
};

const isFetching = new Set<string>();

async function getImageResource(
  fileName: string,
  nodeIds: string[],
  figmaToken: string,
  fileVersion?: string
): Promise<Record<string, string>> {
  const ids = nodeIds.join(',');

  const url = `https://api.figma.com/v1/images/${fileName}?ids=${ids}${
    fileVersion ? `&version=${fileVersion}` : ''
  }`;
  const response = await fetch(url, {
    headers: {
      'X-FIGMA-TOKEN': figmaToken,
    },
  });

  logger.log('Fetch image resource for', url);

  if (response.status !== 200) {
    logger.log(
      `🪲 Oops! Received unexpected status code ${response.status}`,
      fileName,
      'with node ids:',
      ids
    );

    if (response.status === 429) {
      logger.log('🕰️ Retry after 60 seconds');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(getImageResource(fileName, nodeIds, figmaToken, fileVersion));
        }, 60 * 1000);
      });
    }
  }

  const data = await response.json();
  return data.images;
}

export function getFigmaMeta(node: MDXImageNode): {
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

async function modifyMDXUrl(
  node: MDXImageNode,
  images: Record<string, string>,
  config: FigmaConfig,
  retry = false
) {
  const { fileName, nodeId } = getFigmaMeta(node);
  let id = decodeURIComponent(nodeId).replace(/-/, ':');

  if (!images) {
    logger.error(
      `No image resource found for ${fileName} with node id ${nodeId}`
    );
    node.url = `${config.baseUrl}/${config.error_image}`;
    return;
  }

  const s3BucketUrl = images[id];

  if (s3BucketUrl === null) {
    logger.error(`Cannot find image in ${fileName} with node id ${nodeId}`);
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
      logger.log('Download image for filename', fileName, 'node', id);
      try {
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

        logger.log(`Image downloaded to ${imagePath}`);
      } catch (e) {
        logger.error('Error downloading image', e);
        if (retry) {
          logger.error('Abort retry executed second time', e);
          throw Error(
            'Error downloading image. Abort retry executed second time'
          );
        }
        logger.error('Retry downloading image', e);
        await new Promise<void>((resolve) => {
          setTimeout(async () => {
            await modifyMDXUrl(node, images, config);
            resolve();
          }, 2000);
        });
      }
    } else {
      logger.log('Skip download. Image already existing or in fetching phase.');
    }
    node.url = `${config.baseUrl}/${imageFileName}`;
  } else {
    node.url = s3BucketUrl;
    logger.log(`Use inline image: ${s3BucketUrl}`);
  }
}

export default (config: FigmaConfig) => {
  logger.log(
    `Figma plugin running (version: ${config.fileVersionId ?? 'current'})`
  );

  if (config.apiToken === undefined || config.apiToken === '') {
    logger.error('@siemens/figma-plugin no auth token provided');
    return () => {};
  }

  if (config.rimraf === true) {
    rimrafSync(config.figmaFolder);
    fs.mkdirSync(config.figmaFolder);
  }

  return () => {
    const transformer = async (ast: any) => {
      const imageRequests = new Map<string, Set<string>>();
      const standardNodes: any[] = [];

      visit(ast, 'image', (node: any) => {
        standardNodes.push(node);
      });

      for (const node of standardNodes) {
        const { fileName, nodeId } = getFigmaMeta(node);
        if (imageRequests.has(fileName)) {
          imageRequests.get(fileName).add(nodeId);
        } else {
          imageRequests.set(fileName, new Set([nodeId]));
        }
      }

      const waitForAllImageRequest: Promise<Record<string, string>>[] = [];
      imageRequests.forEach(async (ids, fileName) => {
        const images = getImageResource(
          fileName,
          Array.from(ids),
          config.apiToken,
          config.fileVersionId
        );
        waitForAllImageRequest.push(images);
      });

      const urls = await Promise.all(waitForAllImageRequest);

      const modifiedNodes: Promise<void>[] = [];
      urls.forEach((s3BucketUrls) => {
        standardNodes.forEach((node) => {
          const { nodeId } = getFigmaMeta(node);
          const localId = decodeURIComponent(nodeId).replace(/-/, ':');

          if (s3BucketUrls[localId]) {
            modifiedNodes.push(modifyMDXUrl(node, s3BucketUrls, config));
          }
        });
      });

      await Promise.all(modifiedNodes);
    };
    return transformer;
  };
};
