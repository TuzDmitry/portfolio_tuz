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
        </nav>
    );
}

export default NavMenu;
