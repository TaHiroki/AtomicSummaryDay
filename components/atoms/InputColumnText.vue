<template>
  <v-text-field :prepend-icon="icon" :label="label" v-model="value">{{
    value
  }}</v-text-field>
</template>

<script>
export default {
  data: () => ({
    value: "",
  }),
  props: ["icon", "label"],
  methods: {
    sendData() {
      this.$emit("getData", this.value);
    },
  },
};
</script>
