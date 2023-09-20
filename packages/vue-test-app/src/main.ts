import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import '@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import './style.css';

import { ixPlugin } from '@siemens/ix-vue';
import { createApp } from 'vue';
import reportWebVitals from './reportWebVitals';
import Root from './Root.vue';

const app = createApp(Root);

app.use(ixPlugin);

app.mount('#root');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
