import React from 'react';
import Ask from "../Components/Ask/Ask";
import Discount from "../Components/Discount/Discount";
import Row from "../Components/Row/Row";
import { DubaiGuideScreen } from "../Components/DubaiGuideScreen";

export const DubaiGuide = () => {
  return (
    <div className="container">
      <DubaiGuideScreen/>
      <Ask/>
      <Discount/>
      <Row/>
    </div>
  );
}
