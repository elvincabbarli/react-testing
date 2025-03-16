import React from "react";

interface NewCounterProps {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
  handleReset?: () => void;
}

const NewCounter = (props: NewCounterProps) => {
  return (
    <div>
      <h1>Counter New</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
      {props.handleReset && <button onClick={props.handleReset}>Reset</button>}
    </div>
  );
};

export default NewCounter;
