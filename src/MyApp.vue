<template>
  <div id="app">

    <h1>{{ msg0 }}</h1>
    <hr>

    <span v-bind:title="msg1">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>
    <hr>
    
    <p v-if="seen">Now you see me</p>
    <button v-on:click="hideIt">{{ msgHide }}</button>
    <hr>
    
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
    <hr>

    <p>{{ msg2 }}</p>
    <button v-on:click="reverseMessage">Event</button>
    <hr>
    
    <p>{{ msg3 }}</p>
    <input v-model="msg3">

  </div>
</template>

<script>
export default {
  name: 'MyApp',
  data () {
    return {
      msg0: 'Welcome to Your Vue.js App',
      msg1: 'You loaded this page on ' + new Date(),
      msg2: 'Gusti Alfian',
      msg3: 'Learing is good!',
      msgHide: 'Hide It!',
      seen: true,
      todos:[
        { text: 'learn javascript' },
        { text: 'learn vue' },
        { text: 'build some thing' },
      ],
    }
  },
  methods: {
    reverseMessage: function(){
      this.msg2 = this.msg2.split('').reverse().join('')
    },
    hideIt: function(){
      this.seen = !this.seen
      this.msgHide = this.msgHide === 'Hide It!' ? 'Show It!' : 'Hide It!' 
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  text-align: center;
}
</style>
