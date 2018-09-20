<template>
  <div id="app">
    <app-header v-bind:title="title"></app-header>
    <!--<component v-bind:is="component" v-bind:user="user" v-bind:users="users"></component>-->
    <router-view v-bind:user="user" v-bind:users="users"></router-view>
    <router-link v-bind:to="link"><button v-on:click="isUserEmpty" v-show="showSummaryButton">Submit</button></router-link>
    <router-link to="/"><button v-on:click="goBack" v-show="showBackButton">Back</button></router-link>
    <router-link to="/users"><button v-on:click="showUsers" v-show="showUsersButton">AllUsers</button></router-link>
    <app-footer v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-footer>
    <button v-on:click="showModal">Show Modal</button>
    <modal v-show="isModalActive" v-on:closePopUpModal="closeModal" v-bind:popupModal="popupModal">
    </modal>

  </div>
</template>

<script>
  import Header from './components/Header.vue'
  // import Image from './components/Image.vue'
  import Form from './components/Form.vue'
  import FormSummary from './components/FormSummary.vue'
  import Footer from './components/Footer'
  import UserList from './components/Users.vue'
  import {bus} from './main.js'
  import Modal from './components/Modal.vue'

  export default {
    components: {
      'app-header': Header,
      'app-form': Form,
      'app-form-summary': FormSummary,
      'app-footer': Footer,
      'user-list' : UserList,
      'modal': Modal,
    },
    data:function () {
      return {
        link: '',
        modalMessage: '',
        showSummaryButton: true,
        showBackButton: false,
        showClearButton: false,
        showUsersButton:false,
        isModalActive: false,

        component: 'app-form',

        title: 'Vue Application',
        user: {
          username: '',
          password: '',
          address: '',
          state: '',
          city: '',
          gender: ''
        },
        users: [],
        popupModal: {
          header: '',
          message: ''
        },
      }
    },
    methods: {
      showModal: function (){
        this.isModalActive = true;
        this.popupModal.header = 'Alert';
        this.popupModal.message = 'user is emptyuser is emptyuser is emptyuser is '
      },
      closeModal: function () {
        this.isModalActive = false;
      },
      isUserEmpty: function () {
        if(this.user.username.length == 0) {
          this.link = '/',
          this.showModal();
        }
        else {
          this.link ='/summary',
          this.showSummary();
        }
      },
      showSummary:function () {
        this.showSummaryButton = !this.showSummaryButton;
        this.showBackButton = !this.showBackButton;
        this.showUsersButton = false;
        // this.component = 'app-form-summary';
        this.users.push(this.user);
      },
      goBack:function () {
        this.showBackButton = false;
        this.showUsersButton = true;
        this.showSummaryButton = true;
        this.user = {
          username: '',
          password: '',
          address: '',
          state: '',
          city: '',
          gender: ''
        };
        //old way of doing it
        // this.component = 'app-form';
      },
      showUsers: function() {
        this.showBackButton = true;
        this.showUsersButton = false;
        this.showSummaryButton = false;
        // this.component = 'user-list';
      },
      //Without using bus to emit events
      updateTitle:function(title) {
        this.title = title;
      }
    },
    //When the component is created
    created: function() {
      bus.$on('titleChanged', (data) => {
        this.title = data;
      })
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
