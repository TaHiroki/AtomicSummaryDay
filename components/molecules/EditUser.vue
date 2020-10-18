<template>
  <v-card shaped>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="3">
            <AutoImage :image="image"></AutoImage>
          </v-col>
          <v-col cols="6">
            <InputColumnFile
              label="画像"
              ref="ChildNewfile"
              @getData="setDatafile"
            ></InputColumnFile>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <InputColumnText
              label="ユーザーネーム"
              ref="ChildNewName"
              :data="name"
              @getData="setDataName"
            ></InputColumnText>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <DecisionBtn
        @click.native="updateUser"
        color="primary"
        content="変更"
      ></DecisionBtn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from "@/plugins/firebase";
import InputColumnText from "../atoms/InputColumnText";
import DecisionBtn from "../atoms/DecisionBtn";
import InputColumnField from "../atoms/InputColumnFile";
import AutoImage from "../atoms/AutoImage";

export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
    image: "",
    currentuser: "",
    indicate: 0,
  }),
  mounted() {
    setTimeout(() => {
      this.currentuser = this.$store.state.currentuser;
      if (this.currentuser) {
        this.name = this.currentuser.name;
      }

      let currentuser = this.$store.state.currentuser;
      const db = firebase.firestore();
      let dbUsers = db.collection("users");
      db.collection("users")
        .where("uid", "==", currentuser.uid)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            let data = doc.data();
            this.image = data.image;
          });
        });
    }, 10);
  },
  methods: {
    updateUser() {
      this.$refs.ChildNewName.sendData();

      let user = firebase.auth().currentUser;

      user
        .updateProfile({
          displayName: this.name,
        })
        .then((result) => {
          console.log("name　更新しました");
        })
        .catch(function (error) {
          console.log("name　更新できませんでした");
        });

      if (this.image) {
        const db = firebase.firestore();
        let dbUsers = db.collection("users");
        dbUsers
          .where("uid", "==", this.$store.state.currentuser.uid)
          .get()
          .then((query) => {
            query.forEach((doc) => {
              dbUsers.doc(String(doc.ref.id)).update({
                image: this.image,
              });
              console.log("imageを変更しました");
            });
          });
      }
    },
    setDataName(value) {
      this.name = value;
    },
    setDataEmail(value) {
      this.email = value;
    },
    setDataPassword(value) {
      this.password = value;
    },
    setDatafile(value) {
      this.indicate = 1;
      this.image = value;
    },
  },
};
</script>

<style scoped>
/*　エラーが出ているが、子コンポーネントのCSSを上書き*/
>>> .child_image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
