
// import React, { useState } from "react";

// export const Counter = () => {
//   const [count, setCount] = useState(10);
//   const [randomNumber, setRandomNumber] = useState<number | null>(null);

//   const increaseBy = (value: number) => {
//     setCount(count + value);
//   };

//   const generateRandom = () => {
//     const random = Math.floor(Math.random() * 100) + 1; // número del 1 al 100
//     setRandomNumber(random);
//   };

//   return (
//     <div className="p-4 space-y-4">
//       <h3 className="text-xl font-bold">
//         Counter <small className="text-gray-600">{count}</small>
//       </h3>

//       <div className="flex gap-2">
//         <button
//           onClick={() => increaseBy(+1)}
//           className="p-2 bg-blue-500 rounded w-10 text-white hover:bg-blue-600"
//         >
//           +1
//         </button>
//         <button
//           onClick={() => increaseBy(-1)}
//           className="p-2 bg-blue-500 rounded w-10 text-white hover:bg-blue-600"
//         >
//           -1
//         </button>
//       </div>

//       <div className="mt-4 space-y-2">
//         <button
//           onClick={generateRandom}
//           className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
//         >
//           Generar número aleatorio
//         </button>
//         {randomNumber !== null && (
//           <p className="text-lg font-semibold text-green-700">
//             Número aleatorio: {randomNumber}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };
// ----------------------------------------------------------------------------------

// src/components/Counter.tsx

// ------------------------------------------------------------------------------------------------------------
// import { useCounter } from '../hooks/useCounter';

// export const Counter = () => {
//   const { count, increaseBy } = useCounter();

//   return (
//     <div>
//       <h3>
//         Counter <small>{count}</small>
//       </h3>

//       <div>
//         <button
//           onClick={() => increaseBy(+1)}
//           className="p-2 bg-blue-500 rounded-xs w-10 text-white"
//         >
//           +1
//         </button>
//         <button
//           onClick={() => increaseBy(-1)}
//           className="p-2 bg-blue-500 rounded-xs w-10 text-white"
//         >
//           -1
//         </button>
//       </div>
//     </div>
//   );
// };
// -----------------------------------------------------------------------------------

import { useCounter } from '../hooks/useCounter';

export const Counter = () => {
  const { count, increaseBy, setRandom } = useCounter();

  return (
    <div>
      <h3>
        Counter <small>{count}</small>
      </h3>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => increaseBy(+1)}
          className="p-2 bg-blue-500 rounded-xs w-10 text-white"
        >
          +1
        </button>
        <button
          onClick={() => increaseBy(-1)}
          className="p-2 bg-blue-500 rounded-xs w-10 text-white"
        >
          -1
        </button>
        <button
          onClick={setRandom}
          className="p-2 bg-green-600 rounded text-white"
        >
          🎲 Random
        </button>
      </div>
    </div>
  );
};
