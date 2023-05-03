import Square from "../components/shapes/Square";
import Rectangle from "../components/shapes/Rectangle";

const boxPadding = "p-0.5";

export default function Layout() {
  const arrOfFive = [1,2,3,4,5];
  const arrOfTwo = [1,2];

  const PlusSVG = () => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )};

  return (
    <>
      <section id="layout_section" class="w-full">

          <div id="row_0" class="flex flex-row w-full">
            {
              arrOfFive.map((item, index) => {
                return (
                  <Square innerClass={boxPadding} key={index}>
                    {PlusSVG()}
                  </Square>
                )
              })
            }
          </div>

          <div id="row_1" class="flex flex-row w-full">
            <div class="w-4/5">
              <Rectangle innerClass={boxPadding} ratio={"1/4"}>
                {PlusSVG()}
              </Rectangle>
            </div>

            <div class="w-1/5">
              <Square innerClass={boxPadding}>
                {PlusSVG()}
              </Square> 
            </div>
          </div>

          <div id="row_2" class="flex flex-row w-full">
            <div class="w-2/5">
              <Square innerClass={boxPadding}>
                {PlusSVG()}
              </Square> 
            </div>

            <div class="w-3/5">
              {/* 2/3 */}
              <Rectangle innerClass={boxPadding} ratio={"2/3"}>
                {PlusSVG()}
              </Rectangle>
              {/* <ThreeByTwo>
              </ThreeByTwo>  */}
            </div>
          </div>

          <div id="row_3" class="flex flex-row w-full">
            {/* left col */}
            <div class="flex flex-col w-3/5">
              {/* upper row */}
              <div class="flex flex-row">
                <div class="flex flex-col w-1/3">
                  {
                    arrOfTwo.map((item, index) => {
                      return (
                        <Square innerClass={boxPadding} key={index}>
                          {PlusSVG()}
                        </Square>
                      )
                    })
                  }
                </div>

                <div class="w-2/3">
                  <Square innerClass={boxPadding}>
                    {PlusSVG()}
                  </Square>
                </div>
              </div>

              {/* lower row */}
              <div class="">
                <Rectangle innerClass={boxPadding} ratio={"2/3"}>
                  {PlusSVG()}
                </Rectangle>
              </div>
            </div>

            {/* right col */}
            <div class="flex flex-col w-2/5">
              <Rectangle innerClass={boxPadding} ratio={"1/2"}>
                {PlusSVG()}
              </Rectangle>

              <Rectangle innerClass={boxPadding} ratio={"3/2"}>
                {PlusSVG()}
              </Rectangle>
            </div>
          </div>

          <div id="row_4" class="flex flex-row w-full">
            <div class="w-2/5">
            <Rectangle innerClass={boxPadding} ratio={"1/2"}>
              {PlusSVG()}
            </Rectangle>
              {/* <TwoByOne>
              </TwoByOne>  */}
            </div>

            <div class="w-3/5">
              <Rectangle innerClass={boxPadding} ratio={"1/3"}>
                {PlusSVG()}
              </Rectangle>
              {/* <ThreeByOne>
              </ThreeByOne> */}
            </div>
          </div>

          <div id="row_5" class="flex flex-row w-full">
            <Rectangle innerClass={boxPadding} ratio={"1/5"}>
              {PlusSVG()}
            </Rectangle>
          </div>
      </section>
    </>
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