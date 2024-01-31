import React from "react";
import { ArrowProps } from "../../../types/budgetTypes";
const SortArrow = ({ isOrdered }: ArrowProps) => {
  return (
    <img
      src={`../../public/${
        isOrdered ? "up-triangle.svg" : "down-triangle.svg"
      }`}
      alt="arrow-to-sort"
      className={`w-4 ${isOrdered ? "my-auto" : "my-auto mt-1"}`}
    />
  );
};

export default SortArrow;
