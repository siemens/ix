/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import sdk, { Project } from '@stackblitz/sdk';
import { TargetFramework } from './framework-types';
import { themeSwitcher } from '@siemens/ix';

const repositoryUrl = 'https://github.com/siemens/ix/tree/main/packages';

export function getBranchPath(framework: TargetFramework) {
  let path = 'html';

  const branch = 'main';

  if (framework === TargetFramework.ANGULAR) {
    path = 'angular';
  }

  if (framework === TargetFramework.REACT) {
    path = 'react';
  }

  if (framework === TargetFramework.VUE) {
    path = 'vue';
  }

  return `siemens/ix/tree/${branch}/packages/${path}-test-app`;
}

export function stripComments(code: string) {
  return code
    .replace(/\/\*[^]*?\*\//gs, '')
    .replace(/<!--[^]*?-->/gs, '')
    .trim();
}

export type SourceFile = {
  filename: string;
  source: string;
  raw: string;
};

export function getBranchPath(framework: TargetFramework) {
  let path = 'html';

  const branch = 'main';

  if (framework === TargetFramework.ANGULAR) {
    path = 'angular';
  }

  if (framework === TargetFramework.REACT) {
    path = 'react';
  }

  if (framework === TargetFramework.VUE) {
    path = 'vue';
  }

  return `siemens/ix/tree/${branch}/packages/${path}-test-app`;
}

function stripComments(code: string) {
  return code
    .replace(/\/\*[^]*?\*\//gs, '')
    .replace(/<!--[^]*?-->/gs, '')
    .trim();
}

function extractCodePart(code: string, limiter: RegExp) {
  const limiterMatches = code.match(limiter);

  if (limiterMatches && limiterMatches.length === 2) {
    const [_, intermediate] = code.split(limiter);

    return stripComments(
      intermediate
        .split('\n')
        .map((line) => line.replace(/[ ]{4}/, ''))
        .join('\n')
        .trim()
    );
  }

  return '';
}

function sliceCode(code: string) {
  const previewCode = extractCodePart(code, /<!-- Preview code -->/g);

  if (previewCode) {
    const headerSources = extractCodePart(code, /<!-- Sources -->/g);

    if (headerSources) {
      return (
        '<!-- Include in header -->\n' +
        headerSources +
        '\n<!-- Include in header -->\n\n' +
        previewCode
      );
    }

    return previewCode;
  }

  return stripComments(code);
}

function adaptCode(code: string) {
  return replaceStyleFilepath(sliceCode(code), true).source;
}

export function getLanguage(filename: string) {
  if (filename.endsWith('.html')) {
    return 'html';
  }

  if (filename.endsWith('.ts')) {
    return 'ts';
  }

  if (filename.endsWith('.tsx')) {
    return 'tsx';
  }

  if (filename.endsWith('.vue')) {
    return 'tsx';
  }

  if (filename.endsWith('.css')) {
    return 'css';
  }
}

async function fetchSource(path: string) {
  const response = await fetch(`${path}`);
  const source = await response.text();

  // Docusaurus don' throw a classic 404 if a sub route is not found
  // Check if the response is the bootstrap code of docusaurus
  // If this is the case the resource is not existing
  if (
    !source ||
    source?.includes('<div id="__docusaurus"></div>') ||
    source?.includes('Page Not Found')
  ) {
    return null;
  }

  return source;
}

export async function fetchSourceFilesByFileName(
  path: string,
  framework: TargetFramework,
  files: string[]
) {
  let frameworkPath = 'web-components';

  if (framework === TargetFramework.ANGULAR) {
    frameworkPath = 'angular';
  }

  if (framework === TargetFramework.REACT) {
    frameworkPath = 'react';
  }

  if (framework === TargetFramework.VUE) {
    frameworkPath = 'vue';
  }

  return Promise.all(
    files.map(async (file) => {
      try {
        const source = await fetchSource(
          getLanguage(file) === 'css'
            ? `${path}/previews/styles/${file}`
            : `${path}/previews/${frameworkPath}/${file}`
        );

        if (!source) {
          return null;
        }

        return {
          filename: file,
          source: adaptCode(source),
          raw: source,
        };
      } catch (e) {
        console.warn(e);
      }
    })
  );
}

export async function fetchSourceFilesFromExample(
  baseUrl: string,
  exampleName: string,
  framework: TargetFramework,
  includeCssFile: boolean
) {
  const filesToFetch = [];

  if (framework === TargetFramework.ANGULAR) {
    filesToFetch.push(...[`${exampleName}.html`, `${exampleName}.ts`]);
  }

  if (framework === TargetFramework.JAVASCRIPT) {
    filesToFetch.push(`${exampleName}.html`);
  }

  if (framework === TargetFramework.REACT) {
    filesToFetch.push(`${exampleName}.tsx`);
  }

  if (framework === TargetFramework.VUE) {
    filesToFetch.push(`${exampleName}.vue`);
  }

  if (includeCssFile) {
    filesToFetch.push(`${exampleName}.css`);
  }

  return fetchSourceFilesByFileName(baseUrl, framework, filesToFetch);
}

function patchPkgLibraryVersion(pkg: string, replaceVersion: string) {
  return pkg.replace(/\"<VERSION>\"/g, `"${replaceVersion}"`);
}

function replaceTheme(source: string) {
  const theme: string = themeSwitcher
    .getCurrentTheme()
    .replace('brand', 'classic');
  return source.replace(/(<body class=")[^"]*(")/, `$1${theme}$2`);
}

function replaceScriptFilePath(source: string) {
  return source.replace(
    /(<script type="module" src=")[^"]*(">)/,
    `$1${'./main.js'}$2`
  );
}

export function replaceStyleFilepath(
  source: string,
  sameFolder: boolean = false
) {
  var styleFileName: string | undefined;
  const regex = /example-styles\/dist\/(.*\.(css|scss))/;
  const match = source.match(regex);
  if (match && match.length > 1) {
    styleFileName = match[1];
  }

  source = source.replace('example-styles/dist', sameFolder ? '.' : './styles');

  return { source, styleFileName };
}

function getSourceCodeFile({
  name,
  framework,
}: {
  name: string;
  framework: TargetFramework;
}) {
  if (framework === TargetFramework.ANGULAR) {
    return `${repositoryUrl}/angular-test-app/src/preview-examples/${name}.ts`;
  }

  if (framework === TargetFramework.JAVASCRIPT) {
    return `${repositoryUrl}/html-test-app/src/preview-examples/${name}.html`;
  }

  if (framework === TargetFramework.REACT) {
    return `${repositoryUrl}/react-test-app/src/preview-examples/${name}.tsx`;
  }

  if (framework === TargetFramework.VUE) {
    return `${repositoryUrl}/vue-test-app/src/preview-examples/${name}.vue`;
  }
}

export function openGitHubFile({
  name,
  framework,
}: {
  name: string;
  framework: TargetFramework;
}) {
  const url = getSourceCodeFile({
    framework,
    name,
  });

  window.open(url, '_blank');
}

async function loadSourceCodeFromStatic(paths: string[]) {
  const sourceFiles = await Promise.all(paths.map((path) => fetch(path)));
  return Promise.all(sourceFiles.map((res) => res.text()));
}

async function getFiles(
  sourceFiles: SourceFile[],
  styleFilePath: string,
  mainFileName: string,
  framework: TargetFramework
) {
  const files: Record<string, string> = {};
  const styleFiles: Record<string, string> = {};
  const filePromises = sourceFiles.map(async ({ filename, raw }) => {
    if (filename.endsWith('.css')) {
      return;
    }

    let source = raw;
    if (filename === mainFileName) {
      if (framework === TargetFramework.JAVASCRIPT) {
        source = replaceTheme(replaceScriptFilePath(source));
        filename = 'index.html';
      }

      // set style filepath
      const { source: adaptedSource, styleFileName } = replaceStyleFilepath(
        source,
        framework === TargetFramework.ANGULAR
      );
      source = adaptedSource;

      // get style file
      if (styleFileName) {
        styleFiles[
          `src/${
            framework === TargetFramework.ANGULAR ? 'app' : 'styles'
          }/${styleFileName}`
        ] = (
          await loadSourceCodeFromStatic([`${styleFilePath}${styleFileName}`])
        )[0];
      }
    }
    files[
      `src${framework === TargetFramework.ANGULAR ? '/app' : ''}/${filename}`
    ] = source;
  });
  await Promise.all(filePromises);

  return { files, styleFiles };
}

async function createHtmlStackBlitzConfig(
  baseUrl: string,
  sourceFiles: SourceFile[],
  version: string
) {
  const styleFilePath: string = `${baseUrl}auto-generated/previews/styles/`;

  const [global_css, main_js, package_json, vite_config_ts] =
    await loadSourceCodeFromStatic([
      `${styleFilePath}global.css`,
      `${baseUrl}code-runtime/html/src/main.js`,
      `${baseUrl}code-runtime/html/package.json`,
      `${baseUrl}code-runtime/html/vite.config.ts`,
    ]);

  const renderFirstExample = sourceFiles[0];

  const { files, styleFiles } = await getFiles(
    sourceFiles,
    styleFilePath,
    renderFirstExample.filename,
    TargetFramework.JAVASCRIPT
  );

  const config: Project = {
    template: 'node',
    title: 'iX html app',
    description: 'iX html playground',
    files: {
      ...files,
      ...styleFiles,
      'src/styles/global.css': global_css,
      'src/main.js': main_js,
      'package.json': patchPkgLibraryVersion(package_json, version),
      'vite.config.ts': vite_config_ts,
    },
  };

  return {
    exampleFile: 'src/index.html',
    open: () => {
      sdk.openProject(config, {
        openFile: ['src/index.html'],
      });
    },
    config,
  };
}

async function createAngularStackBlitzConfig(
  baseUrl: string,
  name: string,
  sourceFiles: SourceFile[],
  version: string
) {
  const styleFilePath: string = `${baseUrl}auto-generated/previews/styles/`;

  const [
    global_css,
    app_component_html,
    app_component_ts,
    app_module_ts,
    index_html,
    main_ts,
    angular_json,
    package_json,
    tsconfig_app_json,
    tsconfig_json,
  ] = await loadSourceCodeFromStatic([
    `${styleFilePath}global.css`,
    `${baseUrl}code-runtime/angular/src/app/app.component.html`,
    `${baseUrl}code-runtime/angular/src/app/app.component.ts`,
    `${baseUrl}code-runtime/angular/src/app/app.module.ts`,
    `${baseUrl}code-runtime/angular/src/index.html`,
    `${baseUrl}code-runtime/angular/src/main.ts`,
    `${baseUrl}code-runtime/angular/angular.json`,
    `${baseUrl}code-runtime/angular/package.json`,
    `${baseUrl}code-runtime/angular/tsconfig.app.json`,
    `${baseUrl}code-runtime/angular/tsconfig.json`,
  ]);

  let renderFirstExample = sourceFiles[0];

  if (sourceFiles.length >= 2) {
    renderFirstExample = sourceFiles[1];
  }

  const declareComponents: string[] = [];
  sourceFiles.forEach(({ filename, raw }) => {
    if (/@Component/gms.test(raw)) {
      declareComponents.push(filename);
    }
  });
  const declare_component_ts = `
    ${declareComponents
      .map(
        (filename, index) =>
          `import COMPONENT_${index} from './${filename.substring(
            0,
            filename.lastIndexOf('.')
          )}'`
      )
      .join(';')}

    export const DECLARE = [
      //@__DELCARE__COMPONENTS
      ${declareComponents.map((_, index) => `COMPONENT_${index}`)}
    ];
  `;

  const { files, styleFiles } = await getFiles(
    sourceFiles,
    styleFilePath,
    renderFirstExample.filename,
    TargetFramework.ANGULAR
  );

  const config: Project = {
    template: 'node',
    title: 'iX Angular app',
    description: 'iX Angular playground',
    files: {
      ...files,
      ...styleFiles,
      'src/app/declare-component.ts': declare_component_ts,
      'src/app/app.component.html': app_component_html,
      'src/app/app.component.ts': app_component_ts,
      'src/app/app.module.ts': app_module_ts,
      'src/index.html': replaceTheme(index_html),
      'src/main.ts': main_ts,
      'src/styles.css': global_css,
      'angular.json': angular_json,
      'package.json': patchPkgLibraryVersion(package_json, version),
      'tsconfig.app.json': tsconfig_app_json,
      'tsconfig.json': tsconfig_json,
    },
  };

  return {
    exampleFile: `src/app/${name}.ts`,
    open: () => {
      sdk.openProject(config, {
        openFile: `src/app/${name}.ts`,
      });
    },
    config,
  };
}

async function createReactStackBlitzConfig(
  baseUrl: string,
  sourceFiles: SourceFile[],
  version: string
) {
  const styleFilePath: string = `${baseUrl}auto-generated/previews/styles/`;

  const filesToCopy = [
    'vite.config.ts',
    'tsconfig.json',
    'tsconfig.node.json',
    'src/main.tsx',
    'src/vite-env.d.ts',
  ];

  const [
    global_css,
    app_tsx,
    index_html,
    package_json,
    // Keep order of files above
    ...otherFiles
  ] = await loadSourceCodeFromStatic([
    `${styleFilePath}global.css`,
    `${baseUrl}code-runtime/react/src/App.tsx`,
    `${baseUrl}code-runtime/react/index.html`,
    `${baseUrl}code-runtime/react/package.json`,
    // Keep order of files above
    ...filesToCopy.map((file) => `${baseUrl}code-runtime/react/${file}`),
  ]);

  const renderFirstExample = sourceFiles[0];

  const patchAppTs = () => {
    return app_tsx
      .replace(
        /\/\/@_IMPORT_COMPONENT/gms,
        `import Example from './${renderFirstExample.filename.substring(
          0,
          renderFirstExample.filename.lastIndexOf('.')
        )}'\n`
      )
      .replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms, '\n<Example />\n');
  };

  const { files, styleFiles } = await getFiles(
    sourceFiles,
    styleFilePath,
    renderFirstExample.filename,
    TargetFramework.REACT
  );

  const stackBlitzFiles = {
    ...files,
    ...styleFiles,
    'src/styles/global.css': global_css,
    'index.html': replaceTheme(index_html),
    'src/App.tsx': patchAppTs(),
    'package.json': patchPkgLibraryVersion(package_json, version),
  };

  otherFiles.forEach((file, index) => {
    stackBlitzFiles[filesToCopy[index]] = file;
  });

  const config: Project = {
    template: 'node',
    title: 'iX React App',
    description: 'iX react playground',
    files: stackBlitzFiles,
  };

  return {
    exampleFile: `src/${renderFirstExample.filename}`,
    open: () => {
      sdk.openProject(config, {
        openFile: `src/${renderFirstExample.filename}`,
      });
    },
    config,
  };
}

