import Vue from 'vue';
import VueRouter from 'vue-router';

//import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
//import ContactPage from '@/views/ContactPage.vue';
import RegistrationPage from '@/views/RegistrationPage.vue';

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
    component: Registration,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;