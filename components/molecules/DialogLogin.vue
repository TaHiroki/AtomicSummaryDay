<template>
  <v-card>
    <v-card-title class="light-blue lighten-1">ログイン</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col clos="11">
            <InputColumnText
              ref="ChildEmail"
              icon="mdi-email"
              label="e-mail"
              @getData="setDataEmail"
            ></InputColumnText>
            <InputColumnText
              ref="ChildPassword"
              icon="mdi-lock-question"
              label="password"
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
        @click.native="change"
      ></DecisionBtn>
      <DecisionBtn content="ログイン" @click.native="signIn"></DecisionBtn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from "@/plugins/firebase.js";
import InputColumnText from "../atoms/InputColumnText";
import DecisionBtn from "../atoms/DecisionBtn";
import setStoreCurrentuser from "../mixins/setStoreCurrentuser";

export default {
  data: () => ({
    email: "",
    password: "",
  }),
  mixins: [setStoreCurrentuser],
  methods: {
    change() {
      this.$emit("changeDialog");
    },
    signIn() {
      this.$refs.ChildEmail.sendData();
      this.$refs.ChildPassword.sendData();

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            sessionStorage.setItem("flash", "ログインしました！");
            this.setStoreCurrentuser();
            this.$router.push({ name: "Home" });
          },
          (err) => {
            alert("ログインできませんでした。");
          }
        );
    },
    setDataEmail(value) {
      this.email = value;
    },
    setDataPassword(value) {
      this.password = value;
    },
  },
};
</script>
