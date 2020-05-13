import React from 'react';
import styles from './Header.module.css';
import NavMenu from "./NavMenu/NavMenu";

const Header=(props)=> {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <NavMenu state={props.state}/>
        </div>
    </div>
  );
}

export default Header;
