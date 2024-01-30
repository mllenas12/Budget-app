import React from "react";
import { CounterContext } from "../../../context/CounterProvider";
const WebCustomizer = () => {
  const { counterPages, counterLangs } = React.useContext(CounterContext);
  return (
    <div className="w-full md:w-2/3 ml-auto">
      <div className="flex md:justify-end justify-between text-end my-2">
        <p className="px-2 my-auto font-bold text-xs">Nombre de pàgines</p>
        <div className="flex">
          <button>
            <img src="public/minus-icon.svg" className="md:w-4 sm:w-6 w-10" />
          </button>
          <div className="px-6 sm:px-6 mx-2 py-1 border-2 border-inherit rounded-lg font-bold">
            {counterPages}
          </div>
          <button>
            <img src="public/plus-icon.svg" className="md:w-4 sm:w-6 w-10" />
          </button>
        </div>
      </div>
      <div className="flex md:justify-end justify-between text-end my-2">
        <p className="px-2 my-auto font-bold text-xs">Nombre de llenguatges</p>
        <div className="flex">
          <button>
            <img src="public/minus-icon.svg" className="md:w-4 sm:w-6 w-10" />
          </button>
          <div className="px-6 sm:px-6 mx-2 py-1 border-2 border-inherit rounded-lg font-bold">
            {counterLangs}
          </div>
          <button>
            <img src="public/plus-icon.svg" className="md:w-4 sm:w-6 w-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebCustomizer;
