The category filter is a user interface component that allows users to narrow down a large set of data based on predefined categories. 
As users start typing in the input field, the filter displays matching categories in a dropdown, which can be selected easily with autocomplete. 
Users can also specify a condition, such as equals (=), not equals (!=), bigger (>), smaller(<), or equals "fixed word", to further refine their search. 
After selecting a category and a condition, users enter the filter term, which can be either suggested via autocomplete or entered as free text. The category filter provides an efficient and user-friendly way to browse and switch between different categories. It's customizable and can be adapted to the specific needs of your application or website.

It allows for efficient browsing and users can easily switch between different categories.

![Category filter overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1799%3A38402&mode=design&t=hgAA8GogE70JbHHy-1)
1. Container 
2. Search icon 
3. Input chip 
4. Clear button  

## Options

- **Categories**: These are the predefined groups that users can select to narrow down their search or browsing. The categories are customizable and should be defined based on the specific needs of your application or website.
- **LabelCategories**: ???
- - **Suggestions**: These are potential search terms or category names that appear as users begin to type in the input field. The aim is to assist users by predicting their intended search or category, thereby speeding up the input process and reducing potential errors.
- **NonSelectableCategories**: This option is useful in scenarios where certain categories should not be available for selection by the user. This could be irrelevant categories (not relevant to the current context or task), restricted categories (e.g.: based on user permissions or roles) and dependent categories (eg.: if certain conditions are met or certain other categories have been selected).
- **RepeatCategories**: When the option is enabled (activated), users can select the same category multiple times. If set to false, categories already selected will not be available in the dropdown menu. By default, this option is set to true. 
- **Placeholder**: The placeholder text is displayed in the category filter when it's empty, providing guidance or context to users. 
- **FilterState**: This represents the current state of the filter, including which categories are selected and what search term is entered. It's used to control the behavior of the filter and can be updated dynamically as the user interacts with the filter. 
- **Icon**: The default icon is "search". It can be changed to any other icon by using this property. Changing the icon within the category filter can be beneficial in certain situations to enhance user experience and improve visual communication.
- **Hidelcon**: It is used to hide the search icon (or any other icon). This could be useful in scenarios where the icon might be redundant or might not fit the overall design of the interface.
- **i18nPlainText**: ???


## Behaviour in context

- **Default**: The category filter is designed to adapt to the user's needs and the context in which it is used. As soon as the user starts typing, the filter begins to apply, narrowing down the available options based on the user's input. This provides a dynamic and responsive user experience.
- **Filter conditions**: These are the operators that determine how the filter will match the user's input against the available categories. Examples are equals (=), not equals (!=), bigger (>), smaller(<), equals "fixed word". These conditions provide flexibility and precision in filtering, allowing users to find exactly what they're looking for.
- **Display modes**: The filter also supports various display modes, including single-line, two-line, and scrollable layouts, to accommodate different amounts of data and screen sizes.
- **Autocomplete**: The autocomplete feature suggests possible matches as the user types, speeding up the input process and reducing potential errors.
- **Category selection**: The filter's behavior can also be customized with various options. For example, the RepeatCategories option allows users to select the same category multiple times, while the NonSelectableCategories option can be used to prevent certain categories from being selected.
- **Without category selection**: The category filter can be used without category selection if the user's input alone is sufficient to filter the data. Examples are if the data is not well-organized into distinct categories or if the categories are too numerous/complex.
- **Visual feedback**: When a category is selected, it is highlighted and a chip is added to the input field. If a user chooses to delete a category, the chip is removed and the data is unfiltered, allowing for further filtering.

## States

Category filter has six states: Default, hover, active, disable, readonly and focused.

Link zu Figma für Bild?

- **Readonly**: By setting the category filter to readonly, accidental modifications or deletions of data can be prevented. This can be particularly useful when dealing with critical or sensitive information that should not be altered without proper authorization. 
- **Disabled**: This state is typically applied when the element is not applicable to the current context or when certain conditions must be met before the category filter can be enabled.  

## Dos and Don'ts

Do use it if you have a large amount of content or products organized into different categories, a category filter can help users narrow down their search and quickly find what they are looking for. 

Do use it when catering to a diverse user base with different interests or needs, a category filter can allow users to personalize their experience and filter out irrelevant content.

Do use it if your content or products are organized into distinct categories or topics, a category filter can help users navigate through different sections of your website or app more efficiently.

Do use it to make it easier for the users to refine their search queries and receive more targeted results.

Do not use it if your content is minimal or not well-organized into distinct categories. If there are only a few items or the items don't fit neatly into categories, a category filter might add unnecessary complexity and confuse users.

Do not use it if it's not the primary method of navigation. If users are expected to navigate primarily through other means, such as a search bar or a menu, the category filter might distract them and detract from the main navigation method.

Do not use it if it slows down the user experience. If applying the filter takes a long time due to a large amount of data or slow server responses, users might get frustrated and abandon their task.

Do not use it if your users are not familiar with the category names. If the categories are technical or industry-specific, users might not understand them and thus find the filter unhelpful.


## Related patterns

- [Expanding search](expanding-search.md)
- [Input](input.md)
- [Select](select.md)
- [Dropdown button](./buttons/_dropdown-button_styleguide.md)
