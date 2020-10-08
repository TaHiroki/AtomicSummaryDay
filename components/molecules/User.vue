<template>
  <v-card shaped>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="4">
            <AutoImage></AutoImage>
          </v-col>
          <v-col cols="8">
            <InputColumnText label="画像"></InputColumnText>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <InputColumnText label="ユーザーネーム"></InputColumnText>
            <InputColumnText label="e-mail"></InputColumnText>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <slot></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
import InputColumnText from "../atoms/InputColumnText";
import DecisionBtn from "../atoms/DecisionBtn";
import InputColumnField from "../atoms/InputColumnFile";
import AutoImage from "../atoms/AutoImage";

export default {};
</script>
