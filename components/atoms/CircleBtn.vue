<template>
  <v-btn elevation="2" large rounded :color="color">{{ name }}</v-btn>
</template>

<script>
export default {
  props: ["name", "color"],
};
</script>
