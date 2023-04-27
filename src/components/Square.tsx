export default function Square(props: any) {
  return (
    <div class="sqr-outer relative w-full before:content-[''] before:block before:pt-[100%]">
      <div class="sqr-inner absolute top-0 bottom-0 left-0 right-0">
        <div class="sqr-content flex justify-center items-center h-full w-full border rounded-md border-slate-400 text-slate-400">
          <button class="flex justify-center items-center w-full h-full hover:bg-slate-200">
            {props.children}
          </button>
        </div>
      </div>
    </div>
  );
}
