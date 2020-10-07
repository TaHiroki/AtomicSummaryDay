<template>
  <v-img :class="text" :src="image">
    <slot></slot>
  </v-img>
</template>

<script>
export default {
  props: ["image", "text"],
};
</script>
