import Square from "../components/shapes/Square";
import { createContext, createEffect, createSignal, on, useContext } from "solid-js";

const boxPadding = "p-0.5";

export default function projectI() {
  const [isPressed, setIsPressed] = createSignal(false)
  const [gridSize, setGridSize] = createSignal(9);
  
  function getArr(){
    return [...Array(gridSize()).keys()];
  }

  const Cube = () => {
    const [n, setN] = createSignal(0)

    function setColor(n: number){
      let color = "bg-slate-200";
      switch(n){
        case 1:
          color = "bg-slate-500";
          break;
        case 2:
          color = "bg-indigo-200";
          break;
        case 3:
          color = "bg-indigo-300";
          break;
        default:
          setN(0);
          break;
      }
      return color
    }

    function dragChange(){
      if(isPressed()){
        n() > 0 ? setN(0) : setN(1);
      }
    }

    return (
      <button class={`w-full h-full ${setColor(n())}`} 
        onclick={() => setN(n() + 1)}
        ondblclick={() => setN(0)}
        onMouseEnter={() => dragChange()}
      >
      </button>
    )
  }

  const Row = () => {
    return (
    <div class="flex flex-row"
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
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
          onChange={e => {
            const x = Number(e.target.value);
            if(x >= 3 && x <= 12){
              setGridSize(x);
            }
          }}/>
      </div>
    </div>
  );
}
