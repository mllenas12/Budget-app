import React from "react";
import { PopUpProps } from "../../../types/counterTypes";

const PopUp: React.FC<PopUpProps> = ({ id }) => {
  // Open the PopUp modal when clicking question mark icon
  const handlePopUpClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const modalElement: any = document.getElementById(`modal_${id}`);
    modalElement?.showModal();
  };
  return (
    <>
      <button onClick={handlePopUpClick}>
        <img src="public/help.svg" alt="help-logo" className="w-5 mr-2" />
      </button>
      <dialog id={`modal_${id}`} className="modal">
        <div className="modal-box py-20">
          <h3 className="font-bold text-lg text-center pb-6">
            {(id == "pages" && "Número de pàgines") ||
              (id == "langs" && "Número de llenguatges")}
          </h3>
          <p className="font-semibold text-xs text-center ">
            {id == "pages"
              ? "Afegeix les pàgines que necessitis per a dur a terme el teu projecte."
              : "Afegeix els llenguatges que tindrà el teu projecte."}
          </p>
          <p className="font-semibold text-xs text-center">
            {id == "pages"
              ? "El cost de cada pàgina és de 30€"
              : "El cost de cada llenguatge és de 30€"}
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default PopUp;
