<template>
  <HeaderHome></HeaderHome>
</template>

<script>
import HeaderHome from "../components/organisms/HeaderHome";
export default {
  beforeCreate() {
    if (!this.$store.state.currentuser) {
      console.log("ログインしてください。");
      this.$router.push({ name: "Top" });
    }
  },
};
</script>
