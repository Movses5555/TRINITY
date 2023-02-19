import React, { useState } from 'react';
import { CarListScreen } from "../Components/CarListScreen/index";
import Offers from "../Components/Offers/Offers";
import Ask from "../Components/Ask/Ask";
import Discount from "../Components/Discount/Discount";
import Row from "../Components/Row/Row";
import { RentModal } from '../Components/CarListScreen/RentModal';

export const Cars = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
      <div className="container">
        <CarListScreen />
        <Offers
          isCarList
          onClickRent={(item) => {
            setOpenModal(true)
          }}
        />
        <Ask/>
        <Discount/>
        <Row/>
        {
          openModal && (
            <RentModal
              openModal={openModal}
              onClose={() => setOpenModal(false)}
            />
          )
        }
      </div>
  );
}
