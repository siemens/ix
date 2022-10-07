'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5b0f17d6.js');

/*
 Stencil Client Patch Esm v2.18.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["ix-ag-grid_2.cjs",[[2,"my-component"],[2,"ix-ag-grid",{"gridOptions":[16]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
