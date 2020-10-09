<template>
  <v-file-input
    type="file"
    accept="image/jpeg, image/png"
    :label="label"
    @change="onImageChange"
  ></v-file-input>
</template>

<script>
export default {
  data: () => ({
    image: "",
  }),
  props: ["label"],
  methods: {
    sendData() {
      this.$emit("getData", this.image);
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    onImageChange(e) {
      if (e) {
        const images = e;
        this.getBase64(images).then((image) => {
          this.image = image;
          this.$emit("getData", this.image);
        });
      } else {
        this.image = "";
        this.$emit("getData", this.image);
      }
    },
  },
};
</script>
