import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// My component
import App from './App.vue'
import MyApp from './MyApp.vue'
import Users from './Users.vue'
// Middleware
Vue.use(VueResource)
Vue.use(VueRouter)
// router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App},
    { path: '/my', component: MyApp},
    { path: '/users', component: Users},
  ],
}) 
// new vue instance that mount to #app
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
