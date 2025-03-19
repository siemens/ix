---
sidebar_position: 2
sidebar_label: Versioning and releases
title: Versioning and releases
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Our Siemens Industrial Experience design team strive to provide a stable and reliable system that is constantly evolving to meet your needs. This section describes our practices for new features and changes, deprecating and removing outdated features, and our long-term support for older versions.'
---

# 

## Versioning

We use [semantic versioning](https://semver.org/) for our releases. Version numbers indicate the level of changes introduced by the release and follow the standard major, minor and patch format.

| Release type | Details                                                                                                                                                                                                                                                                                                          |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Major        | Contains significant new features and changes, might include breaking changes. Updating requires some developer efforts and includes backward incompatible changes to APIs, file paths, component behavior and/or dependencies. Formerly deprecated components are removed when updating to a new major version. |
| Minor        | Contains smaller features and changes. Updating requires no developer efforts. Minor versions can include components changing their status to deprecated. They are fully backward compatible.                                                                                                                    |
| Patch        | Contains bug fixes. Updating requires no developer efforts.                                                                                                                                                                                                                                                      |

## Release frequency

We follow a time-based release schedule consisting of:

- One major release every 6 months
- 1-3 minor releases for each major release
- Patch releases as hotfixes when necessary

## Support policy

All major releases receive support for approximately 12 months. We distinguish between two support stages for major releases:

| Support stage           | Support window | Details                                       |
| ----------------------- | :------------: | --------------------------------------------- |
| Active                  |    6 months    | Receive regular minor releases                |
| Long-term support (LTS) |    6 months    | Receive patch releases to fix critical issues |

Our support policy applies to all components of the design system including the code base, Figma design kits and our documentation.

We recommend always following the active release. When a version moves from the active stage to the LTS stage, projects should start migrating to the new active major version.

## Supported versions

| Version | Status | Released     |
| ------- | :----: | ------------ |
| v2.0.0  | Active | Sep 27, 2023 |
