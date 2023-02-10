import React from 'react';
import styles from './FullPageImage.module.scss';
import img from '../../assets/img/fullPageImage.jpg';

function FullPageImage() {
    return (
        <div>
            <img src={img} alt="" className={styles.img}/>
        </div>
    );
}

export default FullPageImage;