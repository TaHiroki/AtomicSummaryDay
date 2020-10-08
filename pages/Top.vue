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
            ></CircleBtn>
            <CircleBtn id="btn-new" color="success" name="新規登録"></CircleBtn>
          </v-row>
          <v-row justify="center">
            <CircleBtn
              id="btn-sample"
              color="grey lighten-2"
              name="お試しログイン"
            ></CircleBtn>
          </v-row>
        </v-container>
      </div>
    </div>

    <v-dialog v-model="dialog" width="600px">
      <DialogLogin></DialogLogin>
    </v-dialog>
  </v-app>
</template>

<script>
import firebase from "@/plugins/firebase.js";
import CircleBtn from "../components/atoms/CircleBtn";
import DialogLogin from "../components/molecules/DialogLogin";

export default {
  layout: "top",
  data: () => ({
    dialog: false,
  }),

  //   testemail: "tester@gmail.com",
  //   testpassword: "test03",
  // }),
  // mixins: [getCurrentUser],
  // mounted() {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start();

  //     setTimeout(() => this.$nuxt.$loading.finish(), 1000);
  //   });
  // },
  // methods: {
  //   change(daialog) {
  //     this.dialog = daialog;
  //   },
  //   sampleLogIn() {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(this.testemail, this.testpassword)
  //       .then(
  //         (user) => {
  //           let currentuser = this.getCurrentUser();
  //           sessionStorage.setItem(
  //             "flash",
  //             "テストユーザーでログインしました！"
  //           );
  //           sessionStorage.setItem(
  //             "currentuser",
  //             JSON.stringify({
  //               name: currentuser.name,
  //               email: this.email,
  //               uid: currentuser.uid,
  //             })
  //           );
  //           this.$router.push("/");
  //         },
  //         (err) => {
  //           alert(err.message);
  //         }
  //       );
  //   },
  // },
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
