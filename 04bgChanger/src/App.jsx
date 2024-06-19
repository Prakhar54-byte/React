import { useState } from "react";
import Button from "../../03taileindProps/src/comp/button";

function App() {
  const [color, setColor] = useState("olive");
  const colors = [
    "red", "green", "blue", "olive", "gray", "yellow", "pink", "purple", "lavender", "white", "black"
  ];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-auto justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-1 py-2">
            {colors.map((color) => (
              <Button key={color} colors={color} onClick={setColor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
