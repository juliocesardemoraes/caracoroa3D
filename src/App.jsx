import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CaraCoroa from "./components/CaraCoroa";

function App() {
  const [count, setCount] = useState(0);

  return (
    //Titulo CARACOROA
    //Renderização da moeda
    //Botão pra mostrar cara ou coroa
    <div className="App">
      <CaraCoroa></CaraCoroa>
    </div>
  );
}

export default App;
