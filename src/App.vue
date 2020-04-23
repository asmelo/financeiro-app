<template>
  <v-app>
    <Menu/>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>
      </div>
    </transition>
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

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }
</style>
