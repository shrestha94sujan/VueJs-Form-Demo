<template>
  <div>
    <footer>
      <h1 v-on:click="changeTitle">{{bottom}}--{{title | toUppercase}}</h1>
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
    },
    //registering filter locally
    filters: {
      toUppercase: function (value) {
        return value.toUpperCase();
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
