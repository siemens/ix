Icon buttons are button elements containing only an icon and no text. Due to their small size, icon buttons are often used in complex layouts. We only use icon buttons if a well-known icon metaphor is available or the meaning of the icon metaphor is clear from the context. 

[Overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1477%3A1714&mode=design&t=97WS5dUS2rk3MCp2-1)

1. Container
2. Icon

Variants, options and states of the ix-button component apply. Only additional, deviating or detailing specifications are listed here.

## Options
- **Color:** The color of the icon displayed on an icon button is adjustable. In our applications, we only adjust the icon color when we place icon buttons on backgrounds with an unusual color to maintain proper contrast between the elements.
- **Oval:** The shape of icon button containers can be adjusted from square to oval. The recommended shape of icon buttons depends on the shape of the parent component. We typically use square icon buttons within rectangular components or in a button group and oval icon buttons within oval components.
- **Size:** Icon buttons can have three different sizes. We typically use the extra small size (12) within very small parent components, the small size (16) within any standard parent components (e.g. to clear search input) and the default size (24) for standalone application.

## Dos and Don'ts
- Do use icons which transport a clear meaning to the user within the given context, otherwise use a text button
- Don't use icon buttons in large numbers, instead use a toolbar
- Don't stretch icon buttons to span a container's width

## Related patterns
- [Button](./button.md)
<!-- - [Toolbar](...) -->
