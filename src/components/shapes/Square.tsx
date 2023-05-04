import ShapeInner from "./ShapeInner";
import ShapeOuter from "./ShapeOuter";

export default function Square(props: {children: any, key?: number, isRatioVisible?: boolean, innerClass?: string}) {
  return (
    <ShapeOuter ratio={"1"} isRatioVisible={props.isRatioVisible}>
      <ShapeInner class={props.innerClass}>
        {props.children}
      </ShapeInner>
    </ShapeOuter>
  );
}
