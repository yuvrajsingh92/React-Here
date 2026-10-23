import React from "react";
import Navbar2 from "./Navbar2";
import Btn from "./Btn";
const Navbar = () => {
  return (
    <div>
      <div className="nav flex justify-between items-center p-10">
        <h1>Ayush Singh</h1>
        <Navbar2 />
      </div>
      <Btn />
    </div>
  );
};

export default Navbar;
