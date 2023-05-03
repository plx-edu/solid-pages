import { createEffect, createSignal } from "solid-js";
import { useHref } from "solid-start";

const artstationCDNA = "https://cdna.artstation.com/p/assets/images/images";
const artstationCDNB = "https://cdnb.artstation.com/p/assets/images/images";

export default function AddButton(props: any) {
  const [bgImage, setBgImage] = createSignal("");
  const [isInputVisible, setIsInputVisible] = createSignal(false);
  let inputRef: HTMLInputElement;

  createEffect(() => {
    if(isInputVisible()){
      inputRef.focus();
    }
  });

  function setBackgroundImage (e: any){
    // console.log(e);
    // console.log(e.currentTarget.value);
    // console.log(e.key);
    if(e.key === "Enter" || e.type === "focusout"){
      const url = e.currentTarget.value.trim();
      setBgImage(url.startsWith(artstationCDNA) || url.startsWith(artstationCDNB) ? url : "")
      setIsInputVisible(false);
    }
  }

  return (
    <>
      {isInputVisible() ?
        <section class="absolute z-10 p-2
        w-full h-full
        flex justify-center items-center
        bg-black/[.45]"
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
        text-gray-800  hover:text-white hover:font-extrabold
        hover:bg-gray-800
        bg-center bg-cover bg-no-repeat`}
        onClick={() => setIsInputVisible(!isInputVisible())}
        style={{"background-image": "url('"+bgImage()+"')"}}
        >
        {/* style={{"background-image": "url('"+bgImage()+"')"}} */}
        {props.children}
      </button>
    </>
  );
}
