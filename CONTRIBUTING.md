<!--
SPDX-FileCopyrightText: 2024 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->


<!-- omit in toc -->
# Contributing to Siemens Industrial Experience

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

<!-- omit in toc -->
## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [I Want To Contribute](#i-want-to-contribute)
- [Issue workflow](#issue-workflow)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Improving The Documentation](#modify-and-preview-documentation)
- [Commit Messages](#commit-messages)


## Code of Conduct

This project and everyone participating in it is governed by the
[Siemens Industrial Experience Code of Conduct](blob/main/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behavior
to <daniel.leroux@siemens.com> or <lukas.maurer@siemens.com>.

## I Want To Contribute


> ### Legal Notice <!-- omit in toc -->
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Reporting Bugs


<!-- omit in toc -->
#### How Do I Submit a Good Bug Report?

> You must never report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker, or elsewhere in public. Instead sensitive bugs must be sent by email to <lukas.maurer@siemens.com> or <daniel.leroux@siemens.com>.

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](https://github.com/siemens/ix/issues/new?assignees=&labels=triage&projects=&template=bug_report.yml). (Since we can't be sure at this point whether it is a bug or not, we ask you not to talk about a bug yet and not to label the issue.)
- Explain the behavior you would expect and the actual behavior.
- Please provide as much context as possible and describe the *reproduction steps* that someone else can follow to recreate the issue on their own. This usually includes your code. For good bug reports you should isolate the problem and create a reduced test case.
- Provide the information you collected in the previous section.

Once it's filed:

#### Issue workflow

- The project team will label the issue accordingly. `Workflow: Issue created`
- A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps and mark the issue as `needs-repro`. Bugs with the `needs-repro` label will not be addressed until the steps to reproduce it have been provided. Ideally you can provide a link to a running example (e.g. StackBlitz).
- If the team is able to reproduce the issue, it will be marked `type: bug` and `Workflow: Approved`, as well as possibly other labels (such as `type: enhancement`)
- If work on the issue has begun the workflow label will be changed to `Workflow: In progress`

### Suggesting Enhancements

<!-- omit in toc -->
#### Before Submitting an Enhancement

- Read the [documentation](https://ix.siemens.io/version-dev/docs/getting-started/) carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Perform a [search](https://github.com/siemens/ix/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset. If you're just targeting a minority of users, consider writing an add-on/plugin library.

<!-- omit in toc -->
#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/siemens/ix/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why. At this point you can also tell which alternatives do not work for you.
- You may want to **include screenshots and animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux. <!-- this should only be included if the project has a GUI -->
- **Explain why this enhancement would be useful** to most Siemens iX users. You may also want to point out the other projects that solved it better and which could serve as inspiration.

## Your First Code Contribution

### Setup

1. [Download the installer](https://nodejs.org/) for the LTS version of Node.js. This is the best way to also [install pnpm](https://pnpm.io/installation).
2. Fork this repository.
3. Clone your fork.
4. Create a new branch from main for your change.
5. Run `pnpm install` to install dependencies.
6. Navigate into the directory of the package you wish to modify (core, angular, etc.).
7. Follow the steps for the specific package below.

### Modifying Core Components

1. Locate the component(s) to modify inside `/packages/core/src/components/`.
2. Take a look at the [Stencil Documentation](https://stenciljs.com/docs/introduction/) and other components to understand the implementation of these components.
3. Make your changes to the component. If the change is overly complex or out of the ordinary, add comments so we can understand the changes.
4. [Preview your changes](#preview-changes) locally.
5. [Modify the documentation](#modify-and-preview-documentation) if needed.
6. [Run lint](#lint-changes) on the directory and make sure there are no errors.
7. [Build the project](#building-changes).
8. After the build is finished, commit the changes. Please follow the [commit message format](#commit-message-format) for every commit.

### Modifying Angular, React, and Vue

```
Stencil's primary goal is to remove the need for components to be written using a specific framework's API. It accomplishes this by using standardized web platform APIs that work across all modern browsers. Using the low-level component model that is provided by the browser (which all frameworks are built on) allows Stencil components to work inside a framework or without one.

The experience of integrating web components directly into existing applications can be tricky at times, as frameworks have varying support for vanilla web components. In order to accommodate the various issues the Stencil team has created Framework Wrappers to make the process simpler.
```
Read more about the [Stencil Output Targets here](https://stenciljs.com/docs/overview)

> Please be aware you can not modify angular, react and vue components directly.
> Some files are marked with a jsdocs `/* auto-generated react proxies */`. These files will be overwritten by each build!

#### Modifying Files

1. Locate the files inside the relevant root directory:
  - Angular: [`/packages/angular`](/packages/angular/src)
  - React: [`/packages/react`](/packages/react/src)
  - Vue: [`/packages/vue`](/packages/vue/src)
2. Make your changes to the files. If the change is overly complex or out of the ordinary, add comments so we can understand the changes.
3. Run lint on the directory and make sure there are no errors.
4. Build the project.
5. After the build is finished, commit the changes. Please follow the [commit message format](#commit-message-format) for every commit.
6. [Submit a Pull Request](#submit-pull-request) of your changes.

### Preview Changes

#### Core

1. Run `pnpm start --filter @siemens/ix` from within the `root` directory.
2. A browser should open at `http://localhost:3333/`.
3. Edit and safe `/packages/core/src/components/my-component/my-component.tsx` to review your changes.

#### Angular

1. Run `pnpm start --filter @siemens/angular-test-app` from within the `root` directory.
2. A browser should open at `http://localhost:4200/previews/button`.
3. Edit or add an example in `packages/angular-test-app/src/preview-examples`.
4. Navigate to `http://localhost:4200/previews/{your-example-file-name}` to review your changes.

#### React

1. Run `pnpm start --filter @siemens/react-test-app` from within the `root` directory.
2. A browser should open at `http://localhost:5173/previews/buttons`.
3. Edit or add an example in `packages/react-test-app/src/preview-examples/buttons`.
4. Navigate to `http://localhost:5173/previews/{your-example-file-name}` to review your changes.

#### Vue

1. Run `pnpm start --filter @siemens/angular-test-app` from within the `root` directory.
2. A browser should open at `http://localhost:5173/previews/buttons`.
3. Edit or add an example in `packages/vue-test-app/src/preview-examples/buttons`.
4. Navigate to `http://localhost:5173/previews/{your-example-file-name}` to review your changes.

#### Web Components

1. Run `pnpm start --filter @siemens/html-test-app` from within the `root` directory.
2. A browser should open at `http://localhost:5173/preview-examples/buttons.html`.
3. Edit or add an example in `packages/vue-test-app/src/preview-examples/buttons`.
4. Navigate to `http://localhost:5173/preview-examples/{your-example-file-name}.html` to test and preview your changes.

#### Lint changes

1. Run `pnpm lint` from within the `root` directory.

#### Building changes

1. Run `pnpm build` from within the `root` directory.
2. Make sure you have committed all changes.

### Unit testing

```sh
pnpm test
```

### Visual regression testing

**_Docker cli must be installed on your system_**  
If you execute the visual-regression tests, please be sure to execute the build step before.

1. Build the library `pnpm build --filter \!documentation`

2. Start playwright docker container. (Currently v1.30.0-focal but can be a newer version)

```sh
docker run -p 8080:8080 -v $(pwd):/work/ -w /work -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash
```

3. Start the test suite
  - All tests run `pnpm visual-regression`
  - Workspace run `pnpm visual-regression --filter @siemens/ix`

- Check the results in `packages/<workspace>/playwright-report/index.html`
- Adapt and update snapshots with `pnpm --filter @siemens/ix run visual-regression <test name> -u`
- Check the git diff and commit changes 🎉

### Modify and preview documentation

1. Run `pnpm start --filter documentation` from within the `root` directory.
2. Locate the docs(s) to modify inside `/packages/documentation/docs/`.

#### Preview and example code

- html-test-app
- angular-test-app
- react-test-app
- vue-test-app

These packages contain playground applications to explore and test the respective `ix` components.
The preview source code for the documentation is also located inside the `x-test-app`'s. (`src/preview-examples`)
These preview-examples will be translated to markdown files and get copied into `./packages/documentation/docs/auto-generated/previews`.

#### Figma integration

> You need to have access to the internal figma library

To see all image references it is necessary to create a personal access token (https://www.figma.com/developers/api#access-tokens).

Store the token as environment variable "FIGMA_API_TOKEN" or in the .env file inside root.

Serve documentation [locally](http://localhost:3000/siemens-ix/)

```sh
pnpm start --filter=documentation
```

### Commit Message Format

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|dev-infra|docs-infra|migrations|
  │                          ngcc|ve
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

##### Git hooks via husky

If you execute `pnpm install` you will get git hooks which verify the git commit message.

Checkout more [details here](https://github.com/typicode/husky)

##### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests

### Submit Pull Request

1. [Create a new pull request](https://github.com/siemens/ix/compare) with the `main` branch as the `base`. You may need to click on `compare across forks` to find your changes.
2. See the [Creating a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) GitHub help article for more information.
3. Please fill out the provided Pull Request template to the best of your ability and include any issues that are related.
4. Create a [changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md) to help us prepare a release. If you are not sure what to do just skip this step, a maintainer will comment on the pull request.

## Attribution
This guide is based on the **contributing-gen**. [Make your own](https://github.com/bttger/contributing-gen)!
