Category filter commonly used to refine the data shown on the current page according to what the user types or selects. It allows for efficient browsing and users can easily switch between different categories.The way the select list looks depends on the browser, but users can customize the dropdown list however they want. 


![Category filter overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1799%3A38402&mode=design&t=hgAA8GogE70JbHHy-1)
1. Container 
2. Search icon 
3. Input chip 
4. Clear button  


## Options

- **Categories**:The configuration object fills the dropdown menu for typeahead and quick selection. Each ID in the configuration corresponds to an object containing a label and an array of options for users to choose from. 
- **Disabled**: This state is typically applied when the filter is not applicable to the current context or when certain conditions must be met before the filter can be enabled.  
- **Filter criteria**: represents a set of search criteria used to populate the component. 
- **Hidelcon**: This option allows the icon inside the text input to be hidden. By default, it is set to false. 
- **Non selectable categories**: In some cases, certain categories cannot be selected to show filters properly with these categories, use an ID-to-label map in the setup to label the filter chips in the input field. 
- **Placeholder**: The placeholder text is displayed in the input field when it's empty, providing guidance or context to users. 
- **Read only**: When enabled, the filter operates in read-only mode, meaning users cannot modify its settings. 
- **Repeat categories**: When the option is enabled (activated), users can select the same category multiple times. If set to false, categories already selected will not be available in the dropdown menu. By default, this option is set to true. 
- **Suggestions**: A list of strings provided as typeahead suggestions, independent of any specific categories. 

 
## States
Default, Active, Hover 


## Behaviour 

- **Displayed**: Categories or tags are shown in a horizontal row, making it simple for users to see and choose from the available options without needing to scroll up and down. The field automatically adjusts its size as you add more inputs. 
- **Displayed with two rows**: This layout presents all available categories or tags in a vertical list, with each row containing a subset of the categories. By organizing the options into two rows, users can easily view and select from the available choices without needing to vertically scroll through a long list of categories. Additionally, the input field automatically expands as needed. 
- **Displayed with scrollbar**: The available space is not large enough to display all categories or tags in full. However, a scrollbar is provided to help users efficiently navigate through the extensive list of categories, ensuring they can access and select from all options despite the limited space. 
- **Instant Filtering**: Content is instantly updated as users select or deselect categories. The displayed items dynamically adjust to match the chosen categories. 
- **Clear All Option**: Users can clear all selected categories with a single action, returning to the unfiltered view. 
- **Structuring Information**: Group related items together to facilitate navigation and comprehension. Users can confirm their input with a single click before data filtering occurs. If a user chooses to delete content, the data will be fully displayed again for further filtering. 
- **Filter Management**: Depending on the filter configuration, users have the option to add a simple filter with custom text to create a personalized category. 


## Dos and Don'ts

Do filter existing categories such as topic, type, date, enabling users to find specific content. 

Do not use  If the data set or content is relatively small and doesn't require extensive categorization 

Do not use If the categories or attributes are overly complex or hierarchical, using a category filter may confuse users rather than assist them in finding relevant information. 

Do not  use for small screen size with limited screen space, On devices where screen space is limited, implementing a category filter may clutter the interface and make it harder for users to navigate. 