Toasts are small pop-ups that provide simple feedback on a process. They are UI elements where an event causes a small text field to appear at the bottom right of the screen. Toasts are informative, only last a few seconds, and only take up a very small part of the screen to avoid interrupting the workflow. They usually follow an action performed by the user and provide information about the success or failure of that action. We typically use toasts for immediate feedback or tips on actions that a user performs, e.g., successful deletion.

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2550-58743&t=LITgbzwcgm87dQXa-4)

1. Icon
2. Button
3. Timer
4. Header
5. Message
6. Close action

## Options

- **Toast type:** Choose between four preset toast types, or make a custom one: 
    - Error: Notifies the user that the action cannot be performed due to a specific problem.
    - Info: Provides the user with additional information about the performed action.
    - Success: Informs the user of a successfully performed action.
    - Warning: Warns the user of potential problems that could occur due to the action
    - Custom: To create your own toast type adjust the icon and its color yourself.
- **Header:** Add a header for the toast. Use short and concise words. We typically use 1-3 keywords e.g. error occurred. 
- **Message:** Add a message to explain the toast event in more detail. We typically describe the event precisely and without too many words to keep the sentence as short as possible, e.g., the message was successfully deleted vs. message deleted
- **Button:** Add a button to toasts to add an option for the user. We typically add a button if a further step is possible for the user to change or continue the workflow, e.g., an undo button or a follow link. 

![Toast Types](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2552-64766&t=VfiuoHWd1VYl1GYb-4)

## Behavior in context
- **Auto closure:** Toasts should only be displayed on the screen for a few seconds. A timer is displayed to visualize the closing time. We typically give the toast 3 to 8 seconds on the screen.
- **Manual closure:** Toasts can also be closed manually at any time. However, a purely manual closure can also be used; we typically use a purely manual closure of the toast if the workflow is continued by using the toast, e.g., downloading files.
- **Multiple toasts:** Toasts are stacked on top of each other, with the newest at the bottom.
- **Modal vs. Toast:** There is a conflict between modal and toast if they are opened simultaneously; toast wins if you navigate away. No other technical solution is currently possible.

![Toast in Context](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2589-2697&t=Ysb6WohsxOfZv2ls-4)

## Dos and Don’ts
- Do use toasts to provide contextual tips and shortcuts for users
- Do use toasts to instantly inform a user about the outcome of an action
- Do include shortcuts to undo an action immediately after it is taken
- Don’t use toasts for high-priority or critical alerts
- Don’t edit or reuse any icons or icon colors from the predefined toast types (error, info, success, warning) to create a custom toast type


## Related patterns
- [Modal](modal.md)
- [Drawer](drawer.md) 