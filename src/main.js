import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import "bootstrap" // bootstrap을 사용하기 위해 추가
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App).use(router)
app.config.globalProperties.axios = axios;
app.mount('#app')
