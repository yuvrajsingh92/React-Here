import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const formHander = (e) => {
    e.preventDefault();
    console.log("Form Have Been Submited By", title);
    setTitle("");
  };
  return (
    <>
      <div className="heading">
        <h1>Two Way Binding</h1>
      </div>
      <div className="form">
        <form
          action=""
          onSubmit={(e) => {
            formHander(e);
          }}
        >
          <input
            value={title}
            type="text"
            name=""
            id=""
            placeholder="Enter Your Name: "
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
