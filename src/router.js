import Vue from 'vue'
import Router from 'vue-router'      
import Home from '@/components/Home'
import Glod from '@/components/common/Glod'
import HomePage from '@/components/common/HomePage'
import Down from '@/components/common/Down'
import Points from '@/components/common/Points'
import Pending from '@/components/common/Pending'

Vue.use(Router)
export default new Router({
  routes: [
    {path: '/',component: HomePage},
    {path: '/Home',component: Home},
    {path: '/Glod',component: Glod},
    {path: '/HomePage',component: HomePage},
    {path: '/Down',component:Down},
    {path: '/Points',component: Points},
    {path: '/Pending',component: Pending},
    
  ]
})