import Playground from '@site/src/components/Playground';
import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import Overview from './../auto-generated/ix-dropdown-button/overview.md';
import Tags from './../auto-generated/ix-dropdown-button/tags.md';
import Props from './../auto-generated/ix-dropdown-button/props.md';
import Events from './../auto-generated/ix-dropdown-button/events.md';

import SourceDropdownButton from './../auto-generated/previews/web-component/dropdown-button.md';
import SourceDropdownButtonIcon from './../auto-generated/previews/web-component/dropdown-button-icon.md';

import SourceReactDropdownButton from './../auto-generated/previews/react/dropdown-button.md';
import SourceReactDropdownButtonIcon from './../auto-generated/previews/react/dropdown-button-icon.md';

import SourceAngularDropdownButton from './../auto-generated/previews/angular/dropdown-button.ts.md';
import SourceAngularDropdownButtonIcon from './../auto-generated/previews/angular/dropdown-button-icon.ts.md';

import SourceVueDropdownButton from './../auto-generated/previews/vue/dropdown-button.md';
import SourceVueDropdownButtonIcon from './../auto-generated/previews/vue/dropdown-button-icon.md';

# Dropdown button

<Tags />

<Overview />

## Usage

<Playground
name="dropdown-button" height="16rem"
frameworks={{
  react: SourceReactDropdownButton,
  angular: SourceAngularDropdownButton,
  javascript: SourceDropdownButton,
  vue: SourceVueDropdownButton
}}></Playground>

### Icon

<Playground
name="dropdown-button-icon" height="16rem"
frameworks={{
  react: SourceReactDropdownButtonIcon,
  angular: SourceAngularDropdownButtonIcon,
  javascript: SourceDropdownButtonIcon,
  vue: SourceVueDropdownButtonIcon
}}></Playground>

## Properties (ix-dropdown-button)

### Props

<Props />

### Events

<Events />
