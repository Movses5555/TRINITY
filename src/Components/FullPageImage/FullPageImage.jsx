import React from 'react';
import styles from './FullPageImage.module.scss';
import img from '../../assets/img/fullPageImage.jpg';

function FullPageImage() {
    return (
        <div
            className={styles.fullPageImage}
            data-aos="zoom-in" 
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="zoom-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <img src={img} alt="fullPageImage" className={styles.img}/>
        </div>
    );
}

export default FullPageImage;