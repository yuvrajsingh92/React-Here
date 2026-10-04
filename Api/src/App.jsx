import React from "react";
import axios from "axios";
import { useState } from "react";
// import second from "";
const App = () => {
  // async function getData() {
  //   const responce = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos/1",
  //   );
  //   console.log(responce);
  // } // ? This how we can call using fetch

  // ! using same with arrow function

  // const getData = async () => {
  //   const responce = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos",
  //   );
  //   const data = await responce.json()
  //   console.log(data)
  // };

  // ! using axios
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data)
    setData(response.data);
  };
  return (
    <div>
      <button onClick={getData}>Click For Data</button>
      <div>
        {data.map(function (elem, idx) {
          return <h3>{elem.author},{elem.url}</h3>;
        })}
      </div>
    </div>
  );
};

export default App;
