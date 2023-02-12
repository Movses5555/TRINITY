import React from 'react';
import styles from './Row.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";

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

    return (
        <section className={styles.Row}>
            <div className={styles.rowWrap}>
                <Swiper slidesPerView={5}>
                    {cars.map((item, i) => {
                        return (
                            <SwiperSlide key={i} >
                                <div onClick={() => setActive(item)} className={active === item ? `${styles.item} ${styles.active}` : styles.item}>
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