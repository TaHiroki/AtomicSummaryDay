<template>
  <v-img :class="text" id="default-image" :src="image">
    <slot></slot>
  </v-img>
</template>

<script>
export default {
  props: ["image", "text"],
};
</script>

