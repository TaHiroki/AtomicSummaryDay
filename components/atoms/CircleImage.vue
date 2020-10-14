<template>
  <v-img :class="text" id="default-image" :src="image"> </v-img>
</template>

<script>
export default {
  props: ["image", "text"],
};
</script>

<style scoped>
#default-image {
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
}
</style>

