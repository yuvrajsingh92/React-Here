import React, { useContext } from "react";
import { themeContextData } from "./../context/ThemeContext";

const Navbar2 = () => {
  const [theme,setTheme] = useContext(themeContextData);
  return (
    <div>
      <div className="navtabs flex justify-center items-center">
        <ul className="flex justify-center items-center gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>{theme}</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
