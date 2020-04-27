import React from 'react';
import styles from './NavMenu.module.css';
import {Link, NavLink} from "react-router-dom";

function NavMenu() {
    return (
        <nav className={styles.navMenu}>

            <a href="#main" className={styles.link}>Главная</a>
            <a href="#skills" className={styles.link}>Скиллы</a>
            {/*<Link className={styles.link} to="skills">Скиллы</Link>*/}
            <a href="#projects" className={styles.link}>Работы</a>
            <a href="#contacts" className={styles.link}>Контакты</a>
        </nav>
    );
}

export default NavMenu;
