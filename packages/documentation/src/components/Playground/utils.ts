/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import sdk from '@stackblitz/sdk';
import { TargetFramework } from './framework-types';

const repositoryUrl = 'https://github.com/siemens/ix/tree/main/packages';

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

async function openHtmlStackBlitz(
  baseUrl: string,
  sourceFiles: { filename: string; sourceCode: string }[]
) {
  const [styles, index_html, main_js, package_json, vite_config_ts, license] =
    await loadSourceCodeFromStatic([
      `${baseUrl}code-runtime/html/src/styles/styles.css`,
      `${baseUrl}code-runtime/html/src/index.html`,
      `${baseUrl}code-runtime/html/src/main.js`,
      `${baseUrl}code-runtime/html/package.json`,
      `${baseUrl}code-runtime/html/vite.config.ts`,
      `${baseUrl}code-runtime/html/LICENSE.md`,
    ]);

  const [renderFirstExample, ...additionalFiles] = sourceFiles;

  const sourcesMatches: RegExpMatchArray | null =
    renderFirstExample.sourceCode.match(
      /<!-- Sources -->([\s\S]*?)<!-- Sources -->/
    );
  const sources: string = sourcesMatches ? sourcesMatches[1].trim() : '';

  const sourceCodeMatches: RegExpMatchArray | null =
    renderFirstExample.sourceCode.match(
      /<!-- Preview code -->([\s\S]*?)<!-- Preview code -->/
    );
  const sourceCode: string = sourceCodeMatches
    ? sourceCodeMatches[1].trim()
    : '';

  const files = {};
  additionalFiles.forEach((file) => {
    files[`src/${file.filename}`] = file.sourceCode;
  });

  sdk.openProject(
    {
      template: 'node',
      title: 'iX html app',
      description: 'iX html playground',
      files: {
        ...files,
        'src/styles/styles.css': styles,
        'src/index.html': index_html
          .replace('<!-- IX_INJECT_SOURCES -->', sources)
          .replace('<!-- IX_INJECT_SOURCE_CODE -->', sourceCode),
        'src/main.js': main_js,
        'package.json': package_json,
        'vite.config.ts': vite_config_ts,
        'LICENSE.md': license,
      },
    },
    {
      openFile: ['src/index.html'],
    }
  );
}

async function openAngularStackBlitz(
  baseUrl: string,
  name: string,
  additionalFiles: { filename: string; sourceCode: string }[]
) {
  const [
    app_component_css,
    app_component_html,
    app_component_ts,
    app_module_ts,
    styles,
    index_html,
    main_ts,
    styles_css,
    angular_json,
    package_json,
    tsconfig_app_json,
    tsconfig_json,
    license,
  ] = await loadSourceCodeFromStatic([
    `${baseUrl}code-runtime/angular/src/app/app.component.css`,
    `${baseUrl}code-runtime/angular/src/app/app.component.html`,
    `${baseUrl}code-runtime/angular/src/app/app.component.ts`,
    `${baseUrl}code-runtime/angular/src/app/app.module.ts`,
    `${baseUrl}code-runtime/angular/src/styles/styles.css`,
    `${baseUrl}code-runtime/angular/src/index.html`,
    `${baseUrl}code-runtime/angular/src/main.ts`,
    `${baseUrl}code-runtime/angular/src/styles.css`,
    `${baseUrl}code-runtime/angular/angular.json`,
    `${baseUrl}code-runtime/angular/package.json`,
    `${baseUrl}code-runtime/angular/tsconfig.app.json`,
    `${baseUrl}code-runtime/angular/tsconfig.json`,
    `${baseUrl}code-runtime/angular/LICENSE.md`,
  ]);

  const declareComponents = [];
  additionalFiles.forEach(({ filename, sourceCode }) => {
    if (/@Component/gms.test(sourceCode)) {
      declareComponents.push(filename as never);
    }
  });
  const declare_component_ts = `
/*
* SPDX-FileCopyrightText: 2023 Siemens AG
*
* SPDX-License-Identifier: MIT
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

${declareComponents
  .map(
    (filename, index) =>
      `import COMPONENT_${index} from './${(filename as String).substring(
        0,
        (filename as String).lastIndexOf('.')
      )}'`
  )
  .join(';')}

