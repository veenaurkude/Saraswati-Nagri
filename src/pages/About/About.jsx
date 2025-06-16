

import React from "react";
import styles from "./About.module.css";
import FeaturesCarousel from "../../components/FeaturesCarousel/FeaturesCarousel";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import blueprint from "../../assets/icons/blueprint.png";
import sold from "../../assets/icons/sold_out.png";
import layout from "../../assets/icons/layout.png";
import sofa from "../../assets/icons/sofa.png";

const About = () => {
  return (
    <>
    <div className={styles.aboutPage}>
      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>About Us</h1>
          <p className={styles.breadcrumbs}>
            <a href="/">Home</a> <span>|</span> About Us
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className={styles.contentWrapper}>
        <h2 className={styles.heading}>Welcome to Saraswati Nagri</h2>
        <h3 className={styles.subheading}>
          A well-renowned and trusted brand in Nagpur's real estate industry
        </h3>
        {/* Section 1 */}
        <div className={styles.section}>
          <div className={styles.image}>
            <img src={img1} alt="Project Layout" />
          </div>
          <div className={styles.text}>
            <h3>With over two decades of experience</h3>
            <p>
              Our founder and owner, Mr. Sachin Ingle, has transformed the real
              estate landscape of the city. A young, energetic, and highly
              motivated leader, Mr. Ingle inspires his team to achieve
              excellence in every project.
            </p>
          </div>
        </div>
        {/* Section 2 */}
        <div className={`${styles.section} ${styles.reverse}`}>
          <div className={styles.image}>
            <img src={img2} alt="Project Layout 2" />
          </div>
          <div className={styles.text}>
            <h3>Under his visionary leadership</h3>
            <p>
              Saraswati Nagri has successfully completed more than 20 projects
              and earned the trust and satisfaction of over 5,000 happy
              customers.
            </p>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <img src={blueprint} alt="Area & Units" />
            <h4>Area & Units</h4>
            <p>154</p>
          </div>
          <div className={styles.statItem}>
            <img src={sold} alt="Plots Sold" />
            <h4>Plots Sold</h4>
            <p>97</p>
          </div>
          <div className={styles.statItem}>
            <img src={layout} alt="Total Layout" />
            <h4>Total Layout</h4>
            <p>10</p>
          </div>
          <div className={styles.statItem}>
            <img src={sofa} alt="Our Amenities" />
            <h4>Our Amenities</h4>
            <p>40</p>
          </div>
        </div>


       {/* Features Carousel Section  */}
      <FeaturesCarousel />
        
      </div>
    </div>

    </>
  );
};

export default About;
