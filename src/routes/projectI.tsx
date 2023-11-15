import Square from "../components/shapes/Square";
import { createContext, createEffect, createSignal, on, useContext } from "solid-js";

const boxPadding = "p-0.5";

export default function projectI() {
  const arr = [...Array(9).keys()];

  const Cube = () => {
    const [isActive, setIsActive] = createSignal(false);
    return (
      <button class={`w-full h-full ${isActive() ? "bg-slate-500" : "bg-slate-200" }`} 
        ondblclick={() => setIsActive(!isActive())}
      >
      </button>
    )
  }

  const Row = () => {
    return (
    <div class="flex flex-row">
      { arr.map((_item, index) => {
        return (
          <Square innerClass={boxPadding} key={index} isRatioVisible={true}>
            <Cube></Cube>
          </Square>
        )
      })}
    </div>
    )
  }

  return (
    <div id="here" class="h-screen w-full flex justify-center items-center">
      <Square innerClass={boxPadding} isRatioVisible={false}>
        { arr.map((_item, index) => {
          return <Row></Row>
        })}
      </Square>
    </div>
  );
}
