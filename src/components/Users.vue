<template>
  <div id="users">
    <label id="searchUsername">Search</label>
    <input type="text" v-model="search" placeholder="search Usernames"/>
    <ul v-for="user in filteredUsernames">
      <li>{{user.username}}</li>
    </ul>
    <modal v-show="filteredUsernames.length == 0" v-on:close="closeModal">
      <div slot="body">
        {{modalMessage}}
      </div>
    </modal>
  </div>
</template>

<script>
  import searchMixin from  '../mixins/searchMixin.js'
  import Modal from './Modal.vue'

  export default {
    components: {
      'modal': Modal
    },
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
        search: '',
        modalMessage: 'UserName not found!UserName not found!',
        isModalActive: false
      }
    },
    methods: {
      // showModal: function (){
      //   this.isModalActive = true;
      //   this.modalMessage = 'UserName not found!'
      // },
      closeModal: function () {
        // this.isModalActive = false;
        this.search = this.search.substr(0, this.search.length - 1)
      },
    },
    computed: {

    },
    mixins: [searchMixin]

  }
</script>

<style>

</style>
