// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faUser,faPlay,faStop,faVolumeMute,faExpand,faVolumeUp,faPause
} from '@fortawesome/free-solid-svg-icons';
import store from './store/index';
//在main.js引入qs
import qs from 'qs';
import axios from 'axios';




library.add(
  faUser,faPlay,faStop,faVolumeMute,faExpand,faVolumeUp,faPause
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
//配全局属性配置，在任意组件内可以使用this.$qs获取qs对象
Vue.prototype.$qs = qs;
Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.use(router);
Vue.use(store);
// axios.defaults.baseURL = 'http://localhost:8082/demoproject/test'
// Vue.prototype.$ajax = axios
Vue.prototype.$axios = axios;
Vue.prototype.HOME='/api';

/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  if(to.meta.isLogin){
    if(store.state.isLogin){
      next()
    }else{
      ElementUI.Message('请先登录！');
      router.push({name:'Login'})
    }
  }else{
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')