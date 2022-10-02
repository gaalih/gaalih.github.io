import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div> */}
      <h1 className="text-xl text-slate-700 font-extrabold font-mono tracking-widest">
        Hello, My Name is Galih
      </h1>
      <div class="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-sky-500 px-3 py-2 shadow-md text-xs font-medium text-white"
        >
          count is {count}
        </button>
      </div>
      <p class="read-the-docs">This website created using vite+preact</p>
    </>
  );
}
