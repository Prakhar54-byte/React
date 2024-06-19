import React from "react";

function button({ colors, oClick }) {
  return (
    <>
      <button
        onClick={() => oClick(colors)}
        className="outline-none px-4 rounded-lg "
        
        style={{ backgroundColor: colors }}
      >
        {colors}
      </button>
    </>
  );
}

export default button;
