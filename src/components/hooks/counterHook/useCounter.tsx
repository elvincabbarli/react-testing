import { useState } from "react";

interface UseCounterType {
  initialCount: number;
}

export const UseCounter = ({ initialCount = 0 }: UseCounterType) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(initialCount);
  return { count, increment, decrement, reset };
};
