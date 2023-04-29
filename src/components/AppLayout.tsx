import { A, useLocation } from "solid-start";

export default function AppLayout(props: any) {
  const location = useLocation();
  const active = (path: string) => {
    return "/solid-pages"+path === location.pathname || "/solid-pages/"+path === location.pathname
      ? "border-b-4 border-gray-800 font-semibold text-gray-800 bg-slate-50"
      : "border-b-4 border-transparent hover:border-slate-50 hover:font-medium"
  };

  return (
    <section class="
      w-screen h-full
      flex flex-col
      text-gray-800 
      justify-between pt-0.5"
    >
      <div class="w-full z-40
        fixed top-0 left-0 right-0 
        border-t-2 border-gray-800"
      >
      </div>

      <section id="content" class="">
        {props.children}
      </section>

      <nav class="flex flex-row
        sticky bottom-0 left-0 right-0
        bg-slate-50"
      >
        <ul class="flex w-full h-10
          border-t border-gray-800 text-slate-50
          bg-gray-800
        ">
          <li class={`w-full ${active("/")}`}>
            <A class="flex w-full h-full justify-center items-center" href="/">Home</A>
          </li>
          <li class={`w-full h-full ${active("/about")}`}>
            <A class="flex w-full h-full justify-center items-center" href="../about">About</A>
          </li>
          <li class={`w-full h-full ${active("/layout")}`}
          >
            <A class="flex w-full h-full justify-center items-center" href="../layout" >Layout</A>
          </li>
        </ul>
      </nav>
    </section>
  );
}
