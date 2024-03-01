---
sidebar_position: 
sidebar_title: Versioning and releases
title: Versioning and releases
---

# Siemens Industrial Experience versioning and releases

<p className="text-l-title">
We at Siemens Industrial Experience strive to provide a stable and reliable design system. At the same time we aim to constantly evolve our offer to meet our user's needs and provide the tools for leading-edge application development. Finding the balance between stability and evolution is our daily business.

This document describes our practices on how we provide new features and changes, remove features and support existing versions. It gives you the background to make sensible decisions on your own update schedule.
</p>

### Versioning

We use ![semantic versioning](https://semver.org/) for our releases. Version numbers indicate the level of changes introduced by the release and follow the standard format: major.minor.patch.

| Release type        | Details                                                     |
|---------------------|-------------------------------------------------------------|
| Major release       | Contains significant new features and changes, might include breaking changes. Updating requires some developer support and can include .... Formerly deprecated components are removed when updating to a new major version. |
| Minor release       | Contains smaller features and changes. Updating requires no developer support. Minor versions can include status changes of components to deprecated. They are fully backward compatible. |
| Patch release       | Contains bug fixes. Updating requires no developer support. |

### Release frequency

We follow a time based release schedule consisting of
- a major release every 6 months
- 1-3 minor releases for each major release
- patch releases as hot fixes whenever necessary

### Support policy

All major releases receive support for approx. 6 months. We distinguish two support stages for major releases:

| Support stage           | Support window | Details                                       |
|-------------------------|:--------------:|-----------------------------------------------|
| Active                  | 6 months       | Receive regular minor releases                |
| Long-term support (LTS) | 6 months       | Receive patch releases to fix critical issues |

Our support policy applies to all components of the design system including the code base, Figma design kits and our documentation. 

We recommend to always follow the active release. When a version moves from the Active stage to the LTS stage, projects should start migrating to the new Active major version. 

### Supported versions

|Version      |Status     |Released      |
|-------------|:---------:|--------------|
|v2.0.0       |Active     |Sep 27, 2023  |
