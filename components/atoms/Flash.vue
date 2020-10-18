<template>
  <div id="alert" v-if="show">
    <v-alert dense text type="success"> {{ flash }} </v-alert>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    flash: "",
  }),
  mounted() {
    setTimeout(() => {
      let flash = sessionStorage.getItem("flash");
      if (flash) {
        this.show = true;
        this.flash = flash;
        setTimeout(() => {
          this.show = false;
        }, 5000);
        sessionStorage.removeItem("flash");
      }
    }, 10);
  },
};
</script>

<style scoped>
#alert {
  margin-top: 65px;
  text-align: center;
}
</style>
