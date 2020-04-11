import React from 'react';
import styles from './Project.module.css';

const Project=(props)=> {
  return (
    <div className={styles.project}>
        <div className={styles.image}>
            <button>Смотреть</button>
        </div>
        <h3 className={styles.projectName}>{props.nameOfProject}</h3>
        <div className={styles.projectDescription}>{props.descriptOfProject}</div>
    </div>
  );
}

export default Project;
