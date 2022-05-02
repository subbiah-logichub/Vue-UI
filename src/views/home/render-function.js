import { h, useSlots, onMounted } from "vue";

export const RenderFunction = {
  render() {
    const children = this.$slots?.default?.() || "No child";
    return h("div", children);
  },
};

export function RenderJsx() {
  const children = useSlots()?.default?.() || ["No child"];

  onMounted(() => {
    // console.log("onmounted");
  });

  return (
    <div>
      {children.map((child) => {
        return <div>{child}</div>;
      })}
    </div>
  );
}
