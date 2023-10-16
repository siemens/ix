The popover news component is intended to present news information like release notes, new features of the app or marketing related information on application start. The presented information should be additionally available within the [About and legal overlay](./about-and-legal.md).

![Popover news](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1013-70517&mode=design&t=Ntzn8IlSOlPey8s5-11)

- (1) Header text
- (2) Close button
- (3) Content
- (4) "Show more" button, is intended to bring the user to the place where they can learn more about the information
- (5) Spike, shows the origin of the popover

## Options

| Option                    | Description and usage                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| label | Defines the header text of the popover news (1)|
| i18nShowMore | Only available in code, changes the text of the "Show more" button (4) |
| offsetBottom | Only available in code, adjusts the position of the popover, the spike (5) should point to the info icon
| show | Only available in code, triggers the popover to appear

## Behavior
Unlike a modal, the popover news will not prevent the user from navigating and interacting with the content. It only overlays the content partially.  
The popover news appear only once after it was triggered by the application. As soon as the user closes the popover, it will not appear again until it is triggered again. Therefore, the information should be additionally available in the [About and legal overlay](./about-and-legal.md).  
The spike of the popover should always point to the information icon, where the user can find the information again. to control the exact position the "offsetBottom" option can be used.

## Dos and don’ts
- Use the popover news for "nice to know" information.  
- Don‘t use the popover news for essential information a user must read. Rather usa a [Modal](../modal.md) or a [Message bar](../messagebar.md).  
- Don‘t use the popover news for system feedback or messages. Rather use a [Modal](../modal.md) or a [Toast message](../toast.md).

## Related patterns
- [Toast message](../toast.md)
- [Modal](../modal.md)
- [Message bar](../messagebar.md)

