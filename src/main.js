import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import MarketPlace from "./components/MarketPlace.vue";
import AdminDashboard from "./components/secured/admin/AdminDashboard.vue";
import SellerDashboard from "./components/secured/seller/SellerDashboard.vue";
import Authentication from "./components/authentication/Auth.vue";


library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('app-market-place', MarketPlace);
Vue.component('app-admin-dashboard', AdminDashboard);
Vue.component('app-seller-dashboard', SellerDashboard);
Vue.component('app-auth', Authentication);

new Vue({
    render: h => h(App),
}).$mount('#app');