
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './style/element-variables.css'

Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
