import { A } from "solid-start";

export default function About() {
  return (
    <main class="text-center mx-auto p-4">
      <h1 class="max-6-xs text-6xl font-thin uppercase my-16">
        About Page
      </h1>

      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <span>About</span>
        {" - "}
        <A href="/layout" class="text-sky-600 hover:underline">
          Layout
        </A>
      </p>
    </main>
  );
}
