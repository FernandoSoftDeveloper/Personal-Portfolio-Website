import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// BulmaCSS Modules
import 'bulma/css/bulma.min.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
