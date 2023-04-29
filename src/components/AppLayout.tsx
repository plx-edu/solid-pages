import { A, useLocation } from "solid-start";

export default function AppLayout(props: any) {
  const location = useLocation();
  const active = (path: string) => {
    return "/solid-pages"+path === location.pathname
      ? "border-b-4 border-rose-800 font-semibold text-rose-800 bg-slate-200"
      : "border-b-4 border-transparent hover:border-slate-200 hover:font-medium"
  };

  return (
    <section class="
      w-screen h-full
      flex flex-col
      justify-between pt-0.5"
    >
      <div class="w-full z-40
        fixed top-0 left-0 right-0 
        border-t-2 border-rose-800"
      >
      </div>

      <section id="content" class="">
        {props.children}
      </section>

      <nav class="flex flex-row
        sticky bottom-0 left-0 right-0
        bg-slate-200"
      >
        <ul class="flex w-full h-10
          border-t border-rose-800 text-slate-200
          bg-rose-800
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
