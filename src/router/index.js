import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/business', name: 'Business', component: () => import('../views/Business.vue') },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/news', name: 'News', component: () => import('../views/News.vue') },
  { path: '/blogs', name: 'Blogs', component: () => import('../views/Blogs.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue') }
]

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
