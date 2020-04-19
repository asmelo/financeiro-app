import Keycloak from 'keycloak-js';

export default Keycloak({
  url: 'http://54.233.130.189:8081/auth/',
  realm: 'financeiro',
  clientId: 'financeiro-app',
});
