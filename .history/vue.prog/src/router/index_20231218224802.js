import Vue from 'vue';
import VueRouter from 'vue-router';

//import HomePage from '@/views/HomePage.vue';
//import AboutPage from '@/views/AboutPage.vue';
//import ContactPage from '@/views/ContactPage.vue';
//import RegistrationPage from '@/views/RegistrationPage.vue';

Vue.use(VueRouter);

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Registration from '@/views/Registration.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/registration', component: Registration },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;