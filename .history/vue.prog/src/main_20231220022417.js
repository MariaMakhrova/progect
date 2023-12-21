import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Імпортуємо роутер з відповідного шляху

const app = createApp(App);

// Використовуємо роутер у додатку
app.use(router);


app.mount('#app');