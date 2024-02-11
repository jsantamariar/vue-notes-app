import './assets/main.css'

import { createApp } from 'vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
import App from './App.vue'
import router from './router'
import pinia from './store'

createApp(App).use(router).use(CKEditor).use(pinia).mount('#app')
