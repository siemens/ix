# Siemens iX

## Build

Run `npm run build:lib` to build the Siemens iX library.

## Test

### Unit

Tbd

### E2E

Tbd

### Visual regression testing

**_Docker cli must be installed on your system_**

`npm run visual-regression`

## Documentation

Run `npm run docs` to serve documentation on `http://localhost:3000`

## Release

Run `npm run release` and follow the release wizard

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
