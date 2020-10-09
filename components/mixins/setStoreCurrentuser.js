import getCurrentUser from "./getCurrentUser"

export default {
  mixins: [getCurrentUser],
  methods: {
    setStoreCurrentuser() {
      let currentuser = this.getCurrentUser();
      console.log("カレントユーザー");
      console.log(this.$store.state.currentuser)
      this.$store.dispatch("getCurrentuser", {
        name: currentuser.name,
        email: currentuser.email,
        uid: currentuser.uid,
      });
    }
  }
}
