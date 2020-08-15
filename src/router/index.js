import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Comments from '../views/Comments.vue'
import Services from '../views/Services.vue'
import Blog from '../views/Blog.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/servicios',
    name: 'Services',
    redirect: '/experiencias'
  },
  {
    path: '/experiencias',
    name: 'Experiences',
    component: Services
  },
  {
    path: '/blog/:post',
    name: 'Blog',
    component: Blog,
    children: [
      {
        path: 'comentarios',
        name: 'Comments',
        component: Comments
      }
    ]
  },
  {
    path: '/*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
