import React, { useState, useEffect } from 'react';
import CloseIcon from '../../../assets/img/close.svg';
import PlusIcon from '../../../assets/img/plus.svg';
import Aos from 'aos';
import styles from './QuestionsItem.module.scss';

export const QuestionsItem = ({
  title,
  description,
}) =>  {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div
      className={styles.questionsItem}
      data-aos="slide-up"
      onClick={() => setIsOpen(!isOpen) }
    >
      <div className={styles.closeOpenButton} >
        <img src={isOpen ? CloseIcon : PlusIcon} alt='close_plus' />
      </div>
      <p className={styles.title}>{ title }</p>
      {
        isOpen && (
          <p className={styles.description}>{ description }</p>
        )
      }
    </div>
  );
}
