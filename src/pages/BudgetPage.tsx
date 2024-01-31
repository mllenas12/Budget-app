import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Main from "../components/Main/Main";
import CounterProvider from "../context/CounterProvider";
import BudgetProvider from "../context/BudgetProvider";
const BudgetPage = () => {
  return (
    <div className="font-montserrat">
      <CounterProvider>
        <BudgetProvider>
          <Header />
          <Banner />
          <Main />
        </BudgetProvider>
      </CounterProvider>
    </div>
  );
};

export default BudgetPage;
