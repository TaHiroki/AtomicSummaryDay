import firebase from "@/plugins/firebase.js";

export default {
  data: () => ({
    uid: ""
  }),
  methods: {
    getCurrentUser() {
      let user = firebase.auth().currentUser;
      if (user != null) {
        let name = user.displayName;
        let email = user.email;
        return {
          name: name,
          email: email,
          uid: email
        }
      } else {
        console.log("ログインしていません")
      }
    },
  }
}
