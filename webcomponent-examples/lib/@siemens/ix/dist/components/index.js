export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';
export { I as InputState, L as LogicalFilterOperator } from './logical-filter-operator.js';
export { F as FlipTileState } from './flip-tile-state.js';
export { M as ModalContainer } from './modal-container.js';
export { M as Modal } from './modal.js';
export { c as convertToAbbreviationString, a as convertToRemString } from './rwd.util.js';
export { c as closeModal, d as dismissModal, m as modal } from './modal-utils.js';
export { r as renderDefaultItem } from './default-tree-item.js';
export { U as UploadFileState } from './upload-file-state.js';

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
