<template>
  <v-app-bar :color="color">
    <v-container>
      <v-row>
        <v-col cols="3">
          <span class="hidden-sm-and-down">The best day</span>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  props: ["color"],
};
</script>

<style scoped>
span {
  font-size: 30px;
  color: white;
}
</style>
