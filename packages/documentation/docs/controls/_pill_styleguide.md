Pills can be used to display a small detail of content and can help to create a subtle sense of urgency or attract the attention of the user. 


![Pill overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1377%3A3110&mode=design&t=ZmcRP4ggXtr8b7vZ-1)

1. Container
2. Icon
3. Label text

## Variants

Pill variants allow designers to apply different colors based on their purpose, importance or context within the interface. Pill variants are typically used to convey different levels of importance, classes or status to users. However, it's important to note that the custom variant, although suitable for visualizing numerous categories.

Pill variants:

- **Primary**: For high visual emphasis.
- **State-related variants**: Alarm, critical, warning, success, info and neutral.
- **Custom**: For a customized background and label color.

![Pill variants](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1375%3A1985&mode=design&t=ZmcRP4ggXtr8b7vZ-1)

## Options

- **Align left**: Position the pill content to the left side.
- **Background**: Use to set a custom background color when you require more flexibility in styling the pill. Only available for the custom pill variant.
- **Outline**: Use for lower visual emphasis.
- **Closable**: When set, the pill contains a close button users can easily remove specific pills when necessary.
- **Color**: Customize font and icon color for pill. This allows users to specify a unique font color in combination with a custom background color (only applicable when the variant is set to 'custom').
- **Icon**: Pills can include a close icon within the element which is positioned before the pills label.
- **Width**: Typically content length determines pill width with a minimum width of '2rem'. Pill width can be set to a specific value.

## Behavior

- **Placement**: The pill component is positioned inline with other elements to convey their status, often within tables or grouped to display selected choices and filters. It's advised not to incorporate pills within input and filter components, as these have their own version known as the input chip. Currently, input pill are not implemented as independent components. Similar items user can find as an optional pill within the tab and navigation menu items.
- **Text truncation**: When a width is set for pills, long labels are truncated to fit the available space.


## States

Pills are read-only. 


## Dos and Don'ts

- o use pills to communicate labels and categories.
- Do use pills to indicate the status or characteristics of an item.
- Do use them to highlighting selected options, in some cases, can be used to visually highlight selected options. For example, in a form or configuration settings, pill can display the chosen settings or preferences for easy reference.
- Don't overuse pills as this leads to cluttered and overwhelming interfaces.
- Don't use different styles for pills with the same or similar use.
- Don't use pills if users can interact with the component (e.g. dismiss, close), use chips instead.


## Related patterns

- [Chip](chip.md)



