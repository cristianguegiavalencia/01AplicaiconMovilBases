// import React from 'react'
// import { useState } from 'react'
// export const useCounter = () => {
//     const [count, setCount] = useState(10);

//     const increaseBy = (value: number) => {
//         setCount(count + value);
//     };
//   return {
//     count,
//     increaseBy,
//   }
// }

// import { useState } from 'react';

// export const useCounter = () => {
//   const [count, setCount] = useState(10);

//   const increaseBy = (value: number) => {
//     setCount(count + value);
//   };

//   return {
//     count,
//     increaseBy,
//   };
// };


// export default useCounter

import { useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(10);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };

  const setRandom = () => {
    const random = Math.floor(Math.random() * 100); // número del 0 al 99
    setCount(random);
  };

  return {
    count,
    increaseBy,
    setRandom, // nuevo
  };
};
