import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Works from '../views/Works.vue'
import WorkDetail from '../views/WorkDetail.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/works', name: 'works', component: Works },
    { path: '/works/:id', name: 'work-detail', component: WorkDetail },
  ]
})