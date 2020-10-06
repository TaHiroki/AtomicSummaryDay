<template>
  <v-app>
    <v-text-field
      :prepend-icon="icon"
      :rules="[required]"
      v-model="value"
      :label="label"
    ></v-text-field>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    value: "",
    required: (value) => !!value || "必ず入力してください", // 入力必須の制約
  }),
  props: ["icon", "label"],
};
</script>
