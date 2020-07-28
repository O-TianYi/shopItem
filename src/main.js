// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/**
 * vant插件的引入
 */
import { Button,Icon,Search,Tab, Tabs,Swipe, SwipeItem,Lazyload,Grid, GridItem,List,Cell, CellGroup   ,PullRefresh,Card,SwipeCell,Checkbox, CheckboxGroup,DropdownMenu, DropdownItem 
,Stepper,Tag   } from 'vant';
import 'vant/lib/index.css';
Vue.use(Button);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(PullRefresh);
Vue.use(Card);
Vue.use(SwipeCell);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Stepper);
Vue.use(Tag);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
