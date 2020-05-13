import React from 'react';
import styles from './NavMenu.module.css';

const NavMenu = (props) => {
    debugger
    let anchors = props.state.navLinks.map(el => {

        return (
            <a href={`#${el.id}`} className={styles.link}>{el.title}</a>
        )
    })

    return (
        <nav className={styles.navMenu}>
            {anchors}

            {/*<a href="#main" className={styles.link}>Главная</a>*/}
            {/*<a href="#skills" className={styles.link}>Скиллы</a>*/}
            {/*<a href="#projects" className={styles.link}>Работы</a>*/}
            {/*<a href="#contacts" className={styles.link}>Контакты</a>*/}
        </nav>
    );
}

export default NavMenu;
