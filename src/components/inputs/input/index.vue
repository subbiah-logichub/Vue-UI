<template>
  <label class="asv-input-wrapper">
    <span class="asv-input-label" v-if="props.label">{{ props.label }}</span>
    <input class="asv-input" :value="props.value" @input="onValueChange" />
    <span class="asv-input-error" v-if="props.error">{{ props.error }}</span>
  </label>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface IProps {
  value: string;
  label?: string;
  error?: string;
}

interface IEmits {
  (e: "update:value", v: string): void;
}

const props = defineProps<IProps>();
const emits = defineEmits<IEmits>();

function onValueChange(event: Event) {
  const target = event.target as HTMLInputElement;

  emits("update:value", target.value);
}
</script>
<style lang="scss">
.asv-input {
  display: flex;
  flex-direction: column;
  background: var(--asv-surface-level-2);
  border: 1px solid var(--asv-border-normal);
  padding: $spacing-4;
  border-radius: 4px;
  outline: none;

  &:hover {
    background: var(--asv-surface-level-1);
    border-color: var(--asv-border-hover);
  }

  &:active,
  &:focus {
    background: var(--asv-surface-level-1);
    border-color: var(--asv-border-active);
  }

  &-wrapper {
    position: relative;
  }

  &-error {
    &.as-text {
      color: red;
    }
  }
}
</style>
