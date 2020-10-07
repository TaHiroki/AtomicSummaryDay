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
        <v-list-item color="primary">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
        <span class="hidden-sm-and-down">SummaryDay</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <DisplayImage
        image=""
        text="grey lighten-2"
        aspect-ratio="1"
        max-width="50"
        max-height="50"
        id="default-image"
      ></DisplayImage>
    </v-app-bar>

    <Flash></Flash>

    <v-main>
      <router-view></router-view>
    </v-main>

    <template>
      <v-tooltip top color="#FF5722">
        <template v-slot:activator="{ on }">
          <div v-on="on">
            <PlusBtn color="grey" disabled></PlusBtn>
          </div>
        </template>
        <span>投稿は１日１回 編集・削除もできません！お気をつけください！</span>
      </v-tooltip>
    </template>
    <template>
      <PlusBtn color="pink"></PlusBtn>
    </template>

    <v-dialog v-model="dialog" width="800px">
      <DialogCard></DialogCard>
    </v-dialog>
  </v-app>
</template>

<script>
import Flash from "../atoms/Flash";
import PlusBtn from "../atoms/PlusBtn";
import DialogCard from "../molecules/DialogCard";
import DisplayImage from "../atoms/DisplayImage";

export default {
  data: () => ({
    drawer: null,
    dialog: false,
    items: [
      { icon: "mdi-home", text: "Home", link: { name: "index" } },
      {
        icon: "mdi-account",
        text: "アカウント",
        link: { name: "UserHome" },
      },
      { icon: "mdi-cards", text: "他人の日記", link: { name: "AllIndex" } },
    ],
  }),
  // components: {
  //   Dialog,
  //   CardBtn,
  //   Flash,
  // },
  //   created() {
  //     var today = new Date();
  //     this.today.year = today.getFullYear();
  //     this.today.month = today.getMonth() + 1;
  //     this.today.day = today.getDate();

  //     this.currentuser = JSON.parse(sessionStorage.getItem("currentuser"));
  //     this.getPhoto();
  //   },
  //   methods: {
  //     change(daialog) {
  //       this.dialog = daialog;
  //     },
  //     getPhoto() {
  //       const db = firebase.firestore();
  //       let dbUsers = db.collection("users");

  //       dbUsers
  //         .where("uid", "==", this.currentuser.uid)
  //         .get()
  //         .then((query) => {
  //           query.forEach((doc) => {
  //             this.image = doc.data().image;
  //           });
  //         });
  //     },
  //     logOut() {
  //       firebase.auth().onAuthStateChanged((user) => {
  //         firebase
  //           .auth()
  //           .signOut()
  //           .then(() => {
  //             sessionStorage.removeItem("currentuser");
  //             console.log("ログアウトしました");
  //             this.$router.go({ name: "TopPage" });
  //           })
  //           .catch((error) => {
  //             console.log(`ログアウト時にエラーが発生しました (${error})`);
  //           });
  //       });
  //     },
  //   },
};
</script>

<style  scoped>
#default-image {
  border-radius: 50%;
}
</style>
