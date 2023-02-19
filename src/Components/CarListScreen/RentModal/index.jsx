import React from 'react';
import { Modal } from '../../Modal';
import styles from './RentModal.module.scss';

export const RentModal = ({
  openModal,
  onClose,
}) =>  {
  return (
    <Modal
      isOpen={openModal}
      onClose={() => onClose(false)}
    >
      <div className={styles.content}>
        <p className={styles.title} data-aos="slide-up" >Request for a Call</p>
        <input type="text" placeholder={'Name'} className={styles.input} data-aos="slide-up" />
        <input type="email" placeholder={'E-mail'} className={styles.input} data-aos="slide-up" />
        <input type="tel" placeholder={'+7 (999) 999 - 99 - 99'} className={styles.input} data-aos="slide-up" />
        <textarea placeholder={'Message'} data-aos="slide-up" ></textarea>
        <div className={styles.formSend} data-aos="slide-up" ><span>Send the request</span></div>
      </div>
    </Modal>
  );
}
