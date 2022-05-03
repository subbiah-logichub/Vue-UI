<template>
  <label
    class="asv-radio-input-label"
    :for="props.id || props.value"
    @click="handleOnChecked()"
  >
    <input
      class="asv-radio-input"
      type="radio"
      :id="props.id || props.value"
      :name="props.name || props.label"
      :value="props.value"
      :checked="props.checked"
    />
    <span class="asv-radio-input-label-text">{{ label }}</span>
  </label>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

type stringOrNumber = string | number;

interface IProps {
  id?: stringOrNumber;
  label: stringOrNumber;
  name?: stringOrNumber;
  value?: stringOrNumber;
  checked: boolean;
}

interface IEmits {
  (e: "onChecked", value: boolean): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();

function handleOnChecked() {
  emit("onChecked", !props.checked);
}
</script>
<style lang="scss">
.asv-radio-input {
  margin-bottom: -$spacing-2;

  &-label {
    align-items: center;
    display: flex;
    margin-bottom: $spacing-8;

    &-text {
      margin-left: $spacing-4;
    }
  }
}
</style>
