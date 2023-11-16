Chips area small, interactive component that represents a piece of information or an action in a compact and visually appealing manner. It allows users to quickly identify and understand the available options or choices without overwhelming them with excessive text or cluttered interfaces. 
Typically, a chip contains concise text and might contain an icon. They can be dismissible, or clickable.

![Chip overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1149%3A41643&mode=design&t=ruQOzpPQJMKwnk8f-1)
 
1. Container 
2. Label text 
3. Icon
4. Close button


## Variants
Chip variants allow designers to apply different colors based on their purpose, importance, or context within the interface. Chip variants are typically used to convey different levels of importance, classes, or status to users.


Multiple chip  variants are available: 

- **Primary**: Variant for high visual emphasis
- **State-related variants**: Alarm, critical, warning, success, info, neutral
- **Variant for specification**: Custom chip is a variant of the specification that offers customization options and allows for personalized content or functionality



![Chip variants](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1201%3A9512&mode=design&t=ruQOzpPQJMKwnk8f-1)


## Options
- **Active**: Specifies the interactivity of the chip. When set to false, user input such as mouse states and keyboard navigation will be disabled, and the close button will not be visible.
- **Background**: Custom color for chip. Can use it for only custom variant to give our user flexibility and to customize their variant for different purpose.
- **Outline**: For lower visual emphasis
- **Closable**: Clicking the X symbol removes the entire chip. However, this feature is only applicable to active chips, ensuring that users can easily remove specific chips when necessary.
- **Icon**: Chips can, but don't have to, include an icon within the element. The icon is positioned before the chip label.
- **Color**: Custom font color and icon color for chip allows users to specify a unique font color for the chip component. However, this option is only applicable when the variant is set to 'custom'. 

## Behavior 

- **Reactive**: Can react or change their appearance or behavior based on user actions. For example updates occur as a response to system actions, providing real-time information about changes or events happening within the system.

- **Multi-selection**: Chips can visualize multi selection and filter action, and represents of the selected options, helping users easily identify and understand their choices.

- **Placement**: Input chips are currently not implemented as independent components, but rather placed outside of the parent component. They are specifically used within the category filter and multi-selection input field.
.

- **Dismiss**: User clicks on the close button, the chip is dismissed from the list or interface. The dismissed  is removed visually, providing a sense of completion or removal.


## States  

For all chips variant default, hover, focused and active state exist.

The custom is the exception 


![Chip states](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1246%3A6190&mode=design&t=GHOok90R6TcaUrYi-1)


## Dos and Don'ts: 

- Do use chips for tagging and categorization, allowing users to easily organize and filter content. 

- Do ensure proper color contrast between the chip background and the text/icon when using custom variant of the chips to improve readability. 

- Do consider the spacing of chips to ensure they are easy to tap or click on mobile and desktop interfaces.

- Don't overuse chips, as it can lead to a cluttered interface and overwhelm users.

- Don`t use different styles for chips with similar purposes or meanings to avoid creating inconsistency.