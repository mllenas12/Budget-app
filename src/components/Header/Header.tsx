import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row py-5 w-4/5 mx-auto sm:justify-between justify-center my-4">
      <div className="flex justify-center">
        <img src="public/vite.svg" alt="vite-logo" className="w-5" />
        <p className="font-bold my-auto px-2">Frontender.itacademy</p>
      </div>
      <Link
        to="/"
        className="font-semibold w-1/3 sm:w-1/6 mx-auto sm:mx-0 sm:my-auto my-3 py-1 sm:px-5 bg-white border-solid border-2 border-emerald-400 rounded text-center"
      >
        Home
      </Link>
    </div>
  );
};

export default Header;
