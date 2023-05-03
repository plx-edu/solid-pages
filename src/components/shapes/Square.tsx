import AddButton from "../AddButton";
import Content from "../Content";
import ShapeInner from "./ShapeInner";
import ShapeOuter from "./ShapeOuter";

export default function Square(props: {children: any, key?: number, innerClass?: string}) {
  return (
    <ShapeOuter ratio={"1"}>
      <ShapeInner class={props.innerClass}>
        <Content>
          <AddButton>
            {props.children}
          </AddButton>
        </Content>
      </ShapeInner>
    </ShapeOuter>
  );
}
