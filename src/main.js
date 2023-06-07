import { createApp } from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(CKEditor);
app.mount('#app');