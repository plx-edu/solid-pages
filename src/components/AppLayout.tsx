import { A, useLocation } from "solid-start";

export default function AppLayout(props: any) {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

  return (
    <section class="">
      <div class="w-full border-t-2 border-pink-800"></div>
      {props.children}

      <nav class="bg-sky-800">
        <ul class="container flex items-center p-3 text-gray-200">
          <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
            <A href="/">Home</A>
          </li>
          <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
            <A href="../about">Aboût</A>
          </li>
          <li class={`border-b-2 ${active("/layout")} mx-1.5 sm:mx-6`}>
            <A href="../layout" >Layôut</A>
          </li>
        </ul>
      </nav>
    </section>
  );
}
