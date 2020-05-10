import React from 'react';
import styles from './Main.module.css';
import myMainPhoto from '../assets/images/my_main_photo.jpg'


function Main() {

  return (
    <div id='main' className={styles.main}>
        <div className={styles.container}>
            <div className={styles.greeting}>
                <div>Hi</div>
                <div>I am <br/>
                <span className={styles.firstLastName}> Dmitry Tuz</span></div>
                <h1>Я React разработчик</h1>
            </div>
            <div>
                <div className={styles.myPhotoContainer}>

                    <img src={myMainPhoto} alt="Here you could see my photo"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Main;