async function createVueStackBlitzConfig(
  baseUrl: string,
  sourceFiles: SourceFile[],
  version: string
) {
  const styleFilePath: string = `${baseUrl}auto-generated/previews/styles/`;

  const [
    global_css,
    app_vue,
    index_html,
    main_ts,
    package_json,
    tsconfig_json,
    viteconfig_ts,
    env_d_ts,
  ] = await loadSourceCodeFromStatic([
    `${styleFilePath}global.css`,
    `${baseUrl}code-runtime/vue/App.vue`,
    `${baseUrl}code-runtime/vue/index.html`,
    `${baseUrl}code-runtime/vue/main.ts`,
    `${baseUrl}code-runtime/vue/package.json`,
    `${baseUrl}code-runtime/vue/tsconfig.json`,
    `${baseUrl}code-runtime/vue/vite.config.ts`,
    `${baseUrl}code-runtime/vue/env.d.ts`,
  ]);

  const renderFirstExample = sourceFiles[0];

  const patchAppTs = () => {
    return app_vue
      .replace(
        /\/\/@_IMPORT_COMPONENT/gms,
        `import Example from './${renderFirstExample.filename}'`
      )
      .replace(/<!-- @_RENDER_COMPONENT -->/gms, ' <Example />');
  };

  const { files, styleFiles } = await getFiles(
    sourceFiles,
    styleFilePath,
    renderFirstExample.filename,
    TargetFramework.VUE
  );

  const config: Project = {
    template: 'node',
    title: 'iX Vue App',
    description: 'iX vue playground',
    files: {
      ...files,
      ...styleFiles,
      'src/styles/global.css': global_css,
      'index.html': replaceTheme(index_html),
      'src/main.ts': main_ts,
      'src/App.vue': patchAppTs(),
      'src/env.d.ts': env_d_ts,
      'package.json': patchPkgLibraryVersion(package_json, version),
      'tsconfig.json': tsconfig_json,
      'vite.config.ts': viteconfig_ts,
      '.stackblitzrc': `{
        "startCommand": "npm run dev"
      }`,
    },
  };

  return {
    exampleFile: `src/${renderFirstExample.filename}`,
    open: () => {
      sdk.openProject(config, {
        openFile: `src/${renderFirstExample.filename}`,
      });
    },
    config,
  };
}

