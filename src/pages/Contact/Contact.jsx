import React, { useState } from "react";
import styles from "./Contact.module.css";
import homeImage from "../../assets/about.jpg";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add emailjs or form submit logic here
  };

  return (
    <div className={styles.contactPage}>
      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>Contact Us</h1>
          <p className={styles.breadcrumbs}>
            <a href="/">Home</a> <span>|</span> Contact Us
          </p>
        </div>
      </div>

      {/* Map */}
      <div className={styles.content}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3720.637619819438!2d79.01232299999995!3d21.166815000000085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSai%20Shraddha%20Apt.%2C%20Behind%20White%20House%20Bungalow%2C%20Utkarsh%20Society%2C%20Dabha-Wadi%20Road%2C%20Nagpur!5e0!3m2!1sen!2sus!4v1749541710264!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className={styles.formSection}>
        <div className={styles.left}>
          <img
            src={homeImage}
            alt="Contact Visual"
            className={styles.contactImage}
          />
        </div>

        <div className={styles.right}>
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className={styles.contactInfoSection}>
        <div className={styles.infoBox}>
          {/* <img
            src="/icons/phone-icon.svg"
            alt="Phone"
            className={styles.icon}
          /> */}
          <MdOutlineContactPhone className={styles.icon} />
          <h3>Phone Numbers</h3>
          <p>9823388866</p>
          <p>7888028866</p>
        </div>

        <div className={styles.infoBox}>
          {/* <img
            src="/icons/location-icon.svg"
            alt="Location"
            className={styles.icon}
          /> */}
          <MdOutlineLocationOn className={styles.icon} />
          <h3>Office Address</h3>
          <p>302, Sai Shraddha Appt.,</p>
          <p>Behind White House Bungalow, Utkarsh Society,</p>
          <p>Dabha-Wadi Road, Nagpur</p>
        </div>

        <div className={styles.infoBox}>
          {/* <img
            src="/icons/email-icon.svg"
            alt="Email"
            className={styles.icon}
          /> */}
          <MdOutlineEmail className={styles.icon} />
          <h3>Email Us</h3>
          <p>info@saraswatinagri.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
