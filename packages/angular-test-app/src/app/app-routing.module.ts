import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAndLegal } from 'src/preview-examples/about-and-legal';
import { AGGrid } from 'src/preview-examples/aggrid';
import { BasicNavigation } from 'src/preview-examples/basic-navigation';
import { BasicNavigationWithOutHeader } from 'src/preview-examples/basic-navigation-without-header';
import { Blind } from 'src/preview-examples/blind';
import { Breadcrumb } from 'src/preview-examples/breadcrumb';
import { BreadcrumbNextItems } from 'src/preview-examples/breadcrumb-next-items';
import { BreadcrumbTrucate } from 'src/preview-examples/breadcrumb-truncate';
import { ButtonGroup } from 'src/preview-examples/button-group';
import { ButtonSelected } from 'src/preview-examples/button-selected';
import { ButtonWithIcon } from 'src/preview-examples/button-with-icon';
import { Buttons } from 'src/preview-examples/buttons';
import { CategoryFilter } from 'src/preview-examples/category-filter';
import { CategoryFilterSuggestions } from 'src/preview-examples/category-filter-suggestions';
import { Checkbox } from 'src/preview-examples/checkbox';
import { CheckboxIndeterminate } from 'src/preview-examples/checkbox-indeterminate';
import { Chip } from 'src/preview-examples/chip';
import { Datepicker } from 'src/preview-examples/datepicker';
import { Datetimepicker } from 'src/preview-examples/datetimepicker';
import { Drawer } from 'src/preview-examples/drawer';
import { DrawerFullHeight } from 'src/preview-examples/drawer-full-height';
import { Dropdown } from 'src/preview-examples/dropdown';
import { DropdownIcon } from 'src/preview-examples/dropdown-icon';
import { EventList } from 'src/preview-examples/event-list';
import { EventListCompact } from 'src/preview-examples/event-list-compact';
import { EventListCustomItemHeight } from 'src/preview-examples/event-list-custom-item-height';
import { EventListSelected } from 'src/preview-examples/event-list-selected';
import { ExpandingSearch } from 'src/preview-examples/expanding-search';
import { FlipTile } from 'src/preview-examples/flip-tile';
import { Group } from 'src/preview-examples/group';
import { GroupContextMenu } from 'src/preview-examples/group-context-menu';
import { GroupCustomEntry } from 'src/preview-examples/group-custom-entry';
import { GroupHeaderSuppressed } from 'src/preview-examples/group-header-suppressed';
import { Input } from 'src/preview-examples/input';
import { InputDisabled } from 'src/preview-examples/input-disabled';
import { InputReadonly } from 'src/preview-examples/input-readonly';
import { InputWithIcon } from 'src/preview-examples/input-with-icon';
import { Kpi } from 'src/preview-examples/kpi';
import { MessageBar } from 'src/preview-examples/message-bar';
import { Modal } from 'src/preview-examples/modal';
import { Pill } from 'src/preview-examples/pill';
import { PopoverNews } from 'src/preview-examples/popover-news';
import { Radiobutton } from 'src/preview-examples/radio-button';
import { Select } from 'src/preview-examples/select';
import { SelectEditable } from 'src/preview-examples/select-editable';
import { SelectMultiple } from 'src/preview-examples/select-multiple';
import { Settings } from 'src/preview-examples/settings';
import { Spinner } from 'src/preview-examples/spinner';
import { SpinnerLarge } from 'src/preview-examples/spinner-large';
import { SplitButton } from 'src/preview-examples/split-button';
import { SplitButtonIcons } from 'src/preview-examples/split-button-icons';
import { Tabs } from 'src/preview-examples/tabs';
import { Textarea } from 'src/preview-examples/textarea';
import { TextareaDisabled } from 'src/preview-examples/textarea-disabled';
import { TextareaReadonly } from 'src/preview-examples/textarea-readonly';
import { Tile } from 'src/preview-examples/tile';
import { Timepicker } from 'src/preview-examples/timepicker';
import { Toast } from 'src/preview-examples/toast';
import { ToastCustom } from 'src/preview-examples/toast-custom';
import { Toggle } from 'src/preview-examples/toggle';
import { ToggleColor } from 'src/preview-examples/toggle-color';
import { ToggleCustomDisabled } from 'src/preview-examples/toggle-custom-disable';
import { ToggleCustomLabel } from 'src/preview-examples/toggle-custom-label';
import { Tree } from 'src/preview-examples/tree';
import { TreeCustom } from 'src/preview-examples/tree-custom';
import { Upload } from 'src/preview-examples/upload';
import { VerticalTabs } from 'src/preview-examples/vertical-tabs';
import { VerticalTabsWithAvatar } from 'src/preview-examples/vertical-tabs-with-avatar';
import { NavigationTestComponent } from './components/navigation-test.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'preview/buttons',
  },
  {
    path: 'testing',
    children: [
      {
        path: 'navigation',
        component: NavigationTestComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'link1',
          },
          {
            path: 'link1',
            component: Buttons,
          },
          {
            path: 'link2',
            component: ButtonGroup,
          },
        ],
      },
    ],
  },
  {
    path: 'preview',
    children: [
      {
        path: 'buttons',
        component: Buttons,
      },
      {
        path: 'button-group',
        component: ButtonGroup,
      },
      {
        path: 'aggrid',
        component: AGGrid,
      },
      {
        path: 'basic-navigation',
        component: BasicNavigation,
      },
      {
        path: 'modal',
        component: Modal,
      },
      {
        path: 'toast',
        component: Toast,
      },
      {
        path: 'toast-custom',
        component: ToastCustom,
      },
      {
        path: 'tree',
        component: Tree,
      },
      {
        path: 'tree-custom',
        component: TreeCustom,
      },
      {
        path: 'about-and-legal',
        component: AboutAndLegal,
      },
      {
        path: 'basic-navigation-without-header',
        component: BasicNavigationWithOutHeader,
      },
      {
        path: 'blind',
        component: Blind,
      },
      { path: 'breadcrumb-next-items', component: BreadcrumbNextItems },
      { path: 'breadcrumb-truncate', component: BreadcrumbTrucate },
      { path: 'breadcrumb', component: Breadcrumb },
      { path: 'button-selected', component: ButtonSelected },
      { path: 'button-with-icon', component: ButtonWithIcon },
      {
        path: 'category-filter-suggestions',
        component: CategoryFilterSuggestions,
      },
      {
        path: 'category-filter',
        component: CategoryFilter,
      },
      {
        path: 'checkbox-indeterminate',
        component: CheckboxIndeterminate,
      },
      {
        path: 'checkbox',
        component: Checkbox,
      },
      {
        path: 'chip',
        component: Chip,
      },
      {
        path: 'datepicker',
        component: Datepicker,
      },
      {
        path: 'datetimepicker',
        component: Datetimepicker,
      },
      {
        path: 'drawer-full-height',
        component: DrawerFullHeight,
      },
      {
        path: 'drawer',
        component: Drawer,
      },
      { path: 'dropdown-icon', component: DropdownIcon },

      { path: 'dropdown', component: Dropdown },
      { path: 'event-list-compact', component: EventListCompact },
      {
        path: 'event-list-custom-item-height',
        component: EventListCustomItemHeight,
      },
      { path: 'event-list-selected', component: EventListSelected },
      { path: 'event-list', component: EventList },
      { path: 'expanding-search', component: ExpandingSearch },
      { path: 'flip-tile', component: FlipTile },
      { path: 'group-context-menu', component: GroupContextMenu },
      { path: 'group-custom-entry', component: GroupCustomEntry },
      { path: 'group-header-suppressed', component: GroupHeaderSuppressed },
      { path: 'group', component: Group },
      { path: 'input-disabled', component: InputDisabled },
      { path: 'input-readonly', component: InputReadonly },
      { path: 'input-with-icon', component: InputWithIcon },
      { path: 'input', component: Input },
      { path: 'kpi', component: Kpi },
      { path: 'message-bar', component: MessageBar },
      { path: 'pill', component: Pill },
      { path: 'popover-news', component: PopoverNews },
      { path: 'radio-button', component: Radiobutton },
      { path: 'select-editable', component: SelectEditable },
      { path: 'select-multiple', component: SelectMultiple },
      { path: 'select', component: Select },
      { path: 'settings', component: Settings },
      { path: 'spinner', component: Spinner },
      { path: 'spinner-large', component: SpinnerLarge },
      { path: 'split-button-icons', component: SplitButtonIcons },
      { path: 'split-button', component: SplitButton },
      { path: 'tabs', component: Tabs },
      { path: 'textarea', component: Textarea },
      { path: 'textarea-disabled', component: TextareaDisabled },
      { path: 'textarea-readonly', component: TextareaReadonly },
      { path: 'tile', component: Tile },
      { path: 'timepicker', component: Timepicker },
      { path: 'toggle-color', component: ToggleColor },
      { path: 'toggle-custom-disabled', component: ToggleCustomDisabled },
      { path: 'toggle-custom-label', component: ToggleCustomLabel },
      { path: 'toggle', component: Toggle },
      { path: 'upload', component: Upload },
      { path: 'vertical-tabs-with-avatar', component: VerticalTabsWithAvatar },
      { path: 'vertical-tabs', component: VerticalTabs },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
