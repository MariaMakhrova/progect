import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '@/views/AboutPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import HomePage from '@/views/HomePage.vue';
import RegistrationPage from '@/views/RegistrationPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/registration', component: RegistrationPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;