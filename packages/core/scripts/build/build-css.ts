/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cssnano from 'cssnano';
import fse from 'fs-extra';
import path from 'path';
import postcss from 'postcss';
import { rimraf } from 'rimraf';
import * as sass from 'sass';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..', '..');
const SCSS = path.join(ROOT, 'scss');
const THEME = path.join(SCSS, 'theme');

const DIST = path.join(ROOT, 'dist', 'siemens-ix');
const DIST_CSS = path.join(ROOT, 'dist-css');
const DIST_THEME = path.join(ROOT, 'dist-css', 'theme');

async function setupDistFolder() {
  rimraf.sync(DIST_CSS);
  fse.ensureDirSync(DIST_CSS);
  fse.ensureDirSync(DIST_THEME);
}

function collectThemeFiles() {
  const themePath = (themeName: string, schema: string) =>
    path.join(THEME, themeName, schema, '_index.scss');

  const files = fse.readdirSync(THEME);
  const themeFiles = ['dark', 'light']
    .map((schema) => {
      return files
        .filter((themeName) => fse.existsSync(themePath(themeName, schema)))
        .map(
          (themeName) => (
            {
              filePath: fse.realpathSync(themePath(themeName, schema)),
              themeName,
              schema,
            }
          )
        );
    })
    .flat();
  return themeFiles;
}

function compileThemes() {
  console.log('Compile themes');

  const themes = collectThemeFiles();
  return themes.map(({ filePath, themeName, schema }) => {
    console.log(`\t${themeName}`);
    const { css } = sass.compile(filePath, {
      sourceMap: false,
    });

    return {
      path: path.join(DIST_THEME, `${themeName}-${schema}.css`),
      css,
    };
  });
}

function compileCore() {
  const coreCss = path.join(SCSS, 'ix-core.scss');
  console.log(`Compile core SCSS (${coreCss})`);
  const { css } = sass.compile(coreCss, {
    sourceMap: false,
    loadPaths: [
      SCSS,
      path.join(ROOT, 'node_modules'),
      path.join(ROOT, '..', '..', 'node_modules'),
    ],
  });

  return [
    {
      path: path.join(DIST_CSS, 'siemens-ix-core.css'),
      css,
    },
  ];
}

function copyDistCssToDist() {
  console.log(`Copy dist-css to dist (${DIST})`);
  fse.copySync(DIST_CSS, DIST);
}

(async () => {
  await setupDistFolder();

  let cssFiles: {
    path: string;
    css: string;
  }[] = [];

  cssFiles = [...cssFiles, ...compileThemes()];
  cssFiles = [...cssFiles, ...compileCore()];

  const optimizedCss = await Promise.all(
    cssFiles.map(async (result) => {
      const { path, css } = result;

      return postcss([
        cssnano({
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
            },
          ],
        }),
      ]).process(css, {
        from: path,
        to: path,
      });
    })
  );

  optimizedCss.forEach((result) => {
    if (!result.opts.to) {
      throw Error('No output path');
    }
    fse.writeFileSync(result.opts.to, result.css);
  });

  copyDistCssToDist();
})();
