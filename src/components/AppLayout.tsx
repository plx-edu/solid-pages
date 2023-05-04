import { A, useLocation } from "solid-start";
import Square from "./shapes/Square";
import { createSignal } from "solid-js";

export default function AppLayout(props: any) {
  const [isMenuVisible, setIsMenuVisible] = createSignal(true);
  const location = useLocation();
  const active = (path: string) => {
    return "/solid-pages"+path === location.pathname || "/solid-pages/"+path === location.pathname
      ? "text-gray-600 bg-gray-800"
      : "text-gray-500 hover:text-gray-800 hover:border-l-gray-800"
    // return "/solid-pages"+path === location.pathname || "/solid-pages/"+path === location.pathname
    //   ? "border-4 border-transparent bg-gray-800"
    //   : "border-4 border-transparent text-gray-800 hover:border-l-gray-800"
  };

  return (
    <section class="
      w-screen
      flex flex-col
      text-gray-800 
      justify-between pt-0.5"
    >
      <div class="w-full z-40
        fixed top-0 left-0 right-0 
        border-t-2 border-gray-800">
      </div>

      <section id="content" class="pb-12">
        {props.children}
      </section>

      <nav class="flex flex-row z-50
        self-center fixed bottom-2">
        {/* <ul class="flex min-w-[160px] */}
        <ul class={`flex flex-cozl ${ isMenuVisible() ? "w-36 border border-gray-200 rounded-sm" : "w-9 rounded-3xl"}
          text-slate-50
          overflow-hidden bg-slate-50 shadow-lg`}>
          { isMenuVisible() &&
          <>
            <li class={`w-full h-full`}>
              <Square>
                <A class={`flex w-full h-full justify-center items-center  ${active("/")}`} href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
                  </svg>
                </A>
              </Square>
            </li>
            <li class={`w-full h-full`}>
              <Square>
                <A class={`flex w-full h-full justify-center items-center  ${active("/layout")}`} href="../layout" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
                </svg>
                </A>
              </Square>
            </li>
            <li class={`w-full h-full hover:shadow-2xl`}>
              <Square>
                <A class={`flex w-full h-full justify-center items-center ${active("/about")}`} href="../about">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
                  </svg>
                </A>
              </Square>
            </li>
          </>}
          <li class={`w-full h-full`}>
            <Square>
              <button class="flex w-full h-full justify-center items-center text-gray-500 hover:text-gray-800" onClick={() => setIsMenuVisible(!isMenuVisible())}>

                {isMenuVisible() ? 
                  // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-1 hover:stroke-2">
                  //   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  // </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                :
                  // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-1 hover:stroke-2">
                  //   <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  // </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                  </svg>
              }
                
              </button>
            </Square>
          </li>
        </ul>
      </nav>
    </section>
  );
}


{/* <nav class="flex flex-row z-50
w-32
fixed bottom-2 self-center
rounded-md overflow-hidden
border border-gray-800"
>
<ul class="flex w-full h-10
  text-slate-50 bg-slate-50"
>
  <li class={`w-full ${active("/")}`}>
    <Square>
      <A class="flex w-full h-full justify-center items-center" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </A>
    </Square>
  </li>
  <li class={`w-full h-full ${active("/layout")}`}>
    <Square>
      <A class="flex w-full h-full justify-center items-center" href="../layout" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
        </svg>
      </A>
    </Square>
  </li>
  <li class={`w-full h-full ${active("/about")}`}>
    <Square>
      <A class="flex w-full h-full justify-center items-center" href="../about">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      </A>
    </Square>
  </li>
</ul>
</nav> */}