<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <EditUser :photo="photo"></EditUser>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import firebase from "@/plugins/firebase";
import EditUser from "../components/molecules/EditUser";

export default {
  data: () => ({
    photo: "",
  }),
  mounted() {
    setTimeout(() => {
      let currentuser = this.$store.state.currentuser;
      const db = firebase.firestore();
      let dbUsers = db.collection("users");
      db.collection("users")
        .where("uid", "==", currentuser.uid)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            var data = doc.data();
            this.photo = data.image;
          });
        });
    }, 10);
  },
};
</script>

<style scoped>
>>> .describe {
  display: none;
}
</style>
