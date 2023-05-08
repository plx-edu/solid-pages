import Square from "../components/shapes/Square";
import Rectangle from "../components/shapes/Rectangle";
import AddButton from "../components/AddButton";
import { createContext, createEffect, createSignal, on, useContext } from "solid-js";
import { SwipeContext } from "~/components/AppLayout";

export const PlaceholderBGContext = createContext<any>();

const boxPadding = "p-0.5";

const rowOneImgList = [
  "https://cdna.artstation.com/p/assets/images/images/012/049/750/medium/nikita-veprikov-cry-777.jpg?1532757489",
  "https://cdnb.artstation.com/p/assets/images/images/061/199/115/medium/pauline-voss-c3a6bec6-b427-4f1d-a9a6-4e04ea85424e.jpg?1680215903",
  "https://cdnb.artstation.com/p/assets/images/images/011/354/589/medium/nikita-veprikov-mine-800.jpg?1529149371",
  "https://cdnb.artstation.com/p/assets/images/images/018/812/965/medium/nikita-veprikov-prosnis-636.jpg?1560831638",
  "https://cdna.artstation.com/p/assets/images/images/009/777/630/medium/magno-coutinho-suicide-scene-8bit.jpg?1520863517",
];
const rowFourImgList = [
  "https://cdna.artstation.com/p/assets/images/images/018/817/046/medium/nikita-veprikov-letsgohomenow-640.jpg?1560850141",
  "https://cdnb.artstation.com/p/assets/images/images/045/082/225/medium/wayne-chen-6.jpg?1641881956",
];

