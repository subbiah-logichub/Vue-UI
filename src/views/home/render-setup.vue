<template>
  <div>sxx</div>
  <render :children="children" />
</template>
<script>
import { useSlots } from "vue";
import { render } from "./utils";
// const props = defineProps(["sdf"]);
// const children = useSlots()?.default?.() || "No child";

// onMounted(() => {
//   console.log("onmounted");
// });

function setup() {
  const children = useSlots()?.default?.() || "No child";
  // function Render() {
  //   return h("div", children);
  // }

  return () => render({ children });
}

export default {
  props: {
    sdf: String,
  },
  components: {
    render,
  },
  setup,
};
</script>

<style></style>
