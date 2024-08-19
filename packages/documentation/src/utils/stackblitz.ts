/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TargetFramework } from '../components/PlaygroundV2/framework-types';
import { getReactRuntime } from './code-runtime';
import sdk from '@stackblitz/sdk';

async function openReactStackBlitz(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string
) {
  const runtime = await getReactRuntime(baseUrl);

  const project = {
    ...runtime,
  };

  Object.keys(snippets).forEach((key) => {
    project[`src/${key.replace('./', '')}`] = snippets[key];
  });

  const app = project['src/App.tsx'];
  project['src/App.tsx'] = app
    .replace(/\/\/@_IMPORT_COMPONENT/gms, `import Example from './${name}';`)
    .replace(/<!-- @_RENDER_COMPONENT -->/gms, ' <Example />');

  sdk.openProject(
    {
      title: 'iX React Example',
      template: 'node',
      description: 'iX react playground',
      files: project,
    },
    {
      openFile: `src/${name}.tsx`,
    }
  );
}

export async function openStackBlitz({
  baseUrl,
  name,
  framework,
  snippets,
  version,
}: {
  baseUrl: string;
  name: string;
  snippets: Record<string, string>;
  framework: TargetFramework;
  version: string;
}) {
  const libraryVersion = version || 'latest';

  if (framework === TargetFramework.REACT) {
    return openReactStackBlitz(baseUrl, snippets, name);
  }
  // if (framework === TargetFramework.REACT) {
  //   return openReactStackBlitz(baseUrl, snippets, libraryVersion);
  // }

  // if (framework === TargetFramework.ANGULAR) {
  //   return openAngularStackBlitz(baseUrl, name, snippets, libraryVersion);
  // }

  // if (framework === TargetFramework.JAVASCRIPT) {
  //   return openHtmlStackBlitz(baseUrl, snippets, libraryVersion);
  // }

  // if (framework === TargetFramework.VUE) {
  //   return openVueStackBlitz(baseUrl, snippets, libraryVersion);
  // }
}
