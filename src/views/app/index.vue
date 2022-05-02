<template>
  <div class="asv">
    <nav class="asv-nav"></nav>
    <main class="asv-view">
      <div v-if="showLoading" class="asv-view-loading">Loading...</div>
      <router-view v-else></router-view>
    </main>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import appStore from "./store";

const store = useStore();
const route = useRoute();

const showLoading = computed(() => {
  const isLoading = store.getters["user/getIsLoading"];
  const asynCheckAuth = route.meta.asynCheckAuth;
  return asynCheckAuth ? false : isLoading;
});

onBeforeMount(() => {
  store.registerModule("app", appStore);
  store.dispatch("user/fetchUser");
});

onMounted(() => {
  watchEffect(() => {
    // console.log("sssss", showLoading.value);
  });
});
</script>
<style lang="scss">
body {
  height: 100vh;
  margin: 0;
  width: 100vw;
  background: var(--asv-background);
  color: var(--asv-on-background);
}

#root {
  height: 100%;
  width: 100%;
}

.asv {
  height: 100%;
  width: 100%;
}
</style>
