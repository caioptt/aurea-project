import Vue from 'vue'
import VueRouter from 'vue-router'
import Dash from '@/components/Dash'
import FirstTopic from '@/components/FirstTopic'
import SecondTopic from '@/components/SecondTopic'



Vue.use(VueRouter)

const routes = [
    { meta: { isAuthenticated: true }, path: '/', component: Dash },
    { meta: { isAuthenticated: true }, path: '/first', component: FirstTopic },
    { meta: { isAuthenticated: true }, path: '/second', component: SecondTopic },
]

const router = new VueRouter({
    mode: 'history',
    routes
})



export default router
