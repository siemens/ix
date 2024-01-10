You can use the popover news component to present news and information when the  application starts like release notes, new app features, or marketing-related information. For Siemens applicatons, the information should also be available within the [About and legal overlay](./about-and-legal.md).

![Popover news](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1013-70517&mode=design&t=Ntzn8IlSOlPey8s5-11)

- (1) Header text
- (2) Close button
- (3) Content
- (4) "Show more" button takes users to another place in the app to learn more about the information given
- (5) Spike shows popover origin

## Options

| Option                    | Description and usage                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| label | Defines the header text of the popover news (1)|
| i18nShowMore | Only available in code and changes the text of the "Show more" button (4) |
| offsetBottom | Only available in code and adjusts the popover position. The spike (5) should point to the info icon. |
| show | Only available in code and triggers the popover to appear |

## Behavior
Unlike a modal, popover news does not prevent users from navigating and interacting with the content. It only overlays the content partially and appears  once triggered by the app. As soon as the user closes the popover, it does not appear again until it is re-triggered. Therefore we recommend that the information should be additionally available in the [About and legal overlay](./about-and-legal.md).    The popover spike should always point to the information icon so users can find the information again. The `offsetBottom` option can be used to control its exact position.

## Dos and don’ts
- Do use popover news for "nice to know" information
- Don‘t use popover news for essential information a user must read, instead use a [modal](../modal.md) or a [message bar](../messagebar.md)
- Don‘t use popover news for system feedback or messages, instead use a [modal](../modal.md) or a [toast message](../toast.md)

## Related patterns
- [Toast message](../toast.md)
- [Modal](../modal.md)
- [Message bar](../messagebar.md)