export default function Layout() {
  const [orderList, setOrderList] = createSignal<number[]>([]);
  const [isPlaceholderBgVisible, setIsPlaceholderBgVisible] = createSignal(false);
  const {swipeDistance} = useContext(SwipeContext);

  const arrOfFive = [1,2,3,4,5];
  const arrOfTwo = [1,2];

  createEffect(
    on(
      swipeDistance,
      () => {
        // console.log("swipeDistance", swipeDistance());
        swipeDistance() > 0 ? setRandomOrder() : setOrderList([]);
      },
      {defer: true}
    )
  );

  function setRandomOrder(){
    const newOrderList: number[] = [];
    const nbRows = 6;

    function getRandomInt(max: number) {
      // from 1 to max
      return Math.floor((Math.random() * max) + 1);
    }

    while(newOrderList.length < nbRows){
      const randomInt = getRandomInt(nbRows);
      if(!newOrderList.includes(randomInt)){
        newOrderList.push(randomInt);
      }
    }
    setOrderList(newOrderList);
  };

  return (
    <PlaceholderBGContext.Provider value={{isPlaceholderBgVisible}}>
        <>
      <section id="layout_section" class="relative flex flex-col w-full">
        {/* <button onClick={() => setRandomOrder()}>Randomize</button> */}

          <div id="row_1" class="flex flex-row w-full" style={orderList().length === 6 ? { order: orderList()[0]} : ""}>
            {
              arrOfFive.map((_item, index) => {
                return (
                  <Square innerClass={boxPadding} key={index} isRatioVisible={true}>
                    <AddButton hasBorder={true} bgUrl={rowOneImgList[index]}>
                    </AddButton>
                  </Square>
                )
              })
            }
          </div>

          <div id="row_2" class="flex flex-row w-full" style={orderList().length === 6 ? { order: orderList()[1]} : ""}>
            <div class="w-4/5">
              <Rectangle innerClass={boxPadding} ratio={"1/4"} isRatioVisible={true}>
                <AddButton hasBorder={true} bgUrl={"https://cdna.artstation.com/p/assets/images/images/023/743/860/medium/nikita-veprikov-hug-800.jpg?1580216482"}>
                </AddButton>
              </Rectangle>
            </div>

            <div class="w-1/5">
              <Square innerClass={boxPadding} isRatioVisible={true}>
                <AddButton hasBorder={true} bgUrl={"https://cdnb.artstation.com/p/assets/images/images/027/967/281/medium/nikita-veprikov-went-for-a-heart-700.jpg?1593096710"}>
                </AddButton>
              </Square> 
            </div>
          </div>

          <div id="row_3" class="flex flex-row w-full" style={orderList().length === 6 ? { order: orderList()[2]} : ""}>
            <div class="w-2/5">
              <Square innerClass={boxPadding} isRatioVisible={true}>
                <AddButton hasBorder={true} bgUrl={"https://cdna.artstation.com/p/assets/images/images/056/705/036/medium/sangsoo-jeong-traditionalarmorgirl-8taracrop.jpg?1669895743"}>
                </AddButton>
              </Square> 
            </div>

            <div class="w-3/5">
              <Rectangle innerClass={boxPadding} ratio={"2/3"} isRatioVisible={true}>
                <AddButton hasBorder={true} bgUrl={"https://cdnb.artstation.com/p/assets/images/images/018/866/525/medium/nikita-veprikov-stars-640-2.jpg?1561029878"}>
                </AddButton>
              </Rectangle>
            </div>
          </div>

          <div id="row_4" class="flex flex-row w-full" style={orderList().length === 6 ? { order: orderList()[3]} : ""}>
            {/* left col */}
            <div class="flex flex-col w-3/5">
              {/* upper row */}
              <div class="flex flex-row">
                <div class="flex flex-col w-1/3">
                  {
                    arrOfTwo.map((item, index) => {
                      return (
                        <Square innerClass={boxPadding} key={index} isRatioVisible={true}>
                          <AddButton hasBorder={true} bgUrl={rowFourImgList[index]}>
                          </AddButton>
                        </Square>
                      )
                    })
                  }
                </div>

                <div class="w-2/3">
                  <Square innerClass={boxPadding} isRatioVisible={true}>
                    <AddButton hasBorder={true} bgUrl={"https://cdna.artstation.com/p/assets/images/images/060/970/634/medium/paul-nong-100-percent.jpg?1679708673"}>
                </AddButton>
                  </Square>
                </div>
              </div>

              {/* lower row */}
              <div class="">
                <Rectangle innerClass={boxPadding} ratio={"2/3"} isRatioVisible={true}>
                  <AddButton hasBorder={true} bgUrl={"https://cdnb.artstation.com/p/assets/images/images/001/725/639/medium/krenz-cushart-horn3.jpg?1451830517"}>
                  </AddButton>
                </Rectangle>
              </div>
            </div>

            {/* right col */}
            <div class="flex flex-col w-2/5">
              <Rectangle innerClass={boxPadding} ratio={"1/2"} isRatioVisible={true}>
                <AddButton hasBorder={true} bgUrl={"https://cdnb.artstation.com/p/assets/images/images/054/708/737/medium/fhnt-01-b.jpg?1665165104"}>
                </AddButton>
              </Rectangle>

              <Rectangle innerClass={boxPadding} ratio={"3/2"} isRatioVisible={true}>
                <AddButton hasBorder={true} bgUrl={"https://cdnb.artstation.com/p/assets/images/images/025/218/279/large/qi-sheng-luo-4.jpg?1585061327"}>
                </AddButton>
              </Rectangle>
            </div>
          </div>

          <div id="row_5" class="flex flex-row w-full" style={orderList().length === 6 ? { order: orderList()[4]} : ""}>
            <div class="w-2/5">
            <Rectangle innerClass={boxPadding} ratio={"1/2"} isRatioVisible={true}>
              <AddButton hasBorder={true} bgUrl={"https://cdna.artstation.com/p/assets/images/images/036/510/200/medium/ashline-art-sketch-morning4.jpg?1617866325"}>
              </AddButton>
            </Rectangle>
            </div>

            <div class="w-3/5">
              <Rectangle innerClass={boxPadding} ratio={"1/3"} isRatioVisible={true}>
                <AddButton hasBorder={true} bgUrl={"https://cdnb.artstation.com/p/assets/images/images/026/975/285/medium/veronika-kozlova-smoon.jpg?1590247316"}>
                </AddButton>
              </Rectangle>
            </div>
          </div>

          <div id="row_6" class="flex flex-row w-full" style={orderList().length === 6 ? { order: orderList()[5]} : ""}>
            <Rectangle innerClass={boxPadding} ratio={"1/5"} isRatioVisible={true}>
              <AddButton hasBorder={true} bgUrl={"https://cdnb.artstation.com/p/assets/images/images/009/718/919/medium/nikita-veprikov-white-fox-1024-noise.jpg?1520506465"}>
              </AddButton>
            </Rectangle>
          </div>
        
        <div class="absolute bottom-2 right-2 flex justify-center">
          <input type="checkbox" id="toggle" class="opacity-10" checked={isPlaceholderBgVisible()}
            onChange={(e) => setIsPlaceholderBgVisible(e.currentTarget.checked)}/>
        </div>
      </section>
    </>
      </PlaceholderBGContext.Provider>
  );
}

/*
export default function Layout() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Layout Page
      </h1>
      <p class="mt-8">
        [Insert content here]
      </p>

      <div class="m-auto w-40">
      <Square innerClass={boxPadding}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </Square>
      </div>
    </main>
  );
}
*/