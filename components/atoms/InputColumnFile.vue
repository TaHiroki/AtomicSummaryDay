<template>
  <v-app>
    <v-file-input
      type="file"
      accept="image/jpeg, image/png"
      :label="label"
    ></v-file-input>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    required: (value) => !!value || "必ず入力してください", // 入力必須の制約
  }),
  props: ["label"],
};
</script>
