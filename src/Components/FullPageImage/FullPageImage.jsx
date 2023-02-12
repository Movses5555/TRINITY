import React, {useEffect} from 'react';
import styles from './FullPageImage.module.scss';
import img from '../../assets/img/fullPageImage.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'

function FullPageImage() {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div
            className={styles.fullPageImage}
            data-aos="zoom-out" 
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="zoom-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <img src={img} alt="fullPageImage" className={styles.img}/>
        </div>
    );
}

export default FullPageImage;