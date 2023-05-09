import { createEffect, createSignal, on, useContext } from "solid-js";
import Content from "./Content";
import { PlaceholderBGContext } from "~/routes/layout";

const artstationCDNA = "https://cdna.artstation.com/p/assets/images/images";
const artstationCDNB = "https://cdnb.artstation.com/p/assets/images/images";

export default function AddButton(props:  {children: any, hasBorder?: boolean, bgUrl?: string}) {
  const [bgImage, setBgImage] = createSignal("");
  const [isInputVisible, setIsInputVisible] = createSignal(false);

  // TypeError: (intermediate value)(...) is undefined
  const {isPlaceholderBgVisible} = useContext(PlaceholderBGContext);

  let inputRef: HTMLInputElement;

  createEffect(() => {
    if(isInputVisible()){
      inputRef.focus();
    }
  });

  createEffect(
    on(
      isPlaceholderBgVisible,
      () => setBgImage((!!isPlaceholderBgVisible() && props.bgUrl) ? props.bgUrl : ""),
      {defer: true}
    )
  );

  function setBackgroundImage(e: any) {
    const url = e.currentTarget.value.trim();
    if(e.key === "Enter"){
      setBgImage(url.startsWith(artstationCDNA) || url.startsWith(artstationCDNB) ? url : "");
      setIsInputVisible(false);
    }else if(e.type === "focusout"){
      if(bgImage() === "" || (url.startsWith(artstationCDNA) || url.startsWith(artstationCDNB))){
        setBgImage(url);
      };
      setIsInputVisible(false);
    };
  };

  const PlusSVG = () => {return (
    <button class="opacity-10 mix-blend-exclusion"
      onDblClick={(e) => {
        setIsInputVisible(!isInputVisible());
        e.stopPropagation();
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
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

      <div class={`flex justify-center items-center
        w-full h-full relative
        text-gray-200 hover:text-gray-300 hover:font-extrabold
        bg-center bg-cover bg-no-repeat
        ${bgImage() && "blur-[2px] hue-rotate-15 hover:scale-110 hover:blur-none hover:hue-rotate-0 transition-all duration-500"}
        `}
        style={bgImage() && {"background-image": "url('"+bgImage()+"')"}}
        >
        
        {PlusSVG()}
        {props.children}
      </div>
    </Content>
  );
}

/**
gradient reminder
hover:bg-gradient-to-b from-slate-50 to-slate-100
 */