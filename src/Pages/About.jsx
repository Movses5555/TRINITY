import React from 'react';
import { AboutGetCar } from "../Components/AboutGetCar/index";
import Ask from "../Components/Ask/Ask";
import Discount from "../Components/Discount/Discount";
import Row from "../Components/Row/Row";
import About from "../Components/About/About";
import FullPageImage from "../Components/FullPageImage/FullPageImage";
import Advantages from "../Components/Adventages/Advantages";

export const AboutUs = () => {
  return (
    <div className="container">
      <About isAboutPage />
      <FullPageImage/>
      <AboutGetCar />
      <Advantages/>
      <Ask/>
      <Discount/>
      <Row/>
    </div>
  );
}
