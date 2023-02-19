import React from 'react';
import Ask from "../Components/Ask/Ask";
import Discount from "../Components/Discount/Discount";
import Row from "../Components/Row/Row";
import {SpecialOffersScreen} from "../Components/SpecialOffersScreen";

export const SpecialOffers = () => {
  return (
    <div className="container">
      <SpecialOffersScreen />
      <Ask/>
      <Discount/>
      <Row/>
    </div>
  );
}
