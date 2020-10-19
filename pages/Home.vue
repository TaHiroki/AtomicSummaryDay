<template>
  <v-app>
    <v-container>
      <v-row>
        <template v-for="summary in summaries">
          <v-col cols="6" md="4" :key="summary.id">
            <nuxt-link :to="'/CardShow/' + summary.id">
              <Card :summary="summary"></Card>
            </nuxt-link>
          </v-col>
        </template>
      </v-row>
    </v-container>

    <template v-if="btn">
      <v-tooltip top color="#FF5722">
        <template v-slot:activator="{ on }">
          <div v-on="on">
            <PlusBtn color="grey" disabled></PlusBtn>
          </div>
        </template>
        <span>投稿は１日１回 編集・削除もできません！お気をつけください！</span>
      </v-tooltip>
    </template>
    <template v-else>
      <PlusBtn color="pink" @click.native="daialog = !daialog"></PlusBtn>
    </template>

    <v-dialog v-model="daialog" width="800px">
      <DialogCard @daialogChange="daialogChange"></DialogCard>
    </v-dialog>
  </v-app>
</template>


<script>
import firebase from "@/plugins/firebase";
import Card from "../components/molecules/Card";
import PlusBtn from "../components/atoms/PlusBtn";
import DialogCard from "../components/molecules/DialogCard";

export default {
  data: () => ({
    summaries: [],
    btn: false,
    daialog: false,
  }),
  mounted() {
    setTimeout(() => {
      const currentuser = this.$store.state.currentuser;
      const db = firebase.firestore();
      db.collection("posts")
        .where("user", "==", currentuser.name)
        .orderBy("id", "desc")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            var data = doc.data();
            this.summaries.push(data);
          });
        })
        .catch((error) => {
          console.log(`データの取得に失敗しました`);
        });

      this.checkBtn();
    }, 10);
  },
  methods: {
    daialogChange(daialog) {
      this.daialog = daialog;
    },
    checkBtn() {
      let day = this.$store.state.day;
      const db = firebase.firestore();
      db.collection("posts")
        .where("user", "==", this.$store.state.currentuser.name)
        .orderBy("id", "desc")
        .limit(1)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            let data = doc.data();
            if (
              day.year == data.year &&
              day.month == data.month &&
              day.day == data.day
            ) {
              this.btn = true; //ここで投稿のロック true：ロック
            }
          });
        });
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
