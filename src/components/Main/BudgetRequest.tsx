import React from "react";
import { BudgetContext } from "../../context/BudgetProvider";

const BudgetRequest = () => {
  const { budget, handleForm, handleInputChange } =
    React.useContext(BudgetContext);

  return (
    <div className="rounded-xl shadow-xl w-3/4 md:w-3/5 mx-auto my-10 p-5 border-solid border-2 border-gray-50">
      <h1 className="font-bold my-2 md:text-2xl lg:text-3xl text-lg">
        Demanar pressupost
      </h1>
      <form
        onSubmit={handleForm}
        className="flex flex-col lg:flex-row gap-2 lg:justify-between"
      >
        <div className="py-2 flex flex-col lg:flex-row justify-center lg:justify-start gap-x-2">
          <input
            type="text"
            placeholder="Nom"
            onChange={handleInputChange}
            name="name"
            value={budget.name}
            required
            className="border-solid border-2 required:border-gray-200 rounded-md my-2 placeholder:pl-2 placeholder:text-sm lg:w-1/3"
          />
          <input
            type="text"
            placeholder="Telèfon"
            onChange={handleInputChange}
            value={budget.phone}
            name="phone"
            required
            className="border-solid border-2 required:border-gray-200 rounded-md my-2 placeholder:pl-2 placeholder:text-sm lg:w-1/3"
          />
          <input
            type="text"
            placeholder=" Email"
            onChange={handleInputChange}
            value={budget.email}
            name="email"
            required
            className="border-solid border-2 required:border-gray-200 rounded-md my-2 placeholder:pl-2 placeholder:text-sm lg:w-1/3"
          />
        </div>
        <button
          type="submit"
          className="btn text-white bg-emerald-500 px-2 lg:w-1/4 lg:my-auto"
        >
          Sol·licitar pressupost →
        </button>
      </form>
    </div>
  );
};

export default BudgetRequest;
