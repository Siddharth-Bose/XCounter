import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const changeHandler = (operator) => {
    setCounter((prevCount) => eval(`${prevCount} ${operator} 1`));
  };
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <button className="increment" onClick={()=>changeHandler("+")}>Increment</button>
      <button className="decrement" onClick={()=>changeHandler("-")}>Decrement</button>
    </div>
  );
}

export default App;
