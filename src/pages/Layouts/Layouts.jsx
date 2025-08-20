import React from 'react';
import Map from '../../components/Map/Map';
import styles from './Layouts.module.css';

const Layouts = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Plot Layouts</h1>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={`${styles.statusBox} ${styles.statusAvailable}`}></div>
          <span className={styles.legendText}>Available</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.statusBox} ${styles.statusSold}`}></div>
          <span className={styles.legendText}>Sold</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.statusBox} ${styles.statusReserved}`}></div>
          <span className={styles.legendText}>Reserved</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.statusBox} ${styles.statusOpen}`}></div>
          <span className={styles.legendText}>Open</span>
        </div>
      </div>

      <Map />
    </div>
  );
};

export default Layouts;

