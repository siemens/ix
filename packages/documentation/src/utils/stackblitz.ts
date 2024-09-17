/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { fromKebabCaseToCamelCase } from '.';
import { TargetFramework } from '../components/PlaygroundV2/framework-types';
import {
  getAngularRuntime,
  getHTMLRuntime,
  getReactRuntime,
  getVueRuntime,
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
      title: `iX ${fromKebabCaseToCamelCase(name)} Example`,
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

async function openVueStackBlitz(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string,
  version: string
) {
  const projectFiles = await createVueProjectFiles(baseUrl, snippets, name);

  openProject('vue', projectFiles, `${name}.vue`, version);
}

async function openHtmlStackBlitz(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string,
  version: string
) {
  const projectFiles = await createHTMLProjectFiles(baseUrl, snippets, name);

  openProject('html', projectFiles, 'src/index.html', version);
}

async function openAngularStackBlitz(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string,
  version: string
) {
  const projectFiles = await createAngularProjectFiles(baseUrl, snippets, name);

  openProject('angular', projectFiles, `src/${name}.ts`, version);
}

async function openReactStackBlitz(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string,
  version: string
) {
  const projectFiles = await createReactProjectFiles(baseUrl, snippets, name);

  openProject('react', projectFiles, `src/${name}.tsx`, version);
}

async function createReactProjectFiles(
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

  const exampleImport = `import ${fromKebabCaseToCamelCase(
    name
  )} from './${name}';`;

  project['src/App.tsx'] = project['src/App.tsx'].replace(
    "import Example from './Example';",
    exampleImport
  );

  project['src/App.tsx'] = project['src/App.tsx'].replace(
    '<Example />',
    `<${fromKebabCaseToCamelCase(name)} />`
  );

  return project;
}

function getAdditionalAngularComponents(
  snippets: Record<string, string>,
  rootFileName: string
) {
  const componentRegex = /@Component\(/;

  return Object.keys(snippets)
    .filter((key) => {
      return (
        key.endsWith('.ts') &&
        key !== `${rootFileName}.ts` &&
        componentRegex.test(snippets[key])
      );
    })
    .map((key) => key.replace('.ts', ''));
}

async function createAngularProjectFiles(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string
) {
  const runtime = await getAngularRuntime(baseUrl);

  const project = {
    ...runtime,
  };

  Object.keys(snippets).forEach((key) => {
    project[`src/${key.replace('./', '')}`] = snippets[key];
  });

  const additionalAngularComponents = getAdditionalAngularComponents(
    snippets,
    name
  );

  const importsString = additionalAngularComponents
    .map(
      (file) => `import ${fromKebabCaseToCamelCase(file)} from './../${file}';`
    )
    .join('\n');

  project['src/app/app.module.ts'] = project['src/app/app.module.ts'].replace(
    "import ExampleComponent from './example.component';",
    [
      `import ${fromKebabCaseToCamelCase(name)} from './../${name}';`,
      importsString,
    ].join('\n')
  );

  const importComponent = additionalAngularComponents
    .map((file) => fromKebabCaseToCamelCase(file))
    .join(', ');

  project['src/app/app.module.ts'] = project['src/app/app.module.ts'].replace(
    'declarations: [AppComponent, ExampleComponent],',
    `declarations: [AppComponent, ${fromKebabCaseToCamelCase(
      name
    )}, ${importComponent}],`
  );

  return project;
}

async function createHTMLProjectFiles(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string
) {
  const runtime = await getHTMLRuntime(baseUrl);

  const project = {
    ...runtime,
  };

  const html = snippets[`${name}.html`];
  project['src/index.html'] = html;

  Object.keys(snippets).forEach((key) => {
    project[`src/${key.replace('./', '')}`] = snippets[key];
  });

  delete project[`src/${name}.html`];

  return project;
}

async function createVueProjectFiles(
  baseUrl: string,
  snippets: Record<string, string>,
  name: string
) {
  const runtime = await getVueRuntime(baseUrl);

  const project = {
    ...runtime,
  };

  Object.keys(snippets).forEach((key) => {
    project[`src/${key.replace('./', '')}`] = snippets[key];
  });

  const exampleImport = `import ${fromKebabCaseToCamelCase(
    name
  )} from './${name}.vue';`;

  project['src/App.vue'] = project['src/App.vue'].replace(
    "import Example from './Example.vue';",
    exampleImport
  );

  project['src/App.vue'] = project['src/App.vue'].replace(
    '<Example />',
    `<${fromKebabCaseToCamelCase(name)} />`
  );

  return project;
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

  if (framework === TargetFramework.VUE) {
    return openVueStackBlitz(baseUrl, snippets, name, libraryVersion);
  }
}
