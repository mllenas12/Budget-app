import React from "react";

const TotalPrice: React.FC<{ total: number | undefined }> = ({ total }) => {
  return (
    <div className="flex justify-end md:text-2xl font-bold my-8 md:my-12 w-3/4 md:w-3/5 mx-auto">
      <h2 className="px-8 my-auto">Preu pressuposat:</h2>
      <h2 className="text-2xl md:text-4xl">{`${total}€`}</h2>
    </div>
  );
};

export default TotalPrice;
