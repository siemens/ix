import { p as promiseResolve, b as bootstrapLazy } from './index-bc7ead06.js';

/*
 Stencil Client Patch Esm v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["ix-ag-grid_2",[[2,"my-component"],[2,"ix-ag-grid",{"gridOptions":[16]}]]]], options);
  });
};

export { defineCustomElements };
