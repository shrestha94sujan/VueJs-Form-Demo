<template>
  <div id="form-output">
    <p id="summary">{{summary}}</p>
    <p>Name: {{user.username}}</p>
    <p>Password: {{user.password}}</p>
    <p>Address: {{user.address}}</p>
    <p>State: {{user.state}}</p>
    <p>City: {{user.city}}</p>
    <p>Gender: {{user.gender}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    },

    data: function () {
      return {}
    }
  }
</script>

<style scoped>
  #summary{
    text-align: center;
  }
</style>
