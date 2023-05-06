import { createEffect, createSignal } from "solid-js";
import Content from "./Content";

const artstationCDNA = "https://cdna.artstation.com/p/assets/images/images";
const artstationCDNB = "https://cdnb.artstation.com/p/assets/images/images";

export default function AddButton(props:  {children: any, hasBorder?: boolean}) {
  const [bgImage, setBgImage] = createSignal("");
  const [isInputVisible, setIsInputVisible] = createSignal(false);
  let inputRef: HTMLInputElement;

  createEffect(() => {
    if(isInputVisible()){
      inputRef.focus();
    }
  });

  function setBackgroundImage (e: any){
    const url = e.currentTarget.value.trim();
    // console.log(e);
    // console.log(e.currentTarget.value);
    // console.log(e.key);
    if(e.key === "Enter"){
      setBgImage(url.startsWith(artstationCDNA) || url.startsWith(artstationCDNB) ? url : "");
    }else if(e.type === "focusout"){
      if(bgImage() === "" || (url.startsWith(artstationCDNA) || url.startsWith(artstationCDNB))){
        setBgImage(url);
      }
    }
    setIsInputVisible(false);
  }

  const PlusSVG = () => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )};

  return (
    <Content hasBorder={props.hasBorder}>
      {isInputVisible() ?
        <section class="absolute z-10 p-2
        w-full h-full
        flex justify-center items-center
        bg-black/[.25]"
        onClick={() => setIsInputVisible(false)}>
          <div class="flex flex-col">
            <input type="text"
              class="w-full"
              ref={inputRef!}
              onkeypress={(e) => setBackgroundImage(e)}
              onClick={(e) => e.stopPropagation()}
              onFocusOut={(e) => setBackgroundImage(e)}
            />
          </div>
        </section> : <></>
      }

      <button class={`flex justify-center items-center
        w-full h-full relative
        text-gray-200 hover:text-gray-300 hover:font-extrabold
        bg-center bg-cover bg-no-repeat`}
        onClick={() => setIsInputVisible(!isInputVisible())}
        style={bgImage() && {"background-image": "url('"+bgImage()+"')"}}
        >
        {/* style={{"background-image": "url('"+bgImage()+"')"}} */}
        {bgImage() ? <></> : PlusSVG()}
        {props.children}
      </button>
    </Content>
  );
}

/**
gradient reminder
hover:bg-gradient-to-b from-slate-50 to-slate-100
 */