/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { dest, series, src } from 'gulp';
import gulpPostcss from 'gulp-postcss';
import gulpSass from 'gulp-sass';
import path from 'path';
import { rimraf } from 'rimraf';
import dartSass from 'sass';

const e2eTestFiles = [require.resolve('@siemens/ix/dist/siemens-ix/siemens-ix.css')];

const sass = gulpSass(dartSass);

const clean = async () => await rimraf('dist');

const buildStyles = () =>
  src('./scss/ix-aggrid.scss')
    .pipe(
      sass({
        // Need to include root node_modules because of yarn hoisting
        includePaths: ['node_modules', path.join(__dirname, '..', '..', 'node_modules')],
      }),
    )
    .pipe(
      gulpPostcss([
        autoprefixer,
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
      ]),
    )
    .pipe(dest('./dist/ix-aggrid/'));

const copyTestFiles = () => src(e2eTestFiles).pipe(dest('./www'));

const build: any = series(clean, buildStyles, copyTestFiles);
export default build;
