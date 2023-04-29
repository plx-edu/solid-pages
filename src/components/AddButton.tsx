export default function AddButton(props: {children: any, bgUrl?: string}) {
  return (
    <button class="flex justify-center items-center
      w-full h-full
      hover:bg-gradient-to-b from-slate-900 to-slate-200
      bg-cover bg-center"
      style={props.bgUrl ? `background-image: url('${props.bgUrl}')` : ""}
    >
      {/* classList={{ `bg-[url('${props.bgUrl ? "" : ""}')]` : props.bgUrl ? true : false }} */}
      {props.children}
    </button>
  );
}
