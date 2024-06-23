import { useState } from "react";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import LogIn from "./Components/LogIn";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>React Context</h1>
      <LogIn />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
