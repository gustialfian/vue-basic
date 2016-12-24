<template>
  <div id="app">
    <h1>vue-resource</h1>
    <ol>
      <li v-for="user in users">
        {{ user.name }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Users',
  created: function(){
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response){
        this.users = response.data
      })
  },
  data () {
    return {
      users: [],
    }
  }
}
</script>

<style scoped>

</style>
