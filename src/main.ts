import Vue from 'vue';
import keycloak from '@/services/keycloak.service';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const initializeApp = (): void => {
  new Vue({
    render: (h) => h(App),
    router,
    store,
    vuetify,
  }).$mount('#app');
};

keycloak.init({ onLoad: 'login-required' }).success((authenticated: boolean) => {
  if (!authenticated) {
    window.location.reload();
  }
  initializeApp();
});
