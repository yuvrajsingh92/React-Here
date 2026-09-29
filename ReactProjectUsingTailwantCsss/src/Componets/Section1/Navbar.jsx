import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 px-16">
      <h4 className="bg-black white text-white px-6 py-2 rounded-full m-2 uppercase">Target Audience</h4>
      <button className="bg-gray-200 px-6 py-2 uppercase rounded-full text-sm">Digital Banking Platform</button>
    </div>
  );
};

export default Navbar;
