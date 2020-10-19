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
            <InputColumnText
              label="e-mail"
              ref="ChildNewEmail"
              :data="email"
              @getData="setDataEmail"
            ></InputColumnText>
            <InputColumnText
              class="describe"
              label="password"
              ref="ChildNewPassword"
              @getData="setDataPassword"
            ></InputColumnText>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <DecisionBtn
        color="primary"
        content="戻る"
        page="{name: 'Top'}"
      ></DecisionBtn>
      <DecisionBtn content="新規登録" @click.native="createUser"></DecisionBtn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from "@/plugins/firebase.js";
import DecisionBtn from "../atoms/DecisionBtn";
import setStoreCurrentuser from "../mixins/setStoreCurrentuser";
import InputColumnText from "../atoms/InputColumnText";
import InputColumnField from "../atoms/InputColumnFile";
import AutoImage from "../atoms/AutoImage";

export default {
  layout: "top",
  data: () => ({
    name: "",
    email: "",
    password: "",
    image: "",
    currentuser: "",
    indicate: 0,
  }),
  mixins: [setStoreCurrentuser],
  updated() {
    if (this.indicate == 0) {
      this.image = this.photo;
    }
  },
  methods: {
    createUser() {
      this.$refs.ChildNewName.sendData();
      this.$refs.ChildNewEmail.sendData();
      this.$refs.ChildNewPassword.sendData();

      console.log("user " + this.name);
      console.log("user " + this.email);
      console.log("user " + this.password);

      let promise = Promise.resolve();
      promise.then(this.nweUser()).then(this.saveColectionUsers());
    },
    nweUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          let user = firebase.auth().currentUser;

          user.updateProfile({
            displayName: this.name,
          });
          console.log("名前を変更しました");
          this.$store.dispatch("getCurrentuser", {
            name: this.name,
            email: this.email,
            uid: this.email,
          });
          sessionStorage.setItem("flash", "新規作成しました！");
          window.location.href = "/home";
        });
    },
    saveColectionUsers() {
      const db = firebase.firestore();
      let dbUsers = db.collection("users");
      dbUsers
        .add({
          image: this.image,
          uid: this.email,
        })
        .then((ref) => {
          console.log("イメージを登録できました");
        })
        .catch((error) => {
          console.log(`データの登録に失敗しました`);
        });
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

