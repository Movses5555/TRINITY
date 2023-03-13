import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainScreen.module.scss';
import MainBgMobile from '../../assets/img/main-bg-mobile.jpg';
import MainBgDesktop from '../../assets/img/main-bg-desktop.jpg';
import { GetScreenWidth } from '../../helpers/getScreenWidth';

function MainScreen() {
  const screenWidth = GetScreenWidth();
  return (
    <div className={styles.main}>
      <div className={styles.background} >
        <div className={styles.gradient}></div>
        <img src={ screenWidth > 850 ? MainBgDesktop : MainBgMobile } alt='main-bg'  />
        <div className={styles.segmentWrapper}>
          <div className={styles.segment}></div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <p className={styles.title}>Dubai</p>
        <p className={styles.subtitle}>luxury car rental</p>
        <div className={styles.socialLinks}>
          <Link
            to="http://t.me/natalia_trinity"
            target="_blank"
            className={`${styles.link} ${styles.telegram}`}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.76107 17.1052L2.9366 14.5911C2.3249 14.3265 1.93606 13.7159 1.9558 13.0497C1.97669 12.3834 2.40035 11.7973 3.02714 11.5709C7.27884 10.0318 20.1384 5.37502 23.8643 4.02511C24.4284 3.82199 25.0586 3.94502 25.5044 4.34547C25.9501 4.74708 26.1381 5.36109 25.9953 5.94377C25.1666 9.29592 22.6038 19.6704 21.8214 22.8368C21.6856 23.3882 21.2713 23.8281 20.7304 23.9975C20.1883 24.1681 19.5975 24.0428 19.1715 23.6679L15.2193 20.1962L12.126 23.1618C11.6814 23.5878 11.0361 23.7259 10.4557 23.5205C9.87651 23.3139 9.46331 22.7985 9.38787 22.188L8.76107 17.1052ZM19.9759 21.5948L23.7575 6.28618L4.84019 13.1367L9.83358 15.2933C10.3629 15.522 10.732 16.0141 10.8028 16.5864L11.3483 21.0133L13.6337 18.8231L13.4318 18.649C13.0824 18.3506 12.877 17.9189 12.8642 17.4604C12.8503 17.0019 13.0325 16.5597 13.3633 16.2416C14.6041 15.0519 17.9144 11.8797 17.9144 11.8797C18.3311 11.4804 18.9928 11.4943 19.392 11.911C19.7902 12.3265 19.7762 12.9881 19.3607 13.3874L15.1798 17.3954L15.8681 17.985L19.9759 21.5948Z" fill="white"/>
              </svg>
            </span>
          </Link>
          <Link
            to="http://wa.me/+971585019537"
            target="_blank"
            className={`${styles.link} ${styles.whatsapp}`}
          >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M20.75 17.5C20.5 17.375 18.875 16.625 18.625 16.5C18.375 16.375 18.125 16.375 17.875 16.625C17.625 16.875 17.125 17.625 16.875 17.875C16.75 18.125 16.5 18.125 16.25 18C15.375 17.625 14.5 17.125 13.75 16.5C13.125 15.875 12.5 15.125 12 14.375C11.875 14.125 12 13.875 12.125 13.75C12.25 13.625 12.375 13.375 12.625 13.25C12.75 13.125 12.875 12.875 12.875 12.75C13 12.625 13 12.375 12.875 12.25C12.75 12.125 12.125 10.625 11.875 10C11.75 9.125 11.5 9.125 11.25 9.125H10.625C10.375 9.125 10 9.375 9.875 9.5C9.125 10.25 8.75 11.125 8.75 12.125C8.875 13.25 9.25 14.375 10 15.375C11.375 17.375 13.125 19 15.25 20C15.875 20.25 16.375 20.5 17 20.625C17.625 20.875 18.25 20.875 19 20.75C19.875 20.625 20.625 20 21.125 19.25C21.375 18.75 21.375 18.25 21.25 17.75L20.75 17.5ZM23.875 6.125C19 1.25 11.125 1.25 6.25 6.125C2.25 10.125 1.5 16.25 4.25 21.125L2.5 27.5L9.125 25.75C11 26.75 13 27.25 15 27.25C21.875 27.25 27.375 21.75 27.375 14.875C27.5 11.625 26.125 8.5 23.875 6.125ZM20.5 23.625C18.875 24.625 17 25.25 15 25.25C13.125 25.25 11.375 24.75 9.75 23.875L9.375 23.625L5.5 24.625L6.5 20.875L6.25 20.5C3.25 15.5 4.75 9.25 9.625 6.125C14.5 3 20.75 4.625 23.75 9.375C26.75 14.25 25.375 20.625 20.5 23.625Z" fill="white"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;