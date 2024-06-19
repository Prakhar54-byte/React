import React from "react";

function Button({ colors, onClick }) {
  return (
    <>
      <button
        onClick={() => onClick(colors)}
        className="outline-none px-4 rounded-lg"
        style={{ backgroundColor: colors }}
      >
        {colors}
      </button>
    </>
  );
}

export default Button;