import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [red, setRed] = useState();
  const [green, setGreen] = useState();
  const [blue, setBlue] = useState();
  const [time, setTime] = useState();
  const timechange = (event) => {
    setTime(event.target.value);
  };

  const Redchange = (event) => {
    setRed(event.target.value);
  };
  const Greenchange = (event) => {
    setGreen(event.target.value);
  };
  const Bluechange = (event) => {
    setBlue(event.target.value);
  };

  const circles = (length, color) => {
    let circles = [];
    for (let index = 0; index < length; index++) {
      circles.push(<div key={{ index }} id={color}></div>);
    }
    return circles;
  };
  const clearall = () => {
    setRed('');
    setGreen('');
    setBlue(' ');

  };
  const reset=()=>{
    setTimeout(clearall,1000*time);
  
}
  return (
    <div className="">
      <div className="my-4">
        <label>Red:</label>
        <input type="number" onChange={Redchange} value={red} />
        <label>Green:</label>
        <input type="number" onChange={Greenchange} value={green} />
        <label>Blue:</label>
        <input type="number" onChange={Bluechange} value={blue} />
        <br />
        <label>Time:(In seconds)</label>
        <input type="number" onChange={timechange} value={time} />
        <br />
        <br />
        <div>
          <div className="redbox">{circles(red, "red")}</div>
          <div className="greenbox">{circles(green, "green")}</div>
          <div className="bluebox">{circles(blue, "blue")}</div>
        </div>
        <div>
          <button className="spacing" onClick={reset}>Timer</button>
          <button onClick={clearall}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
