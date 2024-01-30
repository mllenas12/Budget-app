import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[url(public/bg-home.png)] bg-no-repeat bg-cover bg-center mt-44">
      <div className="flex flex-col justify-center py-20 text-center">
        <h1 className="md:text-5xl text-3xl px-10 lg:px-20 font-semibold">
          QUIN ÉS EL PREU PER CREAR UNA PÀGINA WEB?
        </h1>
        <p className="py-5 px-8 w-full md:w-4/5 lg:px-36 my-2 mx-auto">
          Personalitza les opcions que més s'acostin a les teves necssitats i
          obtén un pressupost a l'instant
        </p>
        <Link
          to="/BudgetPage"
          className="w-1/3 md:w-1/4 lg:w-1/5 py-4 mx-auto rounded-lg border-solid border-2 border-emerald-400 font-semibold bg-white"
        >
          Comença a calcular!
        </Link>
      </div>
    </div>
  );
};

export default Home;
