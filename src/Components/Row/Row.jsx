import React, { useEffect } from 'react';
import styles from './Row.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import { GetScrollPosition } from '../../helpers/getScrollPosition';
import { GetScreenWidth } from '../../helpers/getScreenWidth';
import Aos from 'aos';

function Row() {

    const cars = [
        'Lexus',
        'Mercedes',
        'Audi',
        'BMW',
        'Rolls-Royce',
        'Cadillac',
        'Maserati',
        'Lamborghini',
        'Bentley',
        'Porsche',
    ]

    const [active, setActive] = React.useState('Cadillac');
    const scrollTop = GetScrollPosition();
    const screenWidth = GetScreenWidth();
    
    useEffect(() => {
        let rowSection = document.getElementById('row-section');
        if(!!rowSection && scrollTop > rowSection?.offsetTop) {
            Aos.init();
        }
    }, [scrollTop])

    return (
        <section className={styles.Row} id='row-section'>
            <div className={styles.rowWrap}>
                <Swiper slidesPerView={ screenWidth > 850 ? 4 : screenWidth > 450 ? 3 : 2 }>
                    {cars.map((item, i) => {
                        let slideType = i%2 === 0 ? "slide-up" : "slide-down";
                        return (
                            <SwiperSlide key={i} className={styles.swiperSlide}>
                                <div
                                    data-aos={slideType}
                                    onClick={() => setActive(item)}
                                    className={active === item ? `${styles.item} ${styles.active}` : styles.item}
                                >
                                    <p><nobr>{item}</nobr></p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    );
}

export default Row;