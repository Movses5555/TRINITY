import React, { useState, useEffect } from 'react';
import { CarListScreen } from "../Components/CarListScreen/index";
import Offers from "../Components/Offers/Offers";
import Ask from "../Components/Ask/Ask";
import Discount from "../Components/Discount/Discount";
import Row from "../Components/Row/Row";
import { CarRentModal } from '../Components/CarListScreen/CarRentModal';
import { generateQuery } from '../helpers/generateQuery';
import { getCars } from '../api';

export const Cars = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeItem, setActiveItem] = useState({});
  const [offersCars, setOffersCars] = useState([]);
  const [offersActiveTab, setOffersActiveTab] = useState('all_cars');

  useEffect(() => {
    getCarsData();
  }, [])
  
  useEffect(() => {
    getCarsData();
  }, [offersActiveTab])

  const getCarsData = () => {
    let query = generateQuery({tab: 'most_popular'});
    getCars(query)
      .then((res) => {
        if(!!res.data.cars) {
          setOffersCars(res.data.cars)
        }
      })
      .catch(() => {
        setOffersCars([]);
      })
  }

  return (
      <div className="container">
        <CarListScreen />
        <Offers
          isCarList
          offersCars={offersCars}
          activeTab={offersActiveTab}
          onChangeActiveTab={setOffersActiveTab}
          onClickRent={(item) => {
            setOpenModal(true)
            setActiveItem(item)
          }}
        />
        <Ask/>
        <Discount/>
        <Row/>
        {
          openModal && (
            <CarRentModal
              activeItem={activeItem}
              onClose={() => setOpenModal(false)}
            />
          )
        }
      </div>
  );
}
