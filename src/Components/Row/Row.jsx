import React, { useEffect } from 'react';
import styles from './Row.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import { GetScrollPosition } from '../../helpers/getScrollPosition';
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
    useEffect(() => {
        let rowSection = document.getElementById('row-section');
        if(!!rowSection && scrollTop > rowSection?.offsetTop) {
            Aos.init();
        }
    }, [scrollTop])

    return (
        <section className={styles.Row} id='row-section'>
            <div className={styles.rowWrap}>
                <Swiper slidesPerView={5}>
                    {cars.map((item, i) => {
                        let slideType = i%2 === 0 ? "slide-up" : "slide-down";
                        return (
                            <SwiperSlide key={i}>
                                <div 
                                    data-aos={slideType}
                                    data-aos-offset='300'
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