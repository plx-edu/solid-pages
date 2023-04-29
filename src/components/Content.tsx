export default function Content(props: any) {
  return (
    <div class="sqr-content
      flex justify-center items-center
      h-full w-full
      overflow-hidden
      border rounded-sm border-gray-800"
    >
      {props.children}
    </div>
  );
}
