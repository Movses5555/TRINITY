import React from 'react';
import styles from './UnderConstructionScreen.module.scss';

export const UnderConstructionScreen = () =>  {
  return (
    <div className={styles.underConstruction}>
      <h2 data-aos="zoom-in-down">Under Construction</h2>
      <p data-aos="zoom-in-down">Get the latest articles and business updates that you need to know, you’ll even get special.</p>
    </div>
  );
}
