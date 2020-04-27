import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div id='main' className={styles.main}>
        <div className={styles.container}>
            <div className={styles.greeting}>
                <div>Привет</div>
                <div>I am <span className={styles.firstLastName}> Dmitry Tuz</span></div>
                <h1>Я React разработчик</h1>
            </div>
            <div className={styles.myPhotoContainer}>
                <img src="https://filmy.by/wp-content/uploads/2019/10/david-duchovny-filmy-by.jpg" alt=""/>
            </div>
        </div>
    </div>
  );
}

export default Main;
