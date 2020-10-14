<template>
  <v-card>
    <v-card-title class="light-blue lighten-1">今日という日を投稿</v-card-title>
    <v-container>
      <v-row class="mx-2">
        <v-col align="center" justify="center">
          <AutoImage :image="image"></AutoImage>
        </v-col>
        <v-col cols="12">
          <InputColumnFile
            ref="ChildFile"
            label="投稿画像"
            @getData="setDataFile"
          ></InputColumnFile>
          <InputColumnText
            ref="ChildComment"
            icon="mdi-comment-edit"
            label="コメント"
            @getData="setDataComment"
          ></InputColumnText>
        </v-col>
      </v-row>
    </v-container>
    <v-card-actions>
      <v-spacer></v-spacer>
      <DecisionBtn
        color="primary"
        content="戻る"
        @click.native="back"
      ></DecisionBtn>
      <DecisionBtn content="投稿" @click.native="createCard"></DecisionBtn>
    </v-card-actions>
  </v-card>
</template>

<script>
import firebase from "@/plugins/firebase";
import InputColumnText from "../atoms/InputColumnText";
import InputColumnFile from "../atoms/InputColumnFile";
import AutoImage from "../atoms/AutoImage";
import DecisionBtn from "../atoms/DecisionBtn";

export default {
  data: () => ({
    dialog: false,
    image: "",
    comment: "",
    day: "",
    id: "",
  }),
  mounted() {
    setTimeout(() => {
      const db = firebase.firestore();
      db.collection("posts")
        .orderBy("id", "desc")
        .limit(1)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            let data = doc.data();
            if (data.id) {
              this.id = Number(data.id) + 1;
            } else {
              this.id = 0;
            }
          });
        });
    });
  },
  methods: {
    createCard() {
      this.$refs.ChildFile.sendData();
      this.$refs.ChildComment.sendData();

      this.day = this.$store.state.day;

      this.saveCard();
    },
    saveCard() {
      if (this.image) {
        const db = firebase.firestore();
        let dbPosts = db.collection("posts");
        dbPosts
          .add({
            comment: this.comment,
            image: this.image,
            user: this.$store.state.currentuser.name,
            year: this.day.year,
            month: this.day.month,
            day: this.day.day,
            id: this.id,
            count: 0,
          })
          .then((ref) => {
            sessionStorage.setItem("flash", "投稿しました。");
            console.log("カードを登録できました");
            this.$emit("daialogChange", false);
            this.comment = "";
            this.image = "";
            this.$router.go({ name: "index" });
          })
          .catch((error) => {
            console.log(`データの登録に失敗しました`);
          });
      }
    },
    setDataFile(data) {
      this.image = data;
    },
    setDataComment(data) {
      this.comment = data;
    },
    back() {
      this.comment = "";
      this.image = "";
      this.$emit("daialogChange", false);
    },
  },
};
</script>
