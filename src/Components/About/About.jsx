/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { GetScrollPosition } from '../../helpers/getScrollPosition';
import styles from './About.module.scss';
import sprite from '../../assets/img/bgSpriteAbout.svg';

const mockData = [
    {
        count: 8,
        type: 'year',
        description: `We've come a long way from a 2-people company to winning at Webby's.`
    },
    {
        count: 72,
        type: 'cars',
        description: `We've come a long way from a 2-people company to winning at Webby's.`
    },
    {
        count: 190,
        type: 'people',
        description: `We've come a long way from a 2-people company to winning at Webby's.`
    }
]

function About() {
    return (
        <section id='about-section' className={styles.about}>
            <span className={styles.triangle}>
                <img src={sprite} alt=""/>
            </span>
            <h2 className={styles.title}>About Us</h2>
            <div className={styles.pluses}>
                {
                    mockData?.map((item, index) => {
                        return (
                            <Counter
                                key={index}
                                count={item.count}
                                type={item.type}
                                description={item.description}
                            />
                        )
                    })
                }
            </div>
            <div className={styles.aboutText}>
                <p>I’m with cars for over 18 years. My auto passion and attention to details will make your experience with us second to none. Guaranteed.</p>
            </div>
            <div className={styles.aboutTextAuthor}>Kirill Aliev, MBA<span><br/>CEO Trinity car rental boutique</span></div>
        </section>
    );
}

const Counter = ({
    count,
    type,
    description,
}) => {
    const [number, setNumber] = useState(0);
    const scrollTop = GetScrollPosition();

    useEffect(() => {
        let aboutSection = document.getElementById('about-section');
        if(!!aboutSection && scrollTop > aboutSection?.offsetTop && number === 0) {
            let start = 0;
            if(start === count){
                return;
            }
            let timer = setInterval(() => {
                start++;
                setNumber(start)
                if(start === count){
                    clearInterval(timer)
                }
            }, 100)
        }
    }, [count, type, scrollTop])

    return (
        <div className={styles.plus}>
            <div className={styles.titleRow}>
                <p className={styles.PlusCount}>{number}</p>
                <p className={styles.PlusTitle}>{type}</p>
            </div>
            <p className={styles.text}>{description}</p>
        </div>
    )
}

export default About;