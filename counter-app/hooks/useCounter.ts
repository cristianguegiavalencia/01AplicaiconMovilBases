import { useState } from 'react';

export function useCounter(initial = 5, min = 0, max = 20) {
  const [count, setCount] = useState<number>(initial);
  const [history, setHistory] = useState<number[]>([]);

  const increment = () => {
    if (count < max) {
      const newValue = count + 1;
      setCount(newValue);
      setHistory([...history, newValue]);
    }
  };

  const reset = () => {
    setCount(initial);
    setHistory([]);
  };

  return {
    count,
    increment,
    reset,
    history,
  };
}
