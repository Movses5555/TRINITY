import React from 'react';
import styles from './MenuModal.module.scss';
import {NavLink} from "react-router-dom";

function MenuModal() {
    return (
        <div className={styles.menu}>
            <div className={styles.content}>
                <div className={styles.col}>
                    <NavLink to={'/'}><p>Car List</p></NavLink>
                    <NavLink to={'/'}><p>Yacht list</p></NavLink>
                    <NavLink to={'/'}><p>Chauffeur</p></NavLink>
                    <NavLink to={'/'}><p>Conditions</p></NavLink>
                    <NavLink to={'/'}><p>Testimonials</p></NavLink>
                </div>
                <div className={styles.col}>
                    <NavLink to={'/'}><p>Articles</p></NavLink>
                    <NavLink to={'/'}><p>About Us</p></NavLink>
                    <NavLink to={'/'}><p>Contacts</p></NavLink>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className={styles.address}>24 4th St - Al Quoz - Al Quoz Industrial Area 3 - Dubai</p>
                <a href="tel:971585907875" className={styles.tel}>+971 58 590 7875</a>
            </div>
        </div>
    );
}

export default MenuModal;