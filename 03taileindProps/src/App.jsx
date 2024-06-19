import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";
function App() {
  let myObj = {
    username: "Prakhar",
    age: 19,
  };
  let myArr = [1, 2, 3, 1, 5, 6, 4];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl"> TailWind Test</h1>
      <Card username="chai aur code" someObj={myObj.username} btnText="click me " />
      <Card username="Prkahar" newArr={myArr} btnText="visit me" />
    </>
  );
}

export default App;
