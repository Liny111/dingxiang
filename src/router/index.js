import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
//异步
const Hesuan =()=>import('../views/Hesuan/index.vue')
const Area =()=>import('../views/Area/index.vue')
const Prevention =()=>import('../views/Prevention/index.vue')
const Citys =()=>import('../views/Citys/Citys.vue')
const Travel =()=>import('../views/Travel/Travel.vue')
const SelectCity =()=>import('../views/SelectCity/SelectCity.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/hesuan',
    name:'Hesuan',
    component:Hesuan
  },
  {
    path:'/area',
    name:'Area',
    component:Area
  },
  {
    path:'/prevention',
    name:'Prevention',
    component:Prevention
  },
  {
    path:'/citys/:cityname',
    name:'Citys',
    component:Citys,
    props:true
  },
  {
    path:'/travel',
    name:'Travel',
    component:Travel,
  },
  {
    path:'/selectcity',
    name:'SelectCity',
    component:SelectCity,
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
