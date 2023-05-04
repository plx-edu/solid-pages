import ShapeInner from "./ShapeInner";
import ShapeOuter from "./ShapeOuter";

export default function Rectangle(props: 
  {children: any, ratio: string, isRatioVisible?: boolean, innerClass?: string}){

  return (
    <ShapeOuter ratio={props.ratio} isRatioVisible={props.isRatioVisible}>
      <ShapeInner class={props.innerClass}>
          {props.children}
      </ShapeInner>
    </ShapeOuter>
  );
}
