import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // Імпортуємо роутер з відповідного шляху
createApp(App).mount('#app')

const app = createApp(App);

// Використовуємо роутер у додатку
app.use(router);

// Монтуємо додаток на елемент з id #app
app.mount('#app');