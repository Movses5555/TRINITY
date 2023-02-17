import React from 'react';
import { Navigation } from '../../Elements/Navigation';
import { QuestionsItem } from './QuestionsItem';
import styles from './CarRentalConditionsScreen.module.scss';

export const CarRentalConditionsScreen = () =>  {
  return (
    <div className={styles.carRentalConditions}>
      <div
        className={styles.carRentalConditionsContent}
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <Navigation />
        <p className={styles.title} >Car rental conditions</p>
        <p className={styles.description} >Requirements for Customers</p>
        <div className={styles.info}>
          <div className={styles.infoContent}>
            <div className={styles.infoTopContent}>
              <span>From</span>
              <p>19</p>
              <span>y.o.</span>
            </div>
            <div className={styles.infoBottomContent}>
              <span>Age</span>
            </div>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.infoContent}>
            <div className={styles.infoTopContent}>
              <span>From</span>
              <p>1</p>
              <span>year</span>
            </div>
            <div className={styles.infoBottomContent}>
              <span>Driving</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.questionsWrapper}>
        <div className={styles.questions}>
          <QuestionsItem
            title='Requirements for Customers'
            description='For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
          />
          <QuestionsItem
            title='How can I add another driver?'
            description='For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
          />
          <QuestionsItem
            title='Can I order delivery or return of a car?'
            description='For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
          />
          <QuestionsItem
            title='Where can I use a rented car?'
            description='For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
          />
          <QuestionsItem
            title='Are there any extra charges?'
            description='For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
          />
          <QuestionsItem
            title='How can I book a car?'
            description='For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
          />
          <QuestionsItem
            title='What is not allowed when renting a car?'
            description='For the car, a refund of the insurance deposit is required, the amount of which depends on the selected car, as well as the driving experience and citizenship of the customer.'
          />
        </div>
      </div>
    </div>
  );
}
