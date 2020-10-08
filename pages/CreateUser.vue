<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col align="center" justify="center">
          <User>
            <DecisionBtn color="primary" content="戻る"></DecisionBtn>
            <DecisionBtn content="新規登録"></DecisionBtn>
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

export default {
  // data: () => ({
  //   username: "",
  //   email: "",
  //   password: "",
  //   image: "",
  // }),
  // methods: {
  //   getBase64(file) {
  //     return new Promise((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file);
  //       reader.onload = () => resolve(reader.result);
  //       reader.onerror = (error) => reject(error);
  //     });
  //   },
  //   onImageChange(e) {
  //     if (e) {
  //       const images = e;
  //       this.getBase64(images).then((image) => (this.image = image));
  //     } else {
  //       this.image = "";
  //     }
  //   },
  //   signUp() {
  //     let email = this.email;
  //     let password = this.password;
  //     let username = this.username;
  //     // 新規ユーザーを登録
  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then((result) => {
  //         result.user.updateProfile({
  //           displayName: username,
  //         });
  //       });
  //     sessionStorage.setItem(
  //       "currentuser",
  //       JSON.stringify({ name: username, email: email })
  //     );
  //     if (this.image) {
  //       const db = firebase.firestore();
  //       let dbPosts = db.collection("users");
  //       dbPosts
  //         .add({
  //           image: this.image,
  //           uid: this.email,
  //         })
  //         .then((ref) => {
  //           console.log("イメージを登録できました");
  //         })
  //         .catch((error) => {
  //           console.log(`データの登録に失敗しました`);
  //         });
  //       sessionStorage.setItem("flash", "ユーザーを作成しました！");
  //       this.$router.push({ name: "index" });
  //     }
  //   },
  // },
};
</script>
