import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const app = createApp(App);

// Використовуємо роутер у додатку
app.use(router);

// Монтуємо додаток на елемент з id #app
app.mount('#app');