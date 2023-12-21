import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/cd srcviews/Home.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import Registration from '@/views/Registration.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;