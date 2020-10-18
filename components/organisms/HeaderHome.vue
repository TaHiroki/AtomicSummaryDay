<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item
            :key="item.text"
            :to="item.link"
            color="light-blue lighten-1"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="light-blue lighten-1"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">The best day</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <CircleImage
        :image="image"
        text="grey lighten-2"
        aspect-ratio="1"
      ></CircleImage>
    </v-app-bar>

    <Flash></Flash>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-dialog v-model="dialog" width="800px">
      <DialogCard></DialogCard>
    </v-dialog>
  </v-app>
</template>

<script>
import firebase from "@/plugins/firebase";
import Flash from "../atoms/Flash";
import PlusBtn from "../atoms/PlusBtn";
import DialogCard from "../molecules/DialogCard";
import CircleImage from "../atoms/CircleImage";

export default {
  data: () => ({
    drawer: null,
    dialog: false,
    image: "",
    items: [
      { icon: "mdi-home", text: "Home", link: { name: "Home" } },
      {
        icon: "mdi-account",
        text: "アカウント",
        link: { name: "User" },
      },
      { icon: "mdi-cards", text: "他人の日記", link: { name: "AllCard" } },
      { icon: "mdi-logout", text: "ログアウト", link: { name: "LogOut" } },
    ],
  }),
  created() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    this.$store.dispatch("getDay", {
      year: year,
      month: month,
      day: day,
    });
  },
  mounted() {
    setTimeout(() => {
      let currentuser = this.$store.state.currentuser;
      const db = firebase.firestore();
      let dbUsers = db.collection("users");
      db.collection("users")
        .where("uid", "==", currentuser.uid)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            var data = doc.data();
            this.image = data.image;
          });
        }, 10);
    });
  },
};
</script>
