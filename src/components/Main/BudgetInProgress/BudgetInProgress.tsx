import React from "react";
import BudgetCompleted from "./BudgetCompleted";
import { BudgetContext } from "../../../context/BudgetProvider";
import { budgetType } from "../../../types/budgetTypes";
import { nanoid } from "nanoid";
const BudgetInProgress = () => {
  const { arrayOfBudgets } = React.useContext(BudgetContext);

  const budgetCompleted = arrayOfBudgets.map((budget: budgetType) => {
    return <BudgetCompleted key={nanoid()} currentBudget={budget} />;
  });
  return (
    <div className="w-3/4 md:w-3/5 mx-auto my-10">
      <hr className="border-dashed border-t-2"></hr>
      <h1 className="font-bold mt-8 my-4 md:text-2xl lg:text-3xl text-lg">
        Pressupost en curs:
      </h1>
      <div className="flex justify-center sm:justify-end">
        <img src="../../public/lupa.svg" alt="lupa" className="w-4" />
        <button className="font-semibold text-sm px-3">Data</button>
        <button className="font-semibold text-sm px-3">Import</button>
        <button className="font-semibold text-sm px-3">Nom</button>
      </div>
      <div>{budgetCompleted}</div>
    </div>
  );
};

export default BudgetInProgress;
