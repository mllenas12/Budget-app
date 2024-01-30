import React from "react";
import { CounterContext } from "../../context/CounterProvider";
import { optionType, OptionsProps } from "../../types/types";

const Options: React.FC<OptionsProps> = ({ option }) => {
  const { setDataOptions } = React.useContext(CounterContext);

  const handleCheckboxChange = (id: number) => {
    setDataOptions((prevData: optionType[]) => {
      return prevData.map((option) => {
        return option.id == id
          ? { ...option, isAdded: !option.isAdded }
          : option;
      });
    });
  };

  return (
    <div className="rounded-xl shadow-xl flex flex-col md:flex-row w-3/4 md:w-3/5 mx-auto mt-10 p-5">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="font-bold md:text-2xl lg:text-3xl text-lg">
            {option.title}
          </h1>
          <p className="text-xs md:text-sm lg:text-xl mt-2">
            {option.description}
          </p>
        </div>

        <div className="flex ml-auto md:ml-0  md:w-1/2 md:justify-between mt-2">
          <h2 className="md:text-3xl text-xl font-bold my-auto px-4">{`${option.price}€`}</h2>
          <div className="my-auto">
            <input
              type="checkbox"
              name="isAdded"
              checked={option.isAdded}
              id={option.id}
              onChange={() => handleCheckboxChange(option.id)}
            ></input>
            <label
              htmlFor={option.id}
              className="my-auto pl-2 text-sm md:text-lg lg:text-xl"
            >
              Afegir
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
