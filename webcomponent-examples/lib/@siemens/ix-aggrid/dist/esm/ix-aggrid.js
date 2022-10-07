import { p as promiseResolve, b as bootstrapLazy } from './index-f7e13ba2.js';

/*
 Stencil Client Patch Browser v2.18.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["ix-ag-grid_2",[[2,"my-component"],[2,"ix-ag-grid",{"gridOptions":[16]}]]]], options);
});
