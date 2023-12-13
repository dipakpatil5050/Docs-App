import React from "react";

function Background() {
  return (
    <>
      <div
        className="
      absolute top-[5%]
      w-full py-10 flex justify-center text-zinc-600 "
      >
        Keep Documents App.
      </div>

      <h1
        className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-[13vw] leading-none tracking-tighter
      font-semibold text-zinc-900
       "
      >
        Docs.
      </h1>

      <div
        className="relative w-full h-screen text-white opacity-20 
      flex-wrap
      flex items-end justify-center bottom-[3%]"
      >
        <h4>
          Design and Developed by &nbsp;
          <span className="text-sky-300">Dipak U Patil</span>
        </h4>
      </div>
    </>
  );
}

export default Background;
