/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useLocalStorage } from './use-localStorage';
export default function usePreviewColorMode() {
  const [colorMode, setColorMode] = useLocalStorage(
    'docusaurus.code.color-mode',
    'dark'
  );
  return { colorMode, setColorMode };
}
