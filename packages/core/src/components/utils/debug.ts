/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { version } from './../../env';

export function addVersion() {
  if (document?.head) {
    const commentVersion = document.createComment(
      btoa(`ix-webcomponents: ${version}`)
    );
    document.body.appendChild(commentVersion);
  }
}
