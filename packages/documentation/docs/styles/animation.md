---
sidebar_position: 4
sidebar_label: Animations
title: Animations
hide_table_of_contents: false
doc-type: 'component'
component-tabs: ['']
no_single_tab: true
description: "We use meaningful animations to make applications appear physically tangible. This way UIs become predictable and interactions easier to follow along with for users. Abrupt state changes are prevented in oder to make UIs feel smooth and anchored in reality."
---

# 

## Standard timings

If an animation is too slow it can feel sluggish and disturb efficient workflows.  
In contrast an animation that runs too fast can be irritating and stressful.  
Therefore it is important to choose the correct timing for the respective situation.

##### default-time: 150 ms

- all mouse state changes e.g. normal to hover to active/pressed
- showing and hiding of small UI elements

##### medium-time: 300 ms

- e.g. moving or fading complex components or multiple small elements

##### slow-time: 500 ms

- e.g. moving or fading larger screen elements

##### xslow-time: 1000 ms

- e.g. moving or fading entire screen parts

### Acceleration & Deceleration

- Objects should move in a learned physical way, objects have mass and don't start or stop immediately, they accelerate and decelerate
- use `ease-in` and `ease-out` to accelerate and decelerate objects
- Slide-in movements (from off screen) should use `ease-out` only
- Slide-out movements (to off screen) should use `ease-in` only
- transformations or translations within the screen (object is visible the whole time) should use `ease-in-out`
- hiding or appearing objects (opacity) use linear transitions as there is no mass to accelerate/decelerate

### Animation timing variables

All animation timing values are also available through CSS variables:

```css
--theme-x-slow-time: 1s;
--theme-slow-time: 500ms;
--theme-medium-time: 300ms;
--theme-default-time: 150ms;
--theme-short-time: 0ms;
```

Usage example:

```css
transition: var(--theme-default-time);
```
