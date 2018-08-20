<template>
  <div>
    <img src='require(image)'>
  </div>
</template>

<script>
  import image from './assets/logo.png'
  export default {
    data() {
      return {
        url:image
      }
    }
  }
</script>

<style scoped>

</style>
