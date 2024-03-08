<!--
SPDX-FileCopyrightText: 2023 Siemens AG

SPDX-License-Identifier: MIT
-->

# Siemens Industrial Experience design system

Siemens provides a holistic design system for building attractive and intuitive web applications.

Contributions to the library and feedback are very welcome.
This document explains our guidelines for both.
These guidelines are designed to minimize friction for everyone involved.

## Feature requests and bug reporting

For feature requests as well as bug reports please open up an issue.

### Feature requests

Feature requests need to include a clear description of the desired feature. Ideally a use case for the feature is also part of the request. Additional information like screenshots or design screens can increase understandability and cogency of the request.

### Bug reports

Bug reports need to include a clear description of the problem as well as additional information that can help in solving the issue (e.g. software versions, stack traces).

## Merge requests

If you are planning to contribute a larger change it is advisable to open an issue for discussion first. This way you can make sure in advance that your changes will actually get accepted.

In order to start working on an issue fork the repository.
Once all changes are implemented commit them to the fork and create a merge request (MR).
Please make sure to enable the option `Allow commits from members who can merge to the target branch` in your MR. This way the maintainer team will be able to rebase the MR if necessary.

Usually all changes have to be combined into one single commit for clarity. No unrelated changes must be part of that commit.
If your MR should contain more than one commit it will get squash merged.

## Coding guidelines

Our releases follow the concept of [Semantic versioning](https://semver.org/). Therefore it is vital that changes to the codebase don't violate these principles.
The API consists of components, TypeScript classes, CSS classes, CSS Custom properties and SCSS mixins.
Please make sure that no accidental breaking changes are produced by your changes.
For issues that are not yet tagged with a version number it is important that you communicate breaking changes in your merge request.

In order to keep code quality high we ask for any contribution to adhere to any applicable guidelines listed below:

- [Angular coding style guide](https://angular.io/guide/styleguide)
- [Google's TypeScript style guide](https://google.github.io/styleguide/tsguide.html)

## Design specs/styleguide

If you need access to design documentation please contact a maintainer.

## Definition of done (DoD)

Any contribution will have to satisfy this list of criteria before it will get accepted:

- Feature/fix as described in issue
- Unit tests (where applicable)
- Visual regression tests for components/styling
- E2E tests (where applicable)
- Example component/documentation for components/styling/concepts

## Commit guidlines

#### <a name="commit-header"></a>Commit Message Header

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
