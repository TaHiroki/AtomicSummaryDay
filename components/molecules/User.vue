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
    currentuser: "",
    indicate: 0,
  }),
  props: ["photo"],
  mounted() {
    setTimeout(() => {
      this.currentuser = this.$store.state.currentuser;
      if (this.currentuser) {
        this.name = this.currentuser.name;
        this.email = this.currentuser.email;
      }
    }, 10);
  },
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
