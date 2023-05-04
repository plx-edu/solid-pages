import ShapeInner from "./ShapeInner";
import ShapeOuter from "./ShapeOuter";

export default function Rectangle(props: 
  {children: any, ratio: string, innerClass?: string}){

  return (
    <ShapeOuter ratio={props.ratio}>
      <ShapeInner class={props.innerClass}>
          {props.children}
      </ShapeInner>
    </ShapeOuter>
  );
}
