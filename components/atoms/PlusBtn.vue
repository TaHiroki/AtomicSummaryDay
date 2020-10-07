<template>
  <v-btn bottom :color="color" dark fab fixed right>
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: ["color"],
};
</script>
