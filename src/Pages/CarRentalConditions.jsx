import React from 'react';
import { CarRentalConditionsScreen } from "../Components/CarRentalConditionsScreen/index";
import Ask from "../Components/Ask/Ask";
import Discount from "../Components/Discount/Discount";
import Row from "../Components/Row/Row";

export const CarRentalConditions = () => {
  return (
    <div className="container">
      <CarRentalConditionsScreen />
      <Ask />
      <Discount />
      <Row />
    </div>
  );
}
