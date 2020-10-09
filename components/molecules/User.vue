<template>
  <v-card shaped>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="4">
            <AutoImage :image="image"></AutoImage>
          </v-col>
          <v-col cols="8">
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
              @getData="setDataName"
            ></InputColumnText>
            <InputColumnText
              label="e-mail"
              ref="ChildNewEmail"
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
      this.image = value;
    },
  },
};
</script>
