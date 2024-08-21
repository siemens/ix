/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { capitalizeFirstLetter } from '.';
import { TargetFramework } from '../components/PlaygroundV2/framework-types';
import {
  getAngularRuntime,
  getHTMLRuntime,
  getReactRuntime,
} from './code-runtime';
import sdk from '@stackblitz/sdk';

function openProject(
  name: string,
  projectFiles: Record<string, string>,
  openFile: Array<string> | string,
  version: string
) {
  replaceLibraryImports(projectFiles, version);
  sdk.openProject(
    {
      title: `iX ${capitalizeFirstLetter(name)} Example`,
      template: 'node',
      description: `iX ${name} playground`,
      files: projectFiles,
    },
    {
      openFile: openFile,
    }
  );
}

function replaceLibraryImports(
  project: Record<string, string>,
  version: string
) {
  const packageJson = project['package.json'];
  project['package.json'] = packageJson.replace(
    /\"<VERSION>\"/g,
    `"${version}"`
  );
}

async function openHtmlStackBlitz(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string,
  version: string
) {
  const projectFiles = await createHTMLProjectFiles(
    baseUrl,
    snippets,
    name,
    version
  );

  console.log(projectFiles);
}

async function openAngularStackBlitz(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string,
  version: string
) {
  const projectFiles = await createAngularProjectFiles(
    baseUrl,
    snippets,
    name,
    version
  );

  openProject('angular', projectFiles, `src/${name}.ts`, version);
}

async function openReactStackBlitz(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string,
  version: string
) {
  const projectFiles = await createReactProjectFiles(
    baseUrl,
    snippets,
    name,
    version
  );

  openProject('react', projectFiles, `src/${name}.tsx`, version);
}

async function createReactProjectFiles(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string,
  version: string
) {
  const runtime = await getReactRuntime(baseUrl);

  const project = {
    ...runtime,
  };

  Object.keys(snippets).forEach((key) => {
    project[`src/${key.replace('./', '')}`] = snippets[key];
  });

  const exampleImport = `import ${capitalizeFirstLetter(
    name
  )} from './${name}';`;

  project['src/App.tsx'] = project['src/App.tsx'].replace(
    "import Example from './Example';",
    exampleImport
  );

  project['src/App.tsx'] = project['src/App.tsx'].replace(
    '<Example />',
    `<${capitalizeFirstLetter(name)} />`
  );

  return project;
}

async function createAngularProjectFiles(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string,
  version: string
) {
  const runtime = await getAngularRuntime(baseUrl);

  const project = {
    ...runtime,
  };

  Object.keys(snippets).forEach((key) => {
    project[`src/${key.replace('./', '')}`] = snippets[key];
  });

  project['src/app/app.module.ts'] = project['src/app/app.module.ts'].replace(
    "import ExampleComponent from './example.component';",
    `import ${capitalizeFirstLetter(name)} from './../${name}';`
  );

  project['src/app/app.module.ts'] = project['src/app/app.module.ts'].replace(
    'declarations: [AppComponent, ExampleComponent],',
    `declarations: [AppComponent, ${capitalizeFirstLetter(name)}],`
  );

  return project;
}

async function createHTMLProjectFiles(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string,
  version: string
) {
  const runtime = await getHTMLRuntime(baseUrl);

  const project = {
    ...runtime,
  };

  Object.keys(snippets).forEach((key) => {
    project[`src/${key.replace('./', '')}`] = snippets[key];
  });

  console.log(project);
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
    return openReactStackBlitz(baseUrl, snippets, name, libraryVersion);
  }

  if (framework === TargetFramework.ANGULAR) {
    return openAngularStackBlitz(baseUrl, snippets, name, libraryVersion);
  }

  if (framework === TargetFramework.JAVASCRIPT) {
    return openHtmlStackBlitz(baseUrl, snippets, name, libraryVersion);
  }

  // if (framework === TargetFramework.VUE) {
  //   return openVueStackBlitz(baseUrl, snippets, libraryVersion);
  // }
}
