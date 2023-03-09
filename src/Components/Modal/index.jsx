import React, { useEffect } from "react";
import CloseIcon from '../../assets/img/closeWhite.svg'
import styles from './modal.module.scss'

export const Modal = ({
  children,
  onClose,
  isShowCloseButton = true,
}) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    }
  }, []);

  return (
    <div className={styles.modal} >
      <div className={styles.overlay}></div>
      <div
        className={styles.modalContentWrapper}
        role='presentation'
        onClick={onClose} 
      >
        <div
          className={styles.modalContent}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation();
          }}
        >
          {
            !!isShowCloseButton && (
              <div 
                className={styles.closeButton}
                role='presentation'
                onClick={onClose}
              >
                <img src={CloseIcon} alt='close' />
              </div>
            )
          }
          {children}
        </div>
      </div>
    </div>
  )
}