import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import '@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css';
import '@siemens/ix-icons/dist/css/ix-icons.css';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import { AboutAndLegal } from './preview-examples/about-and-legal';
import { AGGrid } from './preview-examples/aggrid';
import { Blind } from './preview-examples/blind';
import { Breadcrumb } from './preview-examples/breadcrumb';
import { BreadcrumbNextItems } from './preview-examples/breadcrumb-next-items';
import { BreadcrumbTruncate } from './preview-examples/breadcrumb-truncate';
import { ButtonGroup } from './preview-examples/button-group';
import { ButtonSelected } from './preview-examples/button-selected';
import { ButtonWithIcon } from './preview-examples/button-with-icon';
import { Buttons } from './preview-examples/buttons';
import { Checkbox } from './preview-examples/checkbox';
import { CheckboxIndeterminate } from './preview-examples/checkbox-indeterminate';
import { Chip } from './preview-examples/chip';
import { Datepicker } from './preview-examples/datepicker';
import { Datetimepicker } from './preview-examples/datetimepicker';
import { DrawerFullHeight } from './preview-examples/drawer-full-height';
import { Dropdown } from './preview-examples/dropdown';
import { DropdownIcon } from './preview-examples/dropdown-icon';
import { EventList } from './preview-examples/event-list';
import { EventListCompact } from './preview-examples/event-list-compact';
import { EventListCustomHeight } from './preview-examples/event-list-custom-item-height';
import { EventListSelected } from './preview-examples/event-list-selected';
import { ExpandingSearch } from './preview-examples/expanding-search';
import { FlipTile } from './preview-examples/flip-tile';
import { Group } from './preview-examples/group';
import { GroupContextMenu } from './preview-examples/group-context-menu';
import { GroupCustomEntry } from './preview-examples/group-custom-entry';
import { GroupHeaderSuppressed } from './preview-examples/group-header-suppressed';
import { Input } from './preview-examples/input';
import { InputDisabled } from './preview-examples/input-disabled';
import { InputReadonly } from './preview-examples/input-readonly';
import { InputWithIcon } from './preview-examples/input-with-icon';
import { Kpi } from './preview-examples/kpi';
import { MessageBar } from './preview-examples/message-bar';
import { ModalExample } from './preview-examples/modal';
import { Pill } from './preview-examples/pill';
import { PopoverNews } from './preview-examples/popover-news';
import { RadioButton } from './preview-examples/radio-button';
import { Select } from './preview-examples/select';
import { SelectEditable } from './preview-examples/select-editable';
import { SelectMultiple } from './preview-examples/select-multiple';
import { Settings } from './preview-examples/settings';
import { Spinner } from './preview-examples/spinner';
import { SpinnerLarge } from './preview-examples/spinner-large';
import { Splitbutton } from './preview-examples/split-button';
import { SplitbuttonIcons } from './preview-examples/split-button-icons';
import { Tabs } from './preview-examples/tabs';
import { Textarea } from './preview-examples/textarea';
import { TextareaDisabled } from './preview-examples/textarea-disabled';
import { TextareaReadonly } from './preview-examples/textarea-readonly';
import { Tile } from './preview-examples/tile';
import { Timepicker } from './preview-examples/timepicker';
import { Toast } from './preview-examples/toast';
import { ToastCustom } from './preview-examples/toast-custom';
import { Toggle } from './preview-examples/toggle';
import { ToggleColor } from './preview-examples/toggle-color';
import { ToggleDisabled } from './preview-examples/toggle-custom-disable';
import { ToggleCustomLabel } from './preview-examples/toggle-custom-label';
import { Tree } from './preview-examples/tree';
import { TreeCustom } from './preview-examples/tree-custom';
import { Validation } from './preview-examples/validation';
import reportWebVitals from './reportWebVitals';
import { NavigationTest } from './testing/NavigationTest';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/preview/checkbox" element={<Checkbox />} />
      <Route
        path="/preview/checkbox-indeterminate"
        element={<CheckboxIndeterminate />}
      />
      <Route path="/preview/checkbox" element={<Checkbox />} />
      <Route
        path="/preview/checkbox-indeterminate"
        element={<CheckboxIndeterminate />}
      />
      <Route path="/preview/buttons" element={<Buttons />} />
      <Route path="/preview/button-with-icon" element={<ButtonWithIcon />} />
      <Route path="/preview/button-selected" element={<ButtonSelected />} />
      <Route path="/preview/button-group" element={<ButtonGroup />} />

      <Route path="/preview/blind" element={<Blind />} />
      <Route path="/preview/breadcrumb" element={<Breadcrumb />} />
      <Route
        path="/preview/breadcrumb-next-items"
        element={<BreadcrumbNextItems />}
      />
      <Route
        path="/preview/breadcrumb-truncate"
        element={<BreadcrumbTruncate />}
      />
      <Route path="/preview/about-and-legal" element={<AboutAndLegal />} />
      <Route path="/preview/button-with-icon" element={<ButtonWithIcon />} />
      <Route path="/preview/button-selected" element={<ButtonSelected />} />
      <Route path="/preview/button-group" element={<ButtonGroup />} />

      <Route path="/preview/blind" element={<Blind />} />
      <Route path="/preview/breadcrumb" element={<Breadcrumb />} />
      <Route
        path="/preview/breadcrumb-next-items"
        element={<BreadcrumbNextItems />}
      />
      <Route
        path="/preview/breadcrumb-truncate"
        element={<BreadcrumbTruncate />}
      />
      <Route path="/preview/about-and-legal" element={<AboutAndLegal />} />
      <Route path="/preview/aggrid" element={<AGGrid />} />
      <Route path="/preview/chip" element={<Chip />} />
      <Route path="/preview/datepicker" element={<Datepicker />} />
      <Route path="/preview/datetimepicker" element={<Datetimepicker />} />
      <Route
        path="/preview/drawer-full-height"
        element={<DrawerFullHeight />}
      />
      <Route path="/preview/dropdown" element={<Dropdown />} />
      <Route path="/preview/dropdown-icon" element={<DropdownIcon />} />
      <Route path="/preview/event-list" element={<EventList />} />
      <Route
        path="/preview/event-list-compact"
        element={<EventListCompact />}
      />
      <Route
        path="/preview/event-list-custom-item-height"
        element={<EventListCustomHeight />}
      />
      <Route
        path="/preview/event-list-selected"
        element={<EventListSelected />}
      />
      <Route path="/preview/expanding-search" element={<ExpandingSearch />} />
      <Route path="/preview/flip-tile" element={<FlipTile />} />
      <Route path="/preview/group" element={<Group />} />
      <Route
        path="/preview/group-context-menu"
        element={<GroupContextMenu />}
      />
      <Route
        path="/preview/group-custom-entry"
        element={<GroupCustomEntry />}
      />
      <Route
        path="/preview/group-header-suppressed"
        element={<GroupHeaderSuppressed />}
      />
      <Route path="/preview/input" element={<Input />} />
      <Route path="/preview/input-disabled" element={<InputDisabled />} />
      <Route path="/preview/input-readonly" element={<InputReadonly />} />
      <Route path="/preview/input-with-icon" element={<InputWithIcon />} />
      <Route path="/preview/message-bar" element={<MessageBar />} />
      <Route path="/preview/pill" element={<Pill />} />
      <Route path="/preview/radio-button" element={<RadioButton />} />
      <Route path="/preview/select" element={<Select />} />
      <Route path="/preview/select-editable" element={<SelectEditable />} />
      <Route path="/preview/select-multiple" element={<SelectMultiple />} />
      <Route path="/preview/spinner" element={<Spinner />} />
      <Route path="/preview/spinner-large" element={<SpinnerLarge />} />
      <Route path="/preview/split-button" element={<Splitbutton />} />
      <Route
        path="/preview/split-button-icons"
        element={<SplitbuttonIcons />}
      />
      <Route path="/preview/tabs" element={<Tabs />} />
      <Route path="/preview/textarea" element={<Textarea />} />
      <Route path="/preview/textarea-disabled" element={<TextareaDisabled />} />
      <Route path="/preview/textarea-readonly" element={<TextareaReadonly />} />
      <Route path="/preview/tile" element={<Tile />} />
      <Route path="/preview/timepicker" element={<Timepicker />} />
      <Route path="/preview/toast" element={<Toast />} />
      <Route path="/preview/toast-custom" element={<ToastCustom />} />
      <Route path="/preview/toggle" element={<Toggle />} />
      <Route path="/preview/toggle-disabled" element={<ToggleDisabled />} />
      <Route path="/preview/toggle-color" element={<ToggleColor />} />
      <Route
        path="/preview/toggle-custom-toggle"
        element={<ToggleCustomLabel />}
      />
      <Route path="/preview/tree" element={<Tree />} />
      <Route path="/preview/tree-custom" element={<TreeCustom />} />
      <Route path="/preview/popover-news" element={<PopoverNews />} />
      <Route path="/preview/settings" element={<Settings />} />
      <Route path="/preview/kpi" element={<Kpi />} />
      <Route path="/preview/modal" element={<ModalExample />} />
      <Route path="/preview/validation" element={<Validation />} />

      <Route path="/testing">
        <Route path="navigation" element={<NavigationTest />}>
          <Route
            path="link1"
            element={
              <div>
                <Buttons />
              </div>
            }
          />
          <Route
            path="link2"
            element={
              <div>
                <ButtonGroup />
              </div>
            }
          />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
