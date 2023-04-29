export default function AddButton(props: {children: any, bgUrl?: string}) {
  return (
    <button class="flex justify-center items-center
      w-full h-full relative
      bg-center bg-cover bg-no-repeat"
      style={`background-image: ${props.bgUrl ? `url('${props.bgUrl}')` : ""}`}
    >
      <div class="absolute
        w-full h-full
        flex justify-center items-center
        hover:bg-gradient-to-b from-slate-900 to-slate-200
        opacity-10"
      >
        {/* {props.bgUrl ? <img class="absolute w-full h-full -z-0" src={`${props.bgUrl }`} alt="" /> : <></>} */}
      </div>

        {/* classList={{ `bg-[url('${props.bgUrl ? "" : ""}')]` : props.bgUrl ? true : false }} */}
        {props.children}
    </button>
  );
}
