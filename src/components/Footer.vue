<template>
  <div>
    <footer>
      <h1 v-on:click="changeTitle">{{bottom}}--{{title}}</h1>
    </footer>
  </div>
</template>

<script>
  export default {
    props: {
      title:  {
        type: String,
        required: true
      }
    },

    data() {
      return {
          bottom: '@Copyright: 2018'
      }
    },

    methods: {
      changeTitle: function() {
        this.$emit("changeTitle", "New VUE App")
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
