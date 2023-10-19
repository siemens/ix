---
title: Map Navigation
---

The Map Navigation is a combination of essential infrastructural components forming a layout structure for the requirement of presenting a map like content (geographical maps, P&I diagrams or other plans) supported by a collapsible context panel. Furthermore, an overlay can temporarily present additional information.  
Due to its narrowed focus to a very specific usecase the Map Navigation is limited in its flexibility and does not offer all features the [Basic Navigation](./basic-navigation.md) offers. I case of doubt, rather use the [Basic Navigation](./basic-navigation.md).

![Map Navigation layout](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1020-71241&mode=design&t=Ntzn8IlSOlPey8s5-11)

The Map Navigation consists of the following parts:
- (1) [App Header](#app-header), only included in the panel to save space for for the map content
- (2) [Navigation Menu](./vertical-tabs.md): component for navigation
- (3) Context panel: intended to provide additional information, navigation and controls to configure the map content
- (4) The actual (map) content, intended to show map-like content, P&I diagrams or other plans
- (5) Control to expand and collapse the context panel
- (6) Overlay: intended to show detail information to selected objects inside the map or the context panel, will be triggered programmatically

### App Header

The App Header (1) hosts the brand logo and the application name. As the space for the application name is limited, the application name should be short and not extended by any other information. The App Header is placed inside the context panel. Therefore, it will appear and disappear with the context panel.
<br></br>

## Behavior

The Map Navigation does not adapt to breakpoints (unlike the [Basic Navigation](./basic-navigation.md)). The Map Navigation is intended to be used on desktop.
The Navigation Menu provides a control at the bottom (5) to expand and collapse the context panel. this will also affect the application header to maximize the space for the actual (map) content.  
The overlay’s (6) background appears semi-transparent with background blur to support the purpose of a temporary overlay.

## Dos and Don‘ts

- Do use this layout if your application’s purpose is to present and navigate to map-like content.
- Do not the Map Navigation for typical main-detail usecases although the layout seems to suggests it. Use the [Basic Navigation](./basic-navigation.md) instead
- Do not use the Map Navigation for other usecases than presenting and navigating map-like content. Use the [Basic Navigation](./basic-navigation.md) instead.
- Do not use the Map Navigation when your application should also support mobile usecases.
