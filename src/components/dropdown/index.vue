<template>
  <div class="as-dropdown" @contextmenu="openDropdown">{{ children }}</div>
</template>
<script setup lang="ts">
import { useSlots } from "vue";

const children = useSlots()?.default?.() || [];

function openDropdown(
  e: MouseEvent & {
    target: { getBoundingClientRect: () => { bottom: number; right: number } };
  }
) {
  const { bottom, right } = e.target.getBoundingClientRect();
  console.log(bottom, right);
  e.preventDefault();
}
</script>
<style scoped>
.inlin {
  display: inline;
}
</style>
