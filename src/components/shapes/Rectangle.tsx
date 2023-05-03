import AddButton from "../AddButton";
import Content from "../Content";
import ShapeInner from "./ShapeInner";
import ShapeOuter from "./ShapeOuter";

export default function Rectangle(props: {children: any, ratio: string}) {
  return (
    <ShapeOuter ratio={props.ratio}>
      <ShapeInner>
        <Content>
          <AddButton>
            {props.children}
          </AddButton>
        </Content>
      </ShapeInner>
    </ShapeOuter>
  );
}
