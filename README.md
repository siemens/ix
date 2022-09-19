<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

![iX](./logo.svg)

> Siemens Industrial Experience (iX) monorepo

![version](https://img.shields.io/badge/version-0.0.0-green.svg)
![npm](https://img.shields.io/badge/npm-%3E%3D8.x.x-blue.svg)
![node](https://img.shields.io/badge/node-%3E%3D16.16.x-blue.svg)
![yarn](https://img.shields.io/badge/yarn->=1.x.x-blue.svg)
[![License: SEE LICENSE IN <LICENSE.md>](https://img.shields.io/badge/License-SEE%20LICENSE%20IN%20LICENSE.md-yellow.svg)](./LICENSE.md)

iX is an open source design system for designers and developers, to consistently create the perfect digital experience for industrial software products.

## Usage

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

```sh
yarn build
yarn visual-regression
```

### Documentation

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

### Package `react-test-app` and `angular-test-app`

Contains a playground application to explore and test `ix` components.
Inside the `x-test-app`'s are also the preview source code for the documentation. (`src/preview-examples`)

**_Not published_**

### Package `documentation`

Contains the documentation.

### Package `aggrid`

Contains the brand and classic theme for the aggrid library

**_published as `@siemens/ix-aggrid`_**

## Git hooks via husky

Our pipeline lints each commit pushed to remote. To verify that you dont need
to rebase existing commits please install our git hooks.

```sh
# Activate hooks
npx husky install
# or
yarn husky install
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 👨‍💻 Contributors

- Daniel Leroux <daniel.leroux@siemens.com>
- Lukas Maurer <lukas.maurer@siemens.com>
- Carlos Leandro Cruz Ferrer <carlos.cruz_ferrer@siemens.com>
- Gonçalo Ferreira <goncalo.alves-ferreira@siemens.com>

## 📝 License

Copyright © 2019 [Siemens AG](https://www.siemens.com/).

This project is MIT licensed.
