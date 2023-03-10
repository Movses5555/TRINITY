/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import styles from './About.module.scss';
import sprite from '../../assets/img/bgSpriteAbout.svg';
import { GetScreenWidth } from '../../helpers/getScreenWidth';
import { Navigation } from '../../Elements/Navigation';

const mockData = [
    {
        count: 25,
        type: 'cars',
        description: `Exclusive fleet never seen on car rental market`
    },
    {
        count: '24/7',
        type: '',
        description: `ready to tailor make your rental hassle free`
    },
    {
        count: '100%',
        type: '',
        description: `satisfaction guarantee`
    }
]

function About({
    isAboutPage = false,
}) {
    const screenWidth = GetScreenWidth();
    let isMobile = screenWidth < 1024;
    return (
        <section id='about-section' className={styles.about}>
            <span className={styles.triangle}>
                <img src={sprite} alt=""/>
            </span>
            {
                !!isAboutPage && (
                    <div className={styles.navigation}>
                        <Navigation currentPage='About Us' />
                    </div>
                )
            }
            <h2 className={styles.title}>About Us</h2>
            <div className={styles.pluses}>
                {
                    mockData?.map((item, i) => {
                        return (
                            <div
                                className={styles.plus}
                                key={i}
                                data-aos="zoom-in"
                            >
                                <div className={styles.titleRow}>
                                    <p className={styles.PlusCount}>{item.count}</p>
                                    <p className={styles.PlusTitle}>{item.type}</p>
                                </div>
                                <p className={styles.text}>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.aboutText} data-aos={ isMobile ? "slide-down" : "slide-left" }>
                <p>I???m with cars for over 18 years. My auto passion and attention to details will make your experience with us second to none. Guaranteed.</p>
            </div>
            <div className={styles.aboutTextAuthor} data-aos={ isMobile ? "slide-up" : "slide-right" }>
                Kirill Aliev, MBA<span><br/>CEO Trinity car rental boutique</span>
            </div>
        </section>
    );
}


export default About;