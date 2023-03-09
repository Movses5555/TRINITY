import React, { useEffect, useState } from 'react';
import Slider from "../Components/Slider/Slider";
import Offers from "../Components/Offers/Offers";
import About from "../Components/About/About";
import FullPageImage from "../Components/FullPageImage/FullPageImage";
import Reviews from "../Components/Reviews/Reviews";
import Advantages from "../Components/Adventages/Advantages";
import Ask from "../Components/Ask/Ask";
import Discount from "../Components/Discount/Discount";
import Row from "../Components/Row/Row";
import MainScreen from "../Components/MainScreen/MainScreen";
import { CarRentModal } from '../Components/CarListScreen/CarRentModal';
import { generateQuery } from '../helpers/generateQuery';
import { getCars } from '../api';

export const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeItem, setActiveItem] = useState({});
  const [offersCars, setOffersCars] = useState([]);
  const [offersPopularCars, setOffersPopularCars] = useState([]);
  const [emptyPopularCars, setEmptyPopularCars] = useState(false);
  const [emptyByFilterPopularCars, setEmptyByFilterPopularCars] = useState(false);
  const [isFetchingByFilterPopularCars, setIsFetchingByFilterPopularCars] = useState(false);
  const [offersActiveTab, setOffersActiveTab] = useState('special_offer');

  useEffect(() => {
    getCarsData();
    getPopularCarsData();
  }, [])
  
  useEffect(() => {
    getCarsData();
  }, [offersActiveTab])



  const getCarsData = () => {
    let query = generateQuery({tab: offersActiveTab});
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

  const getPopularCarsData = () => {
    let query = generateQuery({tab: 'most_popular'});
    getCars(query)
      .then((res) => {
        if(!!res.data.cars) {
          setEmptyPopularCars(res.data.cars.length === 0);
          setOffersPopularCars(res.data.cars);
        }
      })
      .catch(() => {
        setOffersPopularCars([]);
      })
  }

  const handleSliderSearch = (value) => {
    setIsFetchingByFilterPopularCars(true);
    let query = generateQuery({tab: 'most_popular', search: value});
    getCars(query)
      .then((res) => {
        if(!!res.data.cars) {
          setEmptyByFilterPopularCars(res.data.cars.length === 0);
          setOffersPopularCars(res.data.cars);
          setIsFetchingByFilterPopularCars(false);
        }
      })
      .catch(() => {
        setOffersPopularCars([]);
        setIsFetchingByFilterPopularCars(false);
      })
  }

  return (
    <div className="container">
      <MainScreen />
      {
        !emptyPopularCars && (
          <Slider
            popularCars={ offersPopularCars }
            onSearch={handleSliderSearch}
            emptyByFilterPopularCars={emptyByFilterPopularCars}
            isFetchingByFilterPopularCars={isFetchingByFilterPopularCars}
          />  
        )
      }
      <Offers
        offersCars={offersCars}
        activeTab={offersActiveTab}
        onChangeActiveTab={setOffersActiveTab}
        onClickRent={(item) => {
          setOpenModal(true)
          setActiveItem(item)
        }}
      />
      <About/>
      <FullPageImage/>
      <Reviews/>
      <Advantages/>
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
