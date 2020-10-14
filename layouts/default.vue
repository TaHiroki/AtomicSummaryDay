<template>
  <HeaderHome></HeaderHome>
</template>

<script>
import HeaderHome from "../components/organisms/HeaderHome";

export default {
  mounted() {
    setTimeout(() => {
      console.log("ログインチェック。。。");
      console.log(this.$store.state.currentuser);
      if (!this.$store.state.currentuser) {
        console.log("ログインしてください。");
        this.$router.push({ name: "Top" });
      }
    }, 0);
  },
};
</script>
