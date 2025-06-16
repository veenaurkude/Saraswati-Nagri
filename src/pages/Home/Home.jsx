import React from "react";
import styles from "./Home.module.css";
import img1 from "../../assets/icons/img1.png";
import img2 from "../../assets/icons/img2.png";
import img3 from "../../assets/icons/img3.png";
import img4 from "../../assets/icons/img4.png";
import img5 from "../../assets/icons/img5.png";
import img6 from "../../assets/icons/img6.png";
import img7 from "../../assets/icons/img7.png";
import img8 from "../../assets/icons/img8.png";
import img9 from "../../assets/icons/img9.png";
import blueprint from "../../assets/icons/blueprint.png";
import sold from "../../assets/icons/sold_out.png";
import layout from "../../assets/icons/layout.png";
import sofa from "../../assets/icons/sofa.png";
import FeaturesCarousel from "../../components/FeaturesCarousel/FeaturesCarousel";

const amenitiesList = [
  { icon: img1, title: "Cement Roads" },
  { icon: img2, title: "Sewer Lines" },
  { icon: img3, title: "Stormwater Drainage" },
  { icon: img4, title: "Water Pipelines" },
  { icon: img5, title: "Electricity Connections" },
  { icon: img6, title: "Open Spaces with Compound Walls" },
  { icon: img7, title: "Children's Play Areas" },
  { icon: img8, title: "Walking Tracks" },
  { icon: img9, title: "Sewage Treatment Plants (STP)" },
];

const tableData = [
  {
    id: 1,
    layout: "Saraswati Nagri 1",
    location: "Behind Podar International School, Godhni",
    area: "2 acres",
    launchYear: 2019,
    status: "Sold out on the launch day",
  },
  {
    id: 2,
    layout: "Saraswati Nagri 2",
    location: "Bokhara Square, near Godhni",
    area: "7.5 acres",
    launchYear: 2000,
    status: "Sold out on the launch day",
  },
  {
    id: "3, 4 & 5",
    layout: "Saraswati Nagri 3, 4 & 5",
    location: "Bokhara Square, near Tuli International School",
    area: "11 acres",
    launchYear: 2022,
    status: "Available",
  },
  {
    id: 6,
    layout: "Saraswati Nagri 6",
    location: "Lonara, beside Jhulelal Engineering College",
    area: "3.25 acres",
    launchYear: 2022,
    status: "Available",
  },
  {
    id: 7,
    layout: "Saraswati Nagri 7",
    location: "Lonara, beside Central India College of Nursing and Pharmacy",
    area: "4.5 acres",
    launchYear: 2023,
    status: "Sold out at launch",
  },
  {
    id: 8,
    layout: "Saraswati Nagri 8",
    location: "Lava, near Dabha and Wadi, in front of Sarojini Public School",
    area: "2.5 acres",
    launchYear: 2024,
    status: "Available",
  },
];

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        {/* Carousel Banner Here */}
        <div className={styles.bannerCarousel}>
          {/* Your carousel component goes here */}
        </div>

        {/* Welcome Section */}
        <section className={styles.welcomeSection}>
          <h1 className={styles.welcomeTitle}>Welcome to Saraswati Nagri</h1>
          <h2 className={styles.subheading}>
            A WELL-RENOWNED AND TRUSTED BRAND IN NAGPUR'S REAL ESTATE INDUSTRY
          </h2>

          <div className={styles.textContainer}>
            <p>
              With over two decades of experience, our founder and owner, Mr.
              Sachin Ingle, has transformed the real estate landscape of the
              city. A young, energetic, and highly motivated leader, Mr. Ingle
              inspires his team to achieve excellence in every project.
            </p>
            <p>
              Under his visionary leadership, Saraswati Nagri has successfully
              completed more than 20 projects & earned the trust & satisfaction
              of over 5,000 happy customers.
            </p>
          </div>
        </section>

        {/* Amenities Section */}
        <section className={styles.amenitiesSection}>
          <h2 className={styles.amenitiesTitle}>
            At Saraswati Nagri, we specialize in NMRDA-sanctioned layouts,
            offering meticulously planned developments with top-notch amenities
            such as:
          </h2>
          <div className={styles.amenitiesGrid}>
            {amenitiesList.map((item, index) => (
              <div className={styles.amenityItem} key={index}>
                <img src={item.icon} alt={item.title} className={styles.icon} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <p className={styles.amenitiesFooter}>
            Additionally, our child company, SS Construction, takes care of all
            development works to ensure the highest quality standards. We
            believe in uncompromising quality and strive to create exceptional
            living spaces tailored to meet the needs of modern families.
          </p>
        </section>

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

        {/* Table Section */}
        <section className={styles.layoutTable}>
          <h2 className={styles.tableTitle}>
            WIDE RANGE OF STYLISH LAYOUT AVAILABILITY
          </h2>
          <h3 className={styles.tableSubtitle}>SELECT AVAILABLE LAYOUT</h3>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Layout Details</th>
                  <th>Location</th>
                  <th>Area</th>
                  <th>Launch Year</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.layout}</td>
                    <td>{row.location}</td>
                    <td>{row.area}</td>
                    <td>{row.launchYear}</td>
                    <td>{row.status}</td>
                    <td>
                      <button className={styles.viewButton}>VIEW</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <section className={styles.contactSection}>
            <div className={styles.buttonGroup}>
              <button className={styles.contactButton}>SCHEDULE A TOUR</button>
              <button className={styles.contactButton}>ASK A QUESTION</button>
              <button className={styles.contactButton}>
                DOWNLOAD BROCHURE
              </button>
            </div>
            <div className={styles.callBanner}>
              <span className={styles.callText}>
                Need More Information? Call Us Today
              </span>
              <span className={styles.phoneNumber}>
                <span className={styles.phoneIcon}>📞</span> +91 9823388866
              </span>
            </div>
          </section>
        </section>

        {/* Contact Section */}
        {/* 
        
      </section> */}
      </div>
    </>
  );
};

export default Home;
