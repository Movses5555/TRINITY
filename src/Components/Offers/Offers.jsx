import React, { useState } from 'react';
import styles from './Offers.module.scss';
import offerImg1 from '../../assets/img/carOffer1.jpg';
import offerImg2 from '../../assets/img/carOffer2.jpg';
import offerImg3 from '../../assets/img/carOffer3.jpg';
import offerImg4 from '../../assets/img/carOffer4.jpg';

function Offers({
    offersCars,
    activeTab,
    isCarList = false,
    onChangeActiveTab,
    onClickRent = () => {},
}) {
    const [isViewAll, setIsViewAll] = useState(false); 

    const MainTabs = [
        { name: 'Special Offer', value: 'special_offer'},
        { name: 'New car', value: 'new_car'},
        { name: 'Most Popular', value: 'most_popular'},
        { name: 'Daily', value: 'daily'},
    ]
    const CarListTabs = [
        { name: 'All Cars', value: 'all_cars'},
        { name: 'SUVs', value: 'suvs'},
        { name: 'Coupe', value: 'coupe'},
        { name: 'Premium', value: 'premium'},
        // { name: 'Convertibles', value: 'convertibles'},
        // { name: 'Sports Cars', value: 'sports_cars'},
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

    return (
        <section className={styles.offers}>
            <div className={styles.tabs}>
                <div className={styles.overflow}>
                    {
                        tabs.map((tab, i) => {
                            return (
                                <button
                                    key={i}
                                    onClick={() => onChangeActiveTab(tab.value)}
                                    className={tab.value === activeTab ? `${styles.tab} ${styles.active}` : styles.tab}
                                >
                                    <p>{tab.name}</p>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.offersWrap}>
                {offersCars?.map((item, i) => {
                    if(!isViewAll && i > 3) {
                        return null;
                    }
                    return (
                        <div
                            key={i}
                            className={styles.offer}
                            data-aos="slide-up"
                            data-aos-offset="200"
                            onClick={() => onClickRent(item)}
                        >
                            <img 
                                src={item?.media?.[0]?.original_url || offers[i].img}
                                alt="" 
                                className={styles.offerImg}    
                            />
                            <img 
                                src={item?.media?.[1]?.original_url || item?.media?.[0]?.original_url || offers[i].img}
                                alt="" 
                                className={styles.offerImg2}
                            />
                            <p className={styles.offerTitle}>{item?.name_l?.en}</p>
                            <button className={styles.rentBtn}> Rent </button>
                        </div>
                    )
                })}
            </div>
            {
                !isViewAll && !!offersCars?.length && offersCars?.length > 3 && (
                    <div className={styles.viewAllWrapper}>
                        <div
                            className={styles.viewAll}
                            role='presentation'
                            onClick={() => setIsViewAll(true)}
                        >View all</div>
                    </div>
                )
            }
        </section>
    );
}

export default Offers;