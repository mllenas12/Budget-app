import React from "react";
import Service from "./Service";
import { BudgetCompletedProps } from "../../../types/budgetTypes";

const BudgetCompleted = ({ currentBudget }: BudgetCompletedProps) => {
  return (
    <div className="rounded-xl shadow-xl w-4/4 mx-auto my-5 p-5 border-solid border-2 border-gray-50 md:flex md:justify-between">
      <div className="w-full md:w-1/4">
        <h2 className="font-bold text-lg">{currentBudget.name}</h2>
        <p className="text-xs mt-1 font-semibold text-gray-400">
          {currentBudget.email}
        </p>
        <p className="text-xs mt-1 font-semibold text-gray-400">
          {currentBudget.phone}
        </p>
      </div>
      <div className="py-4 md:py-1 md:w-2/4 md:flex md:flex-col md:pl-14 lg:pl-20">
        <p className="text-xs mt-1 font-semibold">Serveis contractats:</p>
        <ul className="list-disc text-xs mt-1 pl-4 font-semibold">
          <Service servicesProp={currentBudget.services} />
        </ul>
      </div>
      <div className="flex md:flex-col justify-end md:w-1/4">
        <h4 className="my-auto md:my-0 text-sm md:ml-auto md:pr-4 font-semibold text-gray-400">
          Total:
        </h4>
        <div className="flex md:justify-end pl-2 ">
          <h2 className="md:text-3xl text-xl font-bold">
            {currentBudget.total}
          </h2>
          <p className="text-xs font-semibold pt-2 pl-1">€</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetCompleted;