export const DECLARE = [
  //@__DELCARE__COMPONENTS
  ${declareComponents.map((_, index) => `COMPONENT_${index}`)}
];`;

  const exampleFiles = {};
  additionalFiles.forEach(({ filename, sourceCode }) => {
    exampleFiles[`src/app/${filename}`] = sourceCode;
  });

  sdk.openProject(
    {
      template: 'node',
      title: 'iX angular app',
      description: 'iX angular playground',
      files: {
        'src/app/declare-component.ts': declare_component_ts,
        'src/app/app.component.css': app_component_css,
        'src/app/app.component.html': app_component_html,
        'src/app/app.component.ts': app_component_ts,
        'src/app/app.module.ts': app_module_ts,
        'src/styles/styles.css': styles,
        'src/index.html': index_html,
        'src/main.ts': main_ts,
        'src/styles.css': styles_css,
        'angular.json': angular_json,
        'package.json': package_json,
        'tsconfig.app.json': tsconfig_app_json,
        'tsconfig.json': tsconfig_json,
        'LICENSE.md': license,
        ...exampleFiles,
      },
    },
    {
      openFile: `src/app/${name}.ts`,
    }
  );
}

async function openReactStackBlitz(
  baseUrl: string,
  sourceFiles: { filename: string; sourceCode: string }[]
) {
  const [
    styles,
    app_tsx,
    index_html,
    index_tsx,
    package_json,
    tsconfig_json,
    license,
  ] = await loadSourceCodeFromStatic([
    `${baseUrl}code-runtime/react/src/styles/styles.css`,
    `${baseUrl}code-runtime/react/src/App.tsx`,
    `${baseUrl}code-runtime/react/public/index.html`,
    `${baseUrl}code-runtime/react/src/index.tsx`,
    `${baseUrl}code-runtime/react/package.json`,
    `${baseUrl}code-runtime/react/tsconfig.json`,
    `${baseUrl}code-runtime/react/LICENSE.md`,
  ]);

  const [renderFirstExample] = sourceFiles;

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

  const files: Record<string, string> = {};

  sourceFiles.forEach(({ filename, sourceCode }) => {
    files[`src/${filename}`] = sourceCode;
  });

  sdk.openProject(
    {
      template: 'node',
      title: 'iX React App',
      description: 'iX react playground',
      files: {
        ...files,
        'src/styles/styles.css': styles,
        'src/index.tsx': index_tsx,
        'src/App.tsx': patchAppTs(),
        'public/index.html': index_html,
        'package.json': package_json,
        'tsconfig.json': tsconfig_json,
        'LICENSE.md': license,
        '.stackblitzrc': `{
          "startCommand": "yarn run start"
        }`,
      },
    },
    {
      openFile: `src/${renderFirstExample.filename}`,
    }
  );
}

async function openVueStackBlitz(
  baseUrl: string,
  sourceFiles: { filename: string; sourceCode: string }[]
) {
  const [
    styles,
    app_vue,
    main_ts,
    env_d_ts,
    index_html,
    package_json,
    tsconfig_json,
    vite_config_ts,
    license,
  ] = await loadSourceCodeFromStatic([
    `${baseUrl}code-runtime/vue/src/styles/styles.css`,
    `${baseUrl}code-runtime/vue/src/App.vue`,
    `${baseUrl}code-runtime/vue/src/main.ts`,
    `${baseUrl}code-runtime/vue/env.d.ts`,
    `${baseUrl}code-runtime/vue/index.html`,
    `${baseUrl}code-runtime/vue/package.json`,
    `${baseUrl}code-runtime/vue/tsconfig.json`,
    `${baseUrl}code-runtime/vue/vite.config.ts`,
    `${baseUrl}code-runtime/vue/LICENSE.md`,
  ]);

  const [renderFirstExample] = sourceFiles;

  const patchAppTs = () => {
    return app_vue
      .replace(
        /\/\/@_IMPORT_COMPONENT/gms,
        `import Example from './${renderFirstExample.filename}'`
      )
      .replace(/<!-- @_RENDER_COMPONENT -->/gms, ' <Example />');
  };

  const files: Record<string, string> = {};

  sourceFiles.forEach(({ filename, sourceCode }) => {
    files[`src/${filename}`] = sourceCode;
  });

  sdk.openProject(
    {
      template: 'node',
      title: 'iX Vue App',
      description: 'iX vue playground',
      files: {
        ...files,
        'src/styles/styles.css': styles,
        'src/main.ts': main_ts,
        'src/App.vue': patchAppTs(),
        'index.html': index_html,
        'env.d.ts': env_d_ts,
        'package.json': package_json,
        'tsconfig.json': tsconfig_json,
        'vite.config.ts': vite_config_ts,
        'LICENSE.md': license,
        '.stackblitzrc': `{
          "startCommand": "yarn run dev"
        }`,
      },
    },
    {
      openFile: `src/${renderFirstExample.filename}`,
    }
  );
}

async function getSourceCodeFiles(
  baseUrl: string,
  framework: TargetFramework,
  filenames: string[]
) {
  const getPath = (name: string) =>
    `${baseUrl}auto-generated/previews/${framework.replace(
      'javascript',
      'web-components'
    )}/${name}`;

  const sourceFiles: { filename: string; sourceCode: string }[] = [];
  const files = await loadSourceCodeFromStatic(filenames.map(getPath));

  files.forEach((value, index) => {
    sourceFiles.push({
      filename: filenames[index],
      sourceCode: value,
    });
  });

  return sourceFiles;
}

export async function openStackBlitz({
  name,
  framework,
  files,
  baseUrl,
}: {
  name: string;
  files: string[];
  framework: TargetFramework;
  baseUrl: string;
}) {
  const additionalFiles = await getSourceCodeFiles(baseUrl, framework, files);

  if (framework === TargetFramework.REACT) {
    return openReactStackBlitz(baseUrl, additionalFiles);
  }

  if (framework === TargetFramework.ANGULAR) {
    return openAngularStackBlitz(baseUrl, name, additionalFiles);
  }

  if (framework === TargetFramework.JAVASCRIPT) {
    return openHtmlStackBlitz(baseUrl, additionalFiles);
  }

  if (framework === TargetFramework.VUE) {
    return openVueStackBlitz(baseUrl, additionalFiles);
  }
}
