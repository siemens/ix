/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function RedirectTag({ message }: { message: string; link: string }) {
  return (
    <div>
      Redirect {message} {link}
    </div>
  );
}
