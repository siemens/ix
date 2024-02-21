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

We use [semantic versioning]https://semver.org/ for our releases. Version numbers indicate the level of changes introduces by the release and follow the standard format: major.minor.patch.

1. MAJOR version: Contains significant new features and changes, might include breaking changes. Updating requires some developer support and can include .... Formerly deprecated components are removed when updating to a new major version.
2. MINOR version: Contains smaller features and changes. Updating requires no developer support. Minor versions can include status changes of components to deprecated. They are fully backward compatible.
3. PATCH version: Contains bug fixes. Updating requires no developer support.



### Release frequency

We follow a time based release schedule consisting of
- a major release every 6 months
- 1-3 minor release for each major release
- patch release at hot fixes whenever necessary

### Support policy

All major release receive support for approx. 6 months. We distinguish two support stages for major releases:

- Active: Receives regular minor releases for 6 months.
- Long-term (LTS): Receives patch releases to fixe critical issues fro 6 months.

We recommend to always follow the active release. When a version moves from the Active stage to the LTS stage, projects should start migrating to the new Active major version. 

# Note
- Figma info missing
- add illustration for support stages?
- Add info on current Versions and stages
- fix styling

