// import React, { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(10);
//   const [Array, setArray] = useState([10, 20, 30, 40]);

//   function changeNum() {
//     setNum(30);
//     setArray([50, 60, 70, 80]);
//   }
//   return (
//     <div>
//       <h1>{Array}</h1>
//       <h1>The Value of is {num}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState(0);
//   function add() {
//     console.log("Incresing");
//     setNum(num + 1);
//   }
//   function sub() {
//     console.log("Decresing");
//     setNum(num - 1);
//   }
//   return (
//     <div>
//       <h1 id="count">{num}</h1>
//       <br />
//       <button onClick={add} id="increse">
//         Increse
//       </button>
//       <button onClick={sub} id="decrese">
//         Decrese
//       </button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [obj, setobj] = useState({ name: "Ayush Singh", Age: 21 });

//   function getObj() {
//     console.log(obj.name, obj.Age);
//   }
//   return (
//     <div>
//       <h1>Hello</h1>
//       <button onClick={getObj}>Click</button>
//     </div>
//   );
// };

// export default App;

// ! useState using object

// import React, { useState } from "react";

// const App = () => {
//   const [Obj, setObj] = useState({ Name: "Ayush Singh", Age: 22 });

//   const getObj = () => {
//     let newObj = { ...Obj };
//     newObj.Name = "Yuvraj Singh";
//     newObj.Age = 22;
//     setObj(newObj);
//   };
//   return (
//     <div>
//       <h1>
//         {Obj.Name} {Obj.Age}
//       </h1>
//       <button onClick={getObj}>Click</button>
//     </div>
//   );
// };

// export default App;

