import React, { useEffect } from 'react';
import { Navigation } from '../../Elements/Navigation';
import { SpecialOffersItem } from './SpecialOffersItem';
import SpecialOffersCar1 from '../../assets/img/special-offers-car-1.png'
import SpecialOffersCar2 from '../../assets/img/special-offers-car-2.png'
import SpecialOffersCar3 from '../../assets/img/special-offers-car-3.png'
import SpecialOffersCar4 from '../../assets/img/special-offers-car-4.png'
import SpecialOffersCar5 from '../../assets/img/special-offers-car-5.png'
import SpecialOffersCar6 from '../../assets/img/special-offers-car-6.png'
import styles from './SpecialOffersScreen.module.scss';
import Aos from 'aos';
import { GetScreenWidth } from '../../helpers/getScreenWidth';

export const SpecialOffersScreen = () =>  {
  const screenWidth = GetScreenWidth();
  let isMobile = screenWidth < 850;

  useEffect(() => {
      Aos.init();
  }, []);
  
  return (
    <div className={styles.specialOffer}>
      <div className={styles.specialOfferContent}>
        <div
          className={styles.headerContent}
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <Navigation currentPage='Special offers' />
          <p className={styles.title} >Special offers</p>
        </div>
        <div className={styles.content}>
          <div className={styles.section1}>
            <div className={styles.leftContent}>
              <div className={styles.contentItem}  data-aos={ isMobile ? "slide-up" : "zoom-in" } >
                <SpecialOffersItem 
                  src={SpecialOffersCar1}
                  title='TUNING'
                  description='We can make your car more powerful, add unique details and body kits, improve your driving experience by installing additional options, even those not provided by the manufacturer.'
                  onClickItem={() => {
                    console.log(555555555555);
                  }}
                />
              </div>
              <div className={styles.contentItem}  data-aos={ isMobile ? "slide-up" : "zoom-in" } >
                <SpecialOffersItem 
                  src={SpecialOffersCar2}
                  title='TUNING'
                  description='We can make your car more powerful, add unique details and body kits, improve your driving experience by installing additional options, even those not provided by the manufacturer.'
                  onClickItem={() => {
                    console.log(555555555555);
                  }}
                />
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.contentItem}  data-aos={ isMobile ? "slide-up" : "zoom-in" } >
                <SpecialOffersItem 
                  src={SpecialOffersCar3}
                  title='TUNING'
                  description='We can make your car more powerful, add unique details and body kits, improve your driving experience by installing additional options, even those not provided by the manufacturer.'
                  onClickItem={() => {
                    console.log(555555555555);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.leftContent}>
              <div className={styles.contentItem}  data-aos={ isMobile ? "slide-up" : "zoom-in" } >
                <SpecialOffersItem 
                  src={SpecialOffersCar4}
                  title='TUNING'
                  description='We can make your car more powerful, add unique details and body kits, improve your driving experience by installing additional options, even those not provided by the manufacturer.'
                  onClickItem={() => {
                    console.log(555555555555);
                  }}
                />
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.contentItem} data-aos={ isMobile ? "slide-up" : "zoom-in" }  >
                <SpecialOffersItem 
                  src={SpecialOffersCar5}
                  title='TUNING'
                  description='We can make your car more powerful, add unique details and body kits, improve your driving experience by installing additional options, even those not provided by the manufacturer.'
                  onClickItem={() => {
                    console.log(555555555555);
                  }}
                />
              </div>
              <div className={styles.contentItem}  data-aos={ isMobile ? "slide-up" : "zoom-in" } >
                <SpecialOffersItem 
                  src={SpecialOffersCar6}
                  title='TUNING'
                  description='We can make your car more powerful, add unique details and body kits, improve your driving experience by installing additional options, even those not provided by the manufacturer.'
                  onClickItem={() => {
                    console.log(555555555555);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.section1}>
            <div className={styles.leftContent}>
              <div className={styles.contentItem}  data-aos={ isMobile ? "slide-up" : "zoom-in" } >
                <SpecialOffersItem 
                  src={SpecialOffersCar1}
                  title='TUNING'
                  description='We can make your car more powerful, add unique details and body kits, improve your driving experience by installing additional options, even those not provided by the manufacturer.'
                  onClickItem={() => {
                    console.log(555555555555);
                  }}
                />
              </div>
              <div className={styles.contentItem}  data-aos={ isMobile ? "slide-up" : "zoom-in" } >
                <SpecialOffersItem 
                  src={SpecialOffersCar2}
                  title='TUNING'
                  description='We can make your car more powerful, add unique details and body kits, improve your driving experience by installing additional options, even those not provided by the manufacturer.'
                  onClickItem={() => {
                    console.log(555555555555);
                  }}
                />
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.contentItem}  data-aos={ isMobile ? "slide-up" : "zoom-in" } >
                <SpecialOffersItem 
                  src={SpecialOffersCar3}
                  title='TUNING'
                  description='We can make your car more powerful, add unique details and body kits, improve your driving experience by installing additional options, even those not provided by the manufacturer.'
                  onClickItem={() => {
                    console.log(555555555555);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.leftContent}>
              <div className={styles.contentItem}  data-aos={ isMobile ? "slide-up" : "zoom-in" } >
                <SpecialOffersItem 
                  src={SpecialOffersCar4}
                  title='TUNING'
                  description='We can make your car more powerful, add unique details and body kits, improve your driving experience by installing additional options, even those not provided by the manufacturer.'
                  onClickItem={() => {
                    console.log(555555555555);
                  }}
                />
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.contentItem} data-aos={ isMobile ? "slide-up" : "zoom-in" }  >
                <SpecialOffersItem 
                  src={SpecialOffersCar5}
                  title='TUNING'
                  description='We can make your car more powerful, add unique details and body kits, improve your driving experience by installing additional options, even those not provided by the manufacturer.'
                  onClickItem={() => {
                    console.log(555555555555);
                  }}
                />
              </div>
              <div className={styles.contentItem}  data-aos={ isMobile ? "slide-up" : "zoom-in" } >
                <SpecialOffersItem 
                  src={SpecialOffersCar6}
                  title='TUNING'
                  description='We can make your car more powerful, add unique details and body kits, improve your driving experience by installing additional options, even those not provided by the manufacturer.'
                  onClickItem={() => {
                    console.log(555555555555);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
