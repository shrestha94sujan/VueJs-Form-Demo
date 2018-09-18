<template>
  <div id="users">
    <label id="searchUsername">Search</label>
    <input type="text" v-model="search" placeholder="search Usernames"/>
    <ul v-for="user in filteredUsernames">
      <li>{{user.username}}</li>
    </ul>
  </div>
</template>

<script>

  export default {

    props: {
      users: {
        type: Array,
        required: true
      },
      user: {
        type: Object,
        required: false
      }
    },
    data: function () {
      return {
        search: ''
      }
    },
    methods: {

    },
    computed: {
      //Adding Custom filter that filters out Usernames
      filteredUsernames: function () {
        return this.users.filter((user) => {
          return user.username.match(this.search);
        })
      }
    }

  }
</script>

<style>

</style>
