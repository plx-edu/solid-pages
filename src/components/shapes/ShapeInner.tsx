export default function ShapeInner(props: {children: any, class?: string}) {
  return (
    <div class={`sqr-inner absolute top-0 bottom-0 left-0 right-0 ${props.class ? props.class : ""}`}>
    {/* <div class={`sqr-inner absolute top-0 bottom-0 left-0 right-0`}> */}
      {props.children}
    </div>
  );
}
