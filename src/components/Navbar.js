import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'; // Make sure to import the CSS that styles your Navbar

const Navbar = () => {
    return (
        <div id="menu" className={styles.menu}>
            <Link to="/" className={styles.navbtn}>About</Link>
            <Link to="/writing" className={styles.navbtn}>Writings</Link>
            <Link to="/work" className={styles.navbtn}>Work</Link>
            <Link to="/gallery" className={styles.navbtn}>Gallery</Link>

        </div>
    );
};

export default Navbar;
