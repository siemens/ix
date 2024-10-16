/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { copyPreviewStyles } from 'example-styles';
import path from 'path';

const __dirname = path.resolve();

const stylesPath = path.resolve(__dirname, 'src', 'preview-examples', 'styles');
copyPreviewStyles(stylesPath);
