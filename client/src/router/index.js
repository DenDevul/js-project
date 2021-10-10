import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Home from '../views/Home.vue'

const routes = [
{ 
  path: '/', 
  name: 'login',
  component: Login
},
{
  path: '/signup',
  name: 'signup',
  component: Signup
},
{
  path: '/home',
  name: 'home',
  component: Home
},
{
  path: '/:pathMatch(.*)*',
  redirect: '/'
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router