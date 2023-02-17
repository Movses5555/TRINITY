import React from 'react';
import { Navigation } from '../../Elements/Navigation';
import styles from './CarListScreen.module.scss';

export const CarListScreen = () =>  {
  return (
    <div className={styles.cars}>
      <div
        className={styles.carsContent}
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <Navigation />
        <p className={styles.title} >Car List in Dubai</p>
      </div>
    </div>
  );
}
