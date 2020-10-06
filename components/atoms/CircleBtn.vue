<template>
  <v-app>
    <v-btn elevation="2" large rounded :color="color">{{ name }}</v-btn>
  </v-app>
</template>

<script>
export default {
  props: ["name", "color"],
};
</script>
