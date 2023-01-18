import { createApp } from 'vue'
import {router} from './routes'
import App from './App.vue'

import './assets/styles/style.scss'

createApp(App).use(router).mount('#app')
