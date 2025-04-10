import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(10);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };

  return (
    <div>
      <h3>
        Counter<small>{count}</small>
      </h3>
      <div>
        <button
          onClick={() => increaseBy(+1)}
          className="p-2 bg-blue-500 rounded w-10 text-black"
        >
          +1
        </button>
        <button
          onClick={() => increaseBy(-1)}
          className="p-2 bg-blue-500 rounded w-10 text-white"
        >
          -1
        </button>
      </div>
    </div>
  );
};
