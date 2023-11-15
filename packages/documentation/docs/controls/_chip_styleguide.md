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
- **Filled**: Default variant
- **Outline**: Variant for lower visual emphasis
- **Primary**: Variant for high visual emphasis
- **State-related variants**: Alarm, critical, warning, success, info, neutral, custom


![Chip variants](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1201%3A9512&mode=design&t=ruQOzpPQJMKwnk8f-1)


## Options
- **Closable**: clicking the X removes the whole chip.
- **Icon**: Chips can, but don't have to, include an icon within the element. The icon is positioned before the chip label.
- **Color**: "Custom font color for pill" allows users to specify a unique font color for the pill component. However, this option is only applicable when the variant is set to 'custom'. 

 ## Behaviour 

- **True/False:** allowing users to select between two options. For example, in a settings page, a chip labeled "Dark Mode" can be initially set to false. When the user clicks on the chip, it turns to true, enabling dark mode for the application.

- **Reactive:** can react or change their appearance or behavior based on user actions. For example updates occur as a response to system actions, providing real-time information about changes or events happening within the system.

- **Multi-selection:** to perform actions or apply filters simultaneously. For example chip has multi-selection in the filter data table is when a user wants to filter a list of products based on multiple categories such as color, size, and price range. 

- **Placement:** they do exist, in the catergory filter, but currently they are not own an own component.

- **Dismiss:** user clicks on the "X" icon or the close button, the task chip is dismissed from the list or interface. The dismissed task is removed visually, providing a sense of completion or removal.


## States  
- **Default**
- **Hover**
- **Focused**
- **Active** 

![Chip states](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1246%3A6190&mode=design&t=GHOok90R6TcaUrYi-1)


## Dos and Don'ts: 

- Do use chips for tagging and categorization, allowing users to easily organize and filter content. 

- Do ensure proper color contrast between the chip background and the text/icon when using custom variant of the chips to improve readability. 

- Do consider the spacing of chips to ensure they are easy to tap or click on mobile and desktop interfaces.

- Don't overuse chips, as it can lead to a cluttered interface and overwhelm users.

- Don`t use different styles for chips with similar purposes or meanings to avoid creating inconsistency.