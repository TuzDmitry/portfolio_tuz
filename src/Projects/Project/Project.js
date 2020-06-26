import React, {useState} from 'react';
import styles from './Project.module.css';
import Btn from "../../common/Button/Btn";

const Project = (props) => {
    const urlImg = {
        backgroundImage: `url('${props.urlImg}')`,
    };


    // let stateWithUseStare=useState(false)
    // let isShowedBnt=stateWithUseStare[0]
    // let SetIsShowedBnt=stateWithUseStare[1]


    let [isShowedBnt,SetIsShowedBnt]=useState(false)

    let ShowBtn=()=>SetIsShowedBnt(true)
    let HideBtn=()=>SetIsShowedBnt(false)

    return (
        <div className={styles.project}>
            <div className={styles.image}
                 onMouseLeave={HideBtn}
                 onMouseEnter={ShowBtn}
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
