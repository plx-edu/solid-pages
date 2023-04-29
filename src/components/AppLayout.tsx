import { A, useLocation } from "solid-start";

export default function AppLayout(props: any) {
  const location = useLocation();
  const active = (path: string) => {
    console.log(1, path, location.pathname);
    console.log(2, path, location.hash);
    console.log(3, path, location.key);
    console.log(4, path, location.search);
    console.log("::::::::::");
    
    return "/solid-pages"+path === location.pathname
      ? "border-slate-700 bg-slate-600/50 font-medium"
      : "border-transparent hover:border-slate-700 hover:bg-slate-600/[.25]"};

  return (
    <section class="
      w-screen h-full
      flex flex-col font-
      justify-between pt-0.5"
    >
      <div class="w-full z-40
        fixed top-0 left-0 right-0 
        border-t-2 border-slate-500"
      >
      </div>

      <section id="content" class="">
        {props.children}
      </section>

      <nav class="flex flex-row
        sticky bottom-0 left-0 right-0
        bg-gradient-to-b from-slate-500 to-slate-600"
      >
        <ul class="flex w-full h-10 text-gray-100">
          <li class={`w-full border-t-4 ${active("/")}`}>
            <A class="flex w-full h-full justify-center items-center" href="/">Home</A>
          </li>
          <li class={`w-full h-full border-t-4 ${active("/about")}`}>
            <A class="flex w-full h-full justify-center items-center" href="../about">About</A>
          </li>
          <li class={`w-full h-full bg-blue border-t-4 ${active("/layout")}`}
          >
            <A class="flex w-full h-full justify-center items-center" href="../layout" >Layout</A>
          </li>
        </ul>
      </nav>
    </section>
  );
}
