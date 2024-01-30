import React from "react";
import Options from "./Options";
import TotalPrice from "./TotalPrice";
import { nanoid } from "nanoid";
import { CounterContext } from "../../context/CounterProvider";
import { optionType } from "../../types/types";

const Main = () => {
  const { total, dataOptions } = React.useContext(CounterContext);

  const options = dataOptions.map((option: optionType) => {
    return <Options key={nanoid()} option={option} />;
  });

  return (
    <>
      <form>{options}</form>
      <TotalPrice total={total} />
    </>
  );
};

export default Main;
