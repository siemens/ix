<!--
SPDX-FileCopyrightText: 2024 Siemens AG

SPDX-License-Identifier: MIT

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
-->

# Security Policy

Siemens takes the security of its code seriously. If you think you have found a security vulnerability,
please read the next sections and follow the instructions to report your finding.

## Reporting a Vulnerability

Please DO NOT report any potential security vulnerability via a public channel (mailing list, GitHub issue, etc.).
Instead, [report the vulnerability privately via GitHub](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing/privately-reporting-a-security-vulnerability)
(if enabled for the repository) or [contact us via email](mailto:opensource@siemens.com).

Please provide a detailed description of the issue, the steps to reproduce it, the affected version(s) and, if already available,
a proposal for a fix. Include a proof of concept that demonstrates the issue through the public API of a published package.
You should receive a response within 5 working days. If for some reason you do not, please follow up via
email to ensure we received your original message.

If we confirm the issue as a vulnerability, we will publish an advisory (e.g. on GitHub) and give credits for your report if desired.
We follow the [coordinated vulnerability disclosure](https://vuls.cert.org/confluence/display/CVD) model and will define an appropriate disclosure timeline together with you.

## Supported versions

Siemens Industrial Experience (iX) follows semantic versioning with one major release about every 6 months.
Each major version is supported for about 12 months, as defined by the
[iX support policy](https://ix.siemens.io/docs/home/releases/release-version#support-policy):

- **Latest**: The current major version receives security fixes in regular minor and patch releases.
- **Maintenance**: The previous major version receives patch releases for critical issues, including critical security fixes.
- **End of life**: Versions in this stage receive no further releases, including security fixes.

Please check the [supported versions](https://ix.siemens.io/docs/home/releases/release-version#supported-versions)
table to find out which iX versions are currently supported.
The framework packages `@siemens/ix-angular`, `@siemens/ix-react` and `@siemens/ix-vue` share the major version of
`@siemens/ix`. The theme packages `@siemens/ix-aggrid` and `@siemens/ix-echarts` are versioned independently.

## Scope and repository layout

This is the security policy for the `siemens/ix` repository on GitHub.com.
This repository contains the published iX libraries plus the infrastructure needed to document, test, demo and release them.
Security reviews, including automated and AI-assisted scans, should focus on the **library code**, as this is the code
that ends up in applications built with iX.

### Library code (in scope)

The following packages are published to npm and consumed by applications:

- `packages/core` (`@siemens/ix`, Web Components, styles and themes)
- `packages/angular` (`@siemens/ix-angular`)
- `packages/react` (`@siemens/ix-react`)
- `packages/vue` (`@siemens/ix-vue`)
- `packages/aggrid` (`@siemens/ix-aggrid`)
- `packages/echarts` (`@siemens/ix-echarts`)

Test files (`*.spec.ts`, `*.ct.ts`, `*.e2e.ts` and `test/` folders) inside these packages are not shipped and are out of scope.

### Documentation, demo and tooling code (out of scope)

Everything else is mainly documentation, examples, testing and build setup and is not part of the shipped libraries, for example:

- `packages/documentation` and `packages/storybook-docs` (documentation generation and Storybook)
- `examples/` and `testing/*-test-app` (examples shown in the documentation and framework test applications)
- `testing/framework-tests`, `testing/visual-testing` and `testing/performance-memlab` (tests)
- `packages/cli`, `tooling/registry` and `patterns/` (CLI, registry and patterns; not published to npm)
- `tooling/`, `scripts/`, `skills/`, `patches/` and `.github/` (build, release tooling and CI)

The documentation and example infrastructure processes content that is fully controlled by this repository (e.g. example
sources and JSDoc comments that are reviewed and merged by maintainers). This content is controlled through pull request
reviews. Findings that require an attacker to change this content in the repository or on our hosting infrastructure are
not considered vulnerabilities. If you fork this repository and build or deploy the documentation or examples yourself,
you are responsible for controlling this content.

## Known considerations

The following points are known and intentional design decisions. They are not considered vulnerabilities and should
not be reported again.

### Documentation, build and release tooling

#### Documentation build tooling trusts repository content

The example collector follows symbolic links, and TypeDoc comments and block tags are emitted into generated MDX, where
they can be evaluated as expressions. This affects only the documentation and example generation tooling, not the
published packages.

**Rationale:** These tools process source code that is reviewed and merged by maintainers. Repository content is trusted
input to the documentation build in the same way as the build scripts themselves. Changes to example files, symlinks and
JSDoc comments are covered by code review.

### Responsibilities of application developers

Some library APIs intentionally hand control to the application. Applications using iX are responsible for handling
them securely. Responsibilities that belong to a single property are documented in the API documentation (JSDoc) of
that property and are not repeated here. The following points are not tied to a single property.

#### Only one iX application context per page

All React application contexts of `@siemens/ix-react` share one framework delegate and render the overlay portal with a
fixed `id="ix-portal"`. Mounting multiple `IxApplicationContext` components, or placing other elements with the same ID
in the document, can cause overlays to render into the wrong portal.

**Rationale:** iX supports exactly one application context per document. Multiple independent contexts are not a
supported configuration.

**Guidance:** Mount a single `IxApplicationContext` at the application root, and do not use `ix-portal` as an ID
elsewhere in the page (including in user-generated content).

#### Content Security Policy

iX components add their styles at runtime. Applications with a strict Content Security Policy must configure a nonce as
described in [Content Security Policy Nonces](https://ix.siemens.io/docs/home/installation/csp).

## Not considered vulnerabilities

In addition to the known considerations above, the following reports are not considered vulnerabilities:

- Misuse of APIs listed under [Responsibilities of application developers](#responsibilities-of-application-developers)
  or of APIs whose API documentation (JSDoc) describes the secure usage.
- Vulnerabilities in peer dependencies (e.g. Angular, React, Vue, Stencil, AG Grid, ECharts, Luxon, Floating UI). The application installs and updates these
  packages, so please report them to the respective upstream project. Reports are in scope if a published package uses a
  peer dependency in an insecure way. Vulnerabilities in direct dependencies of a published package are in scope.
- Vulnerabilities in dependencies that are only used for building, testing, the documentation or the examples, as they are
  not part of the published packages.
- Missing security headers or Content Security Policy on the documentation site, Storybook or example applications.
- Theoretical findings from automated or AI-assisted scans without a proof of concept that demonstrates the issue through
  the public API of a published package.

## Documenting security considerations

When adding or changing an API that hands security responsibility to the application, document it as follows:

| Content                                                                             | Location                                                                            |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Scope, reporting process, design decisions and their rationale                      | This file                                                                           |
| Secure usage of a single API (sanitization, trusted content, URLs, IDs, input size) | Component JSDoc next to the API and the component documentation (`siemens/ix-docs`) |
| Points application developers are responsible for that are not tied to a single API | This file                                                                           |

Do not repeat guidance that is already documented next to an API; keep a single source for each point.
