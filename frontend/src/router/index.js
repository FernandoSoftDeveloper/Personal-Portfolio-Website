import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutMeView from '../views/AboutMeView.vue';
import MyServicesView from '../views/MyServicesView.vue';
import ContactMeView from '../views/ContactMeView.vue';
import PortfolioView from '@/views/PortfolioView.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMeView,
    },
    {
      path: '/my-services',
      name: 'my-services',
      component: MyServicesView,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
    },
    {
      path: '/contact-me',
      name: 'contact-me',
      component: ContactMeView,
    }
  ]
})

export default router
