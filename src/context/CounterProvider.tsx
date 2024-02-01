import React, { createContext } from "react";
import dataCheckboxes from "../data/dataCheckboxes.json";
import { optionType, CounterProviderProps } from "../types/counterTypes";

export const CounterContext = createContext<any>("");

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [dataOptions, setDataOptions] =
    React.useState<optionType[]>(dataCheckboxes);

  const [total, setTotal] = React.useState<number>();
  const [counterPages, setCounterPages] = React.useState<number>(0);
  const [counterLangs, setCounterLangs] = React.useState<number>(0);
  const [yearPayment, setYearPayment] = React.useState(false);

  // Update total based on added options and services, applying discounts for annual payment method
  const updateTotal = () => {
    setTotal(() => {
      const totalServices = dataOptions
        .filter((option: optionType) => option.isAdded)
        .reduce((ac: number, option: optionType) => {
          const price = yearPayment ? option.price * 0.8 : option.price;
          return ac + price;
        }, 0);
      const customizedWeb = dataOptions.find(
        (option) => option.title === "Web"
      );
      const priceCustomizedServices = (counterPages + counterLangs) * 30;
      const totalCustomizeServices = customizedWeb?.isAdded
        ? yearPayment
          ? priceCustomizedServices * 0.8
          : priceCustomizedServices
        : 0;
      return totalServices + totalCustomizeServices;
    });
  };

  React.useEffect(updateTotal, [
    dataOptions,
    counterPages,
    counterLangs,
    yearPayment,
  ]);

  return (
    <CounterContext.Provider
      value={{
        dataOptions,
        setDataOptions,
        total,
        counterLangs,
        counterPages,
        setCounterPages,
        setCounterLangs,
        yearPayment,
        setYearPayment,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
