import Square from "../components/shapes/Square";
import { createContext, createEffect, createSignal, on, useContext } from "solid-js";

const boxPadding = "p-0.5";

export default function projectI() {
  const [gridSize, setGridSize] = createSignal(9);
  const arr = [...Array(gridSize()).keys()];
  // const arr = [...Array(9).keys()];

  const Cube = () => {
    const [n, setN] = createSignal(0)
    const [cellColor, setCellColor] = createSignal("bg-slate-200")

    function setColor(){
      setN(n() + 1);

      switch(n()){
        case 1:
          setCellColor("bg-slate-500");
          break;
        case 2:
            setCellColor("bg-indigo-200");
            break;
        case 3:
          setCellColor("bg-indigo-300");
          break;
        default:
          setN(0);
          setCellColor("bg-slate-200");
          break;
      }
    }



    return (
      <button class={`w-full h-full ${cellColor()}`} 
        ondblclick={() => setColor()}
      >
      </button>
    )
  }

  const Row = () => {
    return (
    <div class="flex flex-row">
      { arr.map((_item, index) => {
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
    <>
    <div id="here" class="h-screen w-full flex justify-center items-center">
      <Square innerClass={boxPadding} isRatioVisible={false}>
        { arr.map((_item, index) => {
          return <Row></Row>
        })}
      </Square>
    </div>
    {/* <div class="bg-slate-400">
      <input type="number" name="gridSizeSetter" id="" min={3} max={12}
      onChange={e => setGridSize(Number(e.target.value))}/>
    </div> */}
    </>
  );
}
