/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

const search = new URLSearchParams(window.location.search);

document
  .querySelectorAll<HTMLIFrameElement>('[data-entry-point]')
  .forEach((frame) => {
    const entryPoint = frame.dataset.entryPoint;
    const frameSearch = new URLSearchParams(search);
    frameSearch.set('entryPoint', entryPoint!);
    frame.src = `../fixture/index.html?${frameSearch.toString()}`;
  });
