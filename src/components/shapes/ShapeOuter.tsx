export default function ShapeOuter(props: {children: any, ratio: string}) {
  const parseRatio = () =>{
  // function parseRatio(){
    /* How to read: y/x
    * 1/2 = [][]
    * 
    *       [][][]
    * 2/3 = [][][]
    */
    switch(props.ratio){
      case "3/2":
        return "150%";
      case "1":
        return "100%";
      case "2/3":
        return "66.667%";
      case "1/2":
        return "50%";
      case "2/5":
        return "40%"; // why does this not work?
      case "1/3":
        return "33.339%";
      case "1/4":
        return "25%";
      case "1/5":
        return "20%";
      default:
        return "100%";
    }
  }
  // Number.parseFloat((props.ratio).toPrecision(5));
  return (
    <div class={`sqr-outer relative w-full before:content-[''] before:block before:pt-[${parseRatio()}]`}>
    {/* // <div class={`sqr-outer relative w-full before:content-[''] before:block before:pt-[40%]`}> */}
      <div class="absolute top-0 left-1">
        ratio: {props.ratio}
      </div>
      {props.children}
    </div>
  );
}
