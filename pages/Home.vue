<template>
  <v-app>
    <v-container>
      <v-row>
        <template v-for="summary in summaries">
          <v-col cols="4" :key="summary.id">
            <nuxt-link :to="'/CardShow/' + summary.id">
              <Card :summary="summary"></Card>
            </nuxt-link>
          </v-col>
        </template>
      </v-row>
    </v-container>

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
  </v-app>
</template>

<script>
import firebase from "@/plugins/firebase";
import Card from "../components/molecules/Card";
import PlusBtn from "../components/atoms/PlusBtn";

export default {
  data: () => ({
    summaries: [],
  }),
  created() {
    const db = firebase.firestore();
    db.collection("posts")
      // .orderBy("id", "desc")
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
  },
};
</script>
