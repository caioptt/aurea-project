import Vue from 'vue'
import VueRouter from 'vue-router'
import Dash from '@/components/Dash'
import FirstTopic from '@/components/FirstTopic'




Vue.use(VueRouter)

const routes = [
    { meta: { isAuthenticated: true }, path: '/', component: Dash },
    { meta: { isAuthenticated: true }, path: '/first', component: FirstTopic },

]

const router = new VueRouter({
    mode: 'history',
    routes
})



export default router
