import React from 'react';
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import logo from '../../assets/img/logo.svg';
import logoMob from '../../assets/img/logoMob.svg';

function Header({menuStatus, setMenuStatus}) {

    const [location, setLocation] = React.useState('Dubai');
    const [lang, setLang] = React.useState('ENG');
    const [locationModal, locationModalSet] = React.useState(false);

    const locations = [{city: 'Dubai'},{city: 'Moscow'},{city: 'Budapest'},{city: 'Wiesbaden'}];

    return (
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <nav className={styles.nav}>
            <button onClick={() => setMenuStatus(!menuStatus)} className={menuStatus ? `${styles.menuBtn} ${styles.active}` : styles.menuBtn}>
              <span className={styles.top}></span>
              <span className={styles.bottom}></span>
            </button>
            {
              !menuStatus && (
                <>
                  <NavLink className={styles.navItem} to={'/car-list'}><p>Car List</p></NavLink>
                  <NavLink className={styles.navItem} to={'/yacht-list'}><p>Yacht List</p></NavLink>
                  <NavLink className={styles.navItem} to={'/chauffeur-list'}><p>Chauffeur List</p></NavLink>
                </>
              )
            }
          </nav>
          <NavLink to={'/'} className={styles.logo}>
            <img className={styles.logoDesk} src={logo} alt=""/>
            <img src={logoMob} className={styles.logoMob} alt=""/>
          </NavLink>
          <div className={styles.info}>
            {
              !menuStatus && (
                <>
                  <a href="tel:971585907875" className={styles.tel}>+971 58 590 7875</a>
                  {/* <div className={styles.locationWrap}>
                    <button onClick={() => locationModalSet(!locationModal)} className={locationModal ? `${styles.location} ${styles.active}` : styles.location}>
                      {location}
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M5.03634 5.6447L1.15243 1.34485C0.905238 1.07133 0.905238 0.627862 1.15243 0.354472C1.3994 0.0810607 1.79996 0.0810607 2.04691 0.354472L5.48358 4.15918L8.92013 0.354583C9.1672 0.0811717 9.56773 0.0811717 9.8147 0.354583C10.0618 0.627995 10.0618 1.07144 9.8147 1.34497L5.93073 5.64482C5.80718 5.78152 5.64543 5.8498 5.4836 5.8498C5.32169 5.8498 5.15982 5.78139 5.03634 5.6447Z" fill="white"/>
                      </svg>
                    </button>
                    {locationModal ?
                      <div className={styles.modal}>
                          {locations.map((item, i) => <button key={i} onClick={() => {
                            setLocation(item.city);
                            locationModalSet(false);
                          }} className={styles.changeLocation}>{item.city}</button>)}
                      </div> : null
                    }
                  </div> */}
                  <button className={styles.lang}>
                    {lang}
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M5.03634 5.6447L1.15243 1.34485C0.905238 1.07133 0.905238 0.627862 1.15243 0.354472C1.3994 0.0810607 1.79996 0.0810607 2.04691 0.354472L5.48358 4.15918L8.92013 0.354583C9.1672 0.0811717 9.56773 0.0811717 9.8147 0.354583C10.0618 0.627995 10.0618 1.07144 9.8147 1.34497L5.93073 5.64482C5.80718 5.78152 5.64543 5.8498 5.4836 5.8498C5.32169 5.8498 5.15982 5.78139 5.03634 5.6447Z" fill="white"/>
                    </svg>
                  </button>
                </>
              )
            }
          </div>
        </div>
      </header>
    );
}

export default Header;