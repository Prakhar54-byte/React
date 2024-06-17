import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //let counter = 15;
  const addValue = () => {
    console.log("Clicked", counter);
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  const decValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Increase value</button>
      <br />
      <button onClick={decValue}>Decrease value</button>
    </>
  );
}

export default App;
