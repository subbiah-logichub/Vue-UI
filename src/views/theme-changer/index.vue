<template>
  <div class="asv-theme-changer">
    <button @click="showModal = !showModal" class="asv-theme-changer-toggle">
      +
    </button>
    <div v-if="showModal" class="asv-theme-changer-modal">
      <ASVRadioInputs :options="themeOptions" v-model:value="value" />
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

import { ASVRadioInputs } from "@/components";

import { themeOptions } from "./constants";

const store = useStore();
const showModal = ref(false);

const value = computed({
  get() {
    return store.getters["themeChanger/getTheme"];
  },
  set(setTheme) {
    store.dispatch("themeChanger/setTheme", setTheme);
  },
});
</script>

<style lang="scss">
.asv-theme-changer {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: gray;
  display: flex;
  align-items: center;
  justify-content: center;

  &-toggle {
    margin-bottom: $spacing-4;
  }

  &-modal {
    width: max-content;
    padding: 20px;
    position: absolute;
    right: 0;
    top: 40px;
    background: var(--asv-surface-level-1);
    border-radius: 12px;
  }
}
</style>
