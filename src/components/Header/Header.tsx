import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row h-20 py-5 w-4/5 mx-auto sm:justify-between justify-center my-4">
      <div className="flex justify-center">
        <img src="public/vite.svg" alt="vite-logo" className="w-5" />
        <p className="font-bold my-auto px-2">Frontender.itacademy</p>
      </div>
    </div>
  );
};

export default Header;