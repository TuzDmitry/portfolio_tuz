import React from 'react';
import styles from './Main.module.css';

function Main() {
  return (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.greeting}>
                <div>Привет</div>
                <div>Меня зовут Дмитрий Туз</div>
                <div>Я React разработчик</div>
            </div>
            <div className={styles.myPhoto}>
                <img src="https://filmy.by/wp-content/uploads/2019/10/david-duchovny-filmy-by.jpg" alt=""/>
            </div>
        </div>
    </div>
  );
}

export default Main;
