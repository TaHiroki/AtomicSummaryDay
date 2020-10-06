<template>
  <v-btn text :color="color">{{ content }}</v-btn>
</template>

<script>
export default {
  props: ["color", "content"],
};
</script>
