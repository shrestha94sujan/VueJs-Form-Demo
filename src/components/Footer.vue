<template>
  <div>
    <footer>
      <h1>{{bottom}}</h1>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          bottom: '@Copyright: 2018'
      }
    }
  }
</script>

<style scoped>
  footer {
    background-color: aliceblue;
  }
  h1 {
    color: aquamarine;
    text-align: center;
  }
</style>
