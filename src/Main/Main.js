import React from 'react';
import styles from './Main.module.css';
import Particles from "react-particles-js";
import Flip from 'react-reveal/Flip';

const particlesOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

const Main = (props) => {

    return (
        <div id='main' className={styles.main}>
            <Particles className="particles"
                       params={particlesOpt}/>
            <div className={styles.container}>

                <Flip top>
                <div className={styles.greeting}>
                    <div>Hi</div>
                    <div>I am</div>
                    <div className={styles.firstLastName}> {props.state.info.myName}</div>
                    <h1>{props.state.info.description}</h1>
                </div>
                </Flip>
                <div>
                    <div className={styles.myPhotoContainer}>
                        <img src={props.state.info.srcPhoto} alt="Here you could see my photo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
