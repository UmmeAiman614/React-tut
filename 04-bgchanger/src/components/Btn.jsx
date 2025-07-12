import React from "react";

function Btn({ color, setColor }) {
  return (
    <button
      onClick={() => setColor(color)}
      className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
}

export default Btn;
