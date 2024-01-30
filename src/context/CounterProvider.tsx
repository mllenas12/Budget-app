import React, { createContext } from "react";
import dataCheckboxes from "../data/dataCheckboxes.json";
import { optionType, CounterProviderProps } from "../types/types";

export const CounterContext = createContext<any>("");

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [dataOptions, setDataOptions] =
    React.useState<optionType[]>(dataCheckboxes);

  const [total, setTotal] = React.useState<number>();

  const updateTotal = () => {
    setTotal(() => {
      return dataOptions
        .filter((option: optionType) => option.isAdded)
        .reduce((ac: number, option: optionType) => ac + option.price, 0);
    });
  };
  React.useEffect(updateTotal, [dataOptions]);

  return (
    <CounterContext.Provider value={{ dataOptions, setDataOptions, total }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
