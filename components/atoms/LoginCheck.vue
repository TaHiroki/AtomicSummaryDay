<template></template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      console.log("ログインチェック。。。");
      console.log(this.$store.state.currentuser);
      if (!this.$store.state.currentuser) {
        console.log("ログインしてください。");
        this.$router.push({ name: "Top" });
      }
    }, 10);
  },
};
</script>
