import React from "react";
import Options from "./Options/Options";
import TotalPrice from "./TotalPrice";
import { nanoid } from "nanoid";
import { CounterContext } from "../../context/CounterProvider";
import { optionType } from "../../types/counterTypes";
import BudgetRequest from "./BudgetRequest";
import BudgetInProgress from "./BudgetInProgress/BudgetInProgress";

const Main = () => {
  const { total, dataOptions } = React.useContext(CounterContext);

  const options = dataOptions.map((option: optionType) => {
    return <Options key={nanoid()} option={option} />;
  });

  return (
    <>
      <form>{options}</form>
      <TotalPrice total={total} />
      <BudgetRequest />
      <BudgetInProgress />
    </>
  );
};

export default Main;
