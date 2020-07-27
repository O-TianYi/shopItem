// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/**
 * vant插件的引入
 */
import { Button,Tabbar, TabbarItem, Image as VanImage, Search,Icon  } from 'vant';
import 'vant/lib/index.css';
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(VanImage);
Vue.use(Search);
Vue.use(Icon);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
