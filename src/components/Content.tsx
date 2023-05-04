export default function Content(props: {children: any, hasBorder?: boolean}) {
  return (
    <div class={`sqr-content
      flex justify-center items-center
      h-full w-full relative
      overflow-hidden
      rounded-sm`}
      classList={{"border border-gray-800": props.hasBorder}}
    >
      {props.children}
    </div>
  );
}
