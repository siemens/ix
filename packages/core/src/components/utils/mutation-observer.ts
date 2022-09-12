// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

export const createMutationObserver = (callback: MutationCallback) => new MutationObserver(callback);
