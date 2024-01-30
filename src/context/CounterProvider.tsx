import React, { createContext } from "react";
import dataCheckboxes from "../data/dataCheckboxes.json";
import { optionType, CounterProviderProps } from "../types/types";

export const CounterContext = createContext<any>("");

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [dataOptions, setDataOptions] =
    React.useState<optionType[]>(dataCheckboxes);

  const [total, setTotal] = React.useState<number>();

  const [counterPages, setCounterPages] = React.useState<number>(0);
  const [counterLangs, setCounterLangs] = React.useState<number>(0);

  const updateTotal = () => {
    setTotal(() => {
      const totalServices = dataOptions
        .filter((option: optionType) => option.isAdded)
        .reduce((ac: number, option: optionType) => ac + option.price, 0);

      const webOption = dataOptions.find((option) => option.title == "Web");
      let priceCustomizedServices = 0;
      webOption?.isAdded
        ? (priceCustomizedServices = (counterPages + counterLangs) * 30)
        : 0;

      return totalServices + priceCustomizedServices;
    });
  };
  React.useEffect(updateTotal, [dataOptions, counterPages, counterLangs]);

  return (
    <CounterContext.Provider
      value={{ dataOptions, setDataOptions, total, counterLangs, counterPages }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
