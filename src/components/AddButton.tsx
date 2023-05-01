import { createSignal } from "solid-js";
import { useHref } from "solid-start";

const artstationCDN = "https://cdna.artstation.com/p/assets/images/images";

export default function AddButton(props: any) {
  const [bgImage, setBgImage] = createSignal("");
  const [isInputVisible, setIsInputVisible] = createSignal(false);

  function setBackgroundImage (e: any){
    // console.log(e.key);
    if(e.key === "Enter"){
      const url = e.currentTarget.value.trim();
      setBgImage(url.startsWith(artstationCDN) ? url : "")
    }
  }

  return (
    <>
      {isInputVisible() ?
        <button class="absolute z-10 p-2
        w-full h-full
        flex justify-center items-center
        bg-black/[.75]"
        onClick={() => setIsInputVisible(false)}>
          <div class="">
            <input type="text"
              class="w-full"
              onkeypress={(e) => setBackgroundImage(e)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </button> : <></>
      }

      <button class={`flex justify-center items-center
        w-full h-full relative
        text-gray-800  hover:text-white hover:font-extrabold
        border-t-2 border-transparent
        hover:bg-gray-800 hover:border-slate-50
        bg-center bg-cover bg-no-repeat ${bgImage() ? "bg-[url('"+bgImage()+"')]" : "bg-[url('')]"}`}
        onClick={() => setIsInputVisible(!isInputVisible())}
        style={{"background-image": "url('"+bgImage()+"')"}}
      >
        {props.children}
      </button>
    </>
  );
}
