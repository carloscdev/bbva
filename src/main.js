import Vue from 'vue';
import Vuelidate from "vuelidate";
import App from './App.vue';
import axios from "axios";
import router from './router';
import store from './store';
import VueAxios from "vue-axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Buefy from 'buefy';

import "@/assets/styles/main.scss";
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(fab);
library.add(fas);
Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconComponent: "font-awesome-icon",
  defaultIconPack: "fas"
});

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/auth/"
    : "http://localhost:5000/api/auth/";
Vue.use(VueAxios, axios);

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
