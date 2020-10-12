<template>
  <v-btn text :color="color" :to="page">{{ content }}</v-btn>
</template>

<script>
export default {
  props: ["color", "content", "page"],
};
</script>
