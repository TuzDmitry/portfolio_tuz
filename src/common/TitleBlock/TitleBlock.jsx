import React from 'react';
import styles from './TitleBlock.module.css';


const TitleBlock=(props)=> {
  return (
      <div className={styles.titleBlock}>
          <h2>{props.titleName}</h2>
          <div className={styles.moduleLine}></div>
      </div>
  );
}

export default TitleBlock;
