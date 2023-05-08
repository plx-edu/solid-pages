import { A, useLocation } from "solid-start";
import Square from "./shapes/Square";
import { createContext, createSignal } from "solid-js";

export const SwipeContext = createContext<any>();

const SWIPE_DISTANCE = 150;

export default function AppLayout(props: any) {
  const [touchStart, setTouchStart] = createSignal(0);
  const [touchEnd, setTouchEnd] = createSignal(0);
  const [swipeDistance, setSwipeDistance] = createSignal(0);
  const [isMenuVisible, setIsMenuVisible] = createSignal(true);
  const [isSearchVisible, setIsSearchVisible] = createSignal(false);
  
  const location = useLocation();
  const active = (path: string) => {
    return "/solid-pages"+path === location.pathname || "/solid-pages/"+path === location.pathname
      ? "text-gray-600 bg-gradient-to-b from-gray-700 to-gray-800"
      : "text-gray-500 hover:text-gray-800 hover:border-l-gray-800"
  };

  return (
    <section class="
      w-screen
      flex flex-col
      text-gray-800
      justify-between pt-0.5"
      onTouchStart={(e) => {
        setTouchStart(e.targetTouches[0].clientX);
      }}
      onTouchEnd={(e) => {
        setTouchEnd(e.changedTouches[0].clientX);
        
        const newSwipeDistance = touchStart() - touchEnd();
        if (newSwipeDistance > SWIPE_DISTANCE || newSwipeDistance < -SWIPE_DISTANCE) {
          // in the rare cases where the swipe distance
          // is exactly the same as the previous swipe
          if (newSwipeDistance === swipeDistance()){
            newSwipeDistance > 0
              ? setSwipeDistance(newSwipeDistance + 1)
              : setSwipeDistance(newSwipeDistance - 1);
          }else {
            setSwipeDistance(newSwipeDistance);
          }
        }
      }}
    >
      <div class="w-full z-40
        fixed top-0 left-0 right-0 
        border-t-2 border-gray-800">
      </div>

      <SwipeContext.Provider value={{swipeDistance}}>
      <section id="content" class="pb-12">
        {props.children}
      </section>
      </SwipeContext.Provider>

      {isSearchVisible() && <section id="search"
        class="fixed w-screen h-screen backdrop-blur-lg"
      >
        <div class="w-full h-full bg-slate-50 bg-opacity-80">
          Search placeholder
        </div>
      </section>}

      <div id="swipe-debug" class="fixed top-0.5 right-0.5 p-0.5 text-xs text-right backdrop-blur-lg">
        <p class="bg-slate-50 bg-opacity-25">{(swipeDistance() > SWIPE_DISTANCE || swipeDistance() < -SWIPE_DISTANCE) && `swiped ${swipeDistance() > 0 ? 'left':'right'}`}</p>
        <p class="bg-slate-50 bg-opacity-25">{(swipeDistance() > SWIPE_DISTANCE || swipeDistance() < -SWIPE_DISTANCE) && `distance ${swipeDistance()}`}</p>
      </div>


      <nav class="flex flex-col z-50
        self-center fixed bottom-1.5">
        <ul class={`flex ${ isMenuVisible() ? "w-48 rounded-sm" : "w-10 rounded-3xl"}
          text-slate-50 border border-gray-200 border-opacity-40
          overflow-hidden backdrop-blur-md shadow-md`}>
          { isMenuVisible() &&
          <>
            <li class={`w-full h-full bg-slate-50 bg-opacity-60`}>
              <Square>
                <A class={`flex w-full h-full justify-center items-center  ${active("/")}`} href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
                  </svg>
                </A>
              </Square>
            </li>
            <li class={`w-full h-full bg-slate-50 bg-opacity-60`}>
              <Square>
                <A class={`flex w-full h-full justify-center items-center  ${active("/layout")}`} href="../layout" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd" />
                </svg>
                </A>
              </Square>
            </li>
            <li class={`w-full h-full bg-slate-50 bg-opacity-60`}>
              <Square>
                <A class={`flex w-full h-full justify-center items-center ${active("/about")}`} href="../about">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd" />
                  </svg>
                </A>
              </Square>
            </li>
            <li class={`w-full h-full bg-slate-50 bg-opacity-60`}>
              <Square>
                <button class="flex w-full h-full justify-center items-center text-gray-500 hover:text-gray-800"
                  onClick={() => setIsSearchVisible(!isSearchVisible())}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                  </svg>
                </button>
              </Square>
            </li>
          </>}
          <li class={`w-full h-full bg-slate-50 bg-opacity-60`}>
            <Square>
              <button class="flex w-full h-full justify-center items-center text-gray-500 hover:text-gray-800"
                onClick={() => {
                  setIsMenuVisible(!isMenuVisible());
                  setIsSearchVisible(false);
                  }}>
                {isMenuVisible() ? 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                :
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

{/* 
  <div class="w-72 fixed bottom-12 self-center">
    <Rectangle innerClass="p-0.5"  ratio={"1/3"} isRatioVisible={true}>
      <Content hasBorder={true}>
        <section id="search" class="flex justify-center items-center w-full h-full bg-gray-800">
          <input type="text" />
        </section>
      </Content>
    </Rectangle>
  </div>
*/}