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
  import searchMixin from  '../mixins/searchMixin.js'

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

    },
    mixins: [searchMixin]

  }
</script>

<style>

</style>
