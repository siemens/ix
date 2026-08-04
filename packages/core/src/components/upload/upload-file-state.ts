/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// eslint-disable-next-line @stencil-community/ban-exported-const-enums
export enum UploadFileState {
  SELECT_FILE = 'SELECT_FILE',
  LOADING = 'LOADING',
  UPLOAD_FAILED = 'UPLOAD_FAILED',
  UPLOAD_SUCCESSED = 'UPLOAD_SUCCESSED',
}
