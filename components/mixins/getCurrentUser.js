import firebase from "@/plugins/firebase.js";

export default {
  data: () => ({
    uid: ""
  }),
  methods: {
    getCurrentUser() {
      let user = firebase.auth().currentUser;
      let uid
      user.providerData.forEach((profile) => {
        uid = profile.uid
      });
      if (user != null) {
        let name = user.displayName;
        let email = user.email;
        return {
          name: name,
          email: email,
          uid: uid
        }
      } else {
        console.log("ログインしていません")
      }
    },
  }
}
