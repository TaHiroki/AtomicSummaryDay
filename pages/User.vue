<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <User ref="child" :photo="photo" @userData="saveUser">
            <DecisionBtn
              @click.native="updateUser"
              color="primary"
              content="変更"
              page="{ name: 'Home'}"
            ></DecisionBtn>
            <DecisionBtn color="#D50000" content="削除"></DecisionBtn>
          </User>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import firebase from "@/plugins/firebase";
import InputColumnText from "../components/atoms/InputColumnText";
import DecisionBtn from "../components/atoms/DecisionBtn";
import User from "../components/molecules/User";

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
  methods: {
    updateUser() {
      this.$refs.child.createUser();
    },
    saveUser(userdata) {
      // let user = firebase.auth().currentUser;
      // user
      //   .updateProfile({
      //     displayName: userdata.name,
      //   })
      //   .then((result) => {
      //     console.log("name　更新しました");
      //   })
      //   .catch(function (error) {
      //     console.log("name　更新できませんでした");
      //   });

      // user
      //   .updateEmail(userdata.email)
      //   .then((result) => {
      //     console.log("email　更新しました");
      //   })
      //   .catch(function (error) {
      //     console.log("email　更新しました");
      //   });

      if (userdata.image) {
        const db = firebase.firestore();
        let dbUsers = db.collection("users");
        dbUsers
          .where("uid", "==", this.$store.state.currentuser.uid)
          .get()
          .then((query) => {
            query.forEach((doc) => {
              console.log(doc.ref);
            });
          });

        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style scoped>
>>> .describe {
  display: none;
}
</style>
