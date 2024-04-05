The category filter is used to filter for specific data. If the user starts typing the available filters are displayed in a dropdown and can be selected easily with autocomplete. As a next step the condition can be choosen.

Examples are:
  * equals (=)
  * not equals (!=)
  * bigger (>)
  * smaller(<) 
  * equals "fixed word"

In the end the filter term has to be entered, this depends on the use case if it is suggested via autocomplete or free text.

It allows for efficient browsing and users can easily switch between different categories.

![Category filter overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1799%3A38402&mode=design&t=hgAA8GogE70JbHHy-1)
1. Container 
2. Search icon 
3. Input chip 
4. Clear button  

## Options
Development options beschreiben die UX seitig wichtig sind!

- **Categories**: 
- **FilterState**: represents a set of search criteria used to populate the component. 
- **Icon**: 
- **Hidelcon**: This option allows the icon inside the text input to be hidden. By default, it is set to false. 
- **i18nPlainText**:
- **labelCategories**:
- **Non selectable categories**: In some cases, certain categories cannot be selected to show filters properly with these categories, use an ID-to-label map in the setup to label the filter chips in the input field. 
- **Placeholder**: The placeholder text is displayed in the input field when it's empty, providing guidance or context to users. 
- **Repeat categories**: When the option is enabled (activated), users can select the same category multiple times. If set to false, categories already selected will not be available in the dropdown menu. By default, this option is set to true. 
- **Suggestions**: A list of strings provided as typeahead suggestions, independent of any specific categories.


## Behaviour in context
Ab wann wird der Filter angewendet & generelles verhalten (zweizeilig, scrollbar, autocomplete, ...)


- **Displayed**: Categories or tags are shown in a horizontal row, making it simple for users to see and choose from the available options without needing to scroll up and down. The field automatically adjusts its size as you add more inputs. 
- **Displayed with two rows**: This layout presents all available categories or tags in a vertical list, with each row containing a subset of the categories. By organizing the options into two rows, users can easily view and select from the available choices without needing to vertically scroll through a long list of categories. Additionally, the input field automatically expands as needed. 
- **Displayed with scrollbar**: The available space is not large enough to display all categories or tags in full. However, a scrollbar is provided to help users efficiently navigate through the extensive list of categories, ensuring they can access and select from all options despite the limited space. 
- **Instant Filtering**: Content is instantly updated as users select or deselect categories. The displayed items dynamically adjust to match the chosen categories. 
- **Clear All Option**: Users can clear all selected categories with a single action, returning to the unfiltered view. 
- **Structuring Information**: Group related items together to facilitate navigation and comprehension. Users can confirm their input with a single click before data filtering occurs. If a user chooses to delete content, the data will be fully displayed again for further filtering. 
- **Filter Management**: Depending on the filter configuration, users have the option to add a simple filter with custom text to create a personalized category. 


## States

- **Readonly**: By setting the category filter to readonly, accidental modifications or deletions of data can be prevented. This can be particularly useful when dealing with critical or sensitive information that should not be altered without proper authorization. 
- **Disabled**: This state is typically applied when the element is not applicable to the current context or when certain conditions must be met before the category filter can be enabled.  

## Dos and Don'ts

Do use it if you have a large amount of content or products organized into different categories, a category filter can help users narrow down their search and quickly find what they are looking for. 

Do use it when catering to a diverse user base with different interests or needs, a category filter can allow users to personalize their experience and filter out irrelevant content.

Do use it if your content or products are organized into distinct categories or topics, a category filter can help users navigate through different sections of your website or app more efficiently.

Do use it to make it easier for the users to refine their search queries and receive more targeted results.


## Related patterns

- [Expanding search](expanding-search.md)
- [Input](input.md)
- [Select](select.md)
- [Dropdown button](./buttons/_dropdown-button_styleguide.md)
