import { A, useLocation } from "solid-start";

export default function AppLayout(props: any) {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

  return (
    <section class="
      w-screen h-full
      flex flex-col
      justify-between pt-0.5"
    >
      <div class="w-full z-40
        fixed top-0 left-0 right-0 
        border-t-2 border-rose-600"
      >
      </div>

      <section id="content" class="">
        {props.children}
      </section>

      <nav class="bg-rose-700">
        <ul class="container flex items-center p-3 text-gray-200">
          <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
            <A href="/">Home</A>
          </li>
          <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
            <A href="../about">About</A>
          </li>
          <li class={`border-b-2 ${active("/layout")} mx-1.5 sm:mx-6`}>
            <A href="../layout" >Layout</A>
          </li>
        </ul>
      </nav>
    </section>
  );
}
