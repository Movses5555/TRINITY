import React, { useEffect, useState } from 'react';
import { ReactSlider } from '../../../Elements/Slider';
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { bookingRequest } from '../../../api'
import CloseIcon from '../../../assets/img/closeWhite.svg';
import InfoIcon from '../../../assets/img/InfoIcon.svg';
import DateIcon from '../../../assets/img/dateIcon.svg';
import MapIcon from '../../../assets/img/map.svg';
import toaster from '../../../helpers/toast'

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import styles from './CarRentModal.module.scss';


export const CarRentModal = ({
  onClose,
  activeItem,
}) =>  {
  const [openInfo, setOpenInfo] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(false);
  const [images, setImages] = useState([]);
  const [prices, setPrices] = useState({});
  const [totalPrices, setTotalPrices] = useState({});
  const [leftContentSectionHeight, setLeftContentSectionHeight] = useState('auto');
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({});
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  })

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    if(window.innerWidth < 1200) {
      setLeftContentSectionHeight('auto');
    } else {
      let el = document.getElementById('left-content-section');
      if(!!el) {
        setLeftContentSectionHeight(window.innerHeight - el.offsetTop);
      }
    }
    if(activeItem) {
      const { media, tariffs, deposit } = activeItem;
      let img = [];
      media?.forEach(item => {
        img = [
          ...img,
          item.original_url
        ]
      })
      let pricesData = {}
      
      tariffs?.forEach((item) => {
        let amountType = item.name_l;
        if(amountType[0] === '"' && amountType[amountType.length - 1] === '"') {
          amountType = amountType.slice(1, amountType.length - 1 )
        }
        pricesData = {
          ...pricesData,
          [amountType]: { amountType, amount: item.amount}
        }
      })
      let totalPricesData = {
        AED: +pricesData.AED.amount + +deposit,
        USD: +pricesData.USD.amount
      };
      setImages(img);
      setPrices(pricesData)
      setTotalPrices(totalPricesData)
    }
    return () => {
      document.body.style.overflowY = 'auto';
    }
  }, []);

  const onChange = (key, value) => {
    setData({
      ...data,
      [key]: value
    })
    setErrors({
      ...errors,
      [key]: null
    })
  }

  const onBookingRequest = () => {
    let requestData = {
      ...data,
      from: format(new Date(date.startDate), 'dd.MM.yyyy'),
      to: format(new Date(date.endDate), 'dd.MM.yyyy'),
    }
    setIsDisabledButton(true);
    bookingRequest(requestData)
      .then(res => {
        setIsDisabledButton(false);
        setData({})
        toaster.success('Thank you! Your request has been accepted.');
      })
      .catch((err) => {
        setErrors(err?.response?.data?.errors || {})
        setIsDisabledButton(false);
        toaster.error('Something went wrong');
      })
  }

  return (
    <div className={styles.carRentModal}>
      <div
        className={styles.closeButton}
        role='presentation'
        onClick={onClose}
      >
        <img src={CloseIcon} alt='close' />
      </div>
      <div className={styles.content}>
        <div className={styles.rightContent}>
          <ReactSlider
            images={images}
          />
        </div>
        <div className={styles.leftContent}>
          <div className={styles.titleAndInfo}>
            <div className={styles.titleAndInfoButton}>
              <div className={styles.title}> 
                <span>{activeItem.name_l?.en}</span>
                <div
                  className={styles.infoButton}
                  role='presentation'
                  onClick={() => setOpenInfo(!openInfo)}
                >
                  <img src={InfoIcon} alt='close'/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.infoWrapper}>
            {
              !!openInfo && (
                  <div className={styles.info}>
                    <InfoItem
                      title={activeItem.horsepower} 
                      description='Horsepower'
                    />
                    <InfoItem
                      title={activeItem.engine_capacity}
                      description='Engine capacity'
                    />
                    <InfoItem
                      title={activeItem.acceleration}
                      subTitle='sec'
                      description='Acceleration'
                    />
                    <InfoItem
                      title={activeItem?.type?.name_l?.en}
                      description='Type'
                      toUpperCase
                    />
                    <InfoItem
                      title={activeItem.drive}
                      description='Drive'
                    />
                    <InfoItem
                      title={activeItem.quantity_of_seats}
                      description='Quantity of Seats'
                    />
                  </div>
              )
            }
          </div>
          <div
            id='left-content-section'
            className={styles.leftContentSectionWrapper}
            style={{height: leftContentSectionHeight}}
          >
            <div className={styles.leftContentSection} >
              <div className={styles.form}>
                <label>Rental date</label>
                <div
                  className={styles.dateInputView}
                  role='presentation'
                  onClick={() => setOpenDatePicker(!openDatePicker)}
                >
                  <div>
                    <span>{!!date?.startDate ? format(new Date(date?.startDate), 'dd.MM.yyyy') : ''}</span>
                    {
                      !!date?.endDate && (
                        <>
                          <span> — </span>
                          <span>{!!date?.endDate ? format(new Date(date?.endDate), 'dd.MM.yyyy') : ''}</span>
                        </>
                      )
                    }
                  </div>
                  <img src={DateIcon} alt='calendar' />
                </div>
                {
                  !!openDatePicker && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => {
                        setDate(item.selection)
                      }}
                      moveRangeOnFirstSelection={false}
                      ranges={[{
                        startDate: !!date?.startDate ? date.startDate : new Date(),
                        endDate: !!date?.endDate ? date?.endDate : '',
                        key: 'selection'
                      }]}
                    />
                  )
                }
                <label>Where to bring the car ?</label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    placeholder={'Pickup from Trinity garage'}
                    className={!!errors?.place ? `${styles.input} ${styles.inputError}` : styles.input}
                    name='place'
                    value={data?.place}
                    onChange={(e) => {
                      onChange('place', e.target.value)
                    }}
                  />
                  <img src={MapIcon} alt='location' />
                  {
                    !!errors?.place && (
                      <span className={styles.errorMessage}>{errors?.place?.[0]}</span>
                    )
                  }
                </div>
                <label>Phone number</label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    pattern="[0-9]"
                    placeholder={'Phone number'}
                    className={!!errors?.phone ? `${styles.input} ${styles.inputError}` : styles.input}
                    name='phone'
                    onChange={(e) => {
                      onChange('phone', e.target.value)
                    }}
                  />
                  {
                    !!errors?.phone && (
                      <span className={styles.errorMessage}>{errors?.phone?.[0]}</span>
                    )
                  }
                </div>
              </div>
              <div className={styles.rentalRateContent}>
                <h2>Rental rate</h2>
                <div className={styles.rentalRateItem}>
                  <div className={styles.itemRightContent}>
                    <span className={styles.priceOneDay}>{prices?.AED?.amount} AED / {prices?.USD?.amount} $</span>
                    <span className={styles.type}>price for one day</span>
                  </div>
                </div>
                {/* <Item
                  text='1-7 day'
                  price='3.900 AED/1060$'
                  type='price for one day'
                />
                <Item
                  text='7-14 day'
                  price='3.900 AED/1060$'
                  type='price for one day'
                />
                <Item
                  text='14-30 day'
                  price='3.900 AED/1060$'
                  type='price for one day'
                />
                <Item
                  text='from 30 days'
                  price='3.900 AED/1060$'
                  type='price for one day'
                /> */}
              </div>
              <div className={styles.additionallyContent}>
                <h2>Additionally</h2>
                <Item
                  text='Security Deposit'
                  price={`${activeItem.deposit}AED`}
                />
                <Item
                  text='Personal Driver'
                  price='Avaliable'
                />
              </div>
              <div
                className={!!isDisabledButton ? `${styles.requestRentButton} ${styles.requestRentButtonDisabled}` : styles.requestRentButton}
                onClick={() => {
                  if(!isDisabledButton) {
                    onBookingRequest()
                  }
                }}
              >
                <div className={styles.textWrapper}>
                  <p>Request for a rent</p>
                </div>
                <div className={styles.priceSection}>
                  <span>{totalPrices.AED}AED</span>
                  <span className={styles.slash}> / </span>
                  <span>{totalPrices.USD}$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const Item = ({
  text,
  price,
  type,
}) => {
  return (
    <div className={styles.rentalRateItem}>
      <div className={styles.itemLeftContent}>
        <span>{text}</span>
      </div>
      <div className={styles.itemRightContent}>
        <span className={styles.price}>{price}</span>
        { !!type && <span className={styles.type}>{type}</span> }
      </div>
    </div>
  )
}

const InfoItem = ({
  title,
  subTitle,
  description,
  toUpperCase
}) => {
  return (
    <div className={styles.info_item}>
      <p className={`${styles.info_item_title} ${!!toUpperCase && styles.toUpperCase}`} >
        {title}
        { !!subTitle && <span className={styles.info_item_subtitle}>{subTitle}</span> }
      </p>
      <p className={styles.info_item_description}>{description}</p>
    </div>
  )
}