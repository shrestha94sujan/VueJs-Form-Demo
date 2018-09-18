//externalizing common codes that might have multiple usage
export default {
  computed: {
    //Adding Custom filter that filters out Usernames
    filteredUsernames: function () {
      return this.users.filter((user) => {
        return user.username.match(this.search);
      })
    }
  }
}
