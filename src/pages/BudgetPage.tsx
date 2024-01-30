import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Main from "../components/Main/Main";
import CounterProvider from "../context/CounterProvider";

const BudgetPage = () => {
  return (
    <div className="font-montserrat">
      <CounterProvider>
        <Header />
        <Banner />
        <Main />
      </CounterProvider>
    </div>
  );
};

export default BudgetPage;
