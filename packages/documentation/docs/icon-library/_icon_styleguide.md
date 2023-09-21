
# Icons
 
In the following descriptions are only about in-app icons, used inside an application and UI elements. Do not confuse with the application icon, representing the application on a launch pad, home screen, desktop, task bar or similar.

## Usage

Icons are graphical representations of terms, functions, objects etc.. Ideally, they are used together with a descriptive text to make it easier for users to learn their meaning. When an icon is used standalone, without a textual description, provide a tooltip to describe the meaning of the icon. Make sure a description can be read out by screen readers.

## iX Icon library

iX comes with an extensive set of icons made for the industrial context. Nevertheless, iX can never cover every usecase with a matching icon. Therefore, it is also possible to integrate external icons to complement the iX icon set.

## Designing new icons
Before you start designing your specific icon set for your application, consider the following:

- Make sure the icons you need are not already in the library.

- Check it again, try different names or ask the iX team or, maybe the desired icon is already in work.

- Consider using more generic iX icons than creating multiple very specific new ones. (Example: Use the generic "add" icon instead of creating an "add-wireless-device" icon)

- Do not create alternatives of existing iX icons just for the sake of your own look.

- Ask other designers within your company to not create the same icon multiple times.

- Finally: Entrust a designer with the task of designing an icon.

### Technical requirements
Icons in iX are unicolor. They will be colored during runtime, depending on the component, state and theme. For more technical requirements see the "Code" tab.

### Formal requirements
New icon should follow the app icon guidelines below for a consistent look & feel across applications. For Siemens applications it is mandatory to follow these guidelines.


# iX icon design guidelines

These guidelines extend the basic guidelines on [Siemens brandville](https://brandville.siemens.com/en/design-elements/icons/ui-icons).

## 1. Icon grid size
- The basic icon grid size is 24✕24.

![Basic grid](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=801-253&mode=design&t=LqIxNidruCmTfYDF-4)

## 2. iX in-app icon design grid
- Use the design grid component “Icon Design Grid” from the “Assets” library as background for creating new icons.
- The design grid helps to limit the icon boundaries to achieve an evenly optical weight of different icon shapes.
- The clearance zone (red area) should not be touched by the icon, exceptions see below.
- The lines represent the boundaries of key shapes or just mark the center. ![iX app icon design grid](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=801-856&mode=design&t=LqIxNidruCmTfYDF-4)

- Use portrait key shape for vertically oriented shapes.  
![Portrait key shapes](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=802-17540&mode=design&t=LqIxNidruCmTfYDF-4)

- Use landscape key shape for horizontally oriented shapes.  
![Landscape key shapes](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=802-19334&mode=design&t=LqIxNidruCmTfYDF-4)

- Use square key shape square icons.  
![Square key shapes](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=802-23090&mode=design&t=LqIxNidruCmTfYDF-4)

- Use the circle key shape for round icons.  
![Circle key shapes](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=802-23091&mode=design&t=LqIxNidruCmTfYDF-4)

### Exceptions to the clearance zone

- Icons with attributes: Icons can be enhanced with attributes. The attributes are allowed to touch the clearance zone but should keep at least 1px space to the outer boundary.  
![Exception 1: icon attributes](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=802-23092&mode=design&t=LqIxNidruCmTfYDF-4)

- Optical fixes: Shapes are allowed to touch the clearance zone to equalize visual effects with pointed shapes or single strokes.  
![Exception 2: optical fixes](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=802-23093&mode=design&t=LqIxNidruCmTfYDF-4)

## 3. Light weight icons

- Prefer strokes and outlines over filled shapes
- If possible and useful, provide also a filled variant of the icon. It can be used in situations when more visual weight is required. The filled variant gets the name prefix “_filled”.

![Normal and filled variant](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=808-23094&mode=design&t=LqIxNidruCmTfYDF-4)

## 4. Simple and geometric

- Keep icons as simple as possible.
- Avoid complex symbols or symbol combinations whenever possible.
- Create icons from geometric shapes.
- Prefer sharp corners and straight lines.
- use rounded corners and endings only to support the characteristics of the represented object

![Simple and geometric shapes](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=808-23095&mode=design&t=LqIxNidruCmTfYDF-4)

## 5. Stroke widths

- Default stroke width is 2px.
- Exceptional, it is allowed to use 1.5px or 1px widths on certain elements when the character of the pictured objects require it or it is required due to the complexity of the pictured object (remember guideline rule 4).

![Stroke widths](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=809-23096&mode=design&t=LqIxNidruCmTfYDF-4)

## 6. Gaps

- Anti-aliasing effects can lead to blurry borders and edges.
- Use 2px gaps to safely separate two shapes from each other.
- Avoid unsafe patterns of alternately one pixel, no pixel. In worst case such shapes cannot be visually distinguished anymore.

![Gaps and unsafe pattern](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=809-23097&mode=design&t=LqIxNidruCmTfYDF-4)

## 7. Strike-through, cuts and cutouts

- A diagonal strike-through is used to symbolize the opposite of an icon or an unavailability (e.g. show & hide, switch off alarm).  
- A diagonal strike-through starts from top left and ends at the bottom right (refers to the crossbar of letter “N” for “No”), followed by a 2px space above right.
- Use at least 1px space for cuts or cutouts (be aware of “unsafe patterns”, see 6.).

![Strike-throughs and gaps](https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=810-23098&mode=design&t=LqIxNidruCmTfYDF-4)

## 8. The technical finish

### Prepare your icon for integration
- The Icon size (including clearance zone) must be 24x24
- The icon must not contain strokes, convert all strokes to outlines.
- Combine all icon parts to one single shape by using bool operations.
- Name the remaining shape “Vector”, otherwise color overrides will not work properly in Figma
- Make sure the shape is set to “Scale” in the “Constraints” settings in Figma, otherwise the resizing will not work properly

### Integrate in Figma
- Create a component from your icon
- Use a short, descriptive and unique name, consider using also a project or application prefix in the name to get not confused with possible other external icons.
- "Publish" the document with your icon(s) and it will be available as library in your document assets
- Activate your created library in the design document.

### Export for development

- Create an instance of your icon. This can be done in the same document the icon is stored.
- Resize this instance to 512×512 (target size for development integration).
- Check if the scaling works properly (check scaling settings, if not).
- Export the instance as SVG.
- Make sure the name of the SVG file matches the icon name to avoid confusions.
- Hand the SVG over to your development.
