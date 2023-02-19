import React, { useState } from 'react';
import { Navigation } from '../../Elements/Navigation';
import styles from './DubaiGuideScreen.module.scss';
import dubaiGuide1 from '../../assets/img/dubaiGuide-1.png';
import dubaiGuide2 from '../../assets/img/dubaiGuide-2.png';
import dubaiGuide3 from '../../assets/img/dubaiGuide-3.png';
import dubaiGuide4 from '../../assets/img/dubaiGuide-4.png';
import dubaiGuide5 from '../../assets/img/dubaiGuide-5.png';
import dubaiGuide6 from '../../assets/img/dubaiGuide-6.png';
import dubaiGuide7 from '../../assets/img/dubaiGuide-7.png';
import dubaiGuide8 from '../../assets/img/dubaiGuide-8.png';
import dubaiGuide9 from '../../assets/img/dubaiGuide-9.png';
import {NavLink} from "react-router-dom";

export const DubaiGuideScreen = () =>  {
  const tabs = ["Content for stories", "Things to Do", "Beaches", "Extreme", "Food"];
  const dubaiGuide = [
    {img: dubaiGuide1, title: 'The Address Dubai Marina pool'},
    {img: dubaiGuide2, title: 'The Address Dubai Marina pool'},
    {img: dubaiGuide3, title: 'The Address Dubai Marina pool'},
    {img: dubaiGuide4, title: 'The Address Dubai Marina pool'},
    {img: dubaiGuide5, title: 'The Address Dubai Marina pool'},
    {img: dubaiGuide6, title: 'The Address Dubai Marina pool'},
    {img: dubaiGuide7, title: 'The Address Dubai Marina pool'},
    {img: dubaiGuide8, title: 'The Address Dubai Marina pool'},
    {img: dubaiGuide9, title: 'The Address Dubai Marina pool'},
  ];
  const [activeTab, changeTab] = useState('Content for stories')

  return (
    <section className={styles.dubaiGuide}>
      <div
        className={styles.topContent}
        data-aos="zoom-in-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <Navigation currentPage='Dubai Guide' />
        <p className={styles.title} >Best Things to Do in Dubai</p>
      </div>
      <div className={styles.tabs}>
        <div className={styles.overflow}>
          {
            tabs.map((tab, i) => {
              return (
                <button
                  key={i}
                  onClick={() => changeTab(tab)}
                  className={tab === activeTab ? `${styles.tab} ${styles.active}` : styles.tab}
                >
                  <p>{tab}</p>
                </button>
              )
            })
          }
        </div>
      </div>
      <div className={styles.dubaiGuideContentWrapper} >
        {
          dubaiGuide.map((item, i) => {
            return (
              <div
                key={i}
                className={styles.cardWrapper}
                data-aos="slide-up"
                data-aos-offset="200"
              >
                <div className={styles.card} >
                  <img src={item.img} alt="" className={styles.dubaiGuideImg}/>
                  <p className={styles.dubaiGuideTitle}>{item.title}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className={styles.viewAllWrapper}>
        <NavLink className={styles.viewAll} to={'#'}>View all</NavLink>
      </div>
    </section>
  );
}
