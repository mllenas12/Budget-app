import React from "react";
import { SearchBarProps } from "../../../types/budgetTypes";
const SearchBar = ({ setQuery }: SearchBarProps) => {
  return (
    <label className="relative block">
      <span className="absolute inset-y-0 right-0 flex items-center pr-2">
        <img src="lupa.svg" alt="" className="w-4" />
      </span>
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3  shadow-sm focus:outline-none focus:border-emerald-500  focus:ring-emerald-500 focus:ring-1 sm:text-sm"
        placeholder="Buscar"
        type="text"
        name="search"
        onChange={(event) => setQuery(event.target.value)}
      />
    </label>
  );
};

export default SearchBar;
