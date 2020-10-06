<template>
  <v-card>
    <v-card-title class="light-blue lighten-1">今日という日を投稿</v-card-title>
    <v-container>
      <v-row class="mx-2">
        <v-col align="center" justify="center">
          <AutoImage></AutoImage>
        </v-col>
        <v-col cols="12">
          <v-form ref="test_form">
            <InputColumnFile label="投稿画像"></InputColumnFile>
            <InputColumnText
              icon="mdi-comment-edit"
              label="コメント"
            ></InputColumnText>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <DecisionBtn color="primary" content="戻る"></DecisionBtn>
      <DecisionBtn content="投稿"></DecisionBtn>
      <!-- <v-btn text color="primary" @click="back">戻る</v-btn>
      <v-btn text @click="saveSummary">投稿</v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
import InputColumnText from "../atoms/InputColumnText";
import InputColumnFile from "../atoms/InputColumnFile";
import AutoImage from "../atoms/AutoImage";
import DecisionBtn from "../atoms/DecisionBtn";

export default {
  data: () => ({
    dialog: false,
  }),
  //   created() {
  //     this.currentuser = JSON.parse(sessionStorage.getItem("currentuser"));

  //     const db = firebase.firestore();
  //     db.collection("posts")
  //       .orderBy("id", "desc")
  //       .limit(1)
  //       .get()
  //       .then((query) => {
  //         query.forEach((doc) => {
  //           var data = doc.data();
  //           if (data.id) {
  //             this.card.id = data.id + 1;
  //           } else {
  //             this.card.id = 0;
  //           }
  //         });
  //       });
  //   },
  //   methods: {
  //     getBase64(file) {
  //       return new Promise((resolve, reject) => {
  //         const reader = new FileReader();
  //         reader.readAsDataURL(file);
  //         reader.onload = () => resolve(reader.result);
  //         reader.onerror = (error) => reject(error);
  //       });
  //     },
  //     onImageChange(e) {
  //       if (e) {
  //         const images = e;
  //         this.getBase64(images).then((image) => (this.card.image = image));
  //       } else {
  //         this.card.image = "";
  //       }
  //     },
  //     saveSummary() {
  //       if (this.$refs.test_form.validate()) {
  //         if (this.card.image) {
  //           const db = firebase.firestore();
  //           let dbPosts = db.collection("posts");
  //           dbPosts
  //             .add({
  //               comment: this.card.comment,
  //               image: this.card.image,
  //               user: this.currentuser.name,
  //               year: this.today.year,
  //               month: this.today.month,
  //               day: this.today.day,
  //               id: this.card.id,
  //               count: 0,
  //             })
  //             .then((ref) => {
  //               sessionStorage.setItem("flash", "投稿しました。");
  //               console.log("カードを登録できました");
  //               this.$emit("daialogChange", this.dialog);
  //               this.card.comment = "";
  //               this.card.image = "";
  //               this.$router.go({ name: "index" });
  //             })
  //             .catch((error) => {
  //               console.log(`データの登録に失敗しました`);
  //             });
  //         }
  //       }
  //     },
  //     back() {
  //       this.card.comment = "";
  //       this.card.image = "";
  //       this.$emit("daialogChange", this.dialog);
  //     },
  //   },
};
</script>
