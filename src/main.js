import Vue from 'vue'
import App from './App.vue'
import { initializeEipMobileApp } from 'eip-mobile-base'

Vue.config.productionTip = false

let requireContext = require.context('./', true, /extension.json$/)
let importFunction = path => import(`${path}`)

initializeEipMobileApp({ requireContext, importFunction, kernelScope: 'app' }).then(_ => {
  new Vue({
    render: h => h(App)
  }).$mount('#app')
})
