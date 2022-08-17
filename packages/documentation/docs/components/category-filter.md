import LivePreview from '@site/src/components/LivePreview';
import ComponentApi from '@site/src/components/ComponentApi';

# Category Filter

The category filter is an input field that allows to set filter criteria based on free text input as well as selecting from a predefined set of categories.
The category selection is a two step process that involves a dropdown menu that opens when the input has user focus.
By clicking on one of the categories in the dropdown the menu changes to show a set of values available for the current selection. Users can filter the recommendations via text input.
For every set filter parameter a pill will appear inside of the text input.

<LivePreview name="category-filter" height="12rem"></LivePreview>

## Without showing category dropdown

<LivePreview name="category-filter-suggestions" height="12rem"></LivePreview>

<ComponentApi name="cui-category-filter"></ComponentApi>
<ComponentApi name="ix-category-filter"></ComponentApi>
