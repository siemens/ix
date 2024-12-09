## Usage
### Guidelines

Toggle buttons are button elements which allow the user to activate/deactivate a function. Toggle buttons with and without text labels are available. We typically use toggle buttons within button groups when users can chose between more than two options or when two available options don't follow the on/off metaphor.

![Overview](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1480-33046&mode=design&t=iUJlfIvOwhKY3qk9-4)

Variants, options and states of the ix button and the ix icon button components apply. Only additional, deviating or detailing specifications are listed here.

#### Options

- **Pressed:** Toggle buttons can take a pressed (active) state. To improve accessibility, this state is set via the pressed option so it can be read by screen readers.
- The options **type** and **color** are not available for toggle buttons.
- For the primary variant, one of the options **outline** or **ghost** has to be set.

#### Behavior in context

- **Button groups:** We often place toggle buttons in button groups. Typically, only one button within the group is pressed while the others take the default state.

#### States

Toggle buttons have five states: Default, hover, active, disabled, loading and focused. All states are also available for pressed toggled buttons.

#### Dos and Don'ts

- Do use toggle buttons when users can switch between more than two exclusive options
- Do use toggle buttons when two opposing options don't follow the on/off metaphor

#### Related patterns

- [Button](button.md)
- [Icon button](icon-button.md)
- [Toggle](../toggle.mdx)
<!-- - [Button group](...) -->
