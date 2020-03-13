import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
        <div className={styles.container}>
            <div>Рассматриваю вариант удаленной работы</div>
            <button>Нанять меня</button>
        </div>
    </div>
  );
}

export default Slogan;
