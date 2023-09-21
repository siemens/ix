With layout grids, a two-dimensional layout system is available to create consistent, responsive layouts. Layout grids are made of three elements: a grid, row(s) and column(s). The layout grid adapts to screen size and orientation.

The layout grid is based on a 12 column layout. Columns are nested in rows and adapt in width according to the available space. Content is placed within columns. Column widths are set as percentage.

![Layout grid overview](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=800%3A2637&mode=design&t=R26qUrZCUTY2iIxG-1)
1. Layout grid
2. Row
3. Column

## Options
### Layout grid options
- The default number of columns in a grid is 12. It is possible to choose any number of columns between 2 and 12.
- Layout grids contain horizontal padding. The padding can be removed.
- Between rows, a gap in introduced. This gap can be removed.
### Column options
- The size of a column is defined by the available space and the number of columns. If no size is set, columns will automatically have equal width. The size of a column can be adjusted so that it takes a higher percentage of the available space. The size property referes to the number of columns used out of the default of 12 per row.

Example: In a 12 column layout with 6 columns with equal width in place, each column takes a space of 1/6 (or 2 out of 12). When setting the size of the first column to <kbd>3</kbd> (corresponding to 3 out of 12), the remaining columns will adjust their width to fit within the remaining space of 3/4 (or 9out of 12). 

![Example for column size option](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=796%3A3&mode=design&t=R26qUrZCUTY2iIxG-1)

- A column size <kbd>auto</kbd> is available. When set to <kbd>auto</kbd>, column width is defined by the width of its content. The renmaining columns will resize to fill the row.
- Column size can be tailored to viewports. Three viewports are currently supported. The viewport size can't be adjusted at this point. When setting the size for one viewport, larger viewports are adjusted in the same way.

| Viewport name              | Viewport size                     | Description                                 |
| -------------------------- | --------------------------------- |-------------------------------------------- |
| Small                      | 0-767                             | set columns when min width is 0             |
| Medium                     | 768-1279                          | set columns when min width is 768           |
| Large                      | 1280+                             | set columns when min width is 1280          |

Example: In a 12 column layout with 4 columns with equal width in place, <kbd>size</kbd> is set to <kbd>12</kbd> and size for medium viewports (<kbd>size-md</kbd>)is set to <kbd>3</kbd>. For small viewports, the columns with take the full width an stack above each other. For medium and large viewports, columns will take equal width.

![Example for viewport-based column sizes](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=800%3A23920&mode=design&t=R26qUrZCUTY2iIxG-1)


## Behaviour in context

Decreasing and increasing the viewport width influences the width of each column within a layout grid. When Column width is decreased to the point that the minimum content width is reached for at least one column, the layout breaks into a second line. 
