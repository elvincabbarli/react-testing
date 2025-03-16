import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>Counter Heading</h1>
      <div>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <div>
        <input
          type="number"
          value={amount}
          name="amount"
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
        />
        <button onClick={() => setCounter(amount)}>Set Amount</button>
      </div>
    </div>
  );
};

export default Counter;
