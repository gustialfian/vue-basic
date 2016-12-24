import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import MyApp from './MyApp.vue'
import Users from './Users.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App},
    { path: '/my', component: MyApp},
    { path: '/users', component: Users},
  ],
}) 

new Vue({
  el: '#app',
  router,
  template: `
    <div id='app'>
      <ul>
        <li><router-link to='/'>App</router-link></li>
        <li><router-link to='/my'>My App</router-link></li>
        <li><router-link to='/users'>Users</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `,

})
