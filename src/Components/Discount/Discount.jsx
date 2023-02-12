import React, { useEffect } from 'react';
import styles from './Discount.module.scss';
import sprite1 from '../../assets/img/Mask Group.svg';
import sprite2 from '../../assets/img/Mask Group2.svg';
import sprite3 from '../../assets/img/plusSprite.svg';
import bg from '../../assets/img/discountBg.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Discount() {
    
    useEffect(() => {
        Aos.init({
            debounceDelay: 3000,
            duration: 1000,
        });
    }, [])

    return (
        <section className={styles.discount} data-aos="zoom-out" >
            <img src={bg} className={styles.discountBg} alt=""/>
            <div className={styles.card}>
                <span className={styles.bg}></span>
                <span className={styles.sprite1}>
                    <img src={sprite1} alt=""/>
                </span>
                <span className={styles.sprite2}>
                    <img src={sprite2} alt=""/>
                </span>
                <span className={styles.sprite3}>
                    <img src={sprite3} alt=""/>
                </span>
                <p className={styles.title}>Get a discount of up to 60%</p>
                <p className={styles.subtitle}>Get the latest articles and business updates that you need to know, you’ll even get special recommendations weekly.</p>
                <div className={styles.inputWrap}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                        <path d="M4.99707 6L10.3971 10.05C10.7526 10.3167 11.2415 10.3167 11.5971 10.05L16.9971 6" stroke="#868686" strokeLinecap="round"/>
                        <rect x="1.49707" y="0.5" width="20" height="17" rx="4.5" stroke="#868686"/>
                    </svg>
                    <input type="text" placeholder={'Your email'}/>
                    <button className={styles.send}>Receive</button>
                </div>
            </div>
        </section>
    );
}

export default Discount;