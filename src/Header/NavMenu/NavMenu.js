import React from 'react';
import styles from './NavMenu.module.css';

const NavMenu = (props) => {
    let anchors = props.state.navLinks.map(el => <a key={el.id} href={`#${el.id}`} className={styles.link}>{el.title}</a>)

    return (
        <nav className={styles.navMenu}>
            {anchors}
        </nav>
    );
}

export default NavMenu;
