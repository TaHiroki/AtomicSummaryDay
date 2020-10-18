<template>
  <v-app-bar :color="color">
    <v-container>
      <v-row justify="left">
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
