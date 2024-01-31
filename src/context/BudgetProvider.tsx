import React, { createContext } from "react";
import { CounterContext } from "./CounterProvider";
export const BudgetContext = createContext<any>("");
import {
  BudgetProviderProps,
  budgetType,
  servicesType,
} from "../types/budgetTypes";
import { optionType } from "../types/counterTypes";
import dataCheckboxes from "../data/dataCheckboxes.json";

const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const { total, dataOptions, setDataOptions, counterPages, counterLangs } =
    React.useContext(CounterContext);

  const [budget, setBudget] = React.useState<budgetType>({
    name: "",
    phone: "",
    email: "",
    total: 0,
    services: [],
  });

  const [arrayOfBudgets, setArrayOfBudgets] = React.useState<budgetType[]>([]);
  const [services, setServices] = React.useState<servicesType>([]);

  const resetForm = () => {
    setBudget({
      name: "",
      phone: "",
      email: "",
      total: 0,
      services: [],
    });
    setDataOptions(dataCheckboxes);
  };

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
