<template>
  <v-app>
    <div id="login">
      <div id="btn-set">
        <v-container>
          <v-row justify="center">
            <CircleBtn
              id="btn-login"
              color="primary"
              name="ログイン"
              @click.native="dialog = !dialog"
            ></CircleBtn>
            <CircleBtn id="btn-new" color="success" name="新規登録"></CircleBtn>
          </v-row>
          <v-row justify="center">
            <CircleBtn
              id="btn-sample"
              color="grey lighten-2"
              name="お試しログイン"
              @click.native="sampleLogIn"
            ></CircleBtn>
          </v-row>
        </v-container>
      </div>
    </div>

    <v-dialog v-model="dialog" width="600px">
      <DialogLogin @changeDialog="change"></DialogLogin>
    </v-dialog>
  </v-app>
</template>

<script>
import firebase from "@/plugins/firebase.js";
import CircleBtn from "../components/atoms/CircleBtn";
import DialogLogin from "../components/molecules/DialogLogin";
import setStoreCurrentuser from "../components/mixins/setStoreCurrentuser";

export default {
  layout: "top",
  data: () => ({
    dialog: false,
  }),
  mixins: [setStoreCurrentuser],
  methods: {
    change() {
      this.dialog = !this.dialog;
    },
    sampleLogIn() {
      let testemail = "tester@gmail.com";
      let testpassword = "test03";

      firebase
        .auth()
        .signInWithEmailAndPassword(testemail, testpassword)
        .then(
          (user) => {
            sessionStorage.setItem(
              "flash",
              "テストユーザーでログインしました！"
            );
            this.setStoreCurrentuser();
            this.$router.push({ name: "Home" });
          },
          (err) => {
            alert("ログインできませんでした。");
          }
        );
    },
  },
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 800px;
  background-size: 100% auto;
  background-image: url("/image/toppage.jpg");
  text-align: center;
}

#btn-set {
  margin-top: 500px;
}

#btn-login {
  margin-right: 30px;
}

#btn-sample {
  margin-top: 20px;
}

img {
  width: 100%;
}
</style>
