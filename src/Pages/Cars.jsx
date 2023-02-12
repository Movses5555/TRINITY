import React from 'react';
import Slider from "../Components/Slider/Slider";
import Offers from "../Components/Offers/Offers";
import About from "../Components/About/About";
import FullPageImage from "../Components/FullPageImage/FullPageImage";
import Reviews from "../Components/Reviews/Reviews";
import Advantages from "../Components/Adventages/Advantages";
import Ask from "../Components/Ask/Ask";
import Discount from "../Components/Discount/Discount";
import Row from "../Components/Row/Row";

export const Cars = () => {
  return (
      <div className="container">
        <Slider/>
        <Offers/>
        <About/>
        <FullPageImage/>
        <Reviews/>
        <Advantages/>
        <Ask/>
        <Discount/>
        <Row/>
      </div>
  );
}
