export default function ShapeOuter(props: {children: any, ratio: string}) {
  return (
    <div class={`sqr-outer relative w-full before:content-[''] before:block before:pt-[${props.ratio}]`}>
      <div class="absolute top-1 left-2 text-xs">
        <p>{props.ratio}</p>
      </div>
      {props.children}
    </div>
  );
}
