import React, { useContext } from "react";
import { themeContextData } from "./../context/ThemeContext";

const Btn = () => {
  const [theme, setTheme] = useContext(themeContextData);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("Dark");
    } else if (theme === "Dark") {
      setTheme("light");
    }
  };
  return (
    <div>
      <button onClick={changeTheme} className="ml-8 bg-gray-600 p-2 rounded">
        Change Theme
      </button>
    </div>
  );
};

export default Btn;
