Toasts are small pop-ups that provide simple feedback on a process. They are UI elements where an event causes a small text field to appear at the bottom of the screen. Toasts are informative, only last a few seconds and only take up a very small part of the screen to avoid interrupting the workflow. They usually follow an action performed by the user and provide information about the success or failure of this action. We typically use toasts for immediate feedback or tips on actions that a user performs, e.g. deletion 

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2550-58743&t=LITgbzwcgm87dQXa-4)

1. Header Icon
2. Button
3. Timer
4. Header
5. Message
6. Close action

## Options

- **Toast type:** Choose between four preset types for your toast or make a custom one: 
    - Error: Notifies the user that the action cannot be performed due to a specific problem.
    - Info: Provides the user with additional information about the performed action.
    - Success: Informs the user of a successfully performed action.
    - Warning: Warns the user of potential problems that could occur due to the action.
- **Custom toast:** Create your own toast type. Adjust the icon and its color yourself.
- **Header:** Add a header for the toast. Use short and concise words
- **Message:** Add a message to your toast. We typically describe the event precisely and without too many words to keep the sentence as short as possible, e.g. the message was successfully deleted vs. message deleted
- **Icon:** Icons can also be displayed.
- **Button:** Add an button to your toast to add an additional option for the user e.g. undo.

![Toast Types](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2552-64766&t=LITgbzwcgm87dQXa-4)

## Behavior in context
- **Auto closure:** The toast should only be displayed on the screen for a few seconds. A timer is displayed to visualize the closing-time. We typically give the toast 3 to 8 seconds on the screen.
- **Manual closure:** Toasts can also be closed manually at any time. However, a purely manual closure can also be used - we typically use a purely manual closure of the toast if the workflow is continued by using the toast, e.g. downloading files link.
- **Multiple toasts:** Toasts are stacked on top of each other with the newest at the bottom.
- **Modal vs Toast:** There is a conflict between modal and toast if they are opened simultaneously - toast wins if you navigate away. No other technical solution is currently possible.

![Toast in Context](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=2589-2697&t=Ysb6WohsxOfZv2ls-4)

## Dos and Don’ts
- Do use toasts to provide contextual tips and shortcuts for users
- Do use toasts to immediately inform users of actions taken and offer a shortcut to undo or change a request.
- Do use toasts to instantly inform a user about the outcome of an action
- Don’t use more than one to three toasts at a time
- Don’t edit icons or icon colors in the predefined toast types (error, info, success, warning)
- Don’t use toasts for hight-priory or critical alerts

## Related patterns
- [Dropdown button](buttons/dropdown-button.md)
- [Split button](buttons/split-button.md) 
- [Date dropdown](date-dropdown.md) 
- [Select](select.md)