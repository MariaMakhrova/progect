import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Додайте роутер до додатку
app.use(router);

app.mount('#app');