<template>
  <div>
    <header>
      <h1 v-on:click="changeTitle">{{title | to-uppercase}}</h1>
    </header>
  </div>
</template>

<script>
  import {bus} from '../main.js'

  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data:function () {
      return {
        titleChanged: false
      }
    },
    methods: {
      changeTitle: function () {
        if(!this.titleChanged) {
          this.title = "Vue New Application";
          bus.$emit("titleChanged", this.title);
          this.titleChanged = !this.titleChanged;
        }
        else {
          this.title ="Vue Application";
          bus.$emit("titleChanged", this.title);
          this.titleChanged = !this.titleChanged;
        }
      }
    }
  }
</script>

<style scoped>
  header {
    background-color: aliceblue;
  }
  h1 {
    color: aquamarine;
    text-align: center;
  }


</style>
