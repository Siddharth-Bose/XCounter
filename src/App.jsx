import React, { useState } from "react";

function App() {
  // Initialize counter state with 0
  const [counter, setCounter] = useState(0);

  // Handler to change counter based on operator
  const changeHandler = (operator) => {
    // Use eval to dynamically apply "+" or "-" operation
    setCounter((prevCount) => eval(`${prevCount} ${operator} 1`));
  };
  return (
    <div>
      {/* App title */}
      <h1>Counter App</h1>

      {/* Display count in specified format */}
      <p>Count: {counter}</p>

      {/* Increment button: increases counter by 1 */}
      <button className="increment" onClick={()=>changeHandler("+")}>Increment</button>

      {/* Decrement button: decreases counter by 1 */}
      <button className="decrement" onClick={()=>changeHandler("-")}>Decrement</button>
    </div>
  );
}

export default App;
