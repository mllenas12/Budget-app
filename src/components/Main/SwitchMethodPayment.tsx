import React from "react";
import { CounterContext } from "../../context/CounterProvider";

const SwitchMethodPayment = () => {
  const { setYearPayment } = React.useContext(CounterContext);

  // Toggle the payment method between anual or monthly
  const handleSwitchPaymentMode = () => {
    setYearPayment((prev: boolean) => !prev);
  };

  return (
    <div className="font-bold text-sm lg:text-lg 2xl:text-2xl mt-8 md:mt-12 flex w-4/5 mx-auto text-center justify-center">
      <label className="cursor-pointer label">
        <span className="label-text">Pagament mensual</span>
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller bg-emerald-500 border-emerald-500 [--tglbg:theme(colors.white)] checked:bg-white checked:border-white checked:[--tglbg:theme(colors.emerald.500)] my-auto mx-1 sm:mx-3"
          onClick={() => handleSwitchPaymentMode()}
        />
        <span className="label-text">Pagament anual</span>
      </label>
    </div>
  );
};

export default SwitchMethodPayment;
