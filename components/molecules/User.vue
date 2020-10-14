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
      <slot></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
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
  }),
  props: ["currentuser", "photo"],
  created() {
    if (this.currentuser) {
      this.name = this.currentuser.displayName;
      this.email = this.currentuser.email;
    }
  },
  updated() {
    if (this.currentuser) {
      this.image = this.photo;
    }
  },
  methods: {
    createUser() {
      this.$refs.ChildNewName.sendData();
      this.$refs.ChildNewEmail.sendData();
      this.$refs.ChildNewPassword.sendData();

      console.log("createUser　中間地点");

      this.$emit("userData", {
        name: this.name,
        email: this.email,
        password: this.password,
        image: this.image,
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
