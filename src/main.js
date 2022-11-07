import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import VConsole from 'vconsole'
if(process.env.NODE_ENV !== 'prod'){
  new VConsole()
}

const app = createApp(App)
app.use(createPinia())
app.use(router)


app.mount('#app')
