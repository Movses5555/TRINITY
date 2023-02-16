import React from 'react';
import { CarListScreen } from "../Components/CarListScreen/index";
import Offers from "../Components/Offers/Offers";
import Ask from "../Components/Ask/Ask";
import Discount from "../Components/Discount/Discount";
import Row from "../Components/Row/Row";

export const Cars = () => {
  return (
      <div className="container">
        <CarListScreen />
        <Offers isCarList />
        <Ask/>
        <Discount/>
        <Row/>
      </div>
  );
}
