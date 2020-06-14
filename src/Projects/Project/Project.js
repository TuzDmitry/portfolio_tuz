import React from 'react';
import styles from './Project.module.css';
import Btn from "../../common/Button/Btn";

const Project = (props) => {
    const urlImg = {
        backgroundImage: `url('${props.urlImg}')`,
    };


    return (
        <div className={styles.project}>
            <div className={styles.image} style={urlImg}>
                <Btn btn={props.state.button}/>
            </div>
            <h3 className={styles.projectName}>{props.nameOfProject}</h3>
            <div className={styles.projectDescription}>{props.descriptOfProject}</div>
        </div>
    );
}

export default Project;
