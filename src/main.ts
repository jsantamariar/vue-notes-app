import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CKEditorPlugin from '@ckeditor/ckeditor5-vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(createPinia()).use(CKEditorPlugin).mount('#app')
