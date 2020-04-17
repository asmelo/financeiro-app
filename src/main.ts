import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import keycloak from '@/services/keycloak.service'

Vue.config.productionTip = false;

const initializeApp = (): void => {
  new Vue({
    router,
    store,
    vuetify: Vuetify,
    render: h => h(App),
  }).$mount('#app');
};

keycloak.init({ onLoad: 'login-required' }).success((authenticated: boolean) => {
  if (!authenticated) return;
  initializeApp();
});