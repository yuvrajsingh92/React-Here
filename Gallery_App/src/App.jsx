import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=15",
    );
    setUserData(response.data);
  };
  useEffect(function () {
    getData();
  }, []);

  let printUserData = (
    <div className="text-center text-gray-500 font-semibold text-lg col-span-full py-10">
      No User Found
    </div>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="h-48 overflow-hidden bg-gray-200">
            <img
              src={elem.download_url}
              alt={elem.author}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h2 className="text-gray-800 font-bold text-lg truncate">
              {elem.author}
            </h2>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-black text-white bg-red-500 p-4 rounded-xl shadow-sm tracking-wide mb-6">
          Hello
        </h1>

        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold mb-8 px-5 py-2.5 rounded-2xl shadow-md transform active:scale-95 transition-all duration-150"
          onClick={getData}
        >
          Get Data
        </button>

        {/* Responsive responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {printUserData}
        </div>
      </div>
    </div>
  );
};

export default App;
