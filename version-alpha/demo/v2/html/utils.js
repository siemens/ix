/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function waitForElement(checkFn, callback) {
  const intervalId = setInterval(function () {
    const element = checkFn();
    if (element) {
      clearInterval(intervalId);
      callback(element);
    }
  }, 100);
}

export function getElementPosition(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
    rect,
  };
}

export function pulseOnElement(queryFunction) {
  const pulseElement = document.createElement('DIV');
  pulseElement.style.position = 'absolute';
  pulseElement.innerText = '';
  pulseElement.style.zIndex = 10000;
  pulseElement.style.pointerEvents = 'none';

  const style = document.createElement('style');
  style.innerHTML = `
  .pulse-element {
    background: transparent;
    height: 20px;
    width: 20px;

    box-shadow: 0 0 0 0 rgba(0, 204, 204, 1);
    transform: scale(1);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 204, 204, 0.8);
    }

    70% {
      transform: scale(1.25);
      box-shadow: 0 0 0 10px rgba(0, 204, 204, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 204, 204, 0);
    }
  }
  `;

  document.body.appendChild(pulseElement);
  document.body.appendChild(style);
  waitForElement(queryFunction, function (element) {
    const elementPosition = getElementPosition(element);
    pulseElement.style.top = elementPosition.top + 'px';
    pulseElement.style.left = elementPosition.left + 'px';
    pulseElement.style.width = elementPosition.rect.width + 'px';
    pulseElement.style.height = elementPosition.rect.height + 'px';
    pulseElement.classList.add('pulse-element');
  });
}
