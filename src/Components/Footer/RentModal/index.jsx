import React, { useState } from 'react';
import { Modal } from '../../Modal';
import { sendAsk } from '../../../api';
import toaster from '../../../helpers/toast'

import styles from './RentModal.module.scss';

export const RentModal = ({
  openModal,
  onClose,
}) =>  {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({});
  const [isAskButtonDisable, setIsAskButtonDisable] = useState(false);


  const onChange = (key, value) => {
    setData({
      ...data,
      [key]: value
    })
  }

  const onFocus = (key) => {
    setErrors({
      ...errors,
      [key]: null,
    })
  }

  const onSend = () => {
    setIsAskButtonDisable(true)
    sendAsk(data)
      .then((res) => {
        setIsAskButtonDisable(false);
        toaster.success('Thank you! Your request has been accepted.');
        onClose();
      })
      .catch((err) => {
        setErrors(err?.response?.data?.errors || {})
        setIsAskButtonDisable(false)
        toaster.error(err?.response?.data?.message || 'Something went wrong')
      })
}


  return (
    <Modal
      isOpen={openModal}
      onClose={onClose}
    >
      <div className={styles.content}>
        <p className={styles.title}>Request for a Call</p>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name='name'
            placeholder={'Name'}
            className={!!errors?.name ? `${styles.input} ${styles.inputError}` : styles.input}
            onChange={(e) => onChange('name', e.target.value)}
            onFocus={() => onFocus('name')}
          />
          {
            !!errors?.name && (
              <span className={styles.errorMessage}>{errors?.name?.[0]}</span>
            )
          }
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            name='email'
            placeholder={'E-mail'}
            className={!!errors?.email ? `${styles.input} ${styles.inputError}` : styles.input}
            onChange={(e) => onChange('email', e.target.value)}
            onFocus={() => onFocus('email')}
          />
          {
            !!errors?.email && (
              <span className={styles.errorMessage}>{errors?.email?.[0]}</span>
            )
          }
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="tel" 
            name='phone'
            placeholder={'+(xxx) - xxx - xxx - xxx'}
            pattern="[0-9]+"
            className={!!errors?.phone ? `${styles.input} ${styles.inputError}` : styles.input}
            value={data.phone || ''}
            onFocus={() => onFocus('phone')}
            onChange={(e) => {
                let value = e.target.value;
                const regex = /^\+?\d+$/;
                if (value === "" || value === "+" || regex.test(value)) {
                    onChange('phone', value)
                }
            }}
          />
          {
            !!errors?.phone && (
              <span className={styles.errorMessage}>{errors?.phone?.[0]}</span>
            )
          }
        </div>
        <div className={styles.inputWrapper}>
          <textarea 
            placeholder={'Message'}
            name='message'
            className={!!errors?.message && `${styles.inputError}`}
            onChange={(e) => onChange('message', e.target.value)}
            onFocus={() => onFocus('message')}
          ></textarea>
          {
            !!errors?.message && (
              <span className={styles.errorMessage}>{errors?.message?.[0]}</span>
            )
          }
        </div>
        <div
          className={!!isAskButtonDisable ? `${styles.formSend} ${styles.formSendDisabled}` : styles.formSend}
          onClick={() => {
            if(!isAskButtonDisable) {
              onSend()
            }
          }}
        >
          <span>Send the request</span>
        </div>
      </div>
    </Modal>
  );
}
