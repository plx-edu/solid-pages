import AddButton from "./AddButton";
import Content from "./Content";

export default function ThreeByTwo(props: any) {
  return (
    <div class="sqr-outer relative w-full before:content-[''] before:block before:pt-[66.667%]">
      <div class="sqr-inner absolute top-0 bottom-0 left-0 right-0">
        <Content>
          <AddButton>
            {props.children}
          </AddButton>
        </Content>
      </div>
    </div>
  );
}
