import Vue from 'vue';
import keycloak from '@/services/keycloak.service';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

const initializeApp = (): void => {
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
};

Vue.config.productionTip = false;

keycloak.init({ onLoad: 'login-required' }).success((authenticated: boolean) => {
  if (!authenticated) {
    window.location.reload();
  }
  initializeApp();
});
