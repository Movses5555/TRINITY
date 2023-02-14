import React, { useEffect } from 'react';
import styles from './Reviews.module.scss';
import preview1 from '../../assets/img/preview1.jpg';
import preview2 from '../../assets/img/preview2.jpg';
import preview3 from '../../assets/img/preview3.jpg';
import preview4 from '../../assets/img/preview4.jpg';
import {Swiper, SwiperSlide} from "swiper/react";
import { GetScrollPosition } from '../../helpers/getScrollPosition';
import Aos from 'aos';

function Reviews() {
    const videos = [
        {url: '/', preview: preview1},
        {url: '/', preview: preview2},
        {url: '/', preview: preview3},
        {url: '/', preview: preview4},
    ]

    const [index, setIndex] = React.useState(0);
    const [slider, setSlider] = React.useState(null);

    const scrollTop = GetScrollPosition();
    useEffect(() => {
        let reviewsSection = document.getElementById('reviews-section');
        if(!!reviewsSection && scrollTop > reviewsSection?.offsetTop ) {
            Aos.init();
        }
    }, [scrollTop])

    return (
        <section className={styles.reviews} id="reviews-section">
            <h2 className={styles.title}>Reviews</h2>
            <div className={styles.reviewsVideos}>
                {videos.map((video, i) => {
                    let slideType = i%2 === 0 ? "slide-up" : ""
                    return (
                        <a
                            key={i}
                            href={video.url}
                            className={ styles.video }
                            data-aos={ slideType }
                            data-aos-once="false"
                            data-aos-mirror="true"
                            data-aos-duration="2000"
                        >
                            <img src={video.preview} alt=""/>
                            <span className={styles.hoverBg}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                                    <circle cx="44" cy="44" r="40" fill="#33B7BC" stroke="url(#paint0_linear_79_663)" strokeOpacity="0.5" strokeWidth="8"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M40.5824 30.5995C39.2729 29.5519 37.333 30.4842 37.333 32.1612V55.8388C37.333 57.5158 39.2729 58.4481 40.5824 57.4005L55.3808 45.5617C56.3816 44.7611 56.3816 43.2389 55.3808 42.4383L40.5824 30.5995Z" fill="white"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_79_663" x1="16.6667" y1="84" x2="103.333" y2="2" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#33B7BC"/>
                                    <stop offset="1" stopColor="#33B7BC" stopOpacity="0"/>
                                    </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </a>
                    )
                })}
            </div>
            <div className={styles.reviewsSlider}>
                <Swiper
                    slidesPerView={2}
                    onSlideChange={(slider) => setIndex(slider.activeIndex)}
                    onSwiper={setSlider}
                >
                    {videos.map((video, i) => {
                        let slideType = i%2 === 0 ? "slide-up" : "slide-down"
                        return (
                            <SwiperSlide key={i} className={styles.reviewsSliderItem} >
                                <a
                                    data-aos={ slideType }
                                    href={video.url}
                                    className={styles.video}
                                >
                                    <img src={video.preview} alt=""/>
                                    <span className={styles.hoverBg}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88" fill="none">
                                            <circle cx="44" cy="44" r="40" fill="#33B7BC" stroke="url(#paint0_linear_79_663)" strokeOpacity="0.5" strokeWidth="8"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M40.5824 30.5995C39.2729 29.5519 37.333 30.4842 37.333 32.1612V55.8388C37.333 57.5158 39.2729 58.4481 40.5824 57.4005L55.3808 45.5617C56.3816 44.7611 56.3816 43.2389 55.3808 42.4383L40.5824 30.5995Z" fill="white"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_79_663" x1="16.6667" y1="84" x2="103.333" y2="2" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#33B7BC"/>
                                            <stop offset="1" stopColor="#33B7BC" stopOpacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                </a>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className={styles.reviewssliderBtns}>
                <button onClick={() => {
                    if(slider !== null && index > 0) {
                        slider.slideTo(index - 1)
                    }
                }
                }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <circle cx="21" cy="21" r="20.25" transform="rotate(90 21 21)" fill="#161516" stroke="url(#paint0_linear_193_107)" strokeWidth="1.5"/>
                        <defs>
                            <linearGradient id="paint0_linear_193_107" x1="21" y1="43.3696" x2="21" y2="-3.19565" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#33B7BC"/>
                                <stop offset="1" stopColor="#262526" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <g clipPath="url(#clip0_193_108)">
                            <path d="M2.82557 5.40594L7.98539 0.24629C8.31362 -0.0820952 8.84578 -0.0820952 9.17385 0.24629C9.50195 0.574384 9.50195 1.10652 9.17385 1.43459L4.60821 6.00009L9.17372 10.5654C9.50181 10.8937 9.50181 11.4257 9.17372 11.7538C8.84562 12.0821 8.31349 12.0821 7.98526 11.7538L2.82544 6.5941C2.66139 6.42998 2.57946 6.2151 2.57946 6.00011C2.57946 5.78502 2.66155 5.56998 2.82557 5.40594Z" fill="url(#paint0_linear_193_108)"/>
                            </g>
                            <defs>
                            <linearGradient id="paint0_linear_193_108" x1="1.28543" y1="6" x2="9.74811" y2="-2.06246" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#22ECF3" stopOpacity="0.45"/>
                            <stop offset="1" stopColor="#22ECF3" stopOpacity="0"/>
                            </linearGradient>
                            <clipPath id="clip0_193_108">
                            <rect width="12" height="12" fill="white" transform="translate(12 12) rotate(-180)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </span>
                </button>
                <button onClick={() => {
                    if(slider !== null && index < videos.length - 1) {
                        slider.slideTo(index + 1)
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <circle cx="21" cy="21" r="20.25" transform="rotate(90 21 21)" fill="#161516" stroke="url(#paint0_linear_193_107)" strokeWidth="1.5"/>
                        <defs>
                            <linearGradient id="paint0_linear_193_107" x1="21" y1="43.3696" x2="21" y2="-3.19565" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#33B7BC"/>
                                <stop offset="1" stopColor="#262526" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <g clipPath="url(#clip0_193_108)">
                            <path d="M2.82557 5.40594L7.98539 0.24629C8.31362 -0.0820952 8.84578 -0.0820952 9.17385 0.24629C9.50195 0.574384 9.50195 1.10652 9.17385 1.43459L4.60821 6.00009L9.17372 10.5654C9.50181 10.8937 9.50181 11.4257 9.17372 11.7538C8.84562 12.0821 8.31349 12.0821 7.98526 11.7538L2.82544 6.5941C2.66139 6.42998 2.57946 6.2151 2.57946 6.00011C2.57946 5.78502 2.66155 5.56998 2.82557 5.40594Z" fill="url(#paint0_linear_193_108)"/>
                            </g>
                            <defs>
                            <linearGradient id="paint0_linear_193_108" x1="1.28543" y1="6" x2="9.74811" y2="-2.06246" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#22ECF3" stopOpacity="0.45"/>
                            <stop offset="1" stopColor="#22ECF3" stopOpacity="0"/>
                            </linearGradient>
                            <clipPath id="clip0_193_108">
                            <rect width="12" height="12" fill="white" transform="translate(12 12) rotate(-180)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
}

export default Reviews;