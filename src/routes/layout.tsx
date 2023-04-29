import Square from "../components/Square";
import FourByOne from "../components/FourByOne";
import ThreeByTwo from "../components/ThreeByTwo";
import TwoByOne from "../components/TwoByOne";
import TwoByThree from "../components/TwoByThree";

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
                  <Square key={index}>
                    {PlusSVG()}
                  </Square>
                )
              })
            }
          </div>

          <div id="row_1" class="flex flex-row w-full">
            <div class="w-4/5">
              <FourByOne>
                {PlusSVG()}
              </FourByOne>
            </div>

            <div class="w-1/5">
              <Square>
                {PlusSVG()}
              </Square> 
            </div>
          </div>

          <div id="row_2" class="flex flex-row w-full">
            <div class="w-2/5">
              <Square>
                {PlusSVG()}
              </Square> 
            </div>

            <div class="w-3/5">
              <ThreeByTwo>
                {PlusSVG()}
              </ThreeByTwo> 
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
                        <Square key={index}>
                          {PlusSVG()}
                        </Square>
                      )
                    })
                  }
                </div>

                <div class="w-2/3">
                  <Square>
                    {PlusSVG()}
                  </Square>
                </div>
              </div>

              {/* lower row */}
              <div class="">
                <ThreeByTwo> 
                  {PlusSVG()}
                </ThreeByTwo>
              </div>
            </div>

            {/* right col */}
            <div class="flex flex-col w-2/5">
                <TwoByOne> 
                  {PlusSVG()}
                </TwoByOne>

                <TwoByThree> 
                  {PlusSVG()}
                </TwoByThree>
            </div>
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
      <Square>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </Square>
      </div>
    </main>
  );
}
*/