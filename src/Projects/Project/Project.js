import React from 'react';
import styles from './Project.module.css';

const Project=(props)=> {
  return (
    <div className={styles.project}>
        <div className={styles.image}>
            <button>Смотреть</button>
        </div>
        <div className={styles.projectName}>{props.nameOfProject}</div>
        <div className={styles.projectDescription}>{props.descriptOfProject}</div>
    </div>
  );
}

export default Project;
