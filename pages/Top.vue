<template>
  <v-app>
    <v-img id="login" src="/image/toppage.jpg"></v-img>
    <div id="text">
      <h1>今日１日で最高な出来事を</h1>
      <h3>投稿は１日に１回・編集も削除もできません</h3>
      <h3>今日という日の最も印象的なことを投稿して共有しましょう</h3>
    </div>

    <div id="btn-set">
      <v-container>
        <v-row justify="center">
          <CircleBtn
            id="btn-login"
            color="primary"
            name="ログイン"
            @click.native="dialog = !dialog"
          ></CircleBtn>
          <nuxt-link :to="{ name: 'CreateUser' }">
            <CircleBtn id="btn-new" color="success" name="新規登録"></CircleBtn>
          </nuxt-link>
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
      let testemail = "tester2@gmail.com";
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
            console.log("set currentuser: " + this.$store.state.currentuser);
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
  height: 600px;
  background-size: 100% auto;
}

#btn-set {
  text-align: center;
  margin-bottom: 50px;
}

#text {
  width: 100%;
  text-align: center;
  margin: 30px 0;
  color: black;
}

#text h1 {
  margin: 20px 0;
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
