const windowInstance: any = window;

export default new windowInstance.Keycloak({
  url: windowInstance._env_.VUE_APP_KEYCLOAK_URL,
  realm: windowInstance._env_.VUE_APP_KEYCLOAK_REALM,
  clientId: windowInstance._env_.VUE_APP_KEYCLOAK_CLIENT,
});
