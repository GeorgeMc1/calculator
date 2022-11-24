import {useState} from "react";
import {evaluate} from "mathjs";
import './App.css';
import Button from "./components/Button"

function App() {
  const [input, setInput] = useState("");
  const buttons = ["1","2","3","+","^","4","5","6","-","","7","8","9","*","","C","0","=","/",""];
  const buttonPressed = (role) => {
    if (role === "C"){
      setInput("");
    } else if (role === "="){
      setInput(evaluate(input));
    } else {
      setInput(input + role);
    }
  }
  return (
    <div className="App">
      <p id="input">{input}</p>
      <div id="buttons">
        {buttons.map((button,i) => {
          return(
            <Button key={i} role={button} click={buttonPressed}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;