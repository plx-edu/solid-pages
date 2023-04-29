export default function AddButton(props: any) {
  return (
    <button class="flex justify-center items-center
      w-full h-full relative
      text-gray-800  hover:text-white hover:font-extrabold
      border-t-2 border-transparent
      hover:bg-gray-800 hover:border-slate-50"
    >
      {props.children}
    </button>
  );
}
