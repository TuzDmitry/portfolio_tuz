import React from 'react';
import styles from './NavMenu.module.css';

function NavMenu() {
  return (
      <nav className={styles.navMenu}>
          <a href="#s" className={styles.link}>Главная</a>
          <a href="#s" className={styles.link}>Скиллы</a>
          <a href="#s" className={styles.link}>Работы</a>
          <a href="#s" className={styles.link}>Контакты</a>
      </nav>
  );
}

export default NavMenu;
