import { CodeSnippet } from "./CodeSnippet"

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 lg:py-12">
      <article className="prose mx-auto">
        <h1>React Router with Server Components and Syntax Highlighting</h1>
        <p>
          A simple guide to setting up React Router with Server Components for modern React apps. We use Code Hike for syntax highlighting.
        </p>

        <CodeSnippet />

        <p>
          More Syntax Highlighting features on:{" "}
          <a
            className="text-blue-500"
            href="https://xyd.dev/docs/guides/developer-content?utm_campaign=react_router_syntax_highlighting"
            target="_blank"
            rel="noopener"
          >
            https://xyd.dev
          </a>
        </p>
      </article>
    </main>
  );
}
