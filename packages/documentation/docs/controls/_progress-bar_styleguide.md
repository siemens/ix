A progress bar is used to visually convey the status or completion of a task or process. Its primary purpose is to offer a clear indication of how much of the task has been completed and how much remains.

![Progress bar anatomy](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=2094-345&mode=design&t=fa4W7cvdm8pVsQFn-11)

1. Indicator: Shows the progress of a process, with the indeterminate option the the Indicator bar moves from left to right in a continuous loop
2. Background Track: The area that the indicator fills or moves across, represents the total duration of the process
3. Content slot (optional): Used for additional information about the process, the content itself should handle a possible overflow


![Progress bar examples](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=2098-372&mode=design&t=fa4W7cvdm8pVsQFn-11)

5. Progress bar without using the slot
6. Using the slot to to show additional information
7. Indeterminate process, the slot is used for displaying an icons and text
8. Error

## Options

- Indeterminate (7): Used for processes with yet unknown duration, the indicator animates continuously from left to right until the process is complete or the duration of the process is known
- Error: Is used to indicate that the process did not successfully complete.


## Behavior
The width of a progress bar can be customized appropriately for its context. Make sure the elements in the slot take care about the overflow behavior.

## Dos and Don'ts
- Do use the progress bar for longer lasting processes with a known duration – as a rule of thumb: durations > 3 seconds. 
- Do use the option "indeterminate" if the duration is unknown yet. This can happen at the beginning of the process while the duration is being calculated.
- Do use the slot for information about the process like a percentage value of the progress or the name of the current step in the process.
- Do use a label above or left from the progress bar to name the process.
- Don’t use the progress bar for short processes < 3 seconds, use the [Spinner](./spinner.md) or the loading option of [Button](./buttons/) instead
- Don’t use the progress bar for processes with always unknown duration, use the [Spinner](./spinner.md) instead.

## Related patterns
- [Spinner](./spinner.md)
- loading option of [Button](./buttons/)




