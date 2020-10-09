<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col align="center" justify="center">
          <User ref="ChildNewUser" @userData="saveUser">
            <DecisionBtn color="primary" content="戻る"></DecisionBtn>
            <DecisionBtn
              content="新規登録"
              @click.native="createUser"
            ></DecisionBtn>
          </User>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import firebase from "@/plugins/firebase.js";
import User from "../components/molecules/User";
import DecisionBtn from "../components/atoms/DecisionBtn";
import setStoreCurrentuser from "../components/mixins/setStoreCurrentuser";

export default {
  mixins: [setStoreCurrentuser],
  methods: {
    createUser() {
      this.$refs.ChildNewUser.createUser();
    },
    saveUser(userdata) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(userdata.email, userdata.password)
        .then((result) => {
          result.user.updateProfile({
            displayName: userdata.name,
          });
        });

      if (userdata.image) {
        const db = firebase.firestore();
        let dbUsers = db.collection("users");
        dbUsers
          .add({
            image: userdata.image,
            uid: userdata.email,
          })
          .then((ref) => {
            console.log("イメージを登録できました");
          })
          .catch((error) => {
            console.log(`データの登録に失敗しました`);
          });

        this.setStoreCurrentuser();

        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
