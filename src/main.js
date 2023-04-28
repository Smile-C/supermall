import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import  'swiper/css/swiper.css'

import '@/mock/mockServe'

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name,Carousel)
import store from './store'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


