'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const logicalFilterOperator = require('./logical-filter-operator-467e2faf.js');
const flipTileState = require('./flip-tile-state-c95639e5.js');
const modal = require('./modal-dda2f6be.js');
const rwd_util = require('./rwd.util-2326824e.js');
const modalUtils = require('./modal-utils-9ee0acda.js');
const defaultTreeItem = require('./default-tree-item-4597cd84.js');
const uploadFileState = require('./upload-file-state-923b2c65.js');
const themeSwitcher = require('./theme-switcher-f91c8d8d.js');
require('./index-17eb8998.js');
require('./typed-event-5030cc6a.js');
require('./anime.es-8822f296.js');
require('./animation-dfe01edc.js');

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

exports.InputState = logicalFilterOperator.InputState;
Object.defineProperty(exports, 'LogicalFilterOperator', {
  enumerable: true,
  get: function () {
    return logicalFilterOperator.LogicalFilterOperator;
  }
});
Object.defineProperty(exports, 'FlipTileState', {
  enumerable: true,
  get: function () {
    return flipTileState.FlipTileState;
  }
});
exports.Modal = modal.Modal;
exports.ModalContainer = modal.ModalContainer;
exports.convertToAbbreviationString = rwd_util.convertToAbbreviationString;
exports.convertToRemString = rwd_util.convertToRemString;
exports.closeModal = modalUtils.closeModal;
exports.dismissModal = modalUtils.dismissModal;
exports.modal = modalUtils.modal;
exports.renderDefaultItem = defaultTreeItem.renderDefaultItem;
Object.defineProperty(exports, 'UploadFileState', {
  enumerable: true,
  get: function () {
    return uploadFileState.UploadFileState;
  }
});
exports.ThemeSwitcher = themeSwitcher.ThemeSwitcher;
exports.themeSwitcher = themeSwitcher.themeSwitcher;
exports.FilterState = FilterState;
exports.toast = toast;
