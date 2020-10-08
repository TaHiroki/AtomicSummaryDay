<template>
  <v-text-field :prepend-icon="icon" :label="label"> </v-text-field>
</template>

<script>
export default {
  props: ["icon", "label"],
};
</script>
