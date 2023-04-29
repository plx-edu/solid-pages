export default function AddButton(props: any) {
  return (
    <button class="flex justify-center items-center
      w-full h-full relative
      hover:bg-gradient-to-b from-slate-100 to-slate-200"
    >
      {props.children}
    </button>
  );
}
