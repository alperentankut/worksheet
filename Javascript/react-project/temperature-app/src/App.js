import React, { useState } from "react";
import "./styles.css";

function App() {
  const [tempValue, setTempValue] = useState(10);
  const [tempColor, setTempColor] = useState("cold");
  const increaseTemp = () => {
    if(tempValue===30){
      return
    }
    let newTemp = tempValue + 1;
    setTempValue(newTemp);
    if (newTemp > 25) {
      setTempColor("hot");
    }
  };
  const decreaseTemp = () => {
    if(tempValue===0){
      return
    }
    let newTemp = tempValue - 1;
    setTempValue(newTemp);
    if (newTemp < 25) {
      setTempColor("cold");
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container ">
        <div className={`temperature-display ${tempColor}`}>{tempValue}ºC</div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemp()}>+</button>
        <button onClick={() => decreaseTemp()}>-</button>
      </div>
    </div>
  );
}

export default App;
