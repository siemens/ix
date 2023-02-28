# UX Description

Buttons are used to initiate actions, to apply actions to selected objects and to activate/deactivate functions. 

Go to:

- [Variants](#variants)
- [Behavior in context](#behavior-in-context)
- [States](#states)
- [Dos and don't](#dos-and-don't)

## Usage

### When to use

Buttons should be used to trigger an immediate action. They can be placed within dialogs, forms, modal windows and other containers. Each content area should include only one primary button. 

### When not to use

When many actions/functions are necessary, using only buttons can easily overcrowd the screen. Don't only rely on buttons in such cases, but consider alternatives such as dropdown or split buttons or moving some of the functionality to a drawer or a dialog. 
Do not use Buttons for navigation. To foward a user to a new page, use hyperlinks instead.

## Variants

Buttons are available as primary, secondary and tertiary variants. Through the selective use of fill and outline color, different emphasis is given by each variant. Buttons can contain an icon and text, only text or only an icon. All buttons have a respective grey variant to be used within sections with less importance.

---> A visual of the variants from Figma should be given here

### Emphasis 

| Variant                      | Description and usage                                                             |
| ---------------------------- | --------------------------------------------------------------------------------- |
| Primary button               | Call to action with highest emphasis, most-likely the next action. Use sparingly. |
| Secondary (Outline) button   | Standard action which doesn't require emphasis but needs be easily recognizable . |
| Tertiary (Ghost) button      | Action requiring less attention.                                                  |

### Content

| Variant            | Description and usage                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Icon and text      | Use if an icon is wanted and the icon metapher might not be known to the user                                               |
| Text only          | If no well-known icon metapher exists for the function or no icon is wanted to reduce graphical screen complexity.          |
| Icon only          | If a well-known icon metapher is used or the meaning of the icon metapher is clear from the context.                        |

### Type

#### Grey button

In additon to the default button, a grey button can be used within content areas requiring less attention. Default and grey buttons should not be mixed in one line.
Hint: Conflicting naming conventions in components, grey button equals proptery variant "Secondary" in implemented components.

#### Icon button



#### Selectable button

#### Link button

## Behavior in context

### Text truncation

### Logical dependencies

### Buttons in toolbars




## States

| State              | Description|
| ------------------ | -------------- |
| Hover              | The hover state is indicated by fill color change. |
| Active             | The active state is indicated by fill color change. Equal to pressed state. |
| Disabled           | The disblabed state is indicated by fill color change. |
| Selected           | The selected state is indicated by fill color change. Only available for tertiary grey button ("secondary ghost button") |
| Focused            | The focused state is indicated by a focus frame. |

## Anatomy

### Main elements

--> Abstract visualisation of the elements of a button ()

### Sizing

- All Buttons have a fix height
- Icon-only Buttons also have a fix width
- The width of Primary and Secondary buttons can either depend on screen context or text length
- The width of Tertiatry buttons with text depends on the text length
- Text on text-only Buttons is horizontally centered
- On text-and-icon Buttons, there is a fix margin between icon and text. Icon and text together are horizontally centered. The icon should be placed on the leading side of the button (e.g. left for left-to-right languages).

### Spacing

A default margin between adjacent Buttons is defined. Depending on the context, this margin may be increased or decreased, though.

### Alignment

Buttons can be left-justified or right-justified or fully span a container's width. Maximum width for full-span buttons is xxx px.


## Dos and don'ts

- If space allows, place buttons next to one another instead of one below the other
- And so on


## Related patterns:

- Icon button
- Button group
