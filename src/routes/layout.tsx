import Square from "../components/Square";

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
