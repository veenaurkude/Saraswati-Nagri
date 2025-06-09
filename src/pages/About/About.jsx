import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>About Us</h1>
          <p className={styles.breadcrumbs}>
            <a href="/">Home</a> <span>|</span> About Us
          </p>
        </div>
      </div>

      {/* Main content (optional) */}
      <div className={styles.content}>
        <h2>Welcome to Saraswati Nagri</h2>
        <p>
          We are a well-renowned and trusted brand in Nagpur’s real estate industry, committed to delivering quality housing and premium living experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
