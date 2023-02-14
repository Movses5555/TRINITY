import React from 'react';
import styles from './Adventages.module.scss';
import advantages from '../../assets/img/adventages2.jpg';
import bg from '../../assets/img/advMobBg.svg';

function Advantages() {
    const adv = [
        {img: advantages, text: '40+ unique cars for rent from our fleet'},
        {img: advantages, text: 'Delivery and return of cars in Dubai 24/7'},
        {img: advantages, text: 'Insurance without a deductible for each car'},
        {img: advantages, text: 'No video or audio recording in the car'},
        {img: advantages, text: '24/7 technical support'},
        {img: advantages, text: 'All models have a premium package'},
    ]

    let animationTypes = [
        'fade-down-right',
        'fade-down',
        'fade-down-left',
        'fade-up-right',
        'fade-up',
        'fade-up-left', 
    ];

    return (
        <section className={styles.advantages}>
            <h2 className={styles.title}>Advantages</h2>
            <div className={styles.advWrap}>
                {adv.map((item, i) => {
                return (
                    <div
                        key={i}
                        className={styles.adv}
                        data-aos={ animationTypes[i] }
                        data-aos-once="false"
                        data-aos-mirror="true"
                        data-aos-duration="2000"
                    >
                        <span></span>
                        <img src={item.img} alt=""/>
                        <p data-aos='slide-left'>{item.text}</p>
                    </div>
                    )
                })}
            </div>
            <div className={styles.advWrapMob}>
                <img src={bg} alt=""/>
                <p className={styles.plus}><span></span>40+ unique cars for rent from our fleet</p>
                <p className={styles.plus}><span></span>Delivery and return of cars in Dubai 24/7</p>
                <p className={styles.plus}><span></span>Insurance without a deductible for each car</p>
                <p className={styles.plus}><span></span>No video or audio recording in the car</p>
            </div>
        </section>
    );
}

export default Advantages;