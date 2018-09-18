<template>
  <div id="form">
    <h2>{{title}}</h2>
    <div id="form-input">
      <form>
        <label>Username</label>
        <input v-model.lazy="user.username" type="text">
        <label>Password</label>
        <input v-model.lazy="user.password" type="password">
        <label>Address</label>
        <input v-model.lazy="user.address" type="text">
        <label>State</label>
        <select v-model="user.state">
          <option v-for="state in states">{{state}}</option>
        </select>
        <label>City</label>
        <input v-model.lazy="user.city" type="text"/>
        <label>Male</label>
        <input value="male" v-model="user.gender" type="radio"/>
        <label>Female</label>
        <input value="female" v-model="user.gender" type="radio"/>
      </form>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      users: {
        type:Array,
        required: false
      },
      user: {
        type: Object,
        required: true
      }
    },
    data: function () {
      return {
        title: 'Form',
        summary: 'Form Summary',
        states: ['...', 'NE', 'NY', 'IO', 'TX', 'TN', 'FL', 'MI', 'MIS', 'MN', 'MS']
      }
    },
    methods: {
      // post:function() {
      //   this.$http.post('https://jsonplaceholder.typicode.com/posts'. {
      //     title: this.title,
      //     body: this.user,
      //     userId: 1;
      //   }).then(function (data) {
      //     console.log(data);
      //   })
      // }
    }
  }

</script>

<style scoped>
  #form{
    background-color: aliceblue;
  }
  #form-input {
    border: 1px solid black;
    padding: 10px 20px;
  }
  h2{
    text-align: center;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea{
    display: block;
    width: 20%;
    padding: 8px;
  }
  input[type="password"], textarea{
    display: block;
    width: 20%;
    padding: 8px;
  }
  input[type="radio"]{
    display: inline;
  }
  select{
    display: block;
    width: 20%;
    padding: 8px;
  }
  button{
    background-color: lightgray;
    margin-left: 50%;
    display: block;
    font-size: large;
  }
</style>
