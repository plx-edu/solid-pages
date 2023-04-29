export default function AddButton(props: any) {
  return (
    <button class="flex justify-center items-center
      w-full h-full relative
      text-gray-800  hover:text-white hover:font-extrabold
      hover:bg-gray-800 border-t-2 hover:border-gray-800"
    >
      {props.children}
    </button>
  );
}
