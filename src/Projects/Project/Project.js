import React from 'react';
import styles from './Project.module.css';

const Project=(props)=> {
    return (
        <div className={styles.project}>
            <div className={styles.image}>
                <button className="btn">Смотреть</button>
            </div>
            <h3 className={styles.projectName} style={props.style}>{props.nameOfProject}</h3>
            <div className={styles.projectDescription} style={props.style}>{props.descriptOfProject}</div>
        </div>
    );
}

export default Project;
