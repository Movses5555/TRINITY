import React from 'react';
import styles from './Offers.module.scss';
import offerImg1 from '../../assets/img/carOffer1.jpg';
import offerImg2 from '../../assets/img/carOffer2.jpg';
import offerImg3 from '../../assets/img/carOffer3.jpg';
import offerImg4 from '../../assets/img/carOffer4.jpg';
import {NavLink} from "react-router-dom";

function Offers({
    isCarList = false,
    onClickRent = () => {},
}) {
    const MainTabs = [
        'Special Offer', 'New car', 'Most Popular', 'Daily'
    ]
    const CarListTabs = [
        "All Cars",
        "SUVs",
        // "Convertibles",
        // "Sports Cars",
        "Coupe", "Premium"
    ]

    let tabs = !!isCarList ? CarListTabs : MainTabs;

    const offers = [
        {img: offerImg1, title: 'Lamborghini Urus'},
        {img: offerImg2, title: 'Ferrari Roma'},
        {img: offerImg3, title: 'Rolls-Royce Ghost'},
        {img: offerImg4, title: 'Porsche 911 Turbo S'},
        {img: offerImg1, title: 'Lamborghini Urus'},
        {img: offerImg2, title: 'Ferrari Roma'},
        {img: offerImg3, title: 'Rolls-Royce Ghost'},
        {img: offerImg4, title: 'Porsche 911 Turbo S'},
        {img: offerImg1, title: 'Lamborghini Urus'},
        {img: offerImg2, title: 'Ferrari Roma'},
        {img: offerImg3, title: 'Rolls-Royce Ghost'},
        {img: offerImg4, title: 'Porsche 911 Turbo S'},
    ]

    const [activeTab, changeTab] = React.useState('Special Offer')

    return (
        <section className={styles.offers}>
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
            <div className={styles.offersWrap}>
                {offers.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className={styles.offer}
                            data-aos="slide-up"
                            data-aos-offset="200"
                        >
                            <img src={item.img} alt="" className={styles.offerImg}/>
                            <p className={styles.offerTitle}>{item.title}</p>
                            <button
                                className={styles.rentBtn}
                                onClick={() => onClickRent(item)}
                            >Rent</button>
                        </div>
                    )
                })}
            </div>
            <div className={styles.viewAllWrapper}>
                <NavLink className={styles.viewAll} to={'/'}>View all</NavLink>
            </div>
        </section>
    );
}

export default Offers;