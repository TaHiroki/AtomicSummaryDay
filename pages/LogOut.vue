<template>
  <p>ログアウトしています…</p>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch("getCurrentuser", "");
          console.log("ログアウトしました");
          this.$router.push({ name: "Top" });
        })
        .catch((error) => {
          console.log(`ログアウト時にエラーが発生しました (${error})`);
        });
    });
  },
};
</script>
