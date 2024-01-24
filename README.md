<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT
-->

![iX](./logo.svg)

> Siemens Industrial Experience (iX) monorepo

![version](https://img.shields.io/npm/v/@siemens/ix)
![npm](https://img.shields.io/badge/npm-%3E%3D8.x.x-blue.svg)
![node](https://img.shields.io/badge/node-%3E%3D16.16.x-blue.svg)
![yarn](https://img.shields.io/badge/yarn->=1.x.x-blue.svg)
[![MIT License](https://img.shields.io/badge/license-MIT-009999.svg?style=flat)](./LICENSE.md)

iX is an open-source design system for designers and developers, to consistently create the perfect digital experience for industrial software products.

<h2 align="center">
  <a href="https://ix.siemens.io/docs/installation/">Quickstart</a>
  <span>-</span>
  <a href="https://ix.siemens.io/docs/introduction">
    Documentation
  </a>
  <span>-</span>
  <a href="https://community.siemens.com/c/ix/">Community</a>
</h2>


## Installation

You can find a getting started guide [here](https://ix.siemens.io/docs/installation/)

## Development

### Installation

```sh
yarn install
```

### Build

```sh
yarn build || yarn build --filter=<workspace-name>
```

### Development

```sh
yarn start || yarn start --filter=<workspace-name>
```

### Execute unit tests

```sh
yarn test
```

### Visual regression testing

**_Docker cli must be installed on your system_**  
If you execute the visual-regression tests, please be sure to execute the build step before.

- Build the library

```sh
yarn build
```

- Start playwright docker container. (Currently v1.30.0-focal but can be a newer version)

```sh
docker run -p 8080:8080 -v $(pwd):/work/ -w /work -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash
```

- Start the test suite

  - All tests run `yarn visual-regression-ci`
  - Workspace run `yarn workspace @siemens/ix test:e2e`

- Check the results in `packages/<workspace>/playwright-report/index.html`
- Adapt and update snapshots with `yarn workspace @siemens/ix test:e2e <test name> -u`
- Check the git diff and commit changes 🎉

### Documentation

To see all image references it is necessary to create a personal access token (https://www.figma.com/developers/api#access-tokens).

Store the token as environment variable "FIGMA_API_TOKEN" or in the .env file inside root.

Serve documentation [locally](http://localhost:3000/siemens-ix/)

```sh
yarn start --filter=documentation
```

### Release

```sh
yarn release
```

## Project structure

### Package `core`

Contains all styles and the webcomponents.

**_published as `@siemens/ix`_**

### Package `react`

Contains the wrapper components for react.

**_published as `@siemens/ix-react`_**

### Package `angular`

Contains the wrapper components for angular.

**_published as `@siemens/ix-angular`_**

### Package `html-test-app`, `react-test-app` and `angular-test-app`

These packages contain playground applications to explore and test the respective `ix` components.
The preview source code for the documentation is also located inside the `x-test-app`'s. (`src/preview-examples`)
These preview-examples will be translated to markdown files and get copied into `./packages/documentation/docs/auto-generated/previews`.

**_Not published_**

### Package `documentation`

Contains the documentation.

### Package `aggrid`

Contains the brand and classic theme for the aggrid library

**_published as `@siemens/ix-aggrid`_**

## Git hooks via husky

Our pipeline lints each commit pushed to remote. To verify that you don't need
to rebase existing commits please install our git hooks.

```sh
# Activate hooks
npx husky install
# or
yarn husky install
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 👨‍💻 Maintainers

- Daniel Leroux <daniel.leroux@siemens.com>
- Lukas Maurer <lukas.maurer@siemens.com>

## 📝 License

Copyright © 2022 [Siemens AG](https://www.siemens.com/).

This project is MIT licensed.
