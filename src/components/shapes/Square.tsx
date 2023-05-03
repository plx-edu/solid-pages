import AddButton from "../AddButton";
import Content from "../Content";
import ShapeInner from "./ShapeInner";
import ShapeOuter from "./ShapeOuter";

export default function Square(props: any) {
  return (
    <ShapeOuter ratio={"1"}>
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
