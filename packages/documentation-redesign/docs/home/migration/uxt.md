---
sidebar_position: 2
sidebar_label: Migration from UXT 2.7.0
---

import Accordion from '@site/src/components/Accordion';

# UXT 2.7.0 to Siemens Industrial Experience design system

For a quick and easy migration without changing your code base, the iX-UXT CSS Theme is prepared for app developers using the CSS from UXT (User Experience Toolkit, formerly named MindSphere Design System).

:::info

For the full experience, please use the Siemens Industrial Experience components. The theme is intended for a quick, yet, incomplete switch from UXT as a legacy design system.

:::

## Usage

1. When using UXT below v2.7.0, download the [CSS theme](./uxt/uxt-ix-css.css) and import it into your project.  
   _If you are using UXT v2.7.0 or higher, it is already part of the UXT CSS._
2. Apply the class `.ix` to the `.uxt-defaults` element.
3. Depending if you want to use the dark or light theme, add `.uxt-ix-theme-dark` or `.uxt-ix-theme-light` to your `body` element.

In the end, your setup should look like this:

```
<body class="uxt-ix-theme-dark">
  ...
  <div class="uxt uxt-defaults ix"></div>
  ...
</body>
```

```
<body class="uxt-ix-theme-light">
  ...
  <div class="uxt uxt-defaults ix"></div>
  ...
</body>
```

**Note**: We recommend using the CSS theme with UXT v2.7.0

Your layout might change in some places when applying the theme, including:

1. Headings are notably smaller
2. Buttons are slightly wider because of the bold label

## Troubleshooting

<Accordion title="I don’t see the right colors." id="colors">
1. Check if you use color variables (no raw HEX or RGB values)
2. Check if you applied the `.uxt-ix-theme-dark` on the `body`
3. Update your UXT version to v2.7.0
</Accordion>

<Accordion title="My custom component doesn’t look right." id="custom-comoponents">
1. Check if you override specific attributes with `!important`
2. Check if you added the `.ix` class to the element with the `.uxt-defaults` class, as shown above
3. Update your current UXT version to 2.7.0
</Accordion>

<Accordion title="The colors don’t look right in both themes." id="colors-dark" showBorderBottom>
1. Check if you use color variables (no raw HEX or RGB values)
2. Check if you used meta color variables correctly (see more details [here](https://design.mindsphere.io/patterns/color.html#tab2anchor4)):
	1. For text elements: use the font colors, e.g. color-font or color-font-secondary (no base colors)
	2. For backgrounds: use the interface colors, e.g. color-interface or color-interface-secondary (no base colors)
	3. For statuses: use the error, warning, info, success colors (not primary)
</Accordion>

If you're facing any other problems, please raise an issue in GitHub [raising an issue](https://github.com/siemens/ix/issues).

## Component name differences

As some of the components are named differently in Industrial Experience, please consult this list of the most important component name differences to help make your migration easier:

| **User Experience Toolkit**                      | **Industrial Experience**                                                                              |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| App bar                                          | [Nav menu](../controls/application-frame/application-menu.md)                                          |
| Badge                                            | [Pill](../controls/pill.md), [chip](../controls/chip.md)                                               |
| Busy indicator                                   | [Spinner](../controls/spinner.md)                                                                      |
| Button<br/>- primary<br/>- secondary<br/>- ghost | [Button](../controls/buttons/button.md)<br/>- primary filled<br/>- primary outline<br/>- primary ghost |
| Card grid                                        | [Layout grid](../controls/layout-grid.md)                                                              |
| Container                                        | [Card](../controls/card.md)                                                                            |
| Dialog                                           | [Modal](../controls/modal.md)                                                                          |
| Dropzone                                         | [Upload](../controls/upload.md)                                                                        |
| List                                             | [Event list](../controls/event-list.md)                                                                |
| Stepper                                          | [Workflow](../controls/workflow.md)                                                                    |
| Menu                                             | [Dropdown button](../controls/buttons/dropdown-button.md)                                              |
| Message                                          | [Message bar](../controls/messagebar.md)                                                               |
| Notification                                     | [Toast](../controls/toast.md)                                                                          |
| Pager                                            | [Pagination](../controls/pagination.md)                                                                |
| Popover                                          | [Tooltip](../controls/tooltip.md), [dropdown](../controls/dropdown.md)                                 |
| Switch                                           | [Toggle](../controls/toggle.mdx)                                                                       |
| Context region                                   | [Pane](../controls/panes.md) (inline right)                                                            |
| Item region                                      | [Pane](../controls/panes.md) (floating right)                                                          |
| Leading region                                   | [Pane](../controls/panes.md) (inline left)                                                             |

## System icons

Key differences between UXT and Industrial Experience:

- UXT offers an iconfont with 3 different styles (regular, bold, filled)
- [iX offers SVGs](https://ix.siemens.io/docs/icon-library/icons) with mainly 1 style that corresponds to our bold and partially filled variants separately

When changing to the SVG icons by Industrial Experience, check whether your stylings still apply in your custom-built components.

## Figma library

When switching from UXT to Industrial Experience, use the swap library feature as described [here](https://help.figma.com/hc/en-us/articles/4404856784663-Swap-style-and-component-libraries).
