import Playground from '@site/src/components/Playground';
import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Props from './../auto-generated/ix-dropdown-button/props.md';
import Events from './../auto-generated/ix-dropdown-button/events.md';

import SourceDropdownButton from './../auto-generated/previews/web-component/dropdown-button.md';
import SourceDropdownButtonIcon from './../auto-generated/previews/web-component/dropdown-button-icon.md';

import SourceReactDropdownButton from './../auto-generated/previews/react/dropdown-button.md';
import SourceReactDropdownButtonIcon from './../auto-generated/previews/react/dropdown-button-icon.md';

import SourceAngularDropdownButton from './../auto-generated/previews/angular/dropdown-button.md';
import SourceAngularDropdownButtonIcon from './../auto-generated/previews/angular/dropdown-button-icon.md';

# Dropdown button

## Usage

<Playground
name="dropdown-button" height="16rem"
frameworks={{
  react: SourceReactDropdownButton,
  angular: SourceAngularDropdownButton,
  javascript: SourceDropdownButton
}}></Playground>

### Icon

<Playground
name="dropdown-button-icon" height="16rem"
frameworks={{
  react: SourceReactDropdownButtonIcon,
  angular: SourceAngularDropdownButtonIcon,
  javascript: SourceDropdownButtonIcon
}}></Playground>

## Properties (ix-dropdown-button)

### Props

<Props />

### Events

<Events />
