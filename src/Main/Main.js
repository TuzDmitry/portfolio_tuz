import React from 'react';
import styles from './Main.module.css';


const Main=(props) =>{

  return (
    <div id='main' className={styles.main}>
        <div className={styles.container}>
            <div className={styles.greeting}>
                <div>Hi</div>
                <div>I am <br/>
                <span className={styles.firstLastName}> {props.state.info.myName}</span></div>
                <h1>{props.state.info.description}</h1>
            </div>
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
