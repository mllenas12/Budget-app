import React from "react";
import Options from "./Options/Options";
import TotalPrice from "./TotalPrice";
import { nanoid } from "nanoid";
import { CounterContext } from "../../context/CounterProvider";
import { optionType } from "../../types/counterTypes";
import BudgetRequest from "./BudgetRequest";
import BudgetInProgress from "./BudgetInProgress/BudgetInProgress";
import SwitchMethodPayment from "./SwitchMethodPayment";

const Main = () => {
  const { total, dataOptions } = React.useContext(CounterContext);

  // Create Options component for each service in dataOptions to display them
  const options = dataOptions.map((option: optionType) => (
    <Options key={nanoid()} option={option} />
  ));

  return (
    <>
      <SwitchMethodPayment />
      <div>{options}</div>
      <TotalPrice total={total} />
      <BudgetRequest />
      <BudgetInProgress />
    </>
  );
};

export default Main;
