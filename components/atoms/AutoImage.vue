<template>
  <v-img :src="image" aspect-ratio="1" class="grey lighten-2 child_image">
    <template v-slot:placeholder v-if="image">
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  props: ["image"],
};
</script>

<style scoped>
.child_image {
  width: 500px;
  height: 400px;
}
</style>
