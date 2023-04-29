import AddButton from "./AddButton";

export default function Square(props: any) {
  return (
    <div class="sqr-outer relative w-full before:content-[''] before:block before:pt-[66.667%]">
      <div class="sqr-inner absolute top-0 bottom-0 left-0 right-0">
        <div class="sqr-content
          flex justify-center items-center
          h-full w-full
          overflow-hidden
          border rounded-md border-slate-400
          text-slate-400
          bg-gradient-to-br from-slate-50 to-slate-100"
        >
          <AddButton bgUrl="https://cdnb.artstation.com/p/assets/images/images/028/377/999/large/dyzi-nlizi-10-logo.jpg?1594298406">
            {props.children}
          </AddButton>
        </div>
      </div>
    </div>
  );
}
