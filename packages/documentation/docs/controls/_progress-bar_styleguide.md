Progress bars visually convey the status or completion of a task or process. Their primary purpose is to clearly display how much of a task has been completed and how much remains.

![Progress bar anatomy](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=2094-345&mode=design&t=fa4W7cvdm8pVsQFn-11)

1. Indicator: Shows the current progress of a process. With the indeterminate option, the indicator bar moves from left to right in a continuous loop.
2. Background track: The area that the indicator fills or moves across represents the total duration of the process.
3. Content slot (optional): Use for additional information about the process. The content should handle a possible overflow by itself.


![Progress bar examples](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=2098-372&mode=design&t=fa4W7cvdm8pVsQFn-11)

5. Slot not used
6. Slot used to show additional information
7. Indeterminate process slot shows icon and text
8. Progress bar set to "error"

## Options

- Indeterminate (7): Use for processes with an unknown duration. The indicator animates continuously from left to right until the process is complete or the duration of the process is known.
- Error: Use to indicate unsuccessful processes.


## Behavior
The width of a progress bar can be customized, however, make sure the slot elements can manage the overflow behavior.

## Dos and Don'ts
- Do use progress bars for longer processes with a known duration (we recommend using them when processes are longer than 3 seconds)
- Do use the option "indeterminate" when the duration is unknown
- Do use the slot to display information about the process (we typically use a percentage value or the name of the current step in the process)
- Do place a label above or left from the progress bar to name the process
- Don’t use the progress bar for short processes (under 3 seconds) instead use a [Spinner](./spinner.md) or the loading option of the [Button](./buttons/)
- Don’t use the progress bar for processes of an unknown duration, instead use the [Spinner](./spinner.md)

## Related patterns
- [Spinner](./spinner.md)
- loading option of [Button](./buttons/)




