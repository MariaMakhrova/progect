import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Імпортуйте роутер з відповідного шляху

const app = createApp(App);

// Використовуйте роутер у додатку
app.use(router);

// Монтуємо додаток на елемент з id #app
app.mount('#app');