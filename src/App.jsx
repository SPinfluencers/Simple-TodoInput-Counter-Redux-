import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";

function App() {
  
  return (
    <div className="App">
      <Counter/>
      <Todos/>
    </div>
  );
}

export default App;
