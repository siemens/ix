---
title: Map navigation
---

Map navigation is a combination of infrastructural components that form a layout structure to present map-like content (geographical maps, P&I diagrams or other plans). It is supported by a collapsible context panel and an overlay can temporarily present additional information. Map navigation does not offer all features the [basic navigation](./basic-navigation.md) offers.

![Map navigation layout](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1020-71241&mode=design&t=Ntzn8IlSOlPey8s5-11)

The map navigation has:
- (1) [App header](#app-header): included in the panel to save space for the map content
- (2) [Navigation menu](./vertical-tabs.md): navigation component
- (3) Context panel: provides additional information, navigation and controls to configure map content
- (4) Map content: shows map-like content, P&I diagrams or other plans
- (5) Control: expands and collapses the context panel
- (6) Overlay: shows detailed information of selected objects

### App header

The app header (1) hosts the brand logo and the application name. As this space is limited, we recommend short application names without further information. The app header is placed inside the context panel which means it appears and disappears with the context panel.
<br></br>

## Behavior

Map navigation does not adapt to breakpoints (unlike [basic navigation](./basic-navigation.md)) and should be used on desktop.
The navigation menu provides a control at the bottom (5) to expand and collapse the context panel. This also affects the application header to maximize the space for your map-like content.  The overlay’s (6) background appears semi-transparent with background blur to emphasize the overlay character.

## Dos and Don‘ts

- Do use this layout to present and navigate to map-like content
- Don't use map navigation for typical main-detail use cases, instead use [basic navigation](./basic-navigation.md)
- Don't use map navigation if your application also supports mobile use cases
