The category filter is a component which enhances data navigation and user experience.

We typically use a category filter to efficiently navigate large data sets, allowing users to quickly narrow their search by selecting predefined categories. It's particularly useful in scenarios with complex data. The filter also enhances user experience by providing autocomplete suggestions and customizable filter conditions.

![Category filter overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1799%3A38402&mode=design&t=hgAA8GogE70JbHHy-1)
1. Container 
2. Search icon 
3. Input chip 
4. Clear button  

## Options

- **Categories**: These are the predefined groups that users can select to narrow down their search or browsing. The categories are customizable and should be defined based on the specific needs of your application or website.
- - **Suggestions**: These are potential search terms that appear as users begin to type in the input field. The aim is to assist users by predicting their intended search or category, thereby speeding up the input process and reducing potential errors.
- **NonSelectableCategories**: This option is useful in scenarios where the user should not be able to select certain categories. This could be due to categories that are irrelevant in the current context, restricted throug user permissions or dependent on other conditions.
- **RepeatCategories**: This option allows users to select the same category more than once. This can be useful when users want to apply different filter conditions to the same category.
- **Placeholder**: We typically use the placeholder to provide guidance or context to users when the category filter is empty.
- **Icon**: The default icon is "search". It can be changed to any other icon by using this property. Changing the icon within the category filter can be beneficial in certain situations to enhance user experience and improve visual communication. It can also be hidden.
- **i18nPlainText**: It provides the possibility to do a plain text search without choosing a specific category.


## Behaviour

- **Default**: The category filter is designed to adapt to the user's needs and the context in which it is used. As soon as the user starts typing, the filter begins to apply, narrowing down the available options based on the user's input. This provides a dynamic and responsive user experience.
- **Filter conditions**: These are the operators that determine how the filter will match the user's input against the available categories. Available are equals (=) and not equals (!=). These conditions provide flexibility and precision in filtering, allowing users to find exactly what they're looking for.
- **Display modes**: The different modes are automatically detected by the component itself. If the user enters more than one row of search terms it automatically increases the size. When it comes to more then two lines of search terms it applies automatically a scrollbar.
- **Autocomplete**: When the user starts typing it can automatically suggest possible matches. This helps with speeding up the input process and reducing potential errors.
- **Category selection**: The behavior of category selection can vary; it can be configured as non-selectable, multi-selectable, or single-selectable depending on the specific needs and context of the application.
- **Without category selection**: Use without category selection if the user's input alone is sufficient to filter the data. Examples are if the data is not well-organized into distinct categories or if the categories are too numerous/complex.
- **Visual feedback**: When a category is selected, it is highlighted and a chip is added to the input field. If a user chooses to delete a category, the chip is removed and the data is unfiltered, allowing for further filtering.

## States

Category filter has six states: Default, hover, active, disabled, readonly and focused.

![Category filter states](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1799-38415&mode=design&t=1vxCdaFjmBNHp8Sk-4)

- **Readonly**: By setting the category filter to readonly, accidental modifications or deletions of data can be prevented. This can be particularly useful when dealing with critical or sensitive information that should not be altered without proper authorization. 
- **Disabled**: This state is typically applied when the element is not applicable to the current context or when certain conditions must be met before the category filter can be enabled.  

## Dos and Don'ts

Do use if you have a large amount of content or products organized into different categories 

Do use when catering to a diverse user base with different interests or needs

Do use if your content or products are organized into distinct categories or topics

Do use to make it easier for the users to refine their search queries and receive more targeted results

Do not use if your content is minimal or not well-organized into distinct categories

Do not use if it's not the primary method of navigation

Do not use if it slows down the user experience

Do not use if your users are not familiar with the category names

## Related patterns

- [Expanding search](expanding-search.md)
- [Input](input.md)
- [Select](select.md)
- [Dropdown button](./buttons/_dropdown-button_styleguide.md)
