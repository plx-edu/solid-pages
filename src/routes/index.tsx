import { A } from "solid-start";

export default function Home() {
  return (
    <main class="text-center mx-auto p-4">
      <h1 class="max-6-xs text-6xl font-thin uppercase my-16">
        Hello world!
      </h1>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About
        </A>
        {" - "}
        <A href="/layout" class="text-sky-600 hover:underline">
          Layout
        </A>
        {" - "}
        <A href="/projectI" class="text-sky-600 hover:underline">
          Project I
        </A>
      </p>
    </main>
  );
}
