# User experience considerations

## Responsive and adaptive design

Industrial Experience components handle various viewport sizes out-of-the-box. When building a page layout, consider small screens in portrait and landscape mode in an early stage during the design phase.

Depending on the importance of a mobile-optimized UI, decide on a responsive or adaptive design approach:

- **Responsive design**: The layout adapts to the viewport size by rearranging or hiding components. We recommend this approach for desktop-first applications.
- **Adaptive design**: There is a separate page layout for a specific breakpoint. We recommend this approach for applications with a strong focus on mobile.

If feasible, we recommend adaptive design since it offers more control over the layout and a more optimized user experience on mobile devices. However, it requires more effort to maintain different layouts. Independently from the design approach, there are different approaches to achieve a mobile-friendly experience:

- Adjust the page layout (e.g. a column-based layout transforms into a row-based layout)
- Restructure the content (e.g. prioritize information or components differently)
- Hide information or entire components (e.g. less important information or components)

## Interaction

Users interact with mobile devices primarily through touch input. Our web components respond to touch events out-of-the-box.

For your specific use cases, it might be necessary to implement custom event listeners for touch interactions. In addition, touch devices offer the possibility to use gestures like swiping, pinching or tapping.

## Device-specific features

Some devices have unique characteristics that need to be considered when designing and developing an app:

- Display "notch"
- System bars
- Rounded corners
- Different screen sizes and resolutions

When you design and develop an app, we recommend to define target devices. Consider the specific features of the devices in your design and development process, so that all relevant parts of the user interface are visible and accessible. Use the [safe areas](#define-safe-areas) to ensure that the content is displayed correctly.
