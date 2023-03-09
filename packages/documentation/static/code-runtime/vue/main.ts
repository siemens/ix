import '@siemens/ix-icons/dist/css/ix-icons.css';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

import { ixPlugin } from '@siemens/ix-vue';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(ixPlugin);

app.mount('#app');
