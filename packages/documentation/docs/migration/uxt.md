---
sidebar_position: 2
sidebar_label: Migration from UXT 2.8.0
---

# UXT 2.7.0 to Siemens Industrial Experience design system v3

For a quick and easy migration without changing your code base the iX-UXT CSS Theme is prepared for app developers using the CSS from UXT (former MindSphere Design System).

> [!warning] For the full experience please actually use the Siemens Industrial Experience components. The theme is intended for a quick yet incomplete switch from UXT as a legacy design system.
# Usage
1. When using UXT below v2.7.0, download the CSS theme and import it into your project.  
   _If you are using UXT v2.7.0 or higher, it is already part of the UXT CSS._
2. Apply the class `.ix` to the `.uxt-defaults` element
3. Depending if you want to use dark or light theme, add `.uxt-ix-theme-dark` or `.uxt-ix-theme-light` to your `body` element

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

**Remark**: We recommend using the CSS theme with UXT v2.7.0

Your layout might change in some places when applying the theme:
1. Headings are notably smaller
2. Buttons are slightly wider because of the bold label

# Troubleshooting

| **Common problems**                             | **Solution**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **I don’t see the right colors.**               | 1. Check if you use color variables (no raw HEX or RGB values)<br>    <br>2. Check if you applied the .uxt-ix-theme-dark on the body<br>    <br>3. If not already, update your UXT version to v2.7.0                                                                                                                                                                                                                                                                                                                                                                       |
| **My custom component doesn’t look right.**     | 1. Check if you override specific attributes with !important<br>    <br>2. Check if you added the .ix class to the element with the .uxt-defaults class, as shown above<br>    <br>3. If not already, update the used UXT version to 2.7.0                                                                                                                                                                                                                                                                                                                                 |
| **The colors don’t look right in both themes.** | 1. Check if you use color variables (no raw HEX or RGB values)<br>    <br>2. Check if you used meta color variables correctly (see more details [here](https://design.mindsphere.io/patterns/color.html#tab2anchor4)):<br>    <br>    1. For text elements: use the font colors e.g. color-font or color-font-secondary (no base colors)<br>        <br>    2. For backgrounds: use the interface colors e.g. color-interface or color-interface-secondary (no base colors)<br>        <br>    3. For statuses: use the error, warning, info, success colors (not primary) |

If your facing troubles please add a comment to this page, [raise an issue](https://github.com/siemens/ix/issues) or contact .

# Component name changes
In case you want to start using the actual Industrial Experience web components, we collected all the component names for you to find them easier:

| **UXT**                                       | **iX**                                                             |
| --------------------------------------------- | ------------------------------------------------------------------ |
| Button<br>- primary<br>- secondary<br>- ghost | Button<br>- primary filled<br>- primary outline<br>- primary ghost |
| Stepper                                       | Workflow                                                           |
| Dropzone                                      | Upload                                                             |
| Busy indicator                                | Spinner                                                            |
| (to be continued)                             |                                                                    |

# System icons

Core differences between UXT and iX:

- UXT offers an iconfont with 3 different styles (regular, bold, filled)
- [iX offers SVGs](https://ix.siemens.io/docs/icon-library/icons) with mainly 1 style that corresponds to our bold and partially filled variants separately

When changing to the SVG icons by Industrial Experience please check your custom-built components whether stylings still apply.

# Figma library

When switching from UXT to iX, please  xxx