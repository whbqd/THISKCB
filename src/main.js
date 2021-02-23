import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dataV from '@jiaminghi/data-view'
import html2canvas from 'html2canvas';
Vue.use(dataV)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
