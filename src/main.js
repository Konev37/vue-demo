import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui';
import Container from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import VueAxios from "vue-axios";
import * as echarts from 'echarts';

Vue.use(ElementUI)
Vue.use(Container)
Vue.use(VueAxios, axios)
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {App},
  render: h => h(App),
}).$mount('#app')
