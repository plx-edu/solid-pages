import { createEffect } from "solid-js";

export default function ShapeOuter(props: {children: any, ratio: string}) {
  return (
    <div class={`sqr-outer relative w-full before:content-[''] before:block before:pt-[${props.ratio}]`}>
      <div class="absolute top-0 left-1 text-xs">
        <p>{props.ratio}</p>
      </div>
      {props.children}
    </div>
  );
}
