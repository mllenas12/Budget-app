import React from "react";
import { CounterContext } from "../../../context/CounterProvider";
const WebCustomizer = () => {
  const { counterPages, counterLangs, setCounterPages, setCounterLangs } =
    React.useContext(CounterContext);

  const incrementPages = () => {
    setCounterPages((prev: number) => prev + 1);
  };
  const incrementLangs = () => {
    setCounterLangs((prev: number) => prev + 1);
  };
  const decrementPages = () => {
    setCounterPages((prev: number) => (prev > 0 ? prev - 1 : 0));
  };
  const decrementLangs = () => {
    setCounterLangs((prev: number) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="w-full md:w-2/3 ml-auto">
      <div className="flex justify-end text-end my-2">
        <p className="px-2 my-auto font-bold text-xs">Nombre de pàgines</p>
        <div className="flex">
          <button onClick={() => decrementPages()}>
            <img src="public/minus-icon.svg" className="md:w-4 sm:w-6 w-10" />
          </button>
          <div className="px-6 sm:px-6 mx-2 py-1 border-2 border-inherit rounded-lg font-bold">
            {counterPages}
          </div>
          <button onClick={() => incrementPages()}>
            <img src="public/plus-icon.svg" className="md:w-4 sm:w-6 w-10" />
          </button>
        </div>
      </div>
      <div className="flex justify-end  text-end my-2">
        <p className="px-2 my-auto font-bold text-xs">Nombre de llenguatges</p>
        <div className="flex">
          <button onClick={() => decrementLangs()}>
            <img src="public/minus-icon.svg" className="md:w-4 sm:w-6 w-10" />
          </button>
          <div className="px-6 sm:px-6 mx-2 py-1 border-2 border-inherit rounded-lg font-bold">
            {counterLangs}
          </div>
          <button onClick={() => incrementLangs()}>
            <img src="public/plus-icon.svg" className="md:w-4 sm:w-6 w-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebCustomizer;
