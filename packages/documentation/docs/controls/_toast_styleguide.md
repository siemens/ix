Toasts are small pop-ups that provide simple feedback on a process. They are UI elements where an event causes a small text field to appear on screen. Toasts are informative, last for a few seconds only, and take up a very small part of the screen to avoid interrupting the workflow. They usually follow an action performed by the user and provide information about the success or failure of that action. We typically use toasts for immediate feedback or tips on actions that a user performs (e.g. successful deletion).

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2550-58743&t=LITgbzwcgm87dQXa-4)

1. Icon
2. Button
3. Timer
4. Header
5. Message
6. Close action

## Options

- **Toast type:** Choose between four preset toast types, or make a custom one: 
    - Info: Provides the user with additional information about the performed action.
    - Success: Informs the user of a successfully performed action.
    - Warning: Warns the user of potential problems that could occur due to the action
    - Error: Notifies the user that the action cannot be performed due to a specific problem.
    - Custom: To create your own toast type, adjust the icon and its color yourself. We typically use a custom toast type when the predefined types are not suitable for the specific usage.
- **Header:** Add a header for the toast. Use short and concise words. We typically use 1 to 3 keywords, such as "Error occurred" or "Action completed".
- **Message:** Add a clear and concise message providing more detailed information about the toast event. We typically use it to provide additional context or instructions related to the event e.g, "Please check your email for further instructions" or "Your changes have been saved successfully".
- **Button:** Include a button in toasts to provide users with an option to take further action. This can be useful if there is a next step or if the user needs to undo the action that triggered the toast. We typically use a button to give the user an option to undo the action or to provide a link for further information.
- **Position:** The toast can be positioned at the bottom right or the top right. The default position is "bottom-right". We typically change the default position if it would cover important elements for the workflow.

![Toast Types](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2552-64766&t=VfiuoHWd1VYl1GYb-4)

## Behavior in context
- **Auto closure:** Toasts should only be displayed on the screen for a few seconds. A progress bar is displayed to visualize the time left until the toast will disappear. We typically give the toast 3 to 8 seconds on the screen.
- **Manual closure:** Toasts can also be closed manually at any time. However, a purely manual closure can also be used; we typically use a purely manual closure of the toast if the workflow is continued by using the toast, e.g., downloading files.
- **Multiple toasts:** Toasts are stacked on top of each other, with the newest at the bottom.
- **Modal vs. Toast:** When both the modal and the toast are triggered simultaneously, the toast will appear below the modal. The toast will be visible but blurred due to the transparent layer, and it will eventually close if not prevented by the auto-closing option.

![Toast in Context](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2589-2697&t=Ysb6WohsxOfZv2ls-4)

## Dos and Don’ts
- Do use toasts to provide contextual tips and shortcuts for users
- Do use toasts to instantly inform a user about the outcome of an action
- Do include shortcuts to undo an action immediately after it is taken
- Do stick with a consistent position for toasts within the same app and avoid interchanging their positions.
- Don’t use toasts for high-priority or critical alerts that prevent the user from continuing their work (use a [modal](modal.md) or a [message bar](messagebar.md) instead)
- Don’t edit or reuse any icons or icon colors from the predefined toast types (info, success, warning, error) to create a custom toast type



## Related patterns
- [Modal](modal.md)
- [Message bar](messagebar.md)
- [Drawer](drawer.md) 