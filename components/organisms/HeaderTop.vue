<template>
  <v-app-bar :color="color">
    <v-container>
      <v-row justify="center">
        <v-col cols="3">
          <span class="hidden-sm-and-down">SummaryDay</span>
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
