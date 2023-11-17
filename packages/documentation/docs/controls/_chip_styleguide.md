Chips are components used to display small pieces of information in a compact and visually appealing manner. Typically, chips contain a concise label and might contain an icon. They can be clickable and closable.

![Chip overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1149%3A41643&mode=design&t=ruQOzpPQJMKwnk8f-1)
 
1. Container 
2. Label text 
3. Icon
4. Close button


## Variants
Chip variants allow designers to apply different colors based on their purpose, importance, or context within the interface. Chip variants are typically used to convey different levels of importance, classes, or status to users.

Multiple chip variants are available: 

- **Primary**: Variant for high visual emphasis
- **State-related variants**: Alarm, critical, warning, success, info, neutral
- **Custom**: Custom variant that offers the possibility to set the background and the label color. We typically use this variant if chips need to visualize a high number of different categories. The custom variant doesn't allow color specification for hover and active states of chips.

![Chip variants](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1201%3A9512&mode=design&t=ruQOzpPQJMKwnk8f-1)


## Options
- **Active**: Specifies the interactivity of the chip. When set to false, user input such as mouse-over and keyboard navigation are disabled and the close button isn't visible.
- **Background**: Set a custom color for chip background. In our application, we use this option when more flexibility in styling the chip is required. Only available for the chip custom variant.
- **Outline**: Used for lower visual emphasis
- **Closable**: Clicking the X symbol removes the entire chip. However, this feature is only applicable to active chips, ensuring that users can easily remove specific chips when necessary.
- **Icon**: Chips can, but don't have to, include an icon within the element. The icon is positioned before the chip's label.
- **Color**: Custom font color and icon color for chip allows users to specify a unique font color in combination with a custom background color. However, this option is only applicable when the variant is set to 'custom'. When choosing a custom font and icon color, it is important to assure a good contrast with the background color.

## Behavior 

- **Reactive**: Chips can react or change their appearance or behavior based on user actions. For example, updates occur as a response to system actions, providing real-time information about changes or events happening within the system.
- **Multi-selection**: Chips can visualize multi-selection and filter actions helping users to easily identify and understand their choices.
- **Placement**: We typically place chips inline with other objects to inform about their state, within tables or grouped together to show selected options and filters. We don't place chips within input and filter components. These components provide their own variation of the chip component, the input chip. Currently, input chips are not not implemented as independent components.
- **Dismiss**: When users click on the close button, the chip is dismissed from the list or interface. The dismissed chip is removed visually, providing a sense of completion or removal.


## States  

Chips can take a default, hover, focused or active state. The states vary in background color. An exception exist for the custom chip variant. Here, the specified colors for font and background are applied to all states.

![Chip states](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1246%3A6190&mode=design&t=GHOok90R6TcaUrYi-1)

## Dos and Don'ts: 

- Do use chips for tagging and categorization, allowing users to easily organize and filter content. 
- Do ensure proper color contrast between the chip background and the text/icon when using custom variant of the chips to improve readability. 
- Do consider the spacing of chips to ensure they are easy to tap or click on mobile and desktop interfaces.
- Don't overuse chips, as it can lead to a cluttered interface and overwhelm users.
- Don`t use different styles for chips with similar purposes or meanings to avoid creating inconsistency.
- Don't use chips if no interaction with the chip is offered. Use pills instead.
