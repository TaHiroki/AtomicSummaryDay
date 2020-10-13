<template>
  <v-app>
    <HeaderTop color="light-blue lighten-1"></HeaderTop>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HeaderTop from "../components/organisms/HeaderTop";

export default {};
</script>

<style>
a {
  text-decoration: none;
}
</style>
