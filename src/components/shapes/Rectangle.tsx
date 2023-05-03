import AddButton from "../AddButton";
import Content from "../Content";
import ShapeInner from "./ShapeInner";
import ShapeOuter from "./ShapeOuter";

export default function Rectangle(props: {children: any, ratio: string, innerClass?: string}) {
  return (
    <ShapeOuter ratio={props.ratio}>
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
