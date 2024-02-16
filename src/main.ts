import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CKEditorPlugin from '@ckeditor/ckeditor5-vue'
import App from './App.vue'
import router from './router'
import i18n from './locale/i18n'

createApp(App).use(router).use(CKEditorPlugin).use(i18n()).use(createPinia()).mount('#app')
