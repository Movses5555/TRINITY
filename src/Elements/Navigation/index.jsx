import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation = ({
  currentPage,
}) =>  {
  return (
    <div className={styles.navigation} >
        <Link to='/' className={styles.link}> Main </Link> 
        <span>»</span>
        <span>{currentPage}</span>
    </div>
  );
}
