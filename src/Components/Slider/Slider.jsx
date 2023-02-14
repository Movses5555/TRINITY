import React, { useEffect } from 'react';
import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css';
import {Controller, EffectCoverflow, EffectFade, Thumbs} from "swiper";
import carImage from '../../assets/img/sliderCarImage.jpg';
import carOffer1 from '../../assets/img/carOffer1.jpg';
import carOffer2 from '../../assets/img/carOffer2.jpg';
import carOffer3 from '../../assets/img/carOffer3.jpg';
import carOffer4 from '../../assets/img/carOffer4.jpg';
import styles from './Slider.module.scss';
import {NavLink} from "react-router-dom";
import { GetScrollPosition } from '../../helpers/getScrollPosition';
import Aos from 'aos';

function Slider() {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const [slider, setSlider] = React.useState(null);

    const scrollTop = GetScrollPosition();
    useEffect(() => {
        let sliderSection = document.getElementById('slider-section');
        if(!!sliderSection && scrollTop > sliderSection?.offsetTop ) {
            Aos.init();
        }
    }, [scrollTop])

    const carsArray = [
        {image: carImage, carTitle: 'Audi', carSubtitle: 'Huracan EVO Spyder RS6', price: '2 400'},
        {image: carOffer1, carTitle: 'Lamborghini', carSubtitle: 'Urus', price: '2 400'},
        {image: carOffer2, carTitle: 'Lamborghini', carSubtitle: 'Huracan EVO Spyder RS6', price: '2 400'},
        {image: carOffer3, carTitle: 'Ferrari', carSubtitle: 'Roma', price: '2 400'},
        {image: carOffer4, carTitle: 'Range Rover', carSubtitle: 'Autobiography New 2022', price: '2 400'},
    ];

    const [searchValue, setValue] = React.useState('');
    const [activeIndex, setIndex] = React.useState(0);

    return (
        <section className={styles.slider} id='slider-section'>
            <div className={styles.sliderWrap}>
                <div
                    className={styles.imageSlider} 
                    data-aos="slide-right"
                >
                    <Swiper
                        modules={[EffectFade, EffectCoverflow, Thumbs, Controller]}
                        direction={'vertical'}
                        draggable={false}
                        effect={'coverflow'}
                        shortSwipes={false}
                        noSwiping={true}
                        allowTouchMove={false}
                        onSwiper={setThumbsSwiper}
                        initialSlide={2}
                        className={styles.carImageSlider}
                        >
                        {
                            carsArray.map((car, i) => {
                                return (
                                    <SwiperSlide key={i} className={styles.slide}>
                                        <img src={car.image} alt=""/>
                                        <p className={styles.carTitle}>{car.carTitle}<br/>{car.carSubtitle}</p>
                                        <p className={styles.price}>Rent is from aed<br/><span>{car.price}$</span><br/>per day</p>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div
                    className={styles.rightSide}
                    data-aos="slide-left"
                >
                    <h2 className={styles.title}>Most Popular</h2>
                    <div className={styles.inputWrap}>
                        <input placeholder={'Car search'} value={searchValue} onChange={(e) => setValue(e.target.value)} type="text" className={styles.carSearch}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                            <path d="M12.7089 23.9452C18.9145 23.9452 23.9452 18.9145 23.9452 12.7089C23.9452 6.5033 18.9145 1.47266 12.7089 1.47266C6.5033 1.47266 1.47266 6.5033 1.47266 12.7089C1.47266 18.9145 6.5033 23.9452 12.7089 23.9452Z" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20.5225 21.1064L24.9275 25.5002" stroke="#434343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className={styles.carSliderWrap}>
                        <div className={styles.sliderNav}>
                            <button onClick={() => {
                                if(activeIndex > 0) {
                                    slider.slideTo(activeIndex - 1)
                                }
                            }
                            } className={styles.sliderBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                    <path d="M7.69307 0.296828L13.7127 6.31662C14.0958 6.69955 14.0958 7.32041 13.7127 7.70315C13.3299 8.08593 12.7091 8.08593 12.3263 7.70315L6.9999 2.37657L1.67367 7.703C1.29074 8.08577 0.669973 8.08577 0.287198 7.703C-0.0957325 7.32022 -0.0957325 6.69939 0.287198 6.31646L6.30688 0.296673C6.49836 0.105285 6.74905 0.0096988 6.99987 0.00969883C7.25081 0.00969886 7.50168 0.105471 7.69307 0.296828Z" fill="url(#paint0_linear_79_575)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_79_575" x1="8.00003" y1="-1.51442e-05" x2="8.00003" y2="9.49999" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#B7B7B7"/>
                                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                            <span className={styles.line}></span>
                            <span className={styles.centerDot}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                                    <circle cx="10" cy="10" r="10" fill="#33B7BC"/>
                                    <circle cx="10" cy="10" r="7" fill="white"/>
                                    <circle cx="18" cy="13" r="5" fill="#161516"/>
                                </svg>
                                <svg className={styles.DotLine} xmlns="http://www.w3.org/2000/svg" width="263" height="74" viewBox="0 0 263 74" fill="none">
                                    <path d="M1.5 1.5L61.5 72H261.5" stroke="#2C2C2C" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </span>
                            <button onClick={() => {
                                if(activeIndex < carsArray.length - 1) {
                                    slider.slideTo(activeIndex + 1)
                                }}
                            } className={styles.sliderBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                    <path d="M6.30693 7.70317L0.28734 1.68338C-0.0957766 1.30045 -0.0957766 0.679593 0.28734 0.296847C0.670115 -0.0859291 1.29094 -0.085929 1.67368 0.296847L7.0001 5.62343L12.3263 0.297003C12.7093 -0.0857737 13.33 -0.0857737 13.7128 0.297003C14.0957 0.679779 14.0957 1.30061 13.7128 1.68354L7.69312 7.70333C7.50164 7.89472 7.25095 7.9903 7.00013 7.9903C6.74919 7.9903 6.49832 7.89453 6.30693 7.70317Z" fill="url(#paint0_linear_79_568)"/>
                                    <defs>
                                        <linearGradient id="paint0_linear_79_568" x1="5.99997" y1="8.00002" x2="5.99997" y2="-1.49998" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#B7B7B7"/>
                                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        <div className={`${styles.carSlider}  car-slider`}>
                            <Swiper
                                direction={'vertical'}
                                slidesPerView={5}
                                onSwiper={setSlider}
                                className={styles.swiper}
                                centeredSlides={true}
                                centerInsufficientSlides={true}
                                spaceBetween={50}
                                initialSlide={2}
                                modules={[Thumbs]}
                                slideToClickedSlide={true}
                                onSlideChange={(slider) => {
                                    setIndex(slider.activeIndex);
                                    if(thumbsSwiper !== null) {
                                        thumbsSwiper.slideTo(slider.activeIndex)
                                    }
                                }}
                            >
                                {carsArray.map((car, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className={styles.slideWrap}>
                                                <p className={`${styles.slideTitle} title`}>{car.carTitle}</p>
                                                <p className={`${styles.slideSubtitle} subtitle`}>{car.carSubtitle}</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                    <NavLink to={'/'} className={styles.viewAllBtn}>View all</NavLink>
                </div>
            </div>
        </section>
    );
}

export default Slider;