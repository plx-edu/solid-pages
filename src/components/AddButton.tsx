export default function AddButton(props: any) {
  return (
    <button class="flex justify-center items-center
      w-full h-full relative
      text-rose-800  hover:text-white hover:font-semibold
      hover:bg-rose-800 border-t-2 hover:border-rose-800"
    >
      {props.children}
    </button>
  );
}
