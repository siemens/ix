/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const babelOptions = {
  presets: ['@babel/preset-typescript'],
  plugins: [['@babel/plugin-transform-private-methods', { loose: true }]],
};

module.exports = require('babel-jest').default.createTransformer(babelOptions);
