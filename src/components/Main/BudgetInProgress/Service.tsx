import React from "react";
import { ServiceProps } from "../../../types/budgetTypes";
import { nanoid } from "nanoid";
const Service: React.FC<ServiceProps> = ({ servicesProp }) => {
  const service = servicesProp.map((service: string) => (
    <li key={nanoid()}>{service}</li>
  ));
  return service;
};

export default Service;
