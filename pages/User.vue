<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <User>
            <DecisionBtn color="primary" content="変更"></DecisionBtn>
            <DecisionBtn color="#D50000" content="削除"></DecisionBtn>
          </User>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import InputColumnText from "../components/atoms/InputColumnText";
import DecisionBtn from "../components/atoms/DecisionBtn";
import User from "../components/molecules/User";

export default {
  // data: () => ({
  //   user: {
  //     name: "",
  //     email: "",
  //   },
  //   required: (value) => !!value || "必ず入力してください", // 入力必須の制約
  // }),
  // mixins: [getCurrentUser, checkLogin],
  // created() {
  //   let user = this.getCurrentUser();
  //   this.user.name = user.name;
  //   this.user.email = user.email;
  // },
  // methods: {
  //   submit() {
  //     if (this.$refs.test_form.validate()) {
  //       let user = firebase.auth().currentUser;
  //       user
  //         .updateProfile({
  //           displayName: this.user.name,
  //         })
  //         .then(() => {
  //           console.log("ユーザーnameの更新に成功しました");
  //         })
  //         .catch(function (error) {
  //           console.log("ユーザーnameの更新に失敗しました");
  //         });
  //       user
  //         .updateEmail(this.user.email)
  //         .then(() => {
  //           console.log("ユーザーemailの更新に失敗しました");
  //         })
  //         .catch(function (error) {
  //           console.log("ユーザーemailの更新に失敗しました");
  //         });
  //       this.$router.push({ name: "index" });
  //     }
  //   },
  //   destroy() {},
  // },
};
</script>
