// Import plugins, components and etc.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import styles
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Create Vue app instance
const app = createApp(App)

// Add plugins, components and etc. to the main Vue instance
app.use(router).mount('#app')