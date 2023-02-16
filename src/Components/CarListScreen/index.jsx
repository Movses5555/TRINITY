import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className={styles.navigation} >
          <Link to='/' className={styles.link}> Main </Link> 
          <span>»</span>
          <span>Car list</span>
        </div>
        <p className={styles.title} >Car List in Dubai</p>
      </div>
    </div>
  );
}
