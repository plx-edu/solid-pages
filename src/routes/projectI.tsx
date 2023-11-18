import Square from "../components/shapes/Square";
import { createContext, createEffect, createSignal, on, useContext } from "solid-js";

const boxPadding = "p-0.5";

export default function projectI() {
  const [gridSize, setGridSize] = createSignal(9);
  
  function getArr(){
    return [...Array(gridSize()).keys()];
  }

  const Cube = () => {
    const [n, setN] = createSignal(0)

    function setColor(n: number){
      switch(n){
        case 1:
          return "bg-slate-500";
          break;
        case 2:
            return "bg-indigo-200";
            break;
        case 3:
          return "bg-indigo-300";
          break;
        default:
          setN(0);
          return "bg-slate-200";
          break;
      }
    }

    return (
      <button class={`w-full h-full ${setColor(n())}`} 
        onclick={() => setN(n() + 1)}
        ondblclick={() => setN(0)}
      >
      </button>
    )
  }

  const Row = () => {
    return (
    <div class="flex flex-row">
      { getArr().map((_item, index) => {
        return (
          <Square innerClass={boxPadding} key={index} isRatioVisible={false}>
            <Cube></Cube>
          </Square>
        )
      })}
    </div>
    )
  }

  return (
    <div id="here" class="h-screen w-full flex flex-col gap-4 justify-center items-center">
      <Square innerClass={boxPadding} isRatioVisible={false}>
        { getArr().map((_item, index) => {
          return <Row></Row>
        })}
      </Square>

      <div class="flex justify-center">
        <input type="number"
          class="w-16 text-center" 
          min={3} max={12}
          value={gridSize()}
          onChange={e => setGridSize(Number(e.target.value))}/>
      </div>
    </div>
  );
}
