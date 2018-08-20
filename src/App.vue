<template>
  <div id="app">
    <app-header v-bind:title="title"></app-header>
    <app-image></app-image>
    <component v-bind:is="component" v-bind:user="user"></component>
      <button v-on:click="showSummary" v-show="showSummaryButton">Submit</button>
      <button v-on:click="goBack" v-show="showBackButton">Back</button>
      <button v-on:click="clear" v-show="showClearButton">Clear</button>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Image from './components/Image.vue'
  import Form from './components/Form.vue'
  import FormSummary from './components/FormSummary.vue'
  import Footer from './components/Footer'

  export default {
    components: {
      'app-header': Header,
      'app-image': Image,
      'app-form': Form,
      'app-form-summary': FormSummary,
      'app-footer': Footer
    },
    data:function () {
      return {
        showSummaryButton: true,
        showBackButton: false,
        showClearButton: false,

        component: 'app-form',

        title: 'Vue Application',
        user: {
          username: '',
          password: '',
          address: '',
          state: '',
          city: '',
          gender: ''
        }
      }
    },
    methods: {
      showSummary:function () {
        this.showSummaryButton = !this.showSummaryButton;
        this.showBackButton = !this.showBackButton;
        this.component = 'app-form-summary';
      },
      goBack:function () {
        this.showBackButton = !this.showBackButton;
        this.showClearButton = !this.showClearButton;
        this.component = 'app-form';
      },
      clear:function () {
        this.showClearButton = !this.showClearButton;
        this.showSummaryButton = !this.showSummaryButton;
        this.user = {
          username: '',
          password: '',
          address: '',
          state: '',
          city: '',
          gender: ''
        };
      }
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
  button{
    background-color: lightgray;
    margin-left: 50%;
    display: inline-block;
    font-size: large;
  }
  app-header{
    margin-top: 0px;
  }
  app-footer{
    bottom: 0;
  }
</style>
