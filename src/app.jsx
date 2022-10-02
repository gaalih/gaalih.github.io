import { useState } from "preact/hooks";
import Navbar from "./components/Navbar";
// import { Icon } from "@iconify/react";
// import { Logo } from "./assets/undraw_programming.svg";
import Logo from "./assets/undraw_programming.svg";

export function App() {
  // const [count, setCount] = useState(0);

  return (
    // <div className="w-screen">
    //   <div className="mx-20 mt-10 bg-gradient-to-tl transition duration-300 from-cyan-500 to-cyan-300 rounded-2xl px-10 py-20 h-96 shadow-xl shadow-slate-900">
    //     <div className="text-5xl font-extrabold">
    //       <span className="bg-clip-text text-transparent bg-gradient-to-r from-stone-600 to-slate-700">
    //         Hello, <span className="font-extralight">My Name is</span> Galih
    //       </span>
    //     </div>
    //     <div className="card">
    //       <button
    //         onClick={() => setCount((count) => count + 1)}
    //         className="bg-sky-500 px-3 py-2 shadow-md text-xs font-medium text-white"
    //       >
    //         count is {count}
    //       </button>
    //     </div>
    //     <p className="read-the-docs">This website created using vite+preact</p>
    //   </div>
    // </div>
    <div className="relative w-full">
      <Navbar />
      <div className="relative bg-gradient-to-tl from-cyan-400 to-cyan-100">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-16 xl:py-24 animate__animated animate__bounceIn">
              <h1 className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-tl from-slate-900 to-teal-600 md:text-5xl">
                <span className="text-sm font-medium tracking-wide block mb-3">
                  <b className="font-bold text-xl">Hello,</b> My name is
                </span>
                <b className="text-6xl tracking-wide">Galih Riyadi</b>
                <p className="text-sm font-medium mt-2 tracking-wide">
                  and i'am a frontend developer
                </p>
              </h1>

              <p className="text-sm tracking-wide mt-8 text-teal-800 lg:w-10/12">
                Saya merupakan seorang frontend developer yang antusias di
                bidang industri kreatif seperti fotografi,videografi,desain
                grafis. mempunyai skill dan pengalaman di bidang pemrograman
                khususnya web programming
              </p>
            </div>
            <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
              {/* <img
                src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
                className="relative"
                alt="food illustration"
                loading="lazy"
                width="4500"
                height="4500"
              /> */}
              {/* <Icon icon="" /> */}
              <img
                src={Logo}
                className="relative animate__animated animate__pulse"
                alt="food illustration"
                loading="lazy"
                width="4500"
                height="4500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
