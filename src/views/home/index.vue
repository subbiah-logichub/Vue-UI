<template>
  <div>ds</div>
  <RenderJsx sdf="eee">
    <div>hello</div>
    <div>world</div>
    <router-link to="chat">chat</router-link>
  </RenderJsx>
  <!-- <ASVRadioInputs :options="options" v-model:value="value" /> -->
  <ASVInput label="asvinput" v-model:value="inputValue" />
</template>
<script setup>
import { watchEffect, ref } from "vue";

import RenderJsx from "./render-setup.vue";
import { ASVRadioInputs, ASVInput } from "@/components";

const options = [
  { label: "11", value: "11", id: "s" },
  { label: "22", value: "22", id: "ss" },
];
const value = ref(options[0].value);
const inputValue = ref("");
watchEffect(() => {
  console.log("inputValue", inputValue.value);
});
</script>

<style lang="scss">
#app {
}
</style>
