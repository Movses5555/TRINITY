import React, { useEffect, useState } from 'react';
import { ReactSlider } from '../../../Elements/Slider';
import { DateRange} from "react-date-range";
import { format } from "date-fns";
import CloseIcon from '../../../assets/img/closeWhite.svg';
import InfoIcon from '../../../assets/img/InfoIcon.svg';
import DateIcon from '../../../assets/img/dateIcon.svg';
import MapIcon from '../../../assets/img/map.svg';
import SliderImage from '../../../assets/img/sliderImage.svg';

import styles from './CarRentModal.module.scss';



const images = [
  SliderImage,
  SliderImage,
  SliderImage,
  SliderImage,
  SliderImage,
  SliderImage,
]
export const CarRentModal = ({
  onClose,
}) =>  {
  const [openInfo, setOpenInfo] = useState(false);
  const [leftContentSectionHeight, setLeftContentSectionHeight] = useState('auto');
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: '',
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
    return () => {
      document.body.style.overflowY = 'auto';
    }
  }, []);


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
        <div className={styles.leftContent}>
          <div className={styles.titleAndInfo}>
            <div className={styles.titleAndInfoButton}>
              <div className={styles.title}> 
                <span>Rent Lamborghini Urus in Dubai</span>
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
                      title='650' 
                      description='Horsepower'
                    />
                    <InfoItem
                      title='4L' 
                      description='Engine capacity'
                    />
                    <InfoItem
                      title='3.6'
                      subTitle='sec'
                      description='Acceleration'
                    />
                    <InfoItem
                      title='SUV' 
                      description='Type'
                    />
                    <InfoItem
                      title='4WD' 
                      description='Drive'
                    />
                    <InfoItem
                      title='5' 
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
                      onChange={item => {
                        setDate(item.selection)
                        setOpenDatePicker(false)
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
                  <input type="text" placeholder={'From the salon'} className={styles.input} />
                  <img src={MapIcon} alt='location' />
                </div>
              </div>
              <div className={styles.rentalRateContent}>
                <h2>Rental rate</h2>
                <Item
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
                />
              </div>
              <div className={styles.additionallyContent}>
                <h2>Additionally</h2>
                <Item
                  text='Security Deposit'
                  price='5 000 AED/1800$'
                />
                <Item
                  text='Personal Driver'
                  price='Avaliable'
                />
              </div>
              <div className={styles.requestRentButton}>
                <div className={styles.textWrapper}>
                  <p>Request for a rent</p>
                </div>
                <div className={styles.priceSection}>
                  <span>15 000 AED</span>
                  <span className={styles.slash}> / </span>
                  <span>3 800$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <ReactSlider
            images={images}
          />
        </div>
      </div>
    </div>
  );
}


const Item = ({
  text,
  price,
  type
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
  description
}) => {
  return (
    <div className={styles.info_item}>
      <p className={styles.info_item_title}>
        {title}
        { !!subTitle && <span className={styles.info_item_subtitle}>{subTitle}</span> }
      </p>
      <p className={styles.info_item_description}>{description}</p>
    </div>
  )
}