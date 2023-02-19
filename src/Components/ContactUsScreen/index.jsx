import React from 'react';
import { Navigation } from '../../Elements/Navigation';
import styles from './ContactUsScreen.module.scss';

export const ContactUsScreen = () =>  {
  return (
    <div className={styles.contactUs}>
      <div
        className={styles.contactUsContent}
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <Navigation currentPage='Contact Us' />
        <p className={styles.title} >Contact Us</p>
        <div className={styles.phoneContent}>
          <span>Phone</span>
          <p>+971 58 548 9080</p>
        </div>
        <div className={styles.addressContent}>
          <span>Address</span>
          <p>24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai</p>
        </div>
      </div>
    </div>
  );
}
