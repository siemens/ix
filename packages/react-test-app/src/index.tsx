import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import '@siemens/core-ui-icons/dist/css/core-ui-webfont.css';
import '@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css';
import '@siemens/ix/dist/core-ui-core/core-ui-core.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import { AGGrid } from './preview-examples/aggrid';
import { ButtonGroup } from './preview-examples/button-group';
import { Buttons } from './preview-examples/buttons';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/preview/buttons" element={<Buttons />} />
      <Route path="/preview/aggrid" element={<AGGrid />} />
      <Route path="/preview/button-group" element={<ButtonGroup />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
