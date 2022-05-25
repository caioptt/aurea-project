import Vue from 'vue'
import VueRouter from 'vue-router'
import Dash from '@/components/Dash'
import FirstTopic from '@/components/FirstTopic'
import SecondTopic from '@/components/SecondTopic'
import ThirdTopic from '@/components/ThirdTopic'
import FormPage from '@/components/FormPage'



Vue.use(VueRouter)

const routes = [
    { meta: { isAuthenticated: true }, path: '/', component: Dash },
    { meta: { isAuthenticated: true }, path: '/first', component: FirstTopic },
    { meta: { isAuthenticated: true }, path: '/second', component: SecondTopic },
    { meta: { isAuthenticated: true }, path: '/third', component: ThirdTopic },
    { meta: { isAuthenticated: true }, path: '/formPage', component: FormPage },
]

const router = new VueRouter({
    mode: 'history',
    routes
})



export default router
