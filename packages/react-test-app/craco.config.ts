/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import path from 'path';

module.exports = {
  webpack: {
    configure: (webpackConfig: any) => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        (test: any) => {
          const name = test.constructor.name;
          // constructor && constructor.name === 'ModuleScopePlugin'

          return name === 'ModuleScopePlugin';
        }
      );

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      return webpackConfig;
    },
    /**
     * react aliasing is only necessary, because of multiple react versions inside the npm hoisting.
     * Library running with React@18 Docusaurus running with React@17
     */
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react/*': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      'react-dom/*': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
};
