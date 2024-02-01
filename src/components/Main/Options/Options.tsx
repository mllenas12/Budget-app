import React from "react";
import { CounterContext } from "../../../context/CounterProvider";
import { optionType, OptionsProps } from "../../../types/counterTypes";
import WebCustomizer from "./WebCustomizer";

const Options: React.FC<OptionsProps> = ({ option }) => {
  const { setDataOptions, yearPayment } = React.useContext(CounterContext);

  // Update dataOptions basedon changes in checkbox inputs
  const handleCheckboxChange = (id: number) => {
    setDataOptions((prevData: optionType[]) => {
      return prevData.map((option) =>
        option.id === id ? { ...option, isAdded: !option.isAdded } : option
      );
    });
  };

  return (
    <div
      className={`my-6 md:my-8 rounded-xl shadow-lg w-3/4 md:w-3/5 mx-auto p-5 ${
        option.isAdded && option.title == "Web"
          ? "border-solid border-2 border-emerald-600"
          : "border-solid border-2 border-gray-50"
      }`}
    >
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
          <div className="my-auto px-4 ">
            {yearPayment && (
              <h3 className="text-xs font-semibold text-orange-400 pb-3">
                Estalvia un 20%
              </h3>
            )}
            <h2 className="md:text-3xl text-xl font-bold text-center">{`${
              yearPayment ? option.price - option.price * 0.2 : option.price
            }€`}</h2>
          </div>

          <div className="flex my-auto">
            <input
              type="checkbox"
              name="isAdded"
              checked={option.isAdded}
              id={option.id}
              onChange={() => handleCheckboxChange(option.id)}
              className="checkbox  my-auto checkbox-xs rounded border-emerald-600 checked:bg-emerald-600 [--chkbg:theme(colors.emerald.600)] [--chkfg:white]"
            ></input>
            <label
              htmlFor={option.id}
              className="pl-2 text-sm md:text-lg lg:text-xl"
            >
              Afegir
            </label>
          </div>
        </div>
      </div>
      {option.title == "Web" && option.isAdded && (
        <div>
          <WebCustomizer />
        </div>
      )}
    </div>
  );
};

export default Options;