export async function createStackblitzConfig({
  name,
  framework,
  files,
  baseUrl,
  version,
}: {
  name: string;
  files: SourceFile[];
  framework: TargetFramework;
  baseUrl: string;
  version: string;
}) {
  const libraryVersion = version || 'latest';

  let project: Promise<{
    open: () => void;
    config: Project;
    exampleFile: string;
  }> = null;
  if (framework === TargetFramework.REACT) {
    project = createReactStackBlitzConfig(baseUrl, files, libraryVersion);
  }

  if (framework === TargetFramework.ANGULAR) {
    project = createAngularStackBlitzConfig(
      baseUrl,
      name,
      files,
      libraryVersion
    );
  }

  if (framework === TargetFramework.JAVASCRIPT) {
    project = createHtmlStackBlitzConfig(baseUrl, files, libraryVersion);
  }

  if (framework === TargetFramework.VUE) {
    project = createVueStackBlitzConfig(baseUrl, files, libraryVersion);
  }

  return project;
}

export async function openStackBlitz({
  name,
  framework,
  files,
  baseUrl,
  version,
}: {
  name: string;
  files: SourceFile[];
  framework: TargetFramework;
  baseUrl: string;
  version: string;
}) {
  const project = createStackblitzConfig({
    name,
    framework,
    files,
    baseUrl,
    version,
  });
  if (project) {
    const { open } = await project;
    open();
  }
}
