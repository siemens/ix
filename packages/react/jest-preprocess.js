/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const babelOptions = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};

module.exports = require('babel-jest').default.createTransformer(babelOptions);
