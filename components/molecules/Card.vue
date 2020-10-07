<template>
  <v-card hover class="mx-auto" max-width="400">
    <DisplayImage text="white--text align-end" :image="summary.image">
      <v-card-title
        >{{ summary.year }}/{{ summary.month }}/{{ summary.day }}</v-card-title
      >
    </DisplayImage>
    <v-card-actions>
      <v-spacer></v-spacer>
      <template>
        <template v-if="summary.count">
          <Heart color="pink accent-3" :count="summary.count"></Heart>
          <Count></Count>
        </template>
        <template v-else>
          <Heart color="grey lighten-1"></Heart>
          <Count count="0"></Count>
        </template>
      </template>
      <template>
        <template v-if="summary.count">
          <Heart color="pink accent-3"></Heart>
          <Count :count="summary.count"></Count>
        </template>
        <template v-else>
          <Heart color="grey lighten-1"></Heart>
          <Count count="0"></Count>
        </template>
      </template>
    </v-card-actions>
    <slot></slot>
  </v-card>
</template>

<script>
import DisplayImage from "../atoms/DisplayImage";
import Heat from "../atoms/Heart";
import Count from "../atoms/Count";

export default {
  props: ["summary"],
  // data: () => ({
  //   currentuser: "",
  // }),
  // props: ["summary", "count"],
  // created() {
  //   this.currentuser = sessionStorage.getItem("currentuser");
  // },
  // methods: {
  //   good() {
  //     this.currentuser = JSON.parse(sessionStorage.getItem("currentuser"));
  //     const db = firebase.firestore();
  //     let dbGoods = db.collection("goods");
  //     dbGoods
  //       .add({
  //         user_id: this.currentuser.uid,
  //         post_id: this.summary.id,
  //       })
  //       .then((ref) => {
  //         console.log("いいね！しました");
  //       })
  //       .catch((error) => {
  //         console.log("いいね！はエラーです");
  //       });
  //     db.collection("posts")
  //       .where("id", "==", this.summary.id)
  //       .get()
  //       .then((query) => {
  //         query.forEach((doc) => {
  //           let post = db.collection("posts").doc(String(doc.ref.id));
  //           post.update({
  //             count: this.summary.count + 1,
  //           });
  //         });
  //         this.$router.go("/CardShow/" + this.summary.id);
  //       });
  //   },
  //   notGood() {
  //     this.currentuser = JSON.parse(sessionStorage.getItem("currentuser"));
  //     const db = firebase.firestore();
  //     db.collection("goods")
  //       .where("user_id", "==", this.currentuser.uid)
  //       .where("post_id", "==", this.summary.id)
  //       .get()
  //       .then((query) => {
  //         query.forEach((doc) => {
  //           let post = db.collection("goods").doc(String(doc.ref.id));
  //           post
  //             .delete()
  //             .then(() => {
  //               console.log("いいねを消しました。");
  //             })
  //             .catch((error) => {
  //               console.log("いいねを消せませんでした。");
  //             });
  //         });
  //         db.collection("posts")
  //           .where("id", "==", this.summary.id)
  //           .get()
  //           .then((query) => {
  //             query.forEach((doc) => {
  //               let post = db.collection("posts").doc(String(doc.ref.id));
  //               post.update({
  //                 count: this.summary.count - 1,
  //               });
  //             });
  //             this.$router.go("/CardShow/" + this.summary.id);
  //           });
  //       });
  //   },
  // },
};
</script>
