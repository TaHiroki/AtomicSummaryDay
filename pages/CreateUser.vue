<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col align="center" justify="center">
          <NewUser></NewUser>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import firebase from "@/plugins/firebase.js";
import NewUser from "../components/molecules/NewUser";

export default {
  layout: "top",
};
</script>
