import React, { createContext } from "react";
import { CounterContext } from "./CounterProvider";
import {
  BudgetProviderProps,
  budgetType,
  servicesType,
} from "../types/budgetTypes";
import { optionType } from "../types/counterTypes";
import dataCheckboxes from "../data/dataCheckboxes.json";
export const BudgetContext = createContext<any>("");

const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const { total, dataOptions, setDataOptions, counterPages, counterLangs } =
    React.useContext(CounterContext);
  const [budget, setBudget] = React.useState<budgetType>({
    name: "",
    phone: "",
    email: "",
    total: 0,
    services: [],
    createdAt: Date.now(),
  });
  const [arrayOfBudgets, setArrayOfBudgets] = React.useState<budgetType[]>([]);
  const [services, setServices] = React.useState<servicesType>([]);

  // Reset form inputs to start a new form with blank inputs
  const resetForm = () => {
    setBudget({
      name: "",
      phone: "",
      email: "",
      total: 0,
      services: [],
      createdAt: Date.now(),
    });
    setDataOptions(dataCheckboxes);
  };

  // Update budget and services information when the are changings in the form
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setServices(() => {
      const services = dataOptions.filter(
        (option: optionType) => option.isAdded
      );
      const servicesTitles = services.map((service: optionType) => {
        return service.title == "Web"
          ? `${service.title} (${counterPages} ${
              counterPages == 1 ? "pàgina" : "pàgines"
            }, ${counterLangs} ${
              counterLangs == 1 ? "llenguatge" : "llenguates"
            })`
          : service.title;
      });
      return servicesTitles;
    });

    setBudget((prevBudget) => {
      return {
        ...prevBudget,
        [name]: value,
        total: total,
        services: services,
      };
    });
  };

  // Handle form submission
  const handleForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setArrayOfBudgets((prevArr) => [...prevArr, { ...budget }]);
    resetForm();
  };

  return (
    <BudgetContext.Provider
      value={{
        budget,
        arrayOfBudgets,
        setArrayOfBudgets,
        handleForm,
        handleInputChange,
        services,
        setServices,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;
