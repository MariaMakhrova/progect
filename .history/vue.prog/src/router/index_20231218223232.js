import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Registration from '@/views/RegistrationPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: About,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: Contact,
  },
  {
    path: '/registration',
    name: 'RegistrationPage',
    component: RegistrationPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;