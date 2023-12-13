import React, { useRef } from "react";
import Cart from "./Cart";
import data from "./data.json";

function Foreground() {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Cart data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
