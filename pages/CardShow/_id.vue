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
  // data: () => ({
  //   summary: "",
  // }),
  // components: {
  //   Card,
  // },
  // mixins: [checkLogin],
  // created() {
  //   let id = this.$route.params.Id;
  //   const db = firebase.firestore();
  //   db.collection("posts")
  //     .where("id", "==", Number(id))
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         var data = doc.data();
  //         this.summary = {
  //           id: data.id,
  //           user: data.user,
  //           comment: data.comment,
  //           image: data.image,
  //           year: data.year,
  //           month: data.month,
  //           day: data.day,
  //           count: data.count,
  //         };
  //       });
  //     });
  // },
};
</script>
