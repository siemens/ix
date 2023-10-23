/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
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
import { rimraf } from 'rimraf';
import dartSass from 'sass';

const sass = gulpSass(dartSass);

const clean = async () => await rimraf('dist');

const buildStyles = () =>
  src('./scss/ix-aggrid.scss')
    .pipe(
      sass({
        includePaths: ['node_modules'],
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

const build: any = series(clean, buildStyles);
export default build;
