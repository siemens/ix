/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function getModalContainer() {
  const containerList = Array.from(document.querySelectorAll('ix-modal-container'));
  const [container] = containerList;
  if (containerList.length > 1) {
    console.warn('Multiple modal container are found. Only there first is used.');
    return container;
  }
  if (!container) {
    const modalContainer = document.createElement('ix-modal-container');
    document.body.appendChild(modalContainer);
    return modalContainer;
  }
  return container;
}
export async function modal(config) {
  const modalContainer = getModalContainer();
  const modalInstance = await modalContainer.showModal(config);
  return modalInstance;
}
function getIxModal(element) {
  return element.closest('ix-modal');
}
export function closeModal(element, closeResult) {
  getIxModal(element).close(closeResult);
}
export function dismissModal(element, dismissResult) {
  getIxModal(element).dismiss(dismissResult);
}
