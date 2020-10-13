<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <Card :summary="summary">
            <v-card-text>
              {{ summary.comment }}
            </v-card-text>
          </Card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import firebase from "@/plugins/firebase.js";
import Card from "../../components/molecules/Card";

export default {
  data: () => ({
    summary: "",
  }),
  mounted() {
    setTimeout(() => {
      let id = this.$route.params["id"];
      const db = firebase.firestore();
      db.collection("posts")
        .where("id", "==", Number(id))
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let data = doc.data();
            this.summary = data;
          });
        });
    }, 10);
  },
};
</script>
