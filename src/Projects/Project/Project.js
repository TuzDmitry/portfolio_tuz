import React, {useState} from 'react';
import styles from './Project.module.css';
import Btn from "../../common/Button/Btn";

const Project = (props) => {
    const urlImg = {
        backgroundImage: `url('${props.urlImg}')`,
    };

    let [isShowedBnt,SetIsShowedBnt]=useState(false)


    return (
        <div className={styles.project}>
            <div className={styles.image}
                 onMouseLeave={()=>SetIsShowedBnt(false)}
                 onMouseEnter={()=>SetIsShowedBnt(true)}
                 style={urlImg}>
                {isShowedBnt?<Btn btn={props.state.button[0]} hrefBut={props.hrefCode}/>:''}
                {isShowedBnt?<Btn btn={props.state.button[1]} hrefBut={props.hrefReview}/>:''}
            </div>
            <h3 className={styles.projectName}>{props.nameOfProject}</h3>
            <div className={styles.projectDescription}>{props.descriptOfProject}</div>
        </div>
    );
}

export default Project;
