export { I as InputState, L as LogicalFilterOperator } from './logical-filter-operator-1bf83315.js';
export { F as FlipTileState } from './flip-tile-state-28a1f8ce.js';
export { a as Modal, M as ModalContainer } from './modal-df0a62f2.js';
export { c as convertToAbbreviationString, a as convertToRemString } from './rwd.util-4a61a4b8.js';
export { c as closeModal, d as dismissModal, m as modal } from './modal-utils-df50b35a.js';
export { r as renderDefaultItem } from './default-tree-item-638c435a.js';
export { U as UploadFileState } from './upload-file-state-631bb8a2.js';
export { T as ThemeSwitcher, t as themeSwitcher } from './theme-switcher-9ecc9b69.js';
import './index-6f4f3582.js';
import './typed-event-ab58c27e.js';
import './anime.es-185e9087.js';
import './animation-b667a4c4.js';

/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class FilterState {
}

/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function getToastContainer() {
  const containerList = Array.from(document.querySelectorAll('ix-toast-container'));
  const [container] = containerList;
  if (containerList.length > 1) {
    console.warn('Multiple toast container are found. Only there first is used.');
    return container;
  }
  if (!container) {
    const toastContainer = document.createElement('ix-toast-container');
    document.body.appendChild(toastContainer);
    return toastContainer;
  }
  return container;
}
async function toast(config) {
  const context = getToastContainer();
  const toast = await context.showToast(config);
  return toast;
}
toast.info = (config) => {
  return toast(Object.assign(Object.assign({}, config), { type: 'info' }));
};
toast.error = (config) => {
  return toast(Object.assign(Object.assign({}, config), { type: 'error' }));
};
toast.success = (config) => {
  return toast(Object.assign(Object.assign({}, config), { type: 'success' }));
};
toast.warning = (config) => {
  return toast(Object.assign(Object.assign({}, config), { type: 'warning' }));
};

export { FilterState, toast };
