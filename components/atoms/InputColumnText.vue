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
  props: ["icon", "label", "data"],
  created() {
    this.value = this.data;
  },
  methods: {
    sendData() {
      this.$emit("getData", this.value);
    },
  },
};
</script>
