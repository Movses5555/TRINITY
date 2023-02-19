import React from 'react';
import ArrowRight from '../../../assets/img/arrow -right.svg';

import styles from './SpecialOffersScreen.module.scss';

export const SpecialOffersItem = ({
  src,
  title,
  description,
  onClickItem,
}) =>  {
  return (
    <div className={styles.item}>
      <div className={styles.itemContent} >
        <img className={styles.bgImg} src={src} alt={src}/>
        <div className={styles.info}>
          <p className={styles.title}>{ title }</p>
          <p className={styles.description}>{ description }</p>
        </div>
        <div
          className={styles.button}
          role='presentation'
          onClick={onClickItem}
        >
          <img src={ArrowRight} alt='arrow-right' />
        </div>
      </div>
    </div>
  );
}
