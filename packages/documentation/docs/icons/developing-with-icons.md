---
sidebar_position: 3
sidebar_label: Developing with icons
title: Developing with icons
hide_table_of_contents: false
doc-type: 'component'
component-tabs: ['']
no_single_tab: true
description: "The integration of icons into the code varies by framework. To accommodate the diverse range of potential use cases, external icons can be integrated in addition to the existing icon set."
---


# 

The package `@siemens/ix-icons` offers a large set of icons.
It also comes with the `ix-icon` component that displays them in your application.
Additionally custom SVG icons (that are not part of the library) can be used.

As of iX version 3.0.0 not all available iX icons will be loaded automatically anymore.
Only the icons actually used in the application will be part of the bundle to reduce the overall bundle size significant. As a result, icons must now be imported explicitly.


## Icon usage in supported frameworks

### Angular

### Web components

### React

### Vue

## Reference icons by name

Although referencing icons by name (e.g. `<ix-icon name="star"><ix-icon>`) is still also possible, simply import all icons you want to display in your application via the `addIcons` method.


## Integrate external icons

### Technical requirements


### Internal SVG structure


