/* eslint-disable no-undef */
module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `dist`, `.turbo`],
  transformIgnorePatterns: [`node_modules`, `dist`, `.turbo`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: [`<rootDir>/jest.setup.js`],
};
