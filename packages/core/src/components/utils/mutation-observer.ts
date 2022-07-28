/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
export const createMutationObserver = (callback: MutationCallback) => new MutationObserver(callback);
