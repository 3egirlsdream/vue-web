import Vue from 'vue'
import Vant from 'vant';
import App from './App.vue'
import {
  router
} from './router'

import '../../../assets/js/base';
import 'vant/lib/index.less';
import querystring from 'querystring'
Vue.prototype.$qs = querystring;
import {
  DataTable
} from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
//import { Image } from 'vant';
import _ from 'lodash'
Vue.prototype._ = _

Vue.use(Vant);
Vue.use(DataTable);
//Vue.use(Image);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')