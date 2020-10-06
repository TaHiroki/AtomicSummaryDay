<template>
  <v-card>
    <v-card-title class="light-blue lighten-1">ログイン</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col clos="11">
            <InputColumnText icon="mdi-email" label="e-mail"></InputColumnText>
            <InputColumnText
              icon="mdi-lock-question"
              label="password"
            ></InputColumnText>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <DecisionBtn color="primary" content="戻る"></DecisionBtn>
      <DecisionBtn content="ログイン"></DecisionBtn>
      <!-- <v-btn text color="primary" @click="back">戻る</v-btn>
        <v-btn text @click="signIn">ログイン</v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
import InputColumnText from "../atoms/InputColumnText";
import DecisionBtn from "../atoms/DecisionBtn";

export default {
  //   data: () => ({
  //     email: "",
  //     password: "",
  //     daialog: false,
  //   }),
  //   mixins: [getCurrentUser],
  //   methods: {
  //     back() {
  //       this.$emit("daialogChange", this.daialog);
  //     },
  //     signIn() {
  //       firebase
  //         .auth()
  //         .signInWithEmailAndPassword(this.email, this.password)
  //         .then(
  //           (user) => {
  //             let currentuser = this.getCurrentUser();
  //             sessionStorage.setItem("flash", "ログインしました！");
  //             sessionStorage.setItem(
  //               "currentuser",
  //               JSON.stringify({
  //                 name: currentuser.name,
  //                 email: this.email,
  //                 uid: currentuser.uid,
  //               })
  //             );
  //             //sessionへはstringのみなのでオブジェクトは無理
  //             //オブジェクトをjsonに変換することで使える
  //             this.$router.push("/");
  //           },
  //           (err) => {
  //             alert(err.message);
  //           }
  //         );
  //     },
  //   },
};
</script>
