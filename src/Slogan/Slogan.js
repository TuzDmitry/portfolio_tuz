import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
        <div className={styles.container}>
            <div className='titleBlock'>
                <h2 className={styles.advantages}>Рассматриваю вариант удаленной работы</h2>
                <div className="module-line"></div>
            </div>
            <button className="btn">Нанять меня</button>
        </div>
    </div>
  );
}

export default Slogan;
