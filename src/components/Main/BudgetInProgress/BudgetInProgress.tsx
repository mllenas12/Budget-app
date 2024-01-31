import React from "react";
import BudgetCompleted from "./BudgetCompleted";
import { BudgetContext } from "../../../context/BudgetProvider";
import { budgetType } from "../../../types/budgetTypes";
import SortArrow from "./SortArrow";
import SearchBar from "./SearchBar";

const BudgetInProgress = () => {
  const { arrayOfBudgets, setArrayOfBudgets } = React.useContext(BudgetContext);
  const [isOrderedByTotal, setIsOrderedByTotal] = React.useState(false);
  const [isOrderedByDate, setIsOrderedByDate] = React.useState(false);
  const [isOrderedByName, setIsOrderedByName] = React.useState(false);
  const [isSearchActive, setIsSearchActive] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const sortByDate = () => {
    setArrayOfBudgets((prevArr: budgetType[]) =>
      isOrderedByDate
        ? [...prevArr].sort((a, b) => b.createdAt - a.createdAt)
        : [...prevArr].sort((a, b) => a.createdAt - b.createdAt)
    );
    setIsOrderedByDate((prev) => !prev);
  };

  const sortByTotal = () => {
    setArrayOfBudgets((prevArr: budgetType[]) =>
      isOrderedByTotal
        ? [...prevArr].sort((a, b) => b.total - a.total)
        : [...prevArr].sort((a, b) => a.total - b.total)
    );
    setIsOrderedByTotal((prev) => !prev);
  };

  const sortByName = () => {
    setArrayOfBudgets((prevArr: budgetType[]) =>
      isOrderedByName
        ? [...prevArr].sort((a, b) => b.name.localeCompare(a.name))
        : [...prevArr].sort((a, b) => a.name.localeCompare(b.name))
    );
    setIsOrderedByName((prev) => !prev);
  };
  const activeSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  const budgetCompleted = arrayOfBudgets
    .filter((budget: budgetType) =>
      isSearchActive
        ? budget.name.toLowerCase().trim().includes(query.trim().toLowerCase())
        : true
    )
    .map((budget: budgetType) => (
      <BudgetCompleted currentBudget={budget} key={budget.name} />
    ));

  return (
    <div className="w-3/4 md:w-3/5 mx-auto my-10">
      <hr className="border-dashed border-t-2"></hr>
      <h1 className="font-bold mt-8 my-4 md:text-2xl lg:text-3xl text-lg">
        Pressupost en curs:
      </h1>
      <div
        className={`flex ${
          isSearchActive
            ? "flex-col md:flex-row justify-center md:justify-end"
            : "flex-row justify-end"
        } `}
      >
        <div className="px-2 my-auto">
          {isSearchActive ? (
            <SearchBar setQuery={setQuery} />
          ) : (
            <button>
              <img
                src="../../public/lupa.svg"
                alt="lupa"
                className="w-3"
                onClick={() => activeSearch()}
              />
            </button>
          )}
        </div>
        <div
          className={`flex ${
            isSearchActive ? "mt-3 justify-center md:my-auto" : ""
          } `}
        >
          <button
            onClick={() => sortByDate()}
            className="font-semibold text-sm flex px-3 "
          >
            Data <SortArrow isOrdered={isOrderedByDate} />
          </button>
          <button
            onClick={() => sortByTotal()}
            className="font-semibold text-sm flex px-3 "
          >
            Import <SortArrow isOrdered={isOrderedByTotal} />
          </button>
          <button
            onClick={() => sortByName()}
            className="font-semibold text-sm flex px-3 "
          >
            Nom <SortArrow isOrdered={isOrderedByName} />
          </button>
        </div>
      </div>
      {budgetCompleted}
    </div>
  );
};

export default BudgetInProgress;
