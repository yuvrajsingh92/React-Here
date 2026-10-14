import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(100);

  useEffect(
    function () {
      console.log("Hello");
    },
    [num], // ? This is the use of useEffect 
  );

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click Here
      </button>

      <button
        onClick={() => {
          setNum2(num2 + 100);
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default App;
