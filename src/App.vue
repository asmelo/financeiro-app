<template>
  <v-app>
    <Menu/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Menu from './components/Menu.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Menu,
  },
});
</script>
