import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
            <img src={logo} alt="" />
        </div>

        {/* Toggle Button */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Nav Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <li>
            <Link
              to="/"
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/our-layouts"
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              Our Layouts
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
