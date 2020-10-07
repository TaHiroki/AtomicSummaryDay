<template>
  <v-app>
    <v-container>
      <v-row>
        <template v-for="summary in summaries">
          <v-col cols="4" :key="summary.id">
            <Card :summary="summary"></Card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import firebase from "@/plugins/firebase";
import "firebase/firestore";
import Card from "../components/molecules/Card";

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
