import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/index'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import(/* webpackChunkName: 'about' */ '../views/Learn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next): void => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
	if(requiresAuth && !store.state.signedIn) {
    next('login')
	} else {
    next()
	}
})

export default router
