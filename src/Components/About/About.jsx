import React from 'react';
import styles from './About.module.scss';
import sprite from '../../assets/img/bgSpriteAbout.svg';
import num8 from '../../assets/img/8.png';
import num72 from '../../assets/img/72.png';
import num190 from '../../assets/img/190.png';
import text from '../../assets/img/aboutText.svg';

function About() {
    return (
        <section className={styles.about}>
            <span className={styles.triangle}>
                <img src={sprite} alt=""/>
            </span>
            <h2 className={styles.title}>About Us</h2>
            <div className={styles.pluses}>
                <div className={styles.plus}>
                    <div className={styles.titleRow}>
                        <img src={num8} alt=""/>
                        <p className={styles.PlusTitle}>year</p>
                    </div>
                    <p className={styles.text}>We've come a long way from a 2-people company to winning at Webby's.</p>
                </div>
                <div className={styles.plus}>
                    <div className={styles.titleRow}>
                        <img src={num72} alt=""/>
                        <p className={styles.PlusTitle}>cars</p>
                    </div>
                    <p className={styles.text}>We've come a long way from a 2-people company to winning at Webby's.</p>
                </div>
                <div className={styles.plus}>
                    <div className={styles.titleRow}>
                        <img src={num190} alt=""/>
                        <p className={styles.PlusTitle}>people</p>
                    </div>
                    <p className={styles.text}>We've come a long way from a 2-people company to winning at Webby's.</p>
                </div>
            </div>
            <div className={styles.aboutText}>
                <p>I’m with cars for over 18 years. My auto passion and attention to details will make your experience with us second to none. Guaranteed.</p>
            </div>
            <div className={styles.aboutTextAuthor}>Kirill Aliev, MBA<span><br/>CEO Trinity car rental boutique</span></div>
        </section>
    );
}

export default About;