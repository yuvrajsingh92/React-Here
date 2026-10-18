import React, { useState } from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  const [Theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (Theme === "light") {
      setTheme("dark");
    } else if (Theme === "dark") {
      setTheme("light");
    }
  };
  return (
    <div>
      <div className="datapassing">
        <Navbar theme={Theme} setTheme={setTheme} />
      </div>
      <div className="text">The theme is {Theme}</div>
      <button onClick={changeTheme}>Click To change the theme</button>
    </div>
  );
};

export default App;
