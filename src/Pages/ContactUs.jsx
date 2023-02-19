import React from 'react';
import Ask from "../Components/Ask/Ask";
import Discount from "../Components/Discount/Discount";
import Row from "../Components/Row/Row";
import { ContactUsScreen } from "../Components/ContactUsScreen";

export const ContactUs = () => {
  return (
    <div className="container">
      <ContactUsScreen />
      <Ask/>
      <Discount/>
      <Row/>
    </div>
  );
}
