export function render(props) {
  return (
    <div>
      {props.children.map((child) => {
        return <div>{child}</div>;
      })}
    </div>
  );
}
