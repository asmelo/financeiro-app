import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import EntryCreate from '../model/entry/Create.vue';
import EntryEdit from '../model/entry/Edit.vue';
import EntryIndex from '../model/entry/Index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/entries/index',
    name: 'Entry',
    component: EntryIndex,
  },
  { path: '*', redirect: '/entries/index' },
  {
    name: 'Create Entry',
    path: '/entries/create',
    component: EntryCreate,
  },
  {
    name: 'Edit Entry',
    path: '/entries/edit',
    component: EntryEdit,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
