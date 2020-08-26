import React from 'react';
import styles from './Slogan.module.css';
import TitleBlock from "../common/TitleBlock/TitleBlock";
import Btn from "../common/Button/Btn";
import Fade from "react-reveal//Fade";

const Slogan = (props) => {

    return (
        <div className={styles.slogan}>
            <Fade bottom>
                <div className={styles.container}>
                    <TitleBlock titleName={props.state.titleName}/>
                    <a href={'#contacts'}>
                        <Btn btn={props.state.button}/>
                    </a>
                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
