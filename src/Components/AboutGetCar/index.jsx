import React, { useEffect, useState } from 'react';
import { GetScreenWidth } from '../../helpers/getScreenWidth';
import { GetScrollPosition } from '../../helpers/getScrollPosition';
import Aos from 'aos';
import styles from './AboutGetCar.module.scss';

export const AboutGetCar = () =>  {
  const scrollTop = GetScrollPosition();
  const screenWidth = GetScreenWidth();
  let isMobile = screenWidth < 850;

  const [isMore, setIsMore] = useState(false);

  useEffect(() => {
    let aboutGetCarSection = document.getElementById('about-get-car-section');
    if(!!aboutGetCarSection && scrollTop > aboutGetCarSection?.offsetTop + 100 ) {
      Aos.init();
    }
  }, [scrollTop]);

  useEffect(() => {
    if(!!isMobile) {
      setIsMore(false)
    }
  }, [isMobile])

  return (
    <div className={styles.aboutGetCar} id='about-get-car-section'>
      <div
        className={styles.aboutGetCarContent}
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h2> Glad to present you Dubai Get Car </h2>
        <div className={styles.content}>
          <div>
            <p>A company founded by a team of professional enthusiasts who have set 
            themselves the goal of creating a truly exclusive car rental service that is unique for our country. 
            With us, you do not need to spend time and money on regular repairs, 
            paying high taxes and seasonal storage of your car. 
            You just have to enjoy the indescribable emotions from driving the car of your dreams.</p>
          </div>
          {
            !!(!isMobile || (!!isMobile && !!isMore)) && (
              <div data-aos={isMobile ? "fade-down" : "" } >
                <p>Your safety is our most important concern. The strictest control over the technical and 
                sanitary-hygienic condition of our vehicles is one of the distinctive features and 
                fundamental ideas that guide us. We guarantee that any car from the Dubai Get Car 
                vehicle fleet will leave a bright mark and unforgettable impressions in your soul.</p>
              </div>
            )
          }
        </div>
        {
          !!(!isMobile || (!!isMobile && !!isMore)) && (
            <div className={styles.bottomContent} data-aos={isMobile ? "fade-down" : "" } >
              <p>We invite you to familiarize yourself with our fleet of vehicles, 
              which are extremely rare in full complete sets of brands: McLaren, 
              Rolls-Royce, Lamborghini, Ferrari, Bentley, Porsche, Mercedes-Benz, etc.</p>
            </div>
          )
        }
        {
          !!isMobile && (
            <div className={styles.readMore} data-aos="fade-down">
              <button
                className={styles.readMoreButton}
                onClick={() => setIsMore(!isMore)}
              >{ isMore ? 'Read less' : 'Read more'}</button>
            </div>
          )
        }
      </div>
    </div>
  );
}
