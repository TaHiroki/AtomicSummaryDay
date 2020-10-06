<template>
  <v-app>
    <v-btn text :color="color">戻る</v-btn>
  </v-app>
</template>

<script>
export default {
  props: ["color"],
};
</script>
